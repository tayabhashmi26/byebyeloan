import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WALink from '@/components/WALink';
import { SITE_URL, SITE_NAME, WHATSAPP_LINK } from '@/lib/constants';

const SLUG = 'what-is-loan-clearance-service';
const PUBLISH_DATE = '2026-06-21';
const MODIFIED_DATE = '2026-06-21';

export const metadata: Metadata = {
  title: 'What is a Loan Clearance Service and How Can It Save You Money?',
  description:
    'Complete guide to loan clearance services in Pakistan. Learn how loan settlement works, how to stop harassment calls, get an official NOC, and save money on your loan default.',
  keywords: [
    'loan clearance service pakistan',
    'loan clearance kya hota hai',
    'loan settlement pakistan',
    'loan closure service',
    'loan app calls band karna',
    'loan default solution pakistan',
    'noc certificate loan',
    'loan harassment band',
    'smart qarza loan clear',
    'loan clear kaise karen',
  ],
  alternates: { canonical: `${SITE_URL}/blog/${SLUG}` },
  openGraph: {
    title: 'What is a Loan Clearance Service and How Can It Save You Money?',
    description:
      'Complete guide to loan clearance services in Pakistan — how it works, how it stops harassment calls, and how to get an official NOC certificate.',
    url: `${SITE_URL}/blog/${SLUG}`,
    type: 'article',
    publishedTime: PUBLISH_DATE,
    modifiedTime: MODIFIED_DATE,
    authors: [SITE_NAME],
    images: [{ url: `${SITE_URL}/og-image.png`, width: 1200, height: 630 }],
  },
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'What is a Loan Clearance Service and How Can It Save You Money?',
  description:
    'Complete guide to loan clearance services in Pakistan. How loan settlement works, how to stop harassment calls, and how to get an official NOC.',
  image: `${SITE_URL}/og-image.png`,
  author: { '@type': 'Organization', name: SITE_NAME, url: SITE_URL },
  publisher: {
    '@type': 'Organization',
    name: SITE_NAME,
    logo: { '@type': 'ImageObject', url: `${SITE_URL}/logo.png` },
  },
  datePublished: PUBLISH_DATE,
  dateModified: MODIFIED_DATE,
  mainEntityOfPage: { '@type': 'WebPage', '@id': `${SITE_URL}/blog/${SLUG}` },
  keywords: 'loan clearance service, loan settlement pakistan, loan closure, NOC certificate',
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is a loan clearance service?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A loan clearance service is a professional service that officially settles your outstanding loan with the bank or loan app on your behalf. They negotiate the final settlement amount, complete the legal paperwork, and issue you an official NOC (No Objection Certificate) confirming your loan is fully cleared.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does loan clearance save money in Pakistan?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A loan clearance service saves money by negotiating a reduced settlement amount with the lender, stopping penalty charges from accumulating, and preventing costly legal action. Professional negotiators know how to legally reduce your total outstanding amount.',
      },
    },
    {
      '@type': 'Question',
      name: 'Will loan app harassment calls stop after clearance?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Once your loan is officially settled and you receive the NOC certificate, the loan app or bank has no legal right to contact you. All calls and SMS stop permanently after official clearance.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does loan clearance take in Pakistan?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most loan clearances in Pakistan are completed within 24 to 48 hours. More complex cases with multiple loans or large amounts may take 3 to 5 business days.',
      },
    },
  ],
};

