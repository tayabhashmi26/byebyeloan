import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WALink from '@/components/WALink';
import { SITE_URL, SITE_NAME } from '@/lib/constants';

const SLUG = 'loan-repayment-emergency-checklist';
const PUBLISH_DATE = '2026-06-21';

export const metadata: Metadata = {
  title: 'Struggling to Make a Loan Repayment? Here is Your Emergency Checklist',
  description:
    'Loan repayment afford nahi ho rahi? Ghabrana mat — yeh emergency checklist aapko step-by-step guide karega ke aaj kya karna hai, kya avoid karna hai, aur situation kaise control karein Pakistan mein.',
  keywords: [
    'loan repayment nahi kar sakta pakistan',
    'loan repayment mushkil pakistan',
    'loan repayment guidance pakistan',
    'loan repayment emergency',
    'loan payment afford nahi',
    'loan se kaise niklen pakistan',
    'loan repayment help',
    'qarz utarna pakistan',
  ],
  alternates: { canonical: `${SITE_URL}/blog/${SLUG}` },
  openGraph: {
    title: 'Struggling to Make a Loan Repayment? Here is Your Emergency Checklist',
    description:
      'Loan repayment afford nahi ho rahi? Step-by-step emergency checklist for Pakistanis who are struggling with loan payments.',
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
    headline: 'Struggling to Make a Loan Repayment? Here is Your Emergency Checklist',
    author: { '@type': 'Organization', name: SITE_NAME, url: SITE_URL },
    publisher: {
      '@type': 'Organization',
      name: SITE_NAME,
      logo: { '@type': 'ImageObject', url: `${SITE_URL}/logo.png` },
    },
    datePublished: PUBLISH_DATE,
    dateModified: PUBLISH_DATE,
    image: `${SITE_URL}/og-image.png`,
    mainEntityOfPage: { '@type': 'WebPage', '@id': `${SITE_URL}/blog/${SLUG}` },
    keywords: 'loan repayment pakistan, loan repayment help, loan repayment emergency checklist',
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Loan repayment afford nahi ho rahi toh kya karein Pakistan mein?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Pehla qadam yeh hai ke ignore mat karein — jitna delay karein, penalties barhengi. Lender se contact karein aur situation batayein. Agar khud negotiate nahi kar sakte, professional loan clearance service use karein jo aapki taraf se negotiate karein aur reduced settlement secure karein.',
        },
      },
      {
        '@type': 'Question',
        name: 'Loan repayment miss hone se kya hota hai Pakistan mein?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Loan repayment miss hone par late payment penalty add hoti hai, recovery calls start hoti hain, aur extended default par credit bureau reporting ho sakti hai. Jitna jaldi situation address karein, utna better.',
        },
      },
      {
        '@type': 'Question',
        name: 'Kya loan repayment amount reduce ho sakta hai Pakistan mein?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Haan. Professional negotiation ke zariye penalties aur interest waive ya reduce karwaye ja sakte hain. ByeBye Loan jaise services directly lender se negotiate karti hain aur often outstanding amount kaafi reduce karwa deti hain.',
        },
      },
    ],
  },
];

