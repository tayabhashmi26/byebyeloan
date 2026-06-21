import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WALink from '@/components/WALink';
import { SITE_URL, SITE_NAME } from '@/lib/constants';

const SLUG = 'loan-default-solution-pakistan';
const PUBLISH_DATE = '2026-06-21';

export const metadata: Metadata = {
  title: 'Loan Default Ho Jaaye Toh Kya Karein? Pakistan Mein Complete Solution',
  description:
    'Pakistan mein loan default ho gaya? Ghabrana mat. Is guide mein jaanein ke loan default ke baad kya options hain, CNIC kaise protect karein, aur officially kaise settle karein.',
  keywords: [
    'loan default solution pakistan', 'loan default ho jaaye kya karein', 'loan default pakistan',
    'loan default ke baad kya karein', 'cnic blacklist loan', 'loan default settlement',
  ],
  alternates: { canonical: `${SITE_URL}/blog/${SLUG}` },
  openGraph: {
    title: 'Loan Default Ho Jaaye Toh Kya Karein? Pakistan Mein Complete Solution',
    description: 'Loan default hona end nahi hai. Jaanein ke Pakistan mein loan default ke baad kya options hain.',
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
    headline: 'Loan Default Ho Jaaye Toh Kya Karein? Pakistan Mein Complete Solution',
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
      { '@type': 'Question', name: 'Pakistan mein loan default hone ke baad kya hota hai?', acceptedAnswer: { '@type': 'Answer', text: 'Loan default hone ke baad lender recovery calls shuru karta hai, penalties add hoti hain, aur credit bureaus ko report ho sakti hai. Lekin yeh end nahi hai — professional settlement se sab kuch officially close ho sakta hai aur NOC mil sakti hai.' } },
      { '@type': 'Question', name: 'Loan default se CNIC blacklist hoti hai Pakistan mein?', acceptedAnswer: { '@type': 'Answer', text: 'Kuch lenders CNIC ko credit bureaus ke saath share karte hain, jo future loans affect kar sakta hai. Lekin official settlement ke baad yeh mark clear ho sakta hai. Professional loan clearance service is process mein help karti hai.' } },
    ],
  },
];

