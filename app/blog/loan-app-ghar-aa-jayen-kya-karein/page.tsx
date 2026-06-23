import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WALink from '@/components/WALink';
import { SITE_URL, SITE_NAME } from '@/lib/constants';

const SLUG = 'loan-app-ghar-aa-jayen-kya-karein';
const PUBLISH_DATE = '2026-06-23';

export const metadata: Metadata = {
  title: 'Loan App Wale Ghar Aa Jayen Toh Kya Karein — Apne Aap Ko Kaise Bachayein Pakistan 2026',
  description:
    'Loan app recovery agents aapke ghar aa jayen toh kya karein? Aapke legal rights kya hain? Kya karein, kya na karein, aur situation permanently kaise resolve karein — complete guide Pakistan mein.',
  keywords: [
    'loan app wale ghar aa jayen', 'loan recovery agent ghar aaya', 'loan app harassment ghar',
    'loan recovery agent kya kar sakta hai pakistan', 'loan app wale door aaye toh kya karein',
    'loan app agent rights pakistan', 'recovery agent loan default pakistan',
    'loan app physical harassment pakistan',
  ],
  alternates: { canonical: `${SITE_URL}/blog/${SLUG}` },
  openGraph: {
    title: 'Loan App Wale Ghar Aa Jayen Toh Kya Karein — Complete Pakistan Guide',
    description: 'Recovery agents ghar aayein toh kya karein, aapke legal rights kya hain, aur situation permanently kaise resolve karein Pakistan mein.',
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
    headline: 'Loan App Wale Ghar Aa Jayen Toh Kya Karein — Apne Aap Ko Kaise Bachayein Pakistan 2026',
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
      { '@type': 'Question', name: 'Loan recovery agent ghar aa jaaye toh kya karein?', acceptedAnswer: { '@type': 'Answer', text: 'Ghabrayein nahi. Darwaza band rakhein agar uncomfortable ho. Recovery agent ko ghar mein andar aane dena aapki marzi hai. Koi bhi document sign na karein bina lawyer ya trusted person ke. Conversation record karein. Abusive behavior ho toh turant police ko call karein. Permanent solution: loan professionally settle karwayein.' } },
      { '@type': 'Question', name: 'Kya loan recovery agent mujhe arrest kar sakta hai?', acceptedAnswer: { '@type': 'Answer', text: 'Bilkul nahi. Recovery agent ko kisi ko arrest karne ka koi authority nahi hai. Sirf police aur FIA arrest kar sakti hai, aur woh bhi court order ke baad. "Arrest karenge" wali threats pure bluff hain.' } },
      { '@type': 'Question', name: 'Kya loan recovery agent mere ghar mein andar aa sakta hai?', acceptedAnswer: { '@type': 'Answer', text: 'Nahi. Recovery agent aapki permission ke bina ghar mein nahi aa sakta. Yeh property rights violation hoga. Aap darwaza band rakh sakte hain aur agent ko andar aane se rok sakte hain. Agar zordasti kare toh police call karein.' } },
      { '@type': 'Question', name: 'Loan app agent abusive hai ya dhamki de raha hai — kya karein?', acceptedAnswer: { '@type': 'Answer', text: 'Conversation record karein (phone camera ya voice recorder). Phir FIA Cyber Crime helpline 9911 par ya local police station mein complaint karein. SECP complaint bhi file kar sakte hain agar app SECP registered hai. Aur jald loan settle karwayein — settlement se yeh sab permanently khatam.' } },
      { '@type': 'Question', name: 'Loan settlement ke baad recovery agents wapas aayenge?', acceptedAnswer: { '@type': 'Answer', text: 'Nahi. Official loan settlement ke baad recovery agents ke paas legally koi reason nahi hota aapko contact karne ka. NOC ke baad agar koi agent aaye, yeh illegal hai aur FIA complaint grounds hain.' } },
    ],
  },
];

