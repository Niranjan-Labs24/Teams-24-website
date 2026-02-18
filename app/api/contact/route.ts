import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
        const { firstname, lastname, email, company_size_dropdown, location } = await req.json();

        const HUBSPOT_ACCESS_TOKEN = process.env.HUBSPOT_ACCESS_TOKEN;

        if (!HUBSPOT_ACCESS_TOKEN) {
            console.error("HUBSPOT_ACCESS_TOKEN is not defined");
            return NextResponse.json({ error: "Server configuration error" }, { status: 500 });
        }


        const contactPayload = {
            properties: {
                email: email,
                firstname: firstname,
                lastname: lastname,
                company_size: company_size_dropdown,
                city: location,
            },
        };

        const contactResponse = await fetch("https://api.hubapi.com/crm/v3/objects/contacts", {
            method: "POST",
            headers: {
                Authorization: `Bearer ${HUBSPOT_ACCESS_TOKEN}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify(contactPayload),
        });

        let contactData = await contactResponse.json();

        if (contactResponse.status === 409) {
            const searchResponse = await fetch("https://api.hubapi.com/crm/v3/objects/contacts/search", {
                method: "POST",
                headers: {
                    Authorization: `Bearer ${HUBSPOT_ACCESS_TOKEN}`,
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    filterGroups: [
                        {
                            filters: [
                                {
                                    propertyName: "email",
                                    operator: "EQ",
                                    value: email,
                                },
                            ],
                        },
                    ],
                }),
            });
            const searchData = await searchResponse.json();
            contactData = searchData.results[0];
        } else if (!contactResponse.ok) {
            console.error("HubSpot Contact Error:", contactData);
            return NextResponse.json({ error: "Failed to create contact" }, { status: contactResponse.status });
        }

        const contactId = contactData.id;


        const dealPayload = {
            properties: {
                dealname: `${firstname} -from Teams24, Booked a call request for 30 min `,
                pipeline: "default",
                dealstage: "appointmentscheduled",
                amount: "0",
            },
        };

        const dealResponse = await fetch("https://api.hubapi.com/crm/v3/objects/deals", {
            method: "POST",
            headers: {
                Authorization: `Bearer ${HUBSPOT_ACCESS_TOKEN}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify(dealPayload),
        });

        const dealData = await dealResponse.json();

        if (!dealResponse.ok) {
            console.error("HubSpot Deal Error:", dealData);
            return NextResponse.json({ error: "Failed to create deal" }, { status: dealResponse.status });
        }

        const dealId = dealData.id;


        const associationResponse = await fetch(
            `https://api.hubapi.com/crm/v3/objects/deals/${dealId}/associations/contacts/${contactId}/3`,
            {
                method: "PUT",
                headers: {
                    Authorization: `Bearer ${HUBSPOT_ACCESS_TOKEN}`,
                    "Content-Type": "application/json",
                },
            }
        );

        if (!associationResponse.ok) {
            const assocError = await associationResponse.json();
            console.error("HubSpot Association Error:", assocError);

        }

        return NextResponse.json({ success: true, contactId, dealId });
    } catch (error) {
        console.error("HubSpot Integration Error:", error);
        return NextResponse.json({ error: "Internal server error" }, { status: 500 });
    }
}
