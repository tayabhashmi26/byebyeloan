import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WALink from '@/components/WALink';
import { SITE_URL, SITE_NAME } from '@/lib/constants';

const SLUG = 'bank-loan-default-kya-hota-hai';
const PUBLISH_DATE = '2026-06-24';

export const metadata: Metadata = {
  title: 'Bank Loan Default Ke Baad Kya Hota Hai Pakistan Mein — Complete Guide 2026',
  description:
    'Bank loan default ho gayi Pakistan mein? CNIC block, arrest, credit report, property — kya kya hota hai aur kaise bachein. Loan clearance service se kaise niklen is situation se.',
  keywords: [
    'bank loan default pakistan', 'bank loan default ke baad kya hota hai',
    'bank loan default consequences pakistan', 'bank loan nahi diya pakistan',
    'bank default cnic block', 'bank loan settlement pakistan',
    'hbl mcb ubl default pakistan', 'bank loan clear karna pakistan',
  ],
  alternates: { canonical: `${SITE_URL}/blog/${SLUG}` },
  openGraph: {
    title: 'Bank Loan Default Ke Baad Kya Hota Hai Pakistan Mein',
    description: 'Bank loan default hone ke real consequences, aapke legal rights, aur is situation se nikalne ka tarika — complete guide Pakistan 2026.',
    url: `${SITE_URL}/blog/${SLUG}`,
    type: 'article',
    publishedTime: PUBLISH_DATE,
    authors: [SITE_NAME],
    images: [{ url: `${SITE_URL}/og-image.png`, width: 1200, height: 630 }],
  },
};

const schemas = [
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Bank Loan Default Ke Baad Kya Hota Hai Pakistan Mein — Complete Guide 2026',
    author: { '@type': 'Organization', name: SITE_NAME, url: SITE_URL },
    publisher: { '@type': 'Organization', name: SITE_NAME, logo: { '@type': 'ImageObject', url: `${SITE_URL}/logo.png` } },
    datePublished: PUBLISH_DATE,
    dateModified: PUBLISH_DATE,
    image: `${SITE_URL}/og-image.png`,
    mainEntityOfPage: { '@type': 'WebPage', '@id': `${SITE_URL}/blog/${SLUG}` },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      { '@type': 'Question', name: 'Bank loan default hone par kya arrest ho sakti hai Pakistan mein?', acceptedAnswer: { '@type': 'Answer', text: 'Nahi. Civil debt ke liye Pakistan mein arrest nahi hoti. Bank loan default ek civil matter hai, criminal nahi. Arrest ke liye court decree aur phir contempt of court ka process hota hai — jo bahut rare aur lengthy hai.' } },
      { '@type': 'Question', name: 'Bank loan default se CNIC block hoti hai Pakistan mein?', acceptedAnswer: { '@type': 'Answer', text: 'Directly nahi. Banks CNIC block nahi kar sakti. Lekin NADRA aur FBR dono ke saath data sharing hoti hai. eCIB credit report mein default entry hoti hai jo future banking services aur loans affect karti hai.' } },
      { '@type': 'Question', name: 'Bank loan default ke baad settlement possible hai?', acceptedAnswer: { '@type': 'Answer', text: 'Haan. Banks aksar default cases mein settlement ke liye raazi ho jaate hain — reduced amount par. ByeBye Loan bank loan clearance bhi karta hai — free consultation ke liye WhatsApp karein.' } },
      { '@type': 'Question', name: 'Bank loan default ke baad ghar ya property jaati hai?', acceptedAnswer: { '@type': 'Answer', text: 'Secured loans (jahan collateral rakha gaya ho) mein bank court order ke baad property attach kar sakta hai. Lekin yeh lengthy legal process hai. Unsecured personal loans mein property directly attach nahi hoti.' } },
    ],
  },
];

const WACta = ({ label = 'WhatsApp Pe Free Consultation Lein' }) => (
  <WALink className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1db954] text-white font-bold px-6 py-3 rounded-xl transition-colors text-sm">
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 shrink-0"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
    {label}
  </WALink>
);

