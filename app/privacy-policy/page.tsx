import React from "react"
import GlassmorphicNavbar from "@/components/glassmorphic-navbar"
import { Footer } from "@/components/footer"
import { Globe } from "lucide-react"

const PrivacyPolicyPage = () => {
  return (
    <>
      <GlassmorphicNavbar />
      <main className="min-h-screen bg-white pt-32 pb-20 font-[Manrope]">
        <div className="max-w-[1000px] mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-normal mb-4 tracking-tight text-[#1A1A1A]" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                Privacy Policy
              </h1>
              <p className="text-[#8E8E93] font-medium">Last updated on March 19th, 2024</p>
            </div>
            <a 
              href="https://labs24.notion.site/Privacy-Policy-2de67d98dfa980f4ad62d8d214939e2e"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black text-white px-6 py-3 rounded-xl font-bold hover:bg-gray-800 transition-all flex items-center gap-2"
            >
              <Globe className="w-4 h-4" /> View Original
            </a>
          </div>
          
          <div className="space-y-12 text-[#4A4A4A] leading-relaxed text-base md:text-lg">
            <section>
              <h2 className="text-2xl font-bold text-black mb-6" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Introduction to Privacy Policy</h2>
              <div className="space-y-4">
                <p>
                  This privacy policy (the "Privacy Policy") applies to your use of the website of Razorpay hosted at razorpay.com, the Services (as defined under the Razorpay "Terms of Use") and Razorpay applications on mobile platforms (Android, Blackberry, Windows Phone, iOS etc.) (collectively ("RAZORPAY" or "WEBSITE")), but does not apply to any third party websites that may be linked to them, or any relationships you may have with the businesses listed on Razorpay.
                </p>
                <p>
                  The terms "we", "our" and "us" refer to Razorpay and the terms "you", "your" and "User" refer to you, as a user of Razorpay. The term "Personal Information" means information that you provide to us which personally identifies you to be contacted or identified, such as your name, phone number, email address, and any other data that is tied to such information. Our practices and procedures in relation to the collection and use of Personal Information have been set-out below in order to ensure safe usage of the Website for you.
                </p>
                <p>
                  We have implemented reasonable security practices and procedures that are commensurate with the information assets being protected and with the nature of our business. While we try our best to provide security that is better than the industry standards, because of the inherent vulnerabilities of the internet, we cannot ensure or warrant complete security of all information that is being transmitted to us by you. By visiting this Website, you agree and acknowledge to be bound by this Privacy Policy and you hereby consent that we will collect, use, process and share your Personal Information in the manner set out herein below. If you do not agree with these terms, do not use the Website.
                </p>
                <p>
                  It is clarified that the terms and conditions that are provided separately, form an integral part of your use of this Website and should be read in conjunction with this Privacy Policy.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-black mb-6" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Information we collect and how we use it</h2>
              <div className="space-y-4">
                <p>
                  We collect, receive and store your Personal Information. If you provide your third-party account credentials ("Third Party Account Information") to us, you understand that some content and information in those accounts may be transmitted to your account with us if you authorise such transmissions and that Third Party Account Information transmitted to us shall be covered by this Privacy Policy. You may opt to not provide us with certain information, however that will restrict you from registering with us or availing some of our features and services.
                </p>
                <p>
                  We use commercially reasonable efforts to ensure that the collection of Personal Information is limited to that which is necessary to fulfill the purposes identified below. If we use or plan to use your information in a manner different than the purpose for which it is collected, then we will ask you for your consent prior to such use.
                </p>
                <p>
                  The Personal Information collected will be used only for the purpose of enabling you to use the services provided by us, to help promote a safe service, calibrate consumer interest in our products and services, inform you about online offers and updates, troubleshoot problems, customize User experience, detect and protect us against error, fraud and other criminal activity, collect money, enforce our terms and conditions, and as otherwise described to you at the time of collection of such information.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-black mb-6" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Account information of Merchants</h2>
              <div className="space-y-4">
                <p>
                  If you create an account to take advantage of the full range of services offered on Razorpay, we ask for and record Personal Information such as your name, email address and mobile number. We may collect and store your Sensitive Personal Data or Information (such as any financial information including inter alia credit card, debit card details, bank account and know your customer ("KYC") documents as per RBI regulations and any other information as may be applicable) that the User may opt to save in the User account created with Razorpay.
                </p>
                <p>
                  We use your email address to send you updates, news, and newsletters and contact you on behalf of other Users. If you do not want to receive communications from us that are not relevant to you or your use of our services, please click on the unsubscribe link provided at the bottom of such e-mails sent to you by us. We use your mobile numbers to send you transaction alerts and SMS alerts based on your preferences.
                </p>
                <p>
                  Razorpay assures that your Personal Information will not be made public or sold to any third party.
                </p>
                <p>
                  The User shall have an option to erase any information provided by the User including Personal Information. If a User opts for the said option of erasure, Razorpay shall delete all stored information of the User from its servers.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-black mb-6" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Customer Information</h2>
              <p>
                We also store customer information of customers such as address, mobile number, Third Party Wallet details, Card Details and email address making payments through Razorpay checkouts. However, only when customer chooses to share the information on the businesses powered with Razorpay applications we share the information to respective businesses. However, Razorpay is not liable in any way for any misuse of this information by the business or people related to the businesses to whom the information is shared by the customer.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-black mb-6" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Activity</h2>
              <div className="space-y-4">
                <p>
                  We record information relating to your use of Razorpay, such as the searches you undertake, the pages you view, your browser type, IP address, location, requested URL, referring URL, and timestamp information. We use this type of information to administer Razorpay and provide the highest possible level of security and service to you.
                </p>
                <p>
                  We own all the intellectual property rights associated with the Website and its contents. No right, title or interest in any downloaded material is transferred to you as a result of any such downloading or copying.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-black mb-6" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Cookies</h2>
              <p>
                We send cookies to your computer in order to uniquely identify your browser and improve the quality of our service. The term "cookies" refers to small pieces of information that a website sends to your computer's hard drive while you are viewing the site. We may use both session cookies and persistent cookies. If you choose to disable cookies, some areas of Razorpay may not work properly or at all.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-black mb-6" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Transfer of information</h2>
              <div className="space-y-4">
                <p>
                  We do not share your Personal Information with any third party apart from financial institutions such as banks, RBI or other regulatory agencies (as may be required) and to provide you with services that we offer through Razorpay, conduct quality assurance testing, facilitate creation of accounts, provide technical and customer support, or provide specific services, in accordance with your instructions.
                </p>
                <p>
                  We may share your Personal Information with our parent company, subsidiaries, joint ventures, or other companies under a common control (collectively, the "Affiliates") that we may have now or in the future, in which case we will require them to honor this Privacy Policy.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-black mb-6" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Security</h2>
              <p>
                Your account is password protected. We use industry standard measures to protect the Personal Information that is stored in our database. We limit the access to your Personal Information to those employees and contractors who need access to perform their job function, such as our customer service personnel.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-black mb-6" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Applicable law</h2>
              <p>
                Your use of this Website will be governed by and construed in accordance with the laws of India. The Users agree that any legal action or proceedings arising out of your use may be brought exclusively in the competent courts/ tribunals having jurisdiction in Bengaluru in India.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-black mb-6" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Complaints and Grievance Redressal</h2>
              <div className="space-y-4 p-8 bg-gray-50 rounded-3xl border border-gray-100">
                <p className="font-bold text-black">Grievance cum Nodal Officer:</p>
                <p>Mr. SHASHANK KARINCHETI</p>
                <p>Razorpay Software Private Limited</p>
                <p>Address: No. 22, 1st Floor, SJR Cyber, Laskar - Hosur Road, Adugodi, Bangalore - 560030</p>
                <p>Ph: 080-46669555</p>
                <p>E-mail: dpo@razorpay.com</p>
              </div>
            </section>

            <section className="pt-12 border-t border-gray-100">
              <h2 className="text-2xl font-bold text-black mb-6" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Acceptance Details</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-12 text-sm text-[#8E8E93]">
                <div>
                  <p className="font-bold text-black">Owner Id</p>
                  <p>Ruh3RhUfNgjvd1</p>
                </div>
                <div>
                  <p className="font-bold text-black">Owner Name</p>
                  <p>LABS24</p>
                </div>
                <div>
                  <p className="font-bold text-black">IP Address</p>
                  <p>10.26.171.243</p>
                </div>
                <div>
                  <p className="font-bold text-black">Date Of Acceptance</p>
                  <p>2025-12-23 18:49:53 IST</p>
                </div>
                <div>
                  <p className="font-bold text-black">Signatory Name</p>
                  <p>NIRANJAN</p>
                </div>
                <div>
                  <p className="font-bold text-black">Contact Number</p>
                  <p>+916369639674</p>
                </div>
                <div>
                  <p className="font-bold text-black">Email</p>
                  <p>niranjan.venugopal@labs24.co</p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default PrivacyPolicyPage