export default function BlogPost() {
  return (
    <>
      {schemas.map((s, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />
      ))}
      <Header />
      <main className="bg-white">
        <div className="bg-gradient-to-b from-[#431407] to-[#b45309] py-16 px-4">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block bg-white/10 text-white/80 text-xs font-semibold px-4 py-1.5 rounded-full mb-5 uppercase tracking-widest">
              Loan Default Guide
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight mb-5">
              Loan Default Ho Jaaye Toh Kya Karein? Pakistan Mein Complete Solution
            </h1>
            <p className="text-white/80 text-lg max-w-2xl mx-auto">
              Loan default hona mushkil hota hai — lekin yeh end nahi. Aapke paas options hain.
            </p>
            <div className="flex items-center justify-center gap-4 mt-6 text-white/60 text-sm">
              <span>By {SITE_NAME}</span><span>·</span>
              <time dateTime={PUBLISH_DATE}>June 21, 2026</time><span>·</span>
              <span>7 min read</span>
            </div>
          </div>
        </div>

        <article className="max-w-3xl mx-auto px-4 sm:px-6 py-14">
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Pakistan mein <strong>loan default</strong> ek growing reality hai. Job loss, medical
            emergency, family situation, ya sirf high interest rates — kai reasons se log loan
            repay nahi kar pate aur default ho jaate hain. Agar aap is situation mein hain, toh
            pehli baat: <strong>ghabrana mat</strong>. Loan default hona zameen ka end nahi hai —
            aur is guide mein hum aapko batayenge ke exactly kya karna chahiye.
          </p>

          <div className="bg-amber-50 border-l-4 border-amber-500 rounded-r-2xl p-5 mb-8">
            <p className="font-bold text-amber-900 mb-1">Important: Jitna Zyada Wait Karein, Utna Zyada Nuqsaan</p>
            <p className="text-amber-800 text-sm leading-relaxed">
              Loan default hone ke baad har din delay karna penalties add karta rehta hai. Jitna
              jaldi aap action lein, utna kam aapko pay karna hoga aur situation control karna asaan hoga.
            </p>
          </div>

          <h2 className="text-2xl font-extrabold text-gray-900 mt-10 mb-4">Loan Default Ke Baad Kya Hota Hai Pakistan Mein?</h2>
          <p className="text-gray-700 leading-relaxed mb-5">Default hone ke baad yeh sequence typically hoti hai:</p>
          <div className="space-y-3 mb-8">
            {[
              { day: 'Day 1–7', event: 'Reminder calls aana shuru — initially polite', severity: 'low' },
              { day: 'Day 8–30', event: 'Aggressive calls, threats of legal action, SMS barh jaate hain', severity: 'medium' },
              { day: 'Day 31–60', event: 'Contacts ko calls, recovery agents deploy, heavy penalties', severity: 'high' },
              { day: 'Day 60+', event: 'Credit bureau reporting, potential legal proceedings, CNIC issues', severity: 'critical' },
            ].map(({ day, event, severity }) => {
              const colors: Record<string, string> = { low: 'bg-green-50 border-green-200 text-green-800', medium: 'bg-yellow-50 border-yellow-200 text-yellow-800', high: 'bg-orange-50 border-orange-200 text-orange-800', critical: 'bg-red-50 border-red-200 text-red-800' };
              return (
                <div key={day} className={`flex gap-4 p-4 border rounded-xl ${colors[severity]}`}>
                  <span className="font-bold text-xs shrink-0 mt-0.5 w-20">{day}</span>
                  <span className="text-sm">{event}</span>
                </div>
              );
            })}
          </div>
          <p className="text-gray-700 leading-relaxed mb-8">
            Is timeline ko dekh kar waazieh hai: <strong>jitna jaldi action lein, situation utni
            better hogi</strong>. Day 7 par settle karna Day 60 par settle karne se kaafi sasta
            aur less stressful hai.
          </p>

          <h2 className="text-2xl font-extrabold text-gray-900 mt-10 mb-4">Loan Default Ke Baad Aapke 3 Options</h2>
          <div className="space-y-5 mb-8">
            {[
              {
                title: 'Option 1: Full Amount Pay Karein',
                desc: 'Agar aapke paas funds hain, toh full outstanding amount (principal + penalties + interest) directly pay karein. Lekin NOC lena zaroor na bhoolein — sirf payment proof kaafi nahi hota.',
                suitable: 'Suitable for: Jo log afford kar saken',
                color: '#006633',
              },
              {
                title: 'Option 2: Installment Plan Request Karein',
                desc: 'Kuch loan apps aur banks restructuring offer karte hain — outstanding amount ko choti installments mein tod dete hain. Success rate kam hoti hai, lekin kuch cases mein kaam karta hai.',
                suitable: 'Suitable for: Active income wale jo lump sum afford nahi kar sakte',
                color: '#4338ca',
              },
              {
                title: 'Option 3: Professional Settlement (Sabse Effective)',
                desc: 'ByeBye Loan jaise professional service use karein jo aapki taraf se negotiate kare. Yeh zyada tar reduced amount par settlement secure karta hai, sab paperwork handle karta hai, aur guaranteed NOC dilwata hai.',
                suitable: 'Suitable for: Zyada tar cases — especially default ke baad',
                color: '#b45309',
              },
            ].map(({ title, desc, suitable, color }) => (
              <div key={title} className="p-6 bg-white border-2 border-gray-100 rounded-2xl">
                <p className="font-bold text-gray-900 mb-2" style={{ color }}>{title}</p>
                <p className="text-gray-600 text-sm leading-relaxed mb-3">{desc}</p>
                <p className="text-xs font-semibold text-gray-500 bg-gray-50 px-3 py-1.5 rounded-lg inline-block">{suitable}</p>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-extrabold text-gray-900 mt-10 mb-4">Kya Loan Default Se CNIC Blacklist Hoti Hai?</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Yeh Pakistan mein sabse zyada puchha jaane wala sawal hai — aur jawab nuanced hai:
          </p>
          <div className="space-y-4 mb-8">
            {[
              { q: 'Credit Bureau Reporting', a: 'Haan, kuch lenders Pakistan Credit Information Bureau (PCIB) ko report karte hain. Yeh future loans aur credit cards affect kar sakta hai.', icon: '⚠️' },
              { q: 'CNIC "Blacklist"', a: 'Pakistan mein koi single national CNIC blacklist nahi hai. Loan default se aapka CNIC permanently blacklist nahi hota — yeh ek common misconception hai.', icon: '✓' },
              { q: 'Recovery Ke Baad Clearance', a: 'Official settlement aur NOC ke baad aap credit bureaus se apni history clear karne ki request kar sakte hain. Yeh process ByeBye Loan guide karta hai.', icon: '✓' },
            ].map(({ q, a, icon }) => (
              <div key={q} className="flex gap-3 p-4 bg-gray-50 rounded-xl">
                <span className="text-xl shrink-0">{icon}</span>
                <div>
                  <p className="font-bold text-gray-900 text-sm mb-1">{q}</p>
                  <p className="text-gray-600 text-xs leading-relaxed">{a}</p>
                </div>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-extrabold text-gray-900 mt-10 mb-4">Default Ke Baad Settlement Mein Kitni Savings Hoti Hai?</h2>
          <p className="text-gray-700 leading-relaxed mb-5">
            Yeh loan app aur situation par depend karta hai — lekin professional negotiation se
            usually significant savings milti hain:
          </p>
          <div className="overflow-x-auto mb-8">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#b45309] text-white">
                  <th className="text-left px-4 py-3 font-semibold rounded-tl-xl">Scenario</th>
                  <th className="text-left px-4 py-3 font-semibold">Outstanding Amount</th>
                  <th className="text-left px-4 py-3 font-semibold rounded-tr-xl">Typical Settlement</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['30 days default — small loan app', 'Rs 20,000', 'Rs 14,000–17,000'],
                  ['60 days default — medium loan app', 'Rs 50,000', 'Rs 28,000–38,000'],
                  ['90+ days default — bank loan', 'Rs 1,00,000', 'Rs 55,000–75,000'],
                  ['Multiple apps — severe default', 'Rs 2,00,000+', 'Case by case negotiation'],
                ].map(([scenario, amount, settlement], i) => (
                  <tr key={scenario} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-4 py-3 text-gray-700 text-xs border-b border-gray-100">{scenario}</td>
                    <td className="px-4 py-3 text-red-600 text-xs border-b border-gray-100">{amount}</td>
                    <td className="px-4 py-3 text-[#006633] font-semibold text-xs border-b border-gray-100">{settlement}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="bg-[#006633] rounded-2xl p-7 text-center my-10">
            <p className="text-white font-extrabold text-xl mb-2">Loan Default Se Bahar Niklen — Aaj</p>
            <p className="text-white/80 text-sm mb-5">Free assessment — humse batayein situation kya hai, hum solution bata dein ge.</p>
            <WALink className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1db954] text-white font-bold px-7 py-3.5 rounded-xl transition-colors text-sm">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
              WhatsApp Pe Free Consultation Lein
            </WALink>
          </div>

          <h2 className="text-2xl font-extrabold text-gray-900 mt-10 mb-5">Aksar Pooche Jaane Wale Sawalat</h2>
          <div className="space-y-4 mb-10">
            {[
              { q: 'Loan default ke baad legal action ho sakti hai Pakistan mein?', a: 'Chhote loan apps ke liye legal action rare hai — process expensive aur slow hai. Bank loans ke liye risk thoda zyada hai. Lekin dono cases mein settlement legal action se pehle best option hai. Settlement ke baad koi legal risk nahi rehti.' },
              { q: 'Kya main default hone ke baad bhi settle kar sakta hun?', a: 'Haan — yeh sabse common situation hai jo hum handle karte hain. Default ke 30, 60, even 90+ days baad bhi settlement possible hai. Hum reduced amount par negotiate karte hain.' },
              { q: 'Loan default ke baad dubara loan mil sakta hai Pakistan mein?', a: 'Official settlement aur NOC ke baad haan — eventually. Credit history clean hone mein time lagta hai, lekin official NOC hone par kuch lenders consider karte hain. Settlements ke baad hum is process mein bhi guide karte hain.' },
            ].map(({ q, a }) => (
              <div key={q} className="border-2 border-gray-100 rounded-2xl p-5">
                <p className="font-bold text-gray-900 text-sm mb-2">Q: {q}</p>
                <p className="text-gray-600 text-xs leading-relaxed">A: {a}</p>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-extrabold text-gray-900 mt-10 mb-4">Conclusion</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Pakistan mein loan default hona — chahe loan app se ho ya bank se — ek serious situation
            hai, lekin yeh permanent problem nahi hai. Sahi qadam uthane se aap is situation se bahar
            nikal sakte hain. Jitna jaldi action lein, utna better — penalties kam hogi, settlement
            amount kam hoga, aur mental stress jaldi khatam hoga.
          </p>
          <p className="text-gray-700 leading-relaxed mb-10">
            ByeBye Loan ne 5,000+ Pakistanis ki{' '}
            <WALink className="text-[#006633] font-bold hover:underline">loan default situations resolve</WALink>
            {' '}ki hain. Aaj humse WhatsApp par contact karein — pehli consultation bilkul free hai.
          </p>

          <div className="mt-8 pt-6 border-t border-gray-100 flex items-center justify-between text-sm text-gray-400">
            <Link href="/blog" className="hover:text-[#006633] transition-colors">← Sab Articles</Link>
            <Link href="/" className="hover:text-[#006633] transition-colors">ByeBye Loan Home →</Link>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