export default function GharAaJayenBlogPost() {
  return (
    <>
      {schemas.map((s, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }} />
      ))}
      <Header />
      <main className="bg-white">
        <div className="bg-gradient-to-b from-[#7f1d1d] to-[#dc2626] py-16 px-4">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block bg-white/10 text-white/80 text-xs font-semibold px-4 py-1.5 rounded-full mb-5 uppercase tracking-widest">
              Emergency Guide
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight mb-5">
              Loan App Wale Ghar Aa Jayen Toh Kya Karein — Apne Aap Ko Kaise Bachayein
            </h1>
            <p className="text-white/80 text-lg max-w-2xl mx-auto">
              Recovery agent aapke ghar par aa gaya? Ghabrayein nahi — aapke paas strong legal rights hain. Yeh complete guide padhein.
            </p>
            <div className="flex items-center justify-center gap-4 mt-6 text-white/60 text-sm flex-wrap">
              <span>By {SITE_NAME}</span><span>·</span>
              <time dateTime={PUBLISH_DATE}>June 23, 2026</time><span>·</span>
              <span>12 min read</span>
            </div>
          </div>
        </div>

        <article className="max-w-3xl mx-auto px-4 sm:px-6 py-14">

          {/* Emergency box */}
          <div className="bg-red-50 border-2 border-red-200 rounded-2xl p-5 mb-8">
            <p className="font-extrabold text-red-900 mb-2">⚠️ Agar Abhi Agent Aapke Ghar Par Hai:</p>
            <ul className="space-y-1.5 text-red-800 text-sm">
              <li className="flex gap-2"><span className="shrink-0 font-bold">1.</span>Darwaza band rakhein — agent ko andar aane ki zaroorat nahi.</li>
              <li className="flex gap-2"><span className="shrink-0 font-bold">2.</span>Koi bhi document sign na karein abhi — pehle padhein aur samjhein.</li>
              <li className="flex gap-2"><span className="shrink-0 font-bold">3.</span>Conversation record karein — phone camera ya voice recorder.</li>
              <li className="flex gap-2"><span className="shrink-0 font-bold">4.</span>Abusive behavior ho toh: police 15 ya edhi ambulance 115 call karein.</li>
              <li className="flex gap-2"><span className="shrink-0 font-bold">5.</span>Settlement ke liye ByeBye Loan WhatsApp: yeh situation permanently resolve hogi.</li>
            </ul>
          </div>

          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            Pakistan mein loan recovery agents ka ghar par aana ek ایسی situation hai jo bahut log face karte hain —
            lekin is ke baare mein bahut kam log jaante hain ke aslaan kya ho sakta hai aur kya nahi. Bahut se
            people darr jaate hain, document sign kar dete hain, ya paise de dete hain bina yeh jaane ke unke
            paas strong legal rights hain.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Is comprehensive guide mein hum cover karenge: <strong>Recovery agent ghar aaye toh kya karein,
            aapke legal rights kya hain, kya karein kya na karein, aur situation permanently kaise resolve karein.</strong>
          </p>

          <h2 className="text-2xl font-extrabold text-gray-900 mt-10 mb-4">Part 1: Loan Recovery Agent Ghar Kyun Aata Hai — Samjhein Pehle</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Loan recovery agents ghar tab aate hain jab phone par calls aur messages kaam nahi karte ya loan
            significant time se default mein hai. Ghar visit karna loan companies ke liye ek escalation tactic
            hai — aur usually tab hota hai jab:
          </p>
          <ul className="space-y-2 mb-6">
            {[
              '30+ din se loan payment nahi hui',
              'Phone calls block kar di gayi hain',
              'Third-party agency ko account refer ho chuka hai',
              'Loan amount significant hai',
              'Borrower ne app par address provide kiya hai',
            ].map(item => (
              <li key={item} className="flex gap-2.5 text-gray-700 text-sm">
                <span className="text-gray-400 shrink-0 mt-0.5">•</span>{item}
              </li>
            ))}
          </ul>
          <p className="text-gray-700 leading-relaxed mb-6">
            Ghar visit karne ka maqsad psychological pressure create karna hai — apni family ke saamne sharmindagi
            ke darr se payment force karna. Yeh tactic effective hoti hai kyunke zyada tar log ghar par aana
            bahut embarrassing samajhte hain. Lekin <strong>aapke paas is situation mein strong legal protection
            hai.</strong>
          </p>

          <h2 className="text-2xl font-extrabold text-gray-900 mt-10 mb-4">Part 2: Pakistan Mein Recovery Agent Ko Kya Karne Ka Haq Hai — Aur Kya Nahi</h2>
          <p className="text-gray-700 leading-relaxed mb-5">
            Yeh sabse important section hai. Bahut se log nahi jaante ke recovery agents ke rights kaafi limited hain:
          </p>

          <div className="mb-8">
            <p className="font-bold text-green-800 mb-3 text-sm">✓ Recovery Agent KAR SAKTA HAI:</p>
            <div className="space-y-2 mb-6">
              {[
                'Aapke ghar ki ghanti baja sakta hai ya darwaze par dastak de sakta hai',
                'Loan outstanding hone ki reminder de sakta hai',
                'Payment ke liye request kar sakta hai — politely',
                'Contact information update kar sakta hai',
                'Business card ya notice chhod sakta hai',
              ].map(item => (
                <div key={item} className="flex gap-2.5 text-sm p-2.5 bg-green-50 rounded-lg">
                  <span className="text-green-600 shrink-0 font-bold">✓</span>
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>

            <p className="font-bold text-red-800 mb-3 text-sm">✗ Recovery Agent NAHI KAR SAKTA:</p>
            <div className="space-y-2">
              {[
                'Aapki permission ke bina ghar mein andar nahi aa sakta — yeh property rights violation hai',
                'Aapko ya family ko physically threaten nahi kar sakta',
                'Abusive, vulgar, ya degrading language use nahi kar sakta',
                'Aapko arrest karne ka koi authority nahi — sirf police/FIA ar sakti hai',
                'Documents zordasti sign nahi karwa sakta',
                'Aapke ghar se koi cheez confiscate nahi kar sakta — court order ke bina',
                'Raat 9 baje ke baad ya subah 8 baje se pehle visit nahi kar sakta',
                'Neighbours ya building residents ko involve nahi kar sakta deliberately',
                'Aapki CNIC physically le nahi sakta',
              ].map(item => (
                <div key={item} className="flex gap-2.5 text-sm p-2.5 bg-red-50 rounded-lg">
                  <span className="text-red-500 shrink-0 font-bold">✗</span>
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <h2 className="text-2xl font-extrabold text-gray-900 mt-10 mb-4">Part 3: Recovery Agent Ghar Aaye — Step-by-Step Kya Karein</h2>
          <p className="text-gray-700 leading-relaxed mb-5">
            Yeh exact protocol follow karein jab recovery agent aapke ghar aaye:
          </p>
          <div className="space-y-4 mb-8">
            {[
              {
                step: 'Step 1', title: 'Ghabrayein Nahi — Aap Safe Hain', urgent: false,
                desc: 'Pehla reaction ghabrana hota hai — khaas tor par agar family ghar par ho. Lekin yeh samjhein: agent ke paas aapko harm karne ka koi legal authority nahi hai. Aap apne ghar mein safe hain.',
              },
              {
                step: 'Step 2', title: 'Darwaza Ek Crack Par Rakhein (Optional)', urgent: false,
                desc: 'Darwaza bilkul band rakh sakte hain — ya sirf ek crack par. Ghar mein andar lane ki koi obligation nahi. "Main bahar ata hun" keh kar darwaze se hi baat kar sakte hain.',
              },
              {
                step: 'Step 3', title: 'Recording Karein — Silently', urgent: true,
                desc: 'Is se pehle ke koi baat kare, phone par video ya audio recording start karein. Pakistan mein apne ghar par hone wali conversation record karna legal hai. Yeh baad mein apni protection ke liye use ho sakti hai.',
              },
              {
                step: 'Step 4', title: 'Agent Ki Identity Verify Karein', urgent: false,
                desc: 'Pehle agent ka full name, company name, aur ID card mangein. Yeh aapka right hai. Agent ID deny kare toh yeh suspicious hai — police call kar sakte hain.',
              },
              {
                step: 'Step 5', title: 'Baat Sunnein — Calmly', urgent: false,
                desc: 'Agent jo kahna chahta hai sunein — lekin koi commitment mat dein. "Main is baare mein sochta hun" ya "Main pehle apne family se mashlra karoon ga" — yeh perfectly valid responses hain.',
              },
              {
                step: 'Step 6', title: 'Koi Document Sign NA Karein Abhi', urgent: true,
                desc: 'Agent koi bhi document sign karne ke liye pressure kare — agreement, acknowledgment, anything — REFUSE karein abhi. Kehein "Main pehle document parhna chahta hun aur apne lawyer se mashwara karoon ga." Koi legitimate company is par insist nahi karegi.',
              },
              {
                step: 'Step 7', title: 'Abusive Behavior Par Immediate Action', urgent: true,
                desc: 'Agent abusive language use kare, threaten kare, ya physically aggressive ho — turant police helpline 15 call karein aur recording continue rakhein. Yeh criminal offense hai aur case file ho sakta hai.',
              },
              {
                step: 'Step 8', title: 'Agent Ke Jaane Ke Baad', urgent: false,
                desc: 'Agent ke jane ke baad turant ByeBye Loan se contact karein. Situation explain karein. Hum fast track settlement provide karte hain — 24-48 ghante mein loan settle ho sakta hai aur yeh situation permanently khatam.',
              },
            ].map(({ step, title, urgent, desc }) => (
              <div key={step} className={`p-5 rounded-2xl border-2 ${urgent ? 'border-red-200 bg-red-50' : 'border-gray-100 bg-white'}`}>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-bold text-gray-500">{step}</span>
                  {urgent && <span className="text-xs bg-red-100 text-red-700 px-2 py-0.5 rounded-full font-bold">IMPORTANT</span>}
                </div>
                <p className="font-bold text-gray-900 mb-1.5">{title}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-extrabold text-gray-900 mt-10 mb-4">Part 4: Recovery Agent Ki Common Tactics — Aur Inke Jawab</h2>
          <p className="text-gray-700 leading-relaxed mb-5">
            Recovery agents trained hote hain certain tactics use karne ke liye. Inhe pehle se jaanna aapko
            prepared rakhta hai:
          </p>
          <div className="space-y-3 mb-8">
            {[
              { tactic: '"Aaj payment nahi ki toh kal court order aayega"', response: 'Bluff hai. Court order process mein mahine lagte hain. Aur civil debt court order ke liye company ko pehle case file karna hota hai — jo chhote amounts ke liye practically nahi hota.' },
              { tactic: '"Mujhe aapke ghar mein andar aana hai — documents sign karwane hain"', response: 'Clearly nahi. Koi bhi document ghar mein andar aa kar nahi — aap permission deny kar sakte hain. "Mujhe pehle yeh documents padhne hain" keh dein.' },
              { tactic: '"Aapko police station jana hoga"', response: 'Civil debt ke liye police station nahi jana hota. Agent ko police station bolane ka koi authority nahi. Yeh intimidation hai.' },
              { tactic: '"Aapke neighbours ko pata chal jaayega"', response: 'Yeh deliberate shaming tactic hai. Neighbours ko deliberately involve karna harassment hai — reportable offense.' },
              { tactic: '"Aaj kuch de do, baqi baad mein"', response: 'Bina written settlement agreement ke partial payment denaa risky hai — baad mein proof nahi hoga ke yeh settlement thi. Payment karne se pehle written agreement must hai.' },
            ].map(({ tactic, response }) => (
              <div key={tactic} className="p-4 bg-white border-2 border-gray-100 rounded-xl">
                <p className="font-bold text-gray-800 text-sm mb-2 flex gap-2">
                  <span className="text-red-500 shrink-0">Agent:</span>"{tactic}"
                </p>
                <p className="text-gray-600 text-xs leading-relaxed flex gap-2">
                  <span className="text-green-700 font-bold shrink-0">Jawab:</span>{response}
                </p>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-extrabold text-gray-900 mt-10 mb-4">Part 5: Harassment Ke Khilaf Complaint Kahan Karein</h2>
          <div className="space-y-3 mb-8">
            {[
              { org: 'Police (15)', situation: 'Agar agent physically aggressive ho, ghar mein zordasti daakhil hone ki koshish kare, ya direct threats kare.', detail: 'Police ko physical harassment aur trespassing cases handle karne ka authority hai.' },
              { org: 'FIA Cyber Crime (9911)', situation: 'Agar agent information share karne ya social media par sharmindagi ki dhamki de, ya digital harassment ho.', detail: 'FIA Cyber Crime wing loan app digital harassment cases investigate karta hai.' },
              { org: 'SECP (www.secp.gov.pk)', situation: 'Agar loan company SECP registered hai aur SECP guidelines violate kar rahi hai.', detail: 'SECP registered entities par formal action le sakti hai — fine ya license revocation bhi.' },
              { org: 'Consumer Court', situation: 'Agar harassment se aapka significant financial ya emotional damage hua ho.', detail: 'Consumer protection cases mein compensation bhi mil sakta hai.' },
            ].map(({ org, situation, detail }) => (
              <div key={org} className="p-4 bg-gray-50 border border-gray-100 rounded-xl">
                <p className="font-bold text-gray-900 text-sm mb-1">{org}</p>
                <p className="text-gray-700 text-xs mb-1.5"><strong>Kab:</strong> {situation}</p>
                <p className="text-gray-500 text-xs">{detail}</p>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-extrabold text-gray-900 mt-10 mb-4">Part 6: Permanent Solution — Loan Settle Karwayein</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Police complaints aur legal actions sab helpful hain — lekin yeh temporary solutions hain jab tak loan
            outstanding hai. <strong>Permanent solution sirf yeh hai: loan officially settle karwayein.</strong>
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Jab loan officially settled ho jaata hai aur Official NOC milti hai:
          </p>
          <ul className="space-y-3 mb-6">
            {[
              'Recovery agents ke paas legally aapko contact karne ka koi reason nahi rehta',
              'Ghar visit automatically band ho jaata hai',
              'Phone calls, SMS, WhatsApp — sab band',
              'Contacts ko calls — band',
              'Aapki credit history mein cleared entry ho jaati hai',
            ].map(item => (
              <li key={item} className="flex gap-2.5 text-gray-700 text-sm">
                <span className="text-green-600 font-bold shrink-0 mt-0.5">✓</span>{item}
              </li>
            ))}
          </ul>

          <div className="bg-[#006633] rounded-2xl p-7 text-center my-10">
            <p className="text-white font-extrabold text-xl mb-2">Loan Aaj Settle Karwayein — Ghar Visits Permanently Band</p>
            <p className="text-white/80 text-sm mb-2">ByeBye Loan se free consultation lein.</p>
            <p className="text-white/70 text-xs mb-5">24-48 ghante mein settlement. Official NOC guaranteed. All Pakistan coverage.</p>
            <WALink className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1db954] text-white font-bold px-7 py-3.5 rounded-xl transition-colors text-sm">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.998-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
              WhatsApp Pe Contact Karein
            </WALink>
          </div>

          <h2 className="text-2xl font-extrabold text-gray-900 mt-10 mb-4">Part 7: Loan Recovery Agent Ghar Aane Se Pehle Roka Ja Sakta Hai?</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Agar aap already default mein hain lekin agent abhi ghar nahi aaya — yeh best time hai action lene ka.
            Jitna jald loan settle karein, utna kam chances hain ke physical visit tak naobat aaye.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Generally loan company physical visit tab karta hai jab:
          </p>
          <ul className="space-y-2 mb-6">
            {[
              '30+ din overdue ho — is se pehle settle karna usually prevents home visits',
              'Phone calls ka koi response nahi mila — respond karna aur negotiation karna visits rokta hai',
              'Significant amount outstanding hai — chhoti amounts ke liye visits less common',
            ].map(item => (
              <li key={item} className="flex gap-2.5 text-gray-700 text-sm">
                <span className="text-yellow-600 shrink-0 mt-0.5">⚠</span>{item}
              </li>
            ))}
          </ul>

          <h2 className="text-2xl font-extrabold text-gray-900 mt-10 mb-4">Mental Health Aur Recovery Harassment</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Loan recovery harassment — ghar visits including — Pakistan mein mental health par bahut serious asar
            dalta hai. Studies show karte hain ke financial stress aur associated harassment anxiety, depression,
            aur sleep disorders cause karta hai.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Yeh samajhna zaroori hai: <strong>Aap is situation mein woh sab feel kar sakte hain jo feel ho raha
            hai — shame, fear, anger, hopelessness — yeh sab normal responses hain.</strong> Lekin yeh situation
            resolve ho sakti hai. Pakistan mein hazaron log is se guzre hain aur loan settle karne ke baad normal
            life mein wapas aaye hain. Yeh aapke liye bhi possible hai.
          </p>

          <h2 className="text-2xl font-extrabold text-gray-900 mt-10 mb-5">Recovery Agent Ghar Visit FAQ</h2>
          <div className="space-y-4 mb-10">
            {[
              { q: 'Agent ne kaha ke police ke saath aayenge — kya yeh possible hai?', a: 'Civil debt ke liye police joint recovery visits nahi karte without court order. Agar koi yeh claim kare, yeh almost certainly bluff hai. Court order civil case mein months lagte hain. Yeh scare tactic hai.' },
              { q: 'Meri wife / buzurg maa ne darwaza khola aur agent ne unhe pressure mein liya — kya karoon?', a: 'Family members ko pressure mein lena harassment hai. Recording try karein. Phir SECP complaint aur agar ziada aggressive tha toh police complaint. Sab se fast solution: ByeBye Loan se contact karein — 24-48 ghante mein loan settle ho sakta hai.' },
              { q: 'Agent ne kaha ke "last chance hai" — kya mujhe kuch sign karna chahiye?', a: 'Koi bhi document — including "last chance" agreements — bina pori tarah parhne aur samjhne ke sign na karein. Aksar in documents mein unfair terms hoti hain. Pehle ByeBye Loan ya kisi trusted person se consult karein.' },
              { q: 'Agent raat ko aaya — kya yeh legal hai?', a: 'Nahi. SECP guidelines ke mutabiq raat 9 baje ke baad aur subah 8 baje se pehle recovery visits nahi ho sakti. Raat ki visit clearly violation hai — record karein aur report karein.' },
              { q: 'Mujhe loan settle karna hai lekin abhi amount available nahi hai — kya agent se kuch time maangun?', a: 'Time maangna possible hai — lekin agent ke paas grant karne ka authority limited hota hai. Better approach: ByeBye Loan se contact karein. Hum formal settlement negotiation karke reduced amount par deal fix karte hain jis mein manageable payment possible ho sakti hai.' },
            ].map(({ q, a }) => (
              <div key={q} className="border-2 border-gray-100 rounded-2xl p-5">
                <p className="font-bold text-gray-900 text-sm mb-2">Q: {q}</p>
                <p className="text-gray-600 text-xs leading-relaxed">A: {a}</p>
              </div>
            ))}
          </div>

          <div className="bg-gray-50 rounded-2xl p-6 mb-8">
            <p className="font-bold text-gray-900 mb-3 text-sm">Related Guides:</p>
            <ul className="space-y-2">
              {[
                { href: '/blog/loan-app-contacts-access-kyon', text: 'Loan App Contacts Ko Access Kyon Karta Hai? Legal Hai?' },
                { href: '/blog/loan-app-noc-kaise-milti-hai', text: 'Official NOC Kaise Milti Hai Pakistan Mein' },
                { href: '/blog/loan-app-harassment-calls-band-karna', text: 'Loan App Harassment Calls Permanently Band Karein' },
                { href: '/blog/loan-default-solution-pakistan', text: 'Loan Default Ho Jaaye Toh Kya Karein — Complete Solution' },
              ].map(({ href, text }) => (
                <li key={href}>
                  <Link href={href} className="text-[#006633] hover:underline text-sm font-medium">→ {text}</Link>
                </li>
              ))}
            </ul>
          </div>

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