export default function BlogPost() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Header />

      <main className="bg-white">
        {/* Hero */}
        <div className="bg-gradient-to-b from-[#003d1a] to-[#006633] py-16 px-4">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block bg-white/10 text-white/80 text-xs font-semibold px-4 py-1.5 rounded-full mb-5 uppercase tracking-widest">
              Loan Clearance Guide
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-5">
              What is a Loan Clearance Service and How Can It Save You Money?
            </h1>
            <p className="text-white/80 text-lg max-w-2xl mx-auto">
              Pakistan mein loan app ya bank loan se pareshan hain? Yeh complete guide aapke liye hai.
            </p>
            <div className="flex items-center justify-center gap-4 mt-6 text-white/60 text-sm">
              <span>By {SITE_NAME}</span>
              <span>·</span>
              <time dateTime={PUBLISH_DATE}>June 21, 2026</time>
              <span>·</span>
              <span>8 min read</span>
            </div>
          </div>
        </div>

        {/* Article body */}
        <article className="max-w-3xl mx-auto px-4 sm:px-6 py-14">

          {/* Intro */}
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            If you have an outstanding loan in Pakistan — whether from a loan app like{' '}
            <strong>Smart Qarza, Paisayaar, Fori Qarza</strong> or a commercial bank like{' '}
            <strong>HBL, UBL, or Meezan Bank</strong> — and you are struggling to repay it, a{' '}
            <strong>loan clearance service</strong> can be the most important decision you make
            this year. Not only can it stop the relentless harassment calls and SMS messages, it
            can also legally close your loan at a negotiated amount — often saving you thousands
            of rupees in penalties and interest.
          </p>
          <p className="text-gray-700 leading-relaxed mb-10">
            In this guide, we explain exactly what a loan clearance service is, how it works in
            Pakistan, who needs it, and how it can genuinely save you money and mental peace.
          </p>

          {/* TOC */}
          <div className="bg-[#F0FDF4] border border-[#006633]/20 rounded-2xl p-6 mb-12">
            <p className="font-bold text-[#006633] mb-3 text-sm uppercase tracking-wide">Table of Contents</p>
            <ol className="space-y-1.5 text-sm text-gray-700 list-decimal list-inside">
              <li><a href="#what-is" className="hover:text-[#006633] hover:underline">What is a Loan Clearance Service?</a></li>
              <li><a href="#why-need" className="hover:text-[#006633] hover:underline">Why Do People in Pakistan Need Loan Clearance?</a></li>
              <li><a href="#how-works" className="hover:text-[#006633] hover:underline">How Does Loan Clearance Work? Step by Step</a></li>
              <li><a href="#noc" className="hover:text-[#006633] hover:underline">What is an NOC Certificate and Why Do You Need It?</a></li>
              <li><a href="#saves-money" className="hover:text-[#006633] hover:underline">How a Loan Clearance Service Saves You Money</a></li>
              <li><a href="#apps-banks" className="hover:text-[#006633] hover:underline">Which Loan Apps and Banks Can Be Cleared?</a></li>
              <li><a href="#terminology" className="hover:text-[#006633] hover:underline">Loan Clearance vs Settlement vs Closure — What's the Difference?</a></li>
              <li><a href="#faq" className="hover:text-[#006633] hover:underline">Frequently Asked Questions</a></li>
            </ol>
          </div>

          {/* Section 1 */}
          <h2 id="what-is" className="text-2xl font-extrabold text-gray-900 mt-12 mb-4">
            1. What is a Loan Clearance Service?
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            A <strong>loan clearance service</strong> is a professional service that acts on your
            behalf to officially settle and close your outstanding loan with a bank or loan
            application. Instead of you personally trying to negotiate with an aggressive
            recovery team, a loan clearance expert handles the entire process — legally,
            professionally, and efficiently.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            In Pakistan, this service has become essential because millions of people have taken
            small digital loans through apps like Smart Qarza, Paisayaar, Daira, Fori Qarza,
            Paisa Guru, QarzMitra, and others — and many are now struggling with repayment due
            to high interest rates, hidden charges, and financial hardship.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            A loan clearance service bridges the gap between you and the lender. They know the
            legal process, the negotiation tactics, and exactly what documents are needed to
            permanently close a loan account — including issuing you an official{' '}
            <strong>No Objection Certificate (NOC)</strong>.
          </p>

          {/* Section 2 */}
          <h2 id="why-need" className="text-2xl font-extrabold text-gray-900 mt-12 mb-4">
            2. Why Do People in Pakistan Need Loan Clearance Services?
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Pakistan ka digital lending market tezi se barha hai. JazzCash, Easypaisa, aur
            dozens of loan apps ne crores of Pakistanis ko instant micro-loans diye hain. Lekin
            jab repayment mushkil ho jaati hai, toh problems shuru hoti hain:
          </p>
          <ul className="space-y-3 mb-6">
            {[
              { title: 'Non-stop Harassment Calls & SMS', desc: 'Loan apps call karte hain — baar baar, subah se raat tak. Kuch apps CNIC ke contacts ko bhi call karte hain, jo izzat ka masla banta hai.' },
              { title: 'Penalty Charges Keep Growing', desc: 'Har din delay hone par penalties add hoti rehti hain. Jo loan Rs 10,000 tha, woh penalties ke saath Rs 25,000+ ban jaata hai.' },
              { title: 'CNIC Blacklisting Threat', desc: 'Kuch loan apps aur banks CNIC ko credit bureaus ke saath share karte hain, jo future mein aapki loan eligibility affect karta hai.' },
              { title: 'Multiple Loans at Once', desc: 'Kai logon ke paas ek saath 5-7 different apps ke loans hote hain. Inhe ek ek karna almost impossible lagta hai.' },
              { title: 'No Knowledge of Official Process', desc: 'Zyada tar log nahi jaante ke loan ko officially kaise settle karein, kya documents chahiye, aur NOC kaise lein.' },
            ].map(({ title, desc }) => (
              <li key={title} className="flex gap-3 text-gray-700">
                <span className="mt-1 shrink-0 w-5 h-5 rounded-full bg-[#006633] flex items-center justify-center">
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                    <path d="M2 5l2 2 4-4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
                <span><strong>{title}:</strong> {desc}</span>
              </li>
            ))}
          </ul>
          <p className="text-gray-700 leading-relaxed mb-6">
            Yeh sab problems ek professional loan clearance service se solve ho sakti hain —
            aur often, aap us amount se kaafi kam mein settle kar sakte hain jo aap soch rahe
            the aapko pay karna hoga.
          </p>

          {/* Section 3 */}
          <h2 id="how-works" className="text-2xl font-extrabold text-gray-900 mt-12 mb-4">
            3. How Does Loan Clearance Work? Step by Step
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Understanding the process helps you feel confident and in control. Here is exactly
            how a professional loan clearance service like ByeBye Loan works:
          </p>
          <div className="space-y-5 mb-6">
            {[
              { step: '01', title: 'Free Consultation', desc: 'Aap humse WhatsApp ya call par rabta karte hain. Hum aapka loan detail lete hain — loan app ka naam, outstanding amount, aur current situation. Yeh bilkul free hai, koi charge nahi.' },
              { step: '02', title: 'Loan Assessment', desc: 'Hum aapke loan ka complete analysis karte hain — original amount, added penalties, interest, aur legal status. Hum aapko batate hain ke exactly kya ho raha hai aur best course of action kya hai.' },
              { step: '03', title: 'Professional Negotiation', desc: 'Hamari team loan app ya bank ke saath directly negotiate karti hai. Hum legally aur professionally unse baat karte hain aur aapke liye best possible settlement amount secure karte hain.' },
              { step: '04', title: 'Official Settlement', desc: 'Agreed settlement amount pay hone ke baad, hum ensure karte hain ke loan account officially close ho jaaye. Sab paperwork humari team handle karti hai.' },
              { step: '05', title: 'NOC Certificate Issued', desc: 'Aapko ek official, digitally verified No Objection Certificate milta hai — yeh aapka legal proof hai ke aapka loan 100% clear hai. QR code se koi bhi verify kar sakta hai.' },
            ].map(({ step, title, desc }) => (
              <div key={step} className="flex gap-4">
                <div className="shrink-0 w-10 h-10 rounded-xl bg-[#006633] flex items-center justify-center text-white font-extrabold text-sm">
                  {step}
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">{title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Section 4 */}
          <h2 id="noc" className="text-2xl font-extrabold text-gray-900 mt-12 mb-4">
            4. What is an NOC Certificate and Why Is It Critical?
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            An <strong>NOC (No Objection Certificate)</strong> is an official document issued by
            the bank or loan app confirming that your loan has been fully settled and they have
            no remaining claim against you. It is the most important document you can receive
            after a loan settlement in Pakistan.
          </p>
          <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 mb-6">
            <p className="font-bold text-gray-900 mb-3">An NOC Certificate protects you in multiple ways:</p>
            <ul className="space-y-2 text-gray-700 text-sm">
              {[
                'Permanently stops all calls, SMS, and recovery attempts — legally',
                'Serves as proof for future employers or landlords who do background checks',
                'Required for repairing your credit score at Pakistan\'s credit bureaus',
                'Legal protection if the loan app ever tries to claim you still owe money',
                'Essential documentation if you want to apply for a bank loan or credit card in the future',
              ].map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="text-[#006633] font-bold shrink-0">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <p className="text-gray-700 leading-relaxed mb-6">
            At ByeBye Loan, every settlement comes with a digitally verified NOC certificate
            with a unique QR code — which anyone can scan to instantly verify the authenticity
            of your clearance. This is something most clients share with their family, employer,
            or anyone who was concerned about their loan situation.
          </p>

          {/* Section 5 */}
          <h2 id="saves-money" className="text-2xl font-extrabold text-gray-900 mt-12 mb-4">
            5. How a Loan Clearance Service Actually Saves You Money
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            This is the part most people are surprised by. A professional loan clearance
            service does not just help you close your loan — it often helps you close it for
            <strong> significantly less than the total amount showing on your account.</strong>
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Here is how the savings work in practice:
          </p>
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#006633] text-white">
                  <th className="text-left px-4 py-3 font-semibold rounded-tl-xl">Situation</th>
                  <th className="text-left px-4 py-3 font-semibold">Without Service</th>
                  <th className="text-left px-4 py-3 font-semibold rounded-tr-xl">With ByeBye Loan</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Outstanding amount', 'Rs 50,000', 'Rs 50,000'],
                  ['Monthly penalty charges', '+Rs 5,000/month', 'Stopped immediately'],
                  ['Legal notice costs', '+Rs 10,000–20,000', 'Avoided entirely'],
                  ['Negotiated reduction', 'Not possible alone', 'Often 20–40% less'],
                  ['Final settlement', 'Rs 80,000+ (growing)', 'Rs 30,000–40,000'],
                ].map(([situation, without, with_], i) => (
                  <tr key={situation} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-4 py-3 font-medium text-gray-800 border-b border-gray-100">{situation}</td>
                    <td className="px-4 py-3 text-red-600 border-b border-gray-100">{without}</td>
                    <td className="px-4 py-3 text-[#006633] font-semibold border-b border-gray-100">{with_}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-gray-700 leading-relaxed mb-4">
            Beyond the direct financial saving, consider the hidden costs of{' '}
            <em>not</em> clearing your loan:
          </p>
          <ul className="space-y-2 text-gray-700 mb-6">
            {[
              'Mental stress and anxiety affecting your health and work performance',
              'Relationship damage — loan apps call your family contacts and colleagues',
              'Lost job opportunities — some employers check financial history',
              'Inability to get future loans, credit cards, or even mobile connections',
              'Legal proceedings that cost far more than the original loan',
            ].map((item) => (
              <li key={item} className="flex gap-2 text-sm">
                <span className="text-red-500 shrink-0">✗</span>
                {item}
              </li>
            ))}
          </ul>

          {/* CTA Banner mid-article */}
          <div className="bg-[#006633] rounded-2xl p-7 text-center my-10">
            <p className="text-white font-extrabold text-xl mb-2">Apna Loan Clear Karwana Chahte Hain?</p>
            <p className="text-white/80 text-sm mb-5">Free consultation — no commitment, no charge.</p>
            <WALink className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1db954] text-white font-bold px-7 py-3.5 rounded-xl transition-colors text-sm">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp Pe Free Consultation Lein
            </WALink>
          </div>

          {/* Section 6 */}
          <h2 id="apps-banks" className="text-2xl font-extrabold text-gray-900 mt-12 mb-4">
            6. Which Loan Apps and Banks Can Be Cleared in Pakistan?
          </h2>
          <p className="text-gray-700 leading-relaxed mb-5">
            ByeBye Loan covers <strong>30+ loan apps</strong> and all major Pakistani commercial banks:
          </p>
          <div className="grid sm:grid-cols-2 gap-4 mb-6">
            <div className="bg-[#F0FDF4] rounded-2xl p-5">
              <p className="font-bold text-[#006633] mb-3 text-sm">Popular Loan Apps</p>
              <div className="flex flex-wrap gap-2">
                {['Smart Qarza', 'Paisayaar', 'Daira', 'Hakeem', 'Aitemaad', 'Sahara', 'Fori Qarza', 'Paisa Guru', 'Fauri Cash', 'QarzMitra', 'PakCredit', 'Money Tap', 'Loan Lado', 'Abhi', 'ZoodPay', 'JazzCash', 'Easypaisa'].map((app) => (
                  <span key={app} className="text-xs bg-white border border-[#006633]/20 text-gray-700 px-3 py-1 rounded-full font-medium">{app}</span>
                ))}
              </div>
            </div>
            <div className="bg-[#F0FDF4] rounded-2xl p-5">
              <p className="font-bold text-[#006633] mb-3 text-sm">All Major Banks</p>
              <div className="flex flex-wrap gap-2">
                {['HBL', 'UBL', 'MCB', 'ABL', 'Meezan Bank', 'Bank Alfalah', 'Faysal Bank', 'Askari Bank', 'NBP', 'JS Bank', 'Habib Metro', 'Bank Islami'].map((bank) => (
                  <span key={bank} className="text-xs bg-white border border-[#006633]/20 text-gray-700 px-3 py-1 rounded-full font-medium">{bank}</span>
                ))}
              </div>
            </div>
          </div>
          <p className="text-gray-700 leading-relaxed mb-6">
            If your loan app or bank is not in the list above, do not worry —{' '}
            <WALink className="text-[#006633] font-semibold hover:underline">contact us on WhatsApp</WALink>{' '}
            and we will tell you within minutes whether we can help.
          </p>

          {/* Section 7 */}
          <h2 id="terminology" className="text-2xl font-extrabold text-gray-900 mt-12 mb-4">
            7. Loan Clearance vs Settlement vs Closure — What Is the Difference?
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            These three terms are often used interchangeably in Pakistan but they have
            slightly different meanings:
          </p>
          <div className="space-y-4 mb-6">
            {[
              {
                term: 'Loan Clearance',
                color: '#006633',
                bg: '#F0FDF4',
                desc: 'The broadest term — it means completely closing your loan account with an official NOC. It can happen through full payment, negotiated settlement, or restructuring. This is the end goal.',
              },
              {
                term: 'Loan Settlement',
                color: '#4338ca',
                bg: '#EEF2FF',
                desc: 'A specific type of clearance where the lender agrees to accept less than the full outstanding amount. This typically happens when the borrower is in financial hardship. You save money but it may be noted in your credit report.',
              },
              {
                term: 'Loan Closure',
                color: '#b45309',
                bg: '#FFFBEB',
                desc: 'The administrative act of closing the loan account in the lender\'s system after payment is complete. Closure without an NOC is not enough — always get the NOC in writing.',
              },
            ].map(({ term, color, bg, desc }) => (
              <div key={term} className="rounded-xl p-5 border" style={{ background: bg, borderColor: `${color}30` }}>
                <p className="font-bold mb-1.5" style={{ color }}>{term}</p>
                <p className="text-gray-700 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
          <p className="text-gray-700 leading-relaxed mb-6">
            In Pakistan, when people say <em>"loan clear karna"</em> or{' '}
            <em>"loan settlement karna"</em>, they usually mean the same thing: getting rid of
            the loan burden with an official document to prove it. ByeBye Loan handles all three
            scenarios depending on your specific situation.
          </p>

          {/* Section 8 — FAQ */}
          <h2 id="faq" className="text-2xl font-extrabold text-gray-900 mt-12 mb-6">
            8. Frequently Asked Questions
          </h2>
          <div className="space-y-5 mb-10">
            {[
              {
                q: 'Is a loan clearance service legal in Pakistan?',
                a: 'Yes, 100%. Loan clearance services operate under Pakistani law and work directly with the lender through official channels. The settlement is documented, the NOC is official, and the entire process is transparent and legal.',
              },
              {
                q: 'Will loan app calls and SMS stop permanently after clearance?',
                a: 'Yes. Once your loan is officially settled and the NOC is issued, the loan app or bank has no legal right to contact you. Calls and SMS stop permanently. If they continue despite the NOC, it is a violation of law and you have grounds for legal action against them.',
              },
              {
                q: 'Can I clear my loan if I am already in default?',
                a: 'Yes — in fact, this is the most common situation our clients come to us in. Loan default does not mean you cannot settle. We negotiate with the lender even in default situations and often achieve better settlement terms because the lender also wants to recover something rather than nothing.',
              },
              {
                q: 'What if I have loans from multiple apps at the same time?',
                a: 'This is very common in Pakistan. We handle multiple loan clearances simultaneously — you provide us the details of all your loans and we manage the entire process for all of them. You receive a separate NOC for each loan.',
              },
              {
                q: 'How is ByeBye Loan different from paying the loan myself?',
                a: 'When you pay directly, you typically pay the full outstanding amount including all penalties and interest charges. Our professional negotiators know how to legally reduce this amount and which arguments work with each specific lender. Additionally, we ensure proper documentation and NOC issuance — which people often miss when paying directly.',
              },
            ].map(({ q, a }, i) => (
              <div key={i} className="border-2 border-gray-100 rounded-2xl p-6">
                <p className="font-bold text-gray-900 mb-2">Q: {q}</p>
                <p className="text-gray-600 text-sm leading-relaxed">A: {a}</p>
              </div>
            ))}
          </div>

          {/* Conclusion */}
          <h2 className="text-2xl font-extrabold text-gray-900 mt-12 mb-4">Conclusion</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            A loan clearance service in Pakistan is not a luxury — for anyone trapped in a cycle
            of loan harassment, growing penalties, and financial stress, it is the fastest and
            most cost-effective path to freedom. The right service will not just help you pay
            off your loan; it will negotiate a fair settlement, handle all paperwork, stop all
            harassment immediately, and give you an official NOC that protects you legally.
          </p>
          <p className="text-gray-700 leading-relaxed mb-10">
            At <strong>ByeBye Loan</strong>, we have helped over 5,000 Pakistani clients clear
            loans from 30+ apps and all major banks. Our process is transparent, legal, and
            fast — with most cases resolved in 24 to 48 hours. If you are ready to be free from
            your loan burden,{' '}
            <WALink className="text-[#006633] font-bold hover:underline">contact us today on WhatsApp</WALink>{' '}
            for a completely free consultation.
          </p>

          {/* Final CTA */}
          <div className="bg-gradient-to-br from-[#003d1a] to-[#006633] rounded-2xl p-8 text-center">
            <p className="text-white font-extrabold text-2xl mb-2">Loan Se Hamesha Ke Liye Azaad Ho Jao</p>
            <p className="text-white/80 mb-6">5,000+ Pakistanis pehle hi yeh decision le chuke hain. Aapki baari hai.</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <WALink className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1db954] text-white font-bold px-8 py-4 rounded-xl transition-colors">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                WhatsApp — Free Consultation
              </WALink>
              <Link href="/" className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold px-8 py-4 rounded-xl transition-colors border border-white/30">
                Learn More About Our Services →
              </Link>
            </div>
          </div>

          {/* Breadcrumb back */}
          <div className="mt-10 pt-8 border-t border-gray-100 text-sm text-gray-400">
            <Link href="/" className="hover:text-[#006633] transition-colors">← Back to ByeBye Loan</Link>
          </div>
        </article>
      </main>

      <Footer />
    </>
  );
}
