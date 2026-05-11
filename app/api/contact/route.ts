import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
        const { firstname, lastname, email, company_size_dropdown, location } = await req.json();

        const CLICKUP_API_TOKEN = process.env.CLICKUP_API_TOKEN;
        const CLICKUP_LIST_ID = process.env.CLICKUP_LIST_ID;

        // --- ClickUp Integration ---
        if (CLICKUP_API_TOKEN && CLICKUP_LIST_ID) {
            try {
                const clickupPayload = {
                    name: `New Lead: ${firstname} ${lastname}`,
                    description: `
**Full Name:** ${firstname} ${lastname}
**Email:** ${email}
**Company Size:** ${company_size_dropdown}
**Location:** ${location}

*Submitted via Home Page Form*
                    `,
                    priority: 2, 
                };

                const clickupResponse = await fetch(`https://api.clickup.com/api/v2/list/${CLICKUP_LIST_ID}/task`, {
                    method: "POST",
                    headers: {
                        "Authorization": CLICKUP_API_TOKEN,
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(clickupPayload),
                });

                if (!clickupResponse.ok) {
                    const clickupError = await clickupResponse.json();
                    console.error("ClickUp Task Creation Error:", clickupError);
                    
                    if (clickupResponse.status === 401) {
                        return NextResponse.json({ 
                            error: "ClickUp Authorization Failed. Please check your API Token.",
                            details: clickupError
                        }, { status: 401 });
                    }

                    return NextResponse.json({ error: "Failed to create ClickUp task" }, { status: clickupResponse.status });
                }
            } catch (error) {
                console.error("ClickUp Integration Error:", error);
                return NextResponse.json({ error: "ClickUp integration failed" }, { status: 500 });
            }
        } else {
            console.error("ClickUp credentials missing in .env file.");
            return NextResponse.json({ error: "Server configuration error: Missing ClickUp credentials" }, { status: 500 });
        }

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error("Contact Form Submission Error:", error);
        return NextResponse.json({ error: "Internal server error" }, { status: 500 });
    }
}