export default function BankLoanDefaultPost() {
  return (
    <>
      {schemas.map((s, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />
      ))}
      <Header />
      <main className="bg-white">
        <div className="bg-gradient-to-b from-[#1c1917] to-[#44403c] py-14 px-4">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block bg-white/10 text-white/80 text-xs font-semibold px-4 py-1.5 rounded-full mb-5 uppercase tracking-widest">
              Bank Default Guide
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight mb-4">
              Bank Loan Default Ke Baad Kya Hota Hai Pakistan Mein?
            </h1>
            <p className="text-white/80 text-lg max-w-2xl mx-auto mb-6">
              Sach kya hai, jhutha kya hai — aur is situation se nikalne ka real tarika.
            </p>
            <WACta label="Bank Loan Clear Karwayein — Free Consultation" />
            <p className="text-white/50 text-xs mt-3">By {SITE_NAME} · <time dateTime={PUBLISH_DATE}>June 24, 2026</time> · 7 min read</p>
          </div>
        </div>

        <article className="max-w-3xl mx-auto px-4 sm:px-6 py-12">

          <p className="text-lg text-gray-700 leading-relaxed mb-5">
            Bank loan default hona Pakistan mein ek common situation hai — especially economic pressure ke waqt.
            HBL, MCB, UBL, Meezan, Bank Alfalah — kisi bhi bank se loan liya ho aur payment miss ho jaaye, log
            ghabra jaate hain. <strong>Arrest hogi? CNIC block hogi? Ghar jaayega?</strong> Yeh guide in sawalaat
            ka honest jawab deti hai.
          </p>

          <h2 className="text-xl font-extrabold text-gray-900 mt-8 mb-4">Bank Loan Default — Step by Step Kya Hota Hai</h2>
          <div className="space-y-3 mb-6">
            {[
              { phase: 'Month 1-2', title: 'Reminders & Calls', desc: 'Bank calls, SMS, aur letters bhejta hai. Branch manager contact karta hai. Yeh recovery ka pehla phase hai — cooperative rehna best strategy hai.' },
              { phase: 'Month 3-6', title: 'Legal Notice', desc: 'Bank formal legal notice bhejta hai. Recovery department escalate hota hai. Interest aur penalty accumulate hoti rehti hai. Agar secured loan hai toh collateral seizure ka process start ho sakta hai.' },
              { phase: 'Month 6+', title: 'eCIB Reporting', desc: 'Bank aapki default eCIB (credit bureau) mein report karta hai. Yeh future mein sab banks tak jaati hai — dusri jagah se loan mushkil ho jaata hai. Yeh sabse long-term consequence hai.' },
              { phase: 'Advanced Stage', title: 'Court Action', desc: 'Bank court mein case file karta hai. Decree milne ke baad bank property attach karne ke liye apply kar sakta hai (secured loans) ya bank accounts garnish karwa sakta hai. Yeh lengthy process hai — mahine se saal tak.' },
            ].map(({ phase, title, desc }) => (
              <div key={phase} className="flex gap-4 p-4 bg-gray-50 rounded-xl border border-gray-100">
                <div className="shrink-0 text-xs font-bold text-stone-600 w-24 pt-0.5">{phase}</div>
                <div>
                  <p className="font-bold text-gray-900 text-sm mb-1">{title}</p>
                  <p className="text-gray-600 text-xs leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>

          <h2 className="text-xl font-extrabold text-gray-900 mt-8 mb-4">5 Baatein Jo Bilkul Galat Hain — Bank Default Ke Baare Mein</h2>
          <div className="space-y-2 mb-6">
            {[
              { myth: 'Arrest ho jaayegi', fact: 'Civil debt ke liye Pakistan mein arrest nahi hoti. Bank loan ek civil matter hai. Court decree ke baad bhi contempt of court ka alag lengthy process hota hai.' },
              { myth: 'CNIC block ho jaayegi', fact: 'Bank directly CNIC block nahi kar sakta. NADRA government department hai — loan default se CNIC block nahi hoti.' },
              { myth: 'Ghar turant chala jaayega', fact: 'Secured loan mein property attach hoti hai — lekin court order ke zariye aur lengthy legal process ke baad. Unsecured loans mein property ka koi direct risk nahi.' },
              { myth: 'Poori family ke accounts freeze ho jaayenge', fact: 'Sirf aapka account court order ke baad garnish ho sakta hai — family members ke accounts ka koi relation nahi.' },
              { myth: 'Settlement possible nahi', fact: 'Banks aksar default cases mein settlement ke liye raazi hote hain — especially late stage mein. Professional negotiation se significant reduction mil sakti hai.' },
            ].map(({ myth, fact }) => (
              <div key={myth} className="p-4 bg-white border-2 border-gray-100 rounded-xl">
                <p className="text-sm text-red-600 flex gap-2 mb-1"><span className="shrink-0 font-bold">✗ Myth:</span>"{myth}"</p>
                <p className="text-xs text-green-700 flex gap-2"><span className="shrink-0 font-bold">✓ Fact:</span>{fact}</p>
              </div>
            ))}
          </div>

          <h2 className="text-xl font-extrabold text-gray-900 mt-8 mb-4">Bank Default Ka Sabse Real Consequence — eCIB Credit Report</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Arrest ya CNIC block se nahi — bank loan default ka sabse bada aur real consequence hai <strong>eCIB
            credit report mein negative entry.</strong> SECP ka yeh system Pakistan ke tamam banks aur financial
            institutions ke saath linked hai.
          </p>
          <ul className="space-y-2 mb-6">
            {[
              'Default entry 5-7 saal tak record mein reh sakti hai',
              'Kisi bhi bank se future loan apply karne par rejection',
              'Credit card apply karna mushkil ho jaata hai',
              'Housing finance ya vehicle financing block ho sakti hai',
              'Kuch employers financial sector mein yeh check karte hain',
            ].map(item => (
              <li key={item} className="flex gap-2 text-sm text-gray-700">
                <span className="text-red-500 shrink-0 mt-0.5">•</span>{item}
              </li>
            ))}
          </ul>
          <p className="text-gray-700 leading-relaxed mb-6">
            <strong>Good news:</strong> Loan settle hone aur NOC milne ke baad eCIB mein cleared status update
            hota hai. Yeh future credit history ke liye sabse important step hai.
          </p>

          <h2 className="text-xl font-extrabold text-gray-900 mt-8 mb-4">Bank Loan Default Se Kaise Niklen — Practical Steps</h2>
          <div className="space-y-3 mb-6">
            {[
              { step: '1', title: 'Baat Karein — Ignore Mat Karein', desc: 'Bank ko ignore karna situation worse banata hai. Bank se contact karein aur situation explain karein. Aksar banks hardship cases mein payment plan dete hain.' },
              { step: '2', title: 'Professional Help Lein', desc: 'ByeBye Loan bank loan clearance bhi handle karta hai. Hum bank se negotiate karte hain, best settlement amount secure karte hain, aur official NOC dilwate hain.' },
              { step: '3', title: 'Settlement Agreement', desc: 'Formal written settlement agreement zaroori hai. Is ke bina partial payment karna risky hai — bank future mein remaining claim kar sakta hai.' },
              { step: '4', title: 'NOC Lein', desc: 'Settlement ke baad bank se official NOC lein. Yeh eCIB clearing aur future banking ke liye zaroori hai.' },
            ].map(({ step, title, desc }) => (
              <div key={step} className="flex gap-3">
                <div className="shrink-0 w-8 h-8 rounded-lg bg-[#006633] text-white flex items-center justify-center font-bold text-xs">{step}</div>
                <div>
                  <p className="font-bold text-gray-900 text-sm mb-1">{title}</p>
                  <p className="text-gray-600 text-xs leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-[#006633] rounded-2xl p-6 text-center my-8">
            <p className="text-white font-extrabold text-lg mb-2">Bank Loan Clear Karwayein — Free Consultation</p>
            <p className="text-white/80 text-sm mb-4">ByeBye Loan bank loans bhi settle karta hai — 24-48 ghante mein. Official NOC guaranteed.</p>
            <WACta label="Abhi WhatsApp Karein" />
          </div>

          <h2 className="text-xl font-extrabold text-gray-900 mt-8 mb-4">Bank Loan Default FAQ</h2>
          <div className="space-y-3 mb-8">
            {[
              { q: 'Bank loan default aur loan app default mein kya farq hai?', a: 'Bank loan aksar larger amounts hote hain aur SECP/SBP ke under regulated hain. Legal consequences zyada structured hain. Loan apps typically unregulated ya light-regulated hain. Dono mein settlement possible hai — lekin process thodi alag hai.' },
              { q: 'Bank se legal notice aaya — kya karoon?', a: 'Ignore mat karein. Legal notice ka matlab immediately arrest nahi — yeh formal communication hai. Response dena ya professional help lena best course of action hai. ByeBye Loan se contact karein — hum guide karenge.' },
              { q: 'Bank loan default mein kitna time hai court action se pehle?', a: 'Yeh bank aur amount par depend karta hai. Generally banks 6-12 mahine mein legal action start karte hain. Is window mein settlement karna best strategy hai.' },
              { q: 'Bank loan already court mein hai — ab kya ho sakta hai?', a: 'Court proceedings mein bhi settlement possible hai — "out of court settlement" kaha jaata hai. ByeBye Loan is stage par bhi help kar sakta hai. Contact karein aur situation explain karein.' },
            ].map(({ q, a }) => (
              <div key={q} className="border-2 border-gray-100 rounded-xl p-4">
                <p className="font-bold text-gray-900 text-sm mb-2">Q: {q}</p>
                <p className="text-gray-600 text-xs leading-relaxed">A: {a}</p>
              </div>
            ))}
          </div>

          <div className="bg-gray-50 rounded-2xl p-5 mb-6">
            <p className="font-bold text-gray-900 mb-3 text-sm">Related Guides:</p>
            <ul className="space-y-2">
              {[
                { href: '/blog/loan-app-noc-kaise-milti-hai', text: 'Official NOC Kaise Milti Hai Pakistan Mein' },
                { href: '/blog/loan-default-solution-pakistan', text: 'Loan Default Ho Jaaye Toh Kya Karein' },
                { href: '/blog/loan-overdue-credit-report-pakistan', text: 'Overdue Loan aur eCIB Credit Report Pakistan' },
                { href: '/blog/multiple-loan-apps-kaise-manage-karein', text: 'Kai Loan Apps Ek Saath — Kaise Manage Karein' },
              ].map(({ href, text }) => (
                <li key={href}><Link href={href} className="text-[#006633] hover:underline text-sm font-medium">→ {text}</Link></li>
              ))}
            </ul>
          </div>

          <div className="flex items-center justify-between text-sm text-gray-400 pt-6 border-t border-gray-100">
            <Link href="/blog" className="hover:text-[#006633] transition-colors">← Sab Articles</Link>
            <Link href="/" className="hover:text-[#006633] transition-colors">ByeBye Loan Home →</Link>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
