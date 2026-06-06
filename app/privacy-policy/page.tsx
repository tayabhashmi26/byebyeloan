import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { SITE_NAME, SITE_URL, PHONE_DISPLAY, WHATSAPP_LINK } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    `Privacy Policy for ${SITE_NAME}. Learn how we collect, use, and protect your personal data when you use our loan clearing and debt settlement services in Pakistan.`,
  alternates: { canonical: `${SITE_URL}/privacy-policy` },
  robots: { index: true, follow: true },
};

const SECTIONS = [
  {
    title: '1. Information We Collect',
    body: `When you contact ${SITE_NAME} or use our services, we may collect the following information:
• Full name and CNIC (Computerised National Identity Card) number
• Mobile/phone number and email address
• Loan app name(s), loan account details, and outstanding balance
• WhatsApp communication history related to your case
• Any other documents or information you voluntarily share for case processing`,
  },
  {
    title: '2. How We Use Your Information',
    body: `Your information is used solely for the purpose of providing our loan clearing and debt settlement services, including:
• Verifying your identity and loan details
• Negotiating your settlement with the relevant loan app or bank
• Issuing a No Objection Certificate (NOC) upon successful settlement
• Sending you case updates, settlement confirmations, and service communications
• Improving our services based on aggregate, non-personal usage trends`,
  },
  {
    title: '3. Sharing Your Information',
    body: `${SITE_NAME} will only share your personal data with the specific loan application, fintech company, or bank with which your settlement is being negotiated — and only to the extent required to process and finalise your settlement. We do not sell, rent, trade, or share your personal information with any third party for marketing purposes.`,
  },
  {
    title: '4. Data Security',
    body: `We take reasonable technical and organisational measures to protect your personal information from unauthorised access, disclosure, alteration, or destruction. NOC records are stored in a secured, encrypted database. Access is restricted to authorised team members only. However, no method of data transmission over the internet is 100% secure, and we cannot guarantee absolute security.`,
  },
  {
    title: '5. Data Retention',
    body: `We retain your personal information and NOC records for a minimum of three (3) years from the date of settlement, as they may be required for verification, dispute resolution, or regulatory compliance. You may request deletion of your data after this period by contacting us directly.`,
  },
  {
    title: '6. QR Code & NOC Verification',
    body: `Each NOC certificate contains a unique QR code linked to a public verification page on our website. This page displays your name, CNIC (partially masked), loan app, settlement installments, and issue date — visible to anyone who scans the QR code. This is intentional, as it serves as proof of your loan's official settlement. If you wish to discuss the visibility of your NOC, please contact us.`,
  },
  {
    title: '7. Cookies',
    body: `Our website may use essential cookies to maintain admin session states and ensure the secure operation of our NOC management portal. We do not use tracking cookies or third-party advertising cookies on the public-facing pages of our website. No personal information is stored in cookies.`,
  },
  {
    title: '8. Your Rights',
    body: `You have the right to:
• Request access to the personal information we hold about you
• Request correction of inaccurate data
• Request deletion of your data (subject to our retention policy)
• Withdraw consent for non-essential communication at any time
To exercise any of these rights, contact us via WhatsApp or phone.`,
  },
  {
    title: '9. Third-Party Links',
    body: `Our website may contain links or references to third-party loan apps, banks, or financial platforms for informational purposes. We are not responsible for the privacy practices or content of those external websites. We encourage you to read their respective privacy policies.`,
  },
  {
    title: '10. Children\'s Privacy',
    body: `Our services are intended for adults (18 years and older) who have legally entered into loan agreements in Pakistan. We do not knowingly collect personal information from minors. If you believe a minor has shared information with us, please contact us immediately.`,
  },
  {
    title: '11. Updates to This Policy',
    body: `We may update this Privacy Policy periodically to reflect changes in our practices or applicable regulations. The updated version will always be available on this page with a revised date. Continued use of our services after changes are posted means you accept the updated policy.`,
  },
  {
    title: '12. Contact & Complaints',
    body: `If you have any concerns, questions, or complaints about how we handle your personal data, please contact us at ${PHONE_DISPLAY} or via WhatsApp. We aim to respond to all privacy-related queries within 5 business days.`,
  },
];

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main className="bg-white">
        <div className="container mx-auto px-4 sm:px-6 py-14 max-w-3xl">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#006633] mb-2">
            Privacy Policy
          </h1>
          <p className="text-sm text-gray-500 mb-10">Last updated: June 2026</p>

          <div className="space-y-8">
            {SECTIONS.map((s) => (
              <section key={s.title}>
                <h2 className="text-lg font-bold text-gray-900 mb-2">{s.title}</h2>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed whitespace-pre-line">{s.body}</p>
              </section>
            ))}
          </div>

          <div className="mt-12 p-5 rounded-2xl bg-[#F0F7F4] border border-[#006633]/10">
            <p className="text-sm text-gray-700">
              Privacy concerns? Contact us on{' '}
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="text-[#006633] font-semibold hover:underline">
                WhatsApp
              </a>{' '}
              or call{' '}
              <a href={`tel:${PHONE_DISPLAY}`} className="text-[#006633] font-semibold hover:underline">
                {PHONE_DISPLAY}
              </a>. We respond within 5 business days.
            </p>
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
