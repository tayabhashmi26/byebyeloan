import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WALink from '@/components/WALink';
import { SITE_URL, SITE_NAME } from '@/lib/constants';

const SLUG = 'loan-app-harassment-calls-band-karna';
const PUBLISH_DATE = '2026-06-21';

export const metadata: Metadata = {
  title: 'Loan App Harassment Calls Kaise Band Karein — Complete Guide Pakistan',
  description:
    'Loan app ki non-stop calls aur SMS se pareshan? Pakistan mein loan app harassment permanently band karne ka complete legal guide — ByeBye Loan.',
  keywords: [
    'loan app calls band karna', 'loan harassment band pakistan', 'loan app sms band karna',
    'loan recovery calls stop', 'loan app se kaise bachein', 'loan calls permanently band',
  ],
  alternates: { canonical: `${SITE_URL}/blog/${SLUG}` },
  openGraph: {
    title: 'Loan App Harassment Calls Kaise Band Karein — Complete Guide Pakistan',
    description: 'Loan app ki non-stop calls aur SMS se pareshan? Complete legal guide to stop them permanently.',
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
    headline: 'Loan App Harassment Calls Kaise Band Karein — Complete Guide Pakistan',
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
      { '@type': 'Question', name: 'Loan app calls permanently band kaise hoti hain Pakistan mein?', acceptedAnswer: { '@type': 'Answer', text: 'Loan app calls permanently band hone ka ek hi tarika hai — official loan settlement aur NOC certificate lena. Jab aapka loan officially close ho jaata hai aur NOC milti hai, tab loan app legally aapko contact nahi kar sakta.' } },
      { '@type': 'Question', name: 'Kya loan app contacts ko call kar sakti hai Pakistan mein?', acceptedAnswer: { '@type': 'Answer', text: 'Pakistan mein kuch loan apps SECP regulations ke bawajood contacts ko call karti hain jo illegal hai. Official settlement ke baad yeh tamam contact attempts legally rokne ka adhikar aapke paas hota hai.' } },
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
        {/* Hero */}
        <div className="bg-gradient-to-b from-[#7f1d1d] to-[#dc2626] py-16 px-4">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block bg-white/10 text-white/80 text-xs font-semibold px-4 py-1.5 rounded-full mb-5 uppercase tracking-widest">
              Harassment & Calls Guide
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight mb-5">
              Loan App Harassment Calls Kaise Band Karein — Complete Guide Pakistan
            </h1>
            <p className="text-white/80 text-lg max-w-2xl mx-auto">
              Non-stop calls, threatening SMS, contacts ko calls — yeh sab legally kaise permanently band hoti hain.
            </p>
            <div className="flex items-center justify-center gap-4 mt-6 text-white/60 text-sm">
              <span>By {SITE_NAME}</span>
              <span>·</span>
              <time dateTime={PUBLISH_DATE}>June 21, 2026</time>
              <span>·</span>
              <span>6 min read</span>
            </div>
          </div>
        </div>

        <article className="max-w-3xl mx-auto px-4 sm:px-6 py-14">

          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Agar aap Pakistan mein kisi loan app — <strong>Smart Qarza, Paisayaar, Daira, Fori Qarza,
            Paisa Guru, QarzMitra</strong> ya kisi bhi doosri app — ke loan ki wajah se non-stop calls
            aur SMS receive kar rahe hain, toh aap akele nahi hain. Lakhon Pakistanis rozana is
            torture se guzar rahe hain. Lekin ek acchi khabar hai: <strong>yeh calls permanently
            band ho sakti hain</strong> — aur hum aapko batayenge exactly kaise.
          </p>

          {/* Warning box */}
          <div className="bg-red-50 border-l-4 border-red-500 rounded-r-2xl p-5 mb-8">
            <p className="font-bold text-red-800 mb-1">Yeh Calls Khud Nahi Rukengi</p>
            <p className="text-red-700 text-sm leading-relaxed">
              Phone block karna, SIM change karna, ya number ignore karna — yeh temporary solutions
              hain. Loan app nayi numbers se call karti rahti hai. Asli solution sirf official loan
              clearance hai.
            </p>
          </div>

          <h2 className="text-2xl font-extrabold text-gray-900 mt-10 mb-4">
            Loan App Harassment Ke Tarike — Jo Aap Jhel Rahe Hain
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">Pakistan mein loan apps in tareekon se harassment karte hain:</p>
          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            {[
              { title: 'Non-Stop Calls', desc: 'Subah 7 baje se raat 11 baje tak — sometimes 20-30 calls per day sirf ek app se.' },
              { title: 'Threatening SMS', desc: '"Legal action hogi", "CNIC blacklist hogi", "Police aaegi" — yeh threats zyada tar hollow hoti hain lekin psychological torture deti hain.' },
              { title: 'Contacts Ko Call', desc: 'Kuch apps aapki contact list access kar ke aapke family members, colleagues, ya boss ko call karti hain — yeh sabse zyada humiliating hai.' },
              { title: 'Social Media Threats', desc: 'Kuch apps WhatsApp groups ya social media par aapki information share karne ki dhamki deti hain.' },
              { title: 'Recovery Agents', desc: 'Larger bank loans mein physical recovery agents aapke ghar ya office aate hain.' },
              { title: 'Fake Legal Notices', desc: 'Fake court notices ya legal documents bhejte hain jo zyada tar illegal hoti hain.' },
            ].map(({ title, desc }) => (
              <div key={title} className="bg-red-50 border border-red-100 rounded-xl p-4">
                <p className="font-bold text-red-800 text-sm mb-1">{title}</p>
                <p className="text-gray-600 text-xs leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-extrabold text-gray-900 mt-10 mb-4">
            Calls Band Karne Ke Galat Tarike (Jo Kaam Nahi Karte)
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">Bohot log yeh shortcuts try karte hain — lekin yeh sab fail hote hain:</p>
          <ul className="space-y-3 mb-8">
            {[
              ['Number block karna', 'App naye numbers se call karti rahti hai — unlimited numbers hain unke paas.'],
              ['Phone off rakhna', 'Stress barh jaata hai, calls nahi rukti. Family tension bhi barhti hai.'],
              ['SIM card change karna', 'Loan app ke paas aapka CNIC hai — woh nayi SIM bhi trace kar leti hai.'],
              ['Ignore karna', 'Penalties grow hoti rehti hain. Problem solve nahi hoti, sirf delay hota hai.'],
              ['FIA ya Police complaint', 'Mostly effective nahi hoti jab tak loan outstanding ho.'],
            ].map(([title, desc]) => (
              <li key={title} className="flex gap-3 text-sm text-gray-700">
                <span className="shrink-0 text-red-500 font-bold mt-0.5">✗</span>
                <span><strong>{title}:</strong> {desc}</span>
              </li>
            ))}
          </ul>

          <h2 className="text-2xl font-extrabold text-gray-900 mt-10 mb-4">
            Calls Permanently Band Karne Ka Ek Hi Legal Tarika
          </h2>
          <div className="bg-[#F0FDF4] border-l-4 border-[#006633] rounded-r-2xl p-6 mb-6">
            <p className="font-bold text-[#006633] text-lg mb-2">Official Loan Settlement + NOC Certificate</p>
            <p className="text-gray-700 text-sm leading-relaxed">
              Yeh woh ek tarika hai jo 100% permanently kaam karta hai. Jab aapka loan officially
              settle ho jaata hai aur aapke haath mein NOC certificate hota hai, tab loan app ya
              bank ke paas koi legal right nahi bachta ke woh aapko ya aapke contacts ko call karein.
              Agar koi phir bhi call kare, toh aap legal action le sakte hain — aur app ko pata hota
              hai yeh.
            </p>
          </div>

          <h2 className="text-2xl font-extrabold text-gray-900 mt-10 mb-4">
            Official Settlement Ke Baad Kya Hota Hai?
          </h2>
          <div className="space-y-4 mb-8">
            {[
              { icon: '📵', title: 'Calls Turant Band', desc: 'Settlement confirm hone ke saath hi calls aur SMS stop ho jaati hain — same day.' },
              { icon: '📄', title: 'Official NOC Milti Hai', desc: 'Aapko ek digitally verified NOC certificate milta hai jise koi bhi QR code se verify kar sakta hai.' },
              { icon: '🛡️', title: 'Legal Protection', desc: 'NOC aapka legal shield hai. Agar koi future mein claim kare ke aap par loan hai, yeh document aapki protection karta hai.' },
              { icon: '💳', title: 'Credit History Repair Start', desc: 'Official settlement ke baad aap credit bureaus se apni credit history clear karne ki process start kar sakte hain.' },
            ].map(({ icon, title, desc }) => (
              <div key={title} className="flex gap-4 p-4 bg-white border border-gray-100 rounded-xl">
                <span className="text-2xl shrink-0">{icon}</span>
                <div>
                  <p className="font-bold text-gray-900 text-sm mb-1">{title}</p>
                  <p className="text-gray-600 text-xs leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="bg-[#006633] rounded-2xl p-7 text-center my-10">
            <p className="text-white font-extrabold text-xl mb-2">Calls Aaj Se Band Karwayein</p>
            <p className="text-white/80 text-sm mb-5">Free consultation — koi commitment nahi, koi charge nahi.</p>
            <WALink className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1db954] text-white font-bold px-7 py-3.5 rounded-xl transition-colors text-sm">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
              WhatsApp Pe Free Consultation Lein
            </WALink>
          </div>

          <h2 className="text-2xl font-extrabold text-gray-900 mt-10 mb-5">Aksar Pooche Jaane Wale Sawalat</h2>
          <div className="space-y-4 mb-10">
            {[
              { q: 'Kya loan app contacts ko call karna legal hai Pakistan mein?', a: 'Nahi. SECP ke regulations ke mutabiq, loan apps ko sirf borrower se contact karne ka haq hai — contacts, family, ya employer ko nahi. Lekin yeh regulation enforce karna mushkil hai jab tak aap officially settle nahi karte. Settlement ke baad yeh automatically band ho jaata hai.' },
              { q: 'Kitni jaldi calls band hoti hain settlement ke baad?', a: 'Zyada tar cases mein same day ya agli subah tak calls band ho jaati hain. ByeBye Loan ke settlement process ke baad hum confirm karte hain ke loan app ne account close kar diya hai.' },
              { q: 'Main loan afford nahi kar sakta, phir bhi settlement ho sakti hai?', a: 'Haan. Yeh sabse common scenario hai. Professional settlement mein hum loan app ya bank se negotiate karte hain reduced amount par — jo sirf outstanding amount se kaafi kam ho sakti hai.' },
            ].map(({ q, a }) => (
              <div key={q} className="border-2 border-gray-100 rounded-2xl p-5">
                <p className="font-bold text-gray-900 text-sm mb-2">Q: {q}</p>
                <p className="text-gray-600 text-xs leading-relaxed">A: {a}</p>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-extrabold text-gray-900 mt-10 mb-4">Conclusion</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Loan app harassment calls Pakistan mein ek growing problem hai — lekin solution bhi
            available hai. Phone block karna ya ignore karna sirf anxiety badhata hai. Asli relief
            sirf official loan settlement aur NOC certificate se milti hai. ByeBye Loan ne 5,000+
            Pakistanis ki calls aur SMS permanently band karwai hain — aapki baari hai.
          </p>
          <p className="text-gray-700 leading-relaxed mb-10">
            Aaj hi{' '}
            <WALink className="text-[#006633] font-bold hover:underline">WhatsApp par contact karein</WALink>
            {' '}— pehli consultation bilkul free hai.
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
