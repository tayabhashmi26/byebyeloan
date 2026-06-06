import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { SITE_NAME, SITE_URL, PHONE_DISPLAY, WHATSAPP_LINK } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Terms & Conditions',
  description:
    `Terms and Conditions for ${SITE_NAME} — Pakistan's loan clearing and debt settlement advisory service. Read our service terms, disclaimers, and policies before using our service.`,
  alternates: { canonical: `${SITE_URL}/terms-and-conditions` },
  robots: { index: true, follow: true },
};

const SECTIONS = [
  {
    title: '1. Acceptance of Terms',
    body: `By accessing or using the ${SITE_NAME} website, WhatsApp service, or any communication channel associated with us, you agree to be bound by these Terms & Conditions. If you do not agree with any part of these terms, please do not use our services.`,
  },
  {
    title: '2. Nature of Our Service',
    body: `${SITE_NAME} is a debt settlement advisory and facilitation service. We assist clients in negotiating and settling outstanding balances with loan applications, digital lenders, and commercial banks operating in Pakistan. We are an independent advisory service and are not affiliated with, endorsed by, sponsored by, or acting as an agent of any loan app, fintech company, mobile wallet, or bank named on this website.`,
  },
  {
    title: '3. No Guarantee of Outcome',
    body: `While we work diligently to negotiate favourable settlements and obtain a No Objection Certificate (NOC) on behalf of our clients, the final outcome of any negotiation depends on the policies and discretion of the respective loan app or bank. Results, timelines, and settlement amounts may vary from case to case and are not guaranteed.`,
  },
  {
    title: '4. Client Responsibilities',
    body: `You agree to provide accurate, complete, and truthful information regarding your loan(s), including but not limited to your CNIC, mobile number, loan app/bank name, and outstanding balance. Providing false or misleading information may result in delays, rejection of your case, or termination of services without refund.`,
  },
  {
    title: '5. Fees & Payments',
    body: `Service charges, where applicable, will be communicated to you transparently before work begins. Any advance payment, processing fee, or settlement amount must be paid through the official channels shared by our representative. We will never ask you to make payments to personal/unverified accounts outside of our official process.`,
  },
  {
    title: '6. Official NOC Certificates',
    body: `Upon successful settlement, we issue a digital No Objection Certificate (NOC) bearing a unique QR code that can be scanned to verify its authenticity on this website. Tampering with, forging, or misrepresenting any NOC issued by us is strictly prohibited and may result in legal action.`,
  },
  {
    title: '7. "No More Calls or SMS" Assurance',
    body: `Once a loan or credit facility is officially settled and an NOC is issued, the respective loan app or bank is expected to stop all collection communication (calls and SMS) to the client. While this is the standard outcome of an official settlement, ${SITE_NAME} cannot control the internal systems of third-party companies, and isolated automated messages may occasionally continue for a short period after settlement, which we will help you resolve.`,
  },
  {
    title: '8. Limitation of Liability',
    body: `${SITE_NAME}, its owners, and representatives shall not be held liable for any indirect, incidental, or consequential loss arising from the use of our advisory services, including but not limited to loss of credit standing, legal proceedings initiated by third parties, or actions taken by loan apps/banks that are beyond our reasonable control.`,
  },
  {
    title: '9. Communication & Consent',
    body: `By contacting us via phone, WhatsApp, or our website forms, you consent to receive calls, messages, and updates from ${SITE_NAME} regarding your case. You may opt out of non-essential communication at any time by informing our representative.`,
  },
  {
    title: '10. Changes to These Terms',
    body: `We may update these Terms & Conditions from time to time to reflect changes in our services or applicable regulations in Pakistan. The updated version will be posted on this page with a revised "last updated" date. Continued use of our services after changes are posted constitutes acceptance of the revised terms.`,
  },
  {
    title: '11. Governing Law',
    body: `These Terms & Conditions are governed by and construed in accordance with the laws of the Islamic Republic of Pakistan. Any disputes arising from the use of our services shall be subject to the jurisdiction of the courts of Pakistan.`,
  },
  {
    title: '12. Contact Us',
    body: `If you have any questions regarding these Terms & Conditions, please reach out to us via phone at ${PHONE_DISPLAY} or through WhatsApp. We're available Monday to Saturday, 9 AM – 9 PM.`,
  },
];

export default function TermsPage() {
  return (
    <>
      <Header />
      <main className="bg-white">
        <div className="container mx-auto px-4 sm:px-6 py-14 max-w-3xl">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#006633] mb-2">
            Terms &amp; Conditions
          </h1>
          <p className="text-sm text-gray-500 mb-10">Last updated: June 2026</p>

          <div className="space-y-8">
            {SECTIONS.map((s) => (
              <section key={s.title}>
                <h2 className="text-lg font-bold text-gray-900 mb-2">{s.title}</h2>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">{s.body}</p>
              </section>
            ))}
          </div>

          <div className="mt-12 p-5 rounded-2xl bg-[#F0F7F4] border border-[#006633]/10">
            <p className="text-sm text-gray-700">
              Have questions about these terms? Reach out anytime on{' '}
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="text-[#006633] font-semibold hover:underline">
                WhatsApp
              </a>{' '}
              or call us at{' '}
              <a href={`tel:${PHONE_DISPLAY}`} className="text-[#006633] font-semibold hover:underline">
                {PHONE_DISPLAY}
              </a>.
            </p>
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