const CHECKLIST = [
  {
    step: '01',
    status: 'IMMEDIATE',
    statusColor: '#dc2626',
    statusBg: '#fef2f2',
    title: 'Panic Mat Karein — Situation Assess Karein',
    items: [
      'Ek kagaz par likhen: konse loans hain, kitna outstanding hai, aur due date kab hai',
      'Har loan app ka current balance check karein — actual amount, not estimated',
      'Late fees aur penalties already kitni add ho chuki hain — yeh count karein',
      'Agle 30 din mein incoming income kya hai — honest estimate lagayein',
    ],
    note: 'Yeh ek minute ka kaam hai lekin clarity aata hai — panic se better decisions nahi hote, numbers se hote hain.',
  },
  {
    step: '02',
    status: 'TODAY',
    statusColor: '#b45309',
    statusBg: '#fffbeb',
    title: 'Loan App Ya Bank Ko Proactively Contact Karein',
    items: [
      'Call ya message karein aur honestly situation batayein — "main is waqt afford nahi kar sakta"',
      'Extension ya grace period maangein — kuch lenders dete hain agar aap pehle contact karein',
      'Installment restructuring ki request karein — ek badi amount ko choti payments mein todna',
      'Agar English mein bat karna mushkil hai, Urdu mein batayein — zyada tar Pakistani apps Urdu support karti hain',
    ],
    note: 'Proactive contact recovery calls se pehle karna aapki negotiating position strong karta hai. Jo bhaag jaata hai uske saath seedha recovery process start hoti hai.',
  },
  {
    step: '03',
    status: 'THIS WEEK',
    statusColor: '#4338ca',
    statusBg: '#eef2ff',
    title: 'Apni Financial Priorities Reorder Karein',
    items: [
      'Roti, bijli, ghar — yeh basic needs pehle. Loan payment second priority hai',
      'Unnecessary subscriptions, OTT services, dining out — immediately band karein',
      'Family ya close friends se temporary help maangein — loan app se bura nahi hota',
      'Koi cheez sell kar sakte hain? Old phone, jewelry, electronics — emergency fund banayein',
      'Koi extra income source? Part-time kaam, freelancing, choti service — koi bhi option explore karein',
    ],
    note: 'Yeh qadam painful lagte hain lekin temporary hain. Loan ki wajah se permanent credit damage ya legal trouble se yeh kaafi better hai.',
  },
  {
    step: '04',
    status: 'THIS WEEK',
    statusColor: '#4338ca',
    statusBg: '#eef2ff',
    title: 'Jo Bilkul Mat Karein — Common Mistakes',
    items: [
      'Ek loan se doosra loan lena — "loan se loan chukana" almost always situation worse karta hai',
      'Phone band karna ya ignore karna — penalties barhengi, problem solve nahi hogi',
      'Loan app ke naam par kisi doosre ko guarantee dena — unhe bhi involve mat karein',
      'Fake payment screenshots bhejna — yeh illegal hai aur serious consequences hain',
      'Panic mein kisi bhi "loan maafi" scheme par trust karna — 99% fraud hain',
    ],
    note: 'In mistakes se bachna utna hi zaroori hai jitna sahi qadam uthana.',
  },
  {
    step: '05',
    status: 'IF CALLS START',
    statusColor: '#7c3aed',
    statusBg: '#f5f3ff',
    title: 'Harassment Calls Aane Lagein Toh Yeh Karein',
    items: [
      'Calls ka record rakhein — time, number, kya kaha — documentation helpful hoti hai',
      'Politely lekin firmly kehein: "Main situation resolve karne ki koshish kar raha hun"',
      'Contacts ko calls aayein toh family ko brief karein — panic nahi karna',
      'SECP ki website par complaint ki option hai agar calls threatening hoon',
      'Agar situation control se bahar ho rahi hai — professional help lein (next step)',
    ],
    note: 'Calls annoying aur stressful hain lekin yeh legally band ho sakti hain — official settlement ke baad.',
  },
  {
    step: '06',
    status: 'FINAL SOLUTION',
    statusColor: '#006633',
    statusBg: '#f0fdf4',
    title: 'Professional Loan Clearance Service Se Help Lein',
    items: [
      'ByeBye Loan se free consultation lein — WhatsApp par detail batayein',
      'Hum aapke loan ka complete assessment karte hain — actual vs penalty breakdown',
      'Lender se professional negotiation — often 20–40% amount reduce hoti hai',
      'Official settlement complete hoti hai — sab documentation hum handle karte hain',
      'Digitally verified NOC certificate milti hai — calls permanently band ho jaati hain',
    ],
    note: 'Yeh woh step hai jab sab options try ho chukay hon ya aap chahein ke fastest aur best result milain.',
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
        <div className="py-16 px-4" style={{ background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)' }}>
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block bg-white/10 text-white/80 text-xs font-semibold px-4 py-1.5 rounded-full mb-5 uppercase tracking-widest">
              Emergency Checklist
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight mb-5">
              Struggling to Make a Loan Repayment?<br className="hidden sm:block" /> Here is Your Emergency Checklist
            </h1>
            <p className="text-white/80 text-lg max-w-2xl mx-auto">
              Loan repayment afford nahi ho rahi? Yeh 6-step checklist aaj se follow karein — step by step, clear aur actionable.
            </p>
            <div className="flex items-center justify-center gap-4 mt-6 text-white/50 text-sm">
              <span>By {SITE_NAME}</span><span>·</span>
              <time dateTime={PUBLISH_DATE}>June 21, 2026</time><span>·</span>
              <span>8 min read</span>
            </div>
          </div>
        </div>

        <article className="max-w-3xl mx-auto px-4 sm:px-6 py-14">

          {/* Intro */}
          <p className="text-lg text-gray-700 leading-relaxed mb-5">
            Pakistan mein loan lena easy hai — repay karna mushkil. Agar aap is waqt apni loan
            repayment afford karne mein struggle kar rahe hain, toh jaanein ke aap akele nahi hain.
            Job loss, medical emergency, mehengai, ya financial planning — kai reasons se yeh
            situation aa sakti hai. Lekin <strong>sahi waqt par sahi qadam uthana</strong> situation
            ko bohot control mein la sakta hai.
          </p>
          <p className="text-gray-700 leading-relaxed mb-10">
            Yeh checklist specifically un Pakistanis ke liye hai jo loan repayment miss karne ke
            karib hain ya miss kar chuke hain. Isko top se bottom tak follow karein — har step
            matter karta hai.
          </p>

          {/* Quick summary box */}
          <div className="bg-gray-900 text-white rounded-2xl p-6 mb-12">
            <p className="font-bold text-sm uppercase tracking-widest text-gray-400 mb-4">Is Checklist Mein Kya Hai</p>
            <div className="grid sm:grid-cols-2 gap-2">
              {CHECKLIST.map(({ step, title }) => (
                <a key={step} href={`#step-${step}`} className="flex items-center gap-3 text-sm text-gray-300 hover:text-white transition-colors py-1">
                  <span className="shrink-0 w-6 h-6 rounded-md bg-white/10 flex items-center justify-center text-xs font-bold text-white">{step}</span>
                  {title}
                </a>
              ))}
            </div>
          </div>

          {/* Checklist steps */}
          <div className="space-y-10">
            {CHECKLIST.map(({ step, status, statusColor, statusBg, title, items, note }) => (
              <div key={step} id={`step-${step}`} className="scroll-mt-8">
                {/* Step header */}
                <div className="flex items-center gap-4 mb-5">
                  <div className="shrink-0 w-12 h-12 rounded-2xl flex items-center justify-center text-white font-extrabold text-sm" style={{ backgroundColor: statusColor }}>
                    {step}
                  </div>
                  <div>
                    <span className="text-xs font-bold px-2.5 py-1 rounded-full" style={{ backgroundColor: statusBg, color: statusColor }}>
                      {status}
                    </span>
                    <h2 className="text-xl font-extrabold text-gray-900 mt-1">{title}</h2>
                  </div>
                </div>

                {/* Checklist items */}
                <div className="ml-16 space-y-3 mb-4">
                  {items.map((item, i) => (
                    <label key={i} className="flex items-start gap-3 cursor-pointer group">
                      <span className="shrink-0 mt-0.5 w-5 h-5 rounded border-2 border-gray-300 group-hover:border-gray-400 flex items-center justify-center transition-colors">
                        <svg className="w-3 h-3 text-transparent" viewBox="0 0 12 12" fill="none">
                          <path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </span>
                      <span className="text-gray-700 text-sm leading-relaxed">{item}</span>
                    </label>
                  ))}
                </div>

                {/* Note */}
                <div className="ml-16 rounded-xl px-4 py-3 text-xs leading-relaxed italic" style={{ backgroundColor: statusBg, color: statusColor }}>
                  <strong>Note:</strong> {note}
                </div>

                {/* Divider except last */}
                {step !== '06' && <div className="mt-10 border-b border-gray-100" />}
              </div>
            ))}
          </div>

          {/* Mid-article CTA */}
          <div className="bg-[#006633] rounded-2xl p-7 text-center mt-14 mb-10">
            <p className="text-white font-extrabold text-xl mb-2">Step 6 Mein Hamaari Madad Chahiye?</p>
            <p className="text-white/80 text-sm mb-5">
              Free consultation lein — situation batayein, hum best solution suggest karein ge.
            </p>
            <WALink className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1db954] text-white font-bold px-7 py-3.5 rounded-xl transition-colors text-sm">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp Pe Free Consultation Lein
            </WALink>
          </div>

          {/* FAQ */}
          <h2 className="text-2xl font-extrabold text-gray-900 mt-12 mb-5">Aksar Pooche Jaane Wale Sawalat</h2>
          <div className="space-y-4 mb-10">
            {[
              {
                q: 'Agar loan repayment deadline kal hai aur main afford nahi kar sakta toh abhi kya karein?',
                a: 'Abhi — aaj raat — lender ko WhatsApp ya call karein aur honestly batayein. "Main kal repayment nahi kar sakta, mujhe grace period chahiye" — yeh ek sentence situation ko delay kar sakta hai aur aapko negotiate karne ka time deta hai. Ignore karna worst option hai.',
              },
              {
                q: 'Ek nayi loan leke purani loan chuka sakta hun?',
                a: 'Yeh "debt cycle" hai aur almost hamesha situation worse karti hai. Nayi loan ke interest aur fees add hote hain, aur agar woh bhi miss ho toh ab 2 problems hain. Yeh route avoid karein jab tak koi extremely low interest option na ho (family member se bina interest ke).',
              },
              {
                q: 'Loan repayment miss karne par mere contacts ko call aayein gi?',
                a: 'Kuch loan apps contacts ko call karte hain — yeh technically SECP regulations ke against hai lekin enforcement mushkil hai. Iska permanent solution sirf official loan settlement hai. Settlement ke baad koi bhi contact nahi hota.',
              },
              {
                q: 'Main multiple loans afford nahi kar sakta — kahan se shuru karein?',
                a: 'Sabse pehle highest interest rate wale ya sabse aggressive collection wale loan par focus karein. Ya phir ek professional service use karein jo ek saath sab negotiate kare — ByeBye Loan multiple loans simultaneously handle karta hai.',
              },
            ].map(({ q, a }) => (
              <div key={q} className="border-2 border-gray-100 rounded-2xl p-5">
                <p className="font-bold text-gray-900 text-sm mb-2">Q: {q}</p>
                <p className="text-gray-600 text-xs leading-relaxed">A: {a}</p>
              </div>
            ))}
          </div>

          {/* Conclusion */}
          <h2 className="text-2xl font-extrabold text-gray-900 mt-12 mb-4">Akhri Baat</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Loan repayment struggle karna shameful nahi hai — yeh ek financial challenge hai jo
            millions of Pakistanis face karte hain. Jo cheez matter karti hai woh yeh hai ke aap
            is checklist ko follow karein aur action lein — chahe woh ek simple phone call hi kyun
            na ho.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            Agar situation is point tak aa gayi hai ke khud handle karna mushkil lag raha hai —
            calls aa rahi hain, penalties barh rahi hain, ya multiple loans hain — toh professional
            help lena samajhdari hai, kamzori nahi.
          </p>
          <p className="text-gray-700 leading-relaxed mb-10">
            <strong>ByeBye Loan</strong> Pakistan ka #1 loan clearing service hai. Hum ne 5,000+
            Pakistanis ki{' '}
            <WALink className="text-[#006633] font-bold hover:underline">
              loan situations officially resolve
            </WALink>{' '}
            ki hain — 24 se 48 ghante mein, verified NOC ke saath. Aaj WhatsApp karein — pehli
            consultation bilkul free hai, koi commitment nahi.
          </p>

          {/* Final CTA */}
          <div className="rounded-2xl p-8 text-center" style={{ background: 'linear-gradient(135deg, #1a1a2e 0%, #0f3460 100%)' }}>
            <p className="text-white font-extrabold text-2xl mb-2">Loan Burden Se Aaj Azaad Hojayein</p>
            <p className="text-white/70 mb-6">5,000+ Pakistanis ne yeh decision liya — aur regret nahi kiya.</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <WALink className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1db954] text-white font-bold px-8 py-4 rounded-xl transition-colors">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                WhatsApp — Free Consultation
              </WALink>
              <Link
                href="/blog"
                className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold px-8 py-4 rounded-xl transition-colors border border-white/20"
              >
                Aur Articles Parhen →
              </Link>
            </div>
          </div>

          <div className="mt-10 pt-8 border-t border-gray-100 flex items-center justify-between text-sm text-gray-400">
            <Link href="/blog" className="hover:text-[#006633] transition-colors">← Sab Articles</Link>
            <Link href="/" className="hover:text-[#006633] transition-colors">ByeBye Loan Home →</Link>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
