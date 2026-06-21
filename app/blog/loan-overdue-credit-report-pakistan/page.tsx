import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WALink from '@/components/WALink';
import { SITE_URL, SITE_NAME } from '@/lib/constants';

const SLUG = 'loan-overdue-credit-report-pakistan';
const PUBLISH_DATE = '2026-06-21';
const MODIFIED_DATE = '2026-06-21';

export const metadata: Metadata = {
  title: 'How Long Does an Overdue Loan Stay on Your Credit Report in Pakistan?',
  description:
    'Loan overdue on credit report Pakistan — complete guide. Jaanein ke bad credit score kaise fix karein, loan default kaise remove hota hai, aur NOC clearance certificate kaise credit history rebuild karta hai.',
  keywords: [
    'loan overdue on credit report pakistan',
    'fix bad credit score pakistan',
    'remove loan default pakistan',
    'credit report pakistan loan',
    'ecib report pakistan loan default',
    'bad credit score fix pakistan',
    'loan default credit history pakistan',
    'credit score repair pakistan',
    'overdue loan credit bureau pakistan',
    'loan settlement credit report',
  ],
  alternates: { canonical: `${SITE_URL}/blog/${SLUG}` },
  openGraph: {
    title: 'How Long Does an Overdue Loan Stay on Your Credit Report in Pakistan?',
    description:
      'Pakistan mein overdue loan credit report par kitne saal rehta hai? Bad credit score kaise fix karein? Complete guide with expert advice.',
    url: `${SITE_URL}/blog/${SLUG}`,
    type: 'article',
    publishedTime: PUBLISH_DATE,
    modifiedTime: MODIFIED_DATE,
    authors: [SITE_NAME],
    images: [{ url: `${SITE_URL}/og-image.png`, width: 1200, height: 630, alt: 'Loan overdue credit report Pakistan guide' }],
  },
};

const schemas = [
  {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'How Long Does an Overdue Loan Stay on Your Credit Report in Pakistan?',
    description: 'Complete guide on loan overdue credit reporting in Pakistan — eCIB timelines, how to fix bad credit score, and how an NOC clearance certificate helps rebuild credit history.',
    author: { '@type': 'Organization', name: SITE_NAME, url: SITE_URL, logo: { '@type': 'ImageObject', url: `${SITE_URL}/logo.png` } },
    publisher: { '@type': 'Organization', name: SITE_NAME, logo: { '@type': 'ImageObject', url: `${SITE_URL}/logo.png` } },
    datePublished: PUBLISH_DATE,
    dateModified: MODIFIED_DATE,
    image: { '@type': 'ImageObject', url: `${SITE_URL}/og-image.png`, width: 1200, height: 630 },
    mainEntityOfPage: { '@type': 'WebPage', '@id': `${SITE_URL}/blog/${SLUG}` },
    keywords: 'loan overdue credit report pakistan, fix bad credit score, remove loan default, eCIB Pakistan',
    articleSection: 'Credit & Finance',
    wordCount: 2200,
    inLanguage: 'en-PK',
    about: [
      { '@type': 'Thing', name: 'Credit Report Pakistan' },
      { '@type': 'Thing', name: 'eCIB Pakistan' },
      { '@type': 'Thing', name: 'Loan Default Credit History' },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'How long does an overdue loan stay on a credit report in Pakistan?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'In Pakistan, overdue loan information typically stays on the eCIB (Electronic Credit Information Bureau) report maintained by the State Bank of Pakistan for a minimum of 5 years after the loan is settled. Some entries can remain visible for up to 7 years. However, the status changes from "default/overdue" to "settled" once an official loan settlement and NOC are obtained.',
        },
      },
      {
        '@type': 'Question',
        name: 'Does settling a loan immediately remove it from the credit report in Pakistan?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'No. Settling a loan does not immediately remove it from your credit report in Pakistan. The entry remains on the eCIB report for several years, but the status changes from "overdue/default" to "settled." This status change is important — it signals to future lenders that the debt was resolved, which helps rebuild creditworthiness over time.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is eCIB in Pakistan and how does it affect loans?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'eCIB stands for Electronic Credit Information Bureau, operated by the State Bank of Pakistan (SBP). Banks, DFIs (Development Finance Institutions), and microfinance banks are required to report borrower information to eCIB. A bad eCIB report can block future bank loans, credit cards, and financial facilities. Loan clearance and NOC helps transition your status from negative to positive.',
        },
      },
      {
        '@type': 'Question',
        name: 'How can I fix my bad credit score in Pakistan after a loan default?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'To fix a bad credit score in Pakistan after loan default: (1) Settle all outstanding loans officially and obtain NOC certificates. (2) Ensure the lender updates your status in eCIB from "default" to "settled." (3) Avoid new defaults — pay all current obligations on time. (4) Apply for a secured credit product (like a secured credit card) to rebuild positive history. (5) Check your eCIB report regularly for errors. Professional loan clearance services like ByeBye Loan handle steps 1 and 2 for you.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do loan apps report to credit bureaus in Pakistan?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'It depends on the loan app\'s license. Microfinance banks and NBFC-MFIs report to PMCBS (Pakistan Microfinance Credit Bureau System). Some loan apps that operate as NBFCs may also report to eCIB. Even if they don\'t formally report to bureaus, unpaid loan apps can affect your ability to borrow from regulated institutions that check bureau reports before approving.',
        },
      },
      {
        '@type': 'Question',
        name: 'What does an NOC clearance certificate do for your credit in Pakistan?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'An NOC (No Objection Certificate) from a lender serves as official proof that your loan was fully settled. It triggers the lender to update your status in credit bureaus from "overdue/default" to "settled." It is the most important document for credit repair in Pakistan — without it, a settled loan may still show as outstanding in bureau records.',
        },
      },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How to Fix Bad Credit Score in Pakistan After Loan Default',
    description: 'Step-by-step guide to repair credit history in Pakistan after a loan default or overdue payment.',
    step: [
      { '@type': 'HowToStep', position: 1, name: 'Settle All Outstanding Loans', text: 'Contact each lender (or use a professional service) to negotiate and officially settle all overdue loans.' },
      { '@type': 'HowToStep', position: 2, name: 'Obtain NOC Certificates', text: 'Get an official NOC from every lender after settlement. This triggers bureau status update from default to settled.' },
      { '@type': 'HowToStep', position: 3, name: 'Verify Bureau Update', text: 'Check your eCIB report to confirm the lender has updated your status. If not, follow up with the lender.' },
      { '@type': 'HowToStep', position: 4, name: 'Avoid New Defaults', text: 'Pay all current financial obligations on time. Every on-time payment adds positive history to your file.' },
      { '@type': 'HowToStep', position: 5, name: 'Rebuild With Positive Credit', text: 'Consider a secured credit product to generate new positive credit history faster.' },
    ],
  },
];

const TIMELINE = [
  { day: 'Day 1', event: 'Loan payment missed', detail: 'Lender flags as "late payment" internally. No bureau report yet for most lenders.', status: 'warning' },
  { day: 'Day 30', event: '30-day overdue mark', detail: 'Most banks report to eCIB as "past due." Loan apps may alert internal systems.', status: 'orange' },
  { day: 'Day 60', event: '60-day overdue mark', detail: 'Officially classified as delinquent. eCIB status moves to "overdue/substandard." Serious impact begins.', status: 'red' },
  { day: 'Day 90', event: '90-day overdue mark', detail: 'Classified as "doubtful" in eCIB. Recovery agents deployed by most lenders. Credit severely impacted.', status: 'darkred' },
  { day: 'Day 180+', event: '6 months+ default', detail: 'Classified as "loss" in eCIB — worst category. Legal proceedings possible for bank loans.', status: 'critical' },
  { day: 'After Settlement', event: 'Loan settled + NOC obtained', detail: 'Status changes from "default/loss" to "settled." Remains visible on report for 5–7 years but no longer blocks new lending.', status: 'green' },
  { day: '5–7 Years', event: 'Entry ages off report', detail: 'Negative entry fades from eCIB records. Clean credit history for future borrowing.', status: 'clean' },
];

const statusStyle: Record<string, { bg: string; text: string; dot: string }> = {
  warning: { bg: '#fefce8', text: '#854d0e', dot: '#eab308' },
  orange:  { bg: '#fff7ed', text: '#9a3412', dot: '#f97316' },
  red:     { bg: '#fef2f2', text: '#991b1b', dot: '#ef4444' },
  darkred: { bg: '#fdf2f8', text: '#831843', dot: '#db2777' },
  critical:{ bg: '#f5f3ff', text: '#4c1d95', dot: '#7c3aed' },
  green:   { bg: '#f0fdf4', text: '#14532d', dot: '#16a34a' },
  clean:   { bg: '#f0f9ff', text: '#0c4a6e', dot: '#0284c7' },
};

const FIX_STEPS = [
  {
    n: '01',
    title: 'Sab Outstanding Loans Officially Settle Karein',
    detail: 'Ek bhi overdue loan chhod dena credit recovery slow karta hai. ByeBye Loan ke zariye ek hi baar sab simultaneously settle karwayein.',
  },
  {
    n: '02',
    title: 'Har Lender Se NOC Certificate Lein',
    detail: 'NOC sirf "receipt" nahi hai — yeh legal trigger hai jo lender ko eCIB mein aapka status "settled" mark karne par majboor karta hai.',
  },
  {
    n: '03',
    title: 'eCIB Report Mein Update Verify Karein',
    detail: 'Settlement ke 30-60 din baad apni eCIB report check karein (SBP ke zariye request kar sakte hain). Confirm karein ke status updated hai.',
  },
  {
    n: '04',
    title: 'Naye Defaults Se Bachein',
    detail: 'Jo bhi current financial obligations hain — phone bill, utility, koi bhi — time par pay karein. Positive pattern banana zaroori hai.',
  },
  {
    n: '05',
    title: 'Secured Credit Product Se Rebuild Karein',
    detail: 'Kuch banks secured credit cards offer karte hain (deposit ke against) jo bad credit history walo ke liye bhi approve hoti hain. Yeh fastest way hai new positive history banana ka.',
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
        <div style={{ background: 'linear-gradient(135deg, #1e1b4b 0%, #312e81 60%, #4338ca 100%)' }} className="py-16 px-4">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block bg-white/10 text-white/80 text-xs font-semibold px-4 py-1.5 rounded-full mb-5 uppercase tracking-widest">
              Credit Report & Bad Credit Guide
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight mb-5">
              How Long Does an Overdue Loan Stay on Your Credit Report in Pakistan?
            </h1>
            <p className="text-white/80 text-base max-w-2xl mx-auto mb-6">
              eCIB timelines, loan default consequences, bad credit score repair — aur clearance certificate se credit history rebuild karne ka complete guide.
            </p>
            <div className="flex items-center justify-center gap-4 text-white/50 text-sm">
              <span>By {SITE_NAME}</span><span>·</span>
              <time dateTime={PUBLISH_DATE}>June 21, 2026</time><span>·</span>
              <span>10 min read</span><span>·</span>
              <span>Last updated June 2026</span>
            </div>
          </div>
        </div>

        <article className="max-w-3xl mx-auto px-4 sm:px-6 py-14">

          {/* Quick Answer box — AI snippet optimized */}
          <div className="bg-[#312e81] rounded-2xl p-6 mb-10">
            <p className="text-white/60 text-xs font-bold uppercase tracking-widest mb-3">Quick Answer</p>
            <p className="text-white font-bold text-lg leading-snug mb-3">
              Pakistan mein overdue loan eCIB credit report par <span className="text-yellow-300">5 se 7 saal</span> tak rehta hai.
            </p>
            <p className="text-white/80 text-sm leading-relaxed">
              Lekin settlement ke baad status <strong className="text-white">"default" se "settled"</strong> ho jaata hai —
              jo future lenders ke liye positive signal hai. Official NOC certificate yeh status change
              trigger karta hai. Bagair NOC ke settled loan bhi record mein "outstanding" dikh sakta hai.
            </p>
          </div>

          {/* Intro */}
          <p className="text-lg text-gray-700 leading-relaxed mb-5">
            Pakistan mein loan lena aasaan ho gaya hai — loan apps, banks, microfinance, sab
            readily available hain. Lekin agar loan overdue ya default ho jaaye, toh iska asar
            sirf calls aur stress tak mahidood nahi rehta. Aapki <strong>credit history</strong>{' '}
            par bhi asar padta hai — jo future mein bank accounts, ghar ka loan, ya credit card
            lene mein mushkil peda kar sakti hai.
          </p>
          <p className="text-gray-700 leading-relaxed mb-5">
            Is guide mein hum specifically Pakistan ke context mein batayenge:{' '}
            <strong>eCIB (Electronic Credit Information Bureau)</strong> kya hai, overdue loan
            credit report par kitne time rehta hai, settlement ke baad kya hota hai, aur bad
            credit score fix karne ke practical steps.
          </p>
          <p className="text-gray-700 leading-relaxed mb-10">
            Yeh information specifically <strong>Pakistani borrowers</strong> ke liye hai —
            US/UK credit score systems se alag hai, isliye Pakistan-specific system ko samajhna zaroori hai.
          </p>

          {/* What is eCIB */}
          <h2 className="text-2xl font-extrabold text-gray-900 mt-10 mb-4">
            Pakistan Mein Credit Report Kya Hai? eCIB Ko Samjhein
          </h2>
          <p className="text-gray-700 leading-relaxed mb-5">
            Pakistan mein credit reporting ka central system{' '}
            <strong>eCIB — Electronic Credit Information Bureau</strong> hai, jo{' '}
            <strong>State Bank of Pakistan (SBP)</strong> operate karta hai. Yeh woh jagah hai
            jahan aapki loan history stored hoti hai.
          </p>
          <div className="space-y-3 mb-8">
            {[
              { icon: '🏦', title: 'Kaun Report Karta Hai?', body: 'Banks, Development Finance Institutions (DFIs), aur Microfinance Banks SBP eCIB mein data submit karne ke qanoonan pabband hain. Loan apps (fintech) apni license type ke hisaab se PMCBS (Pakistan Microfinance Credit Bureau System) ya eCIB mein report karte hain.' },
              { icon: '📋', title: 'Kya Record Hota Hai?', body: 'Har loan ka: lender ka naam, loan amount, outstanding balance, payment history, aur current status (regular / overdue / default / settled). Yeh sab eCIB report mein clearly dikh-ta hai.' },
              { icon: '👀', title: 'Kaun Dekh Sakta Hai?', body: 'Banks aur licensed financial institutions jab bhi aapko new loan dete hain ya credit facility extend karte hain, eCIB report zaroor check karte hain. Kuch employers bhi senior positions ke liye check karte hain.' },
              { icon: '📄', title: 'Aap Khud Kaise Check Karein?', body: 'SBP ke zariye aap apni eCIB report request kar sakte hain. Nominal fee lagti hai. Galat information hone par formal correction request bhi submit kar sakte hain.' },
            ].map(({ icon, title, body }) => (
              <div key={title} className="flex gap-4 p-5 bg-gray-50 rounded-2xl">
                <span className="text-2xl shrink-0">{icon}</span>
                <div>
                  <p className="font-bold text-gray-900 text-sm mb-1">{title}</p>
                  <p className="text-gray-600 text-xs leading-relaxed">{body}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Timeline */}
          <h2 className="text-2xl font-extrabold text-gray-900 mt-12 mb-2">
            Loan Default Ka Credit Report Timeline — Day by Day
          </h2>
          <p className="text-gray-600 text-sm mb-7">
            Yeh timeline dikhata hai ke loan default hone ke baad kya kya hota hai — aur kab settlement karna best hota hai.
          </p>
          <div className="relative space-y-0 mb-10">
            {TIMELINE.map(({ day, event, detail, status }, idx) => {
              const s = statusStyle[status];
              return (
                <div key={day} className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="shrink-0 w-3.5 h-3.5 rounded-full mt-4 z-10 ring-4 ring-white" style={{ backgroundColor: s.dot }} />
                    {idx < TIMELINE.length - 1 && (
                      <div className="w-px flex-1 bg-gray-200 my-1" style={{ minHeight: 20 }} />
                    )}
                  </div>
                  <div className="pb-5 flex-1">
                    <div className="rounded-xl p-4" style={{ backgroundColor: s.bg }}>
                      <div className="flex items-center gap-3 mb-1 flex-wrap">
                        <span className="text-xs font-extrabold" style={{ color: s.dot }}>{day}</span>
                        <span className="font-bold text-sm" style={{ color: s.text }}>{event}</span>
                      </div>
                      <p className="text-xs leading-relaxed" style={{ color: s.text, opacity: 0.85 }}>{detail}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Key insight */}
          <div className="bg-amber-50 border-l-4 border-amber-400 rounded-r-2xl p-5 mb-10">
            <p className="font-bold text-amber-900 mb-1">Sabse Important Insight</p>
            <p className="text-amber-800 text-sm leading-relaxed">
              Pakistan mein overdue loan credit report par <strong>5 se 7 saal</strong> rehta hai —
              settled hone ke baad bhi. Lekin farq yeh hai: settlement ke baad status{' '}
              <strong>"overdue/loss"</strong> se <strong>"settled"</strong> ho jaata hai. Banks "settled"
              clients ko future mein consider karte hain, "default" clients ko nahi. Isliye settlement
              + NOC lena critical hai — sirf morally nahi, practically bhi.
            </p>
          </div>

          {/* Does settlement remove */}
          <h2 className="text-2xl font-extrabold text-gray-900 mt-10 mb-4">
            Kya Loan Settle Karne Se Credit Report Saaf Ho Jaati Hai?
          </h2>
          <p className="text-gray-700 leading-relaxed mb-5">
            Yeh Pakistan mein sabse zyada ghalat samjha jaane wala sawal hai. Short answer:{' '}
            <strong>nahi — immediately nahi</strong>. Lekin yeh bad news nahi hai agar aap
            process ko samjhein:
          </p>
          <div className="overflow-x-auto mb-8">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr>
                  <th className="text-left px-4 py-3 bg-gray-100 text-gray-500 font-semibold text-xs rounded-tl-xl">Situation</th>
                  <th className="text-center px-4 py-3 bg-red-50 text-red-600 font-semibold text-xs">Bagair NOC Settlement</th>
                  <th className="text-center px-4 py-3 bg-[#312e81] text-white font-semibold text-xs rounded-tr-xl">NOC Certificate Ke Saath</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['eCIB mein dikhai deta hai?', 'Haan — 5–7 saal', 'Haan — 5–7 saal (lekin status changed)'],
                  ['Status kya hoga?', '"Overdue / Default / Loss"', '"Settled" — positive signal'],
                  ['Future bank loan milega?', 'Almost impossible', 'Possible after rebuilding period'],
                  ['Credit card/facility?', 'Blocked', 'Reconsidered after time'],
                  ['Recovery calls band?', 'Nahi', 'Haan — permanently'],
                  ['Legal risk?', 'Remaining', 'Zero — officially closed'],
                ].map(([feature, bad, good], i) => (
                  <tr key={feature} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'}>
                    <td className="px-4 py-3 text-gray-700 font-medium text-xs border-b border-gray-100">{feature}</td>
                    <td className="px-4 py-3 text-red-600 text-xs border-b border-gray-100 text-center">{bad}</td>
                    <td className="px-4 py-3 text-[#312e81] font-semibold text-xs border-b border-gray-100 text-center">{good}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-gray-700 leading-relaxed mb-10">
            Conclusion: eCIB record ek record hai — immediately nahi jata. Lekin{' '}
            <strong>status "settled" hona</strong> woh cheez hai jo practically matter karti hai.
            Banks "settled" record wale insaan ko 2–3 saal baad reconsider karte hain —
            "default" record wale ko kabhi nahi.
          </p>

          {/* NOC Role */}
          <h2 className="text-2xl font-extrabold text-gray-900 mt-10 mb-4">
            NOC Clearance Certificate Ka Credit History Mein Role
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            NOC (No Objection Certificate) sirf ek kagaz nahi hai — yeh aapki credit recovery
            ka <strong>legal foundation</strong> hai. Yeh teen cheezein karta hai:
          </p>
          <div className="grid sm:grid-cols-3 gap-4 mb-8">
            {[
              { n: '1', title: 'eCIB Status Update Trigger', body: 'Lender NOC issue karne ke baad SBP eCIB mein aapka status "settled" mark karne ka pabband hota hai. Bagair NOC ke yeh update aksar nahi hota.' },
              { n: '2', title: 'Legal Proof of Closure', body: 'Future mein agar koi lender aapki old loan history par sawaal kare, NOC proof hai ke yeh officially settled hai. Court mein bhi valid document hai.' },
              { n: '3', title: 'Future Lenders Ko Confidence', body: 'Naye bank loan ke liye apply karte waqt NOC dikhana banks ko confidence deta hai. "Default se seekha aur settle kiya" ek positive narrative hai.' },
            ].map(({ n, title, body }) => (
              <div key={n} className="p-5 bg-[#312e81]/5 border border-[#312e81]/10 rounded-2xl">
                <div className="w-8 h-8 rounded-xl bg-[#312e81] text-white font-extrabold text-sm flex items-center justify-center mb-3">{n}</div>
                <p className="font-bold text-gray-900 text-sm mb-2">{title}</p>
                <p className="text-gray-500 text-xs leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
          <div className="bg-[#f0fdf4] border border-green-200 rounded-2xl p-5 mb-10">
            <p className="font-bold text-green-900 text-sm mb-1">ByeBye Loan NOC Certificate — Kya Khaas Hai?</p>
            <p className="text-green-800 text-xs leading-relaxed">
              Hamare NOC certificates QR code ke saath digitally verified hote hain. Koi bhi — bank,
              employer, ya koi bhi — QR scan kar ke verify kar sakta hai ke loan officially settled hai.
              Lifetime valid. Yeh standard paper NOC se kaafi zyada powerful hai.
            </p>
          </div>

          {/* Mid CTA */}
          <div style={{ background: 'linear-gradient(135deg, #1e1b4b 0%, #4338ca 100%)' }} className="rounded-2xl p-7 text-center my-10">
            <p className="text-white font-extrabold text-xl mb-2">Loan Default Hai? Aaj Settle Karwayein</p>
            <p className="text-white/75 text-sm mb-6 max-w-md mx-auto">
              Jitna jaldi settle karein, utna jaldi credit recovery shuru hogi. Free consultation — ByeBye Loan.
            </p>
            <WALink className="inline-flex items-center gap-3 bg-[#25D366] hover:bg-[#1db954] text-white font-bold px-8 py-4 rounded-xl transition-colors">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 shrink-0">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp — Free Consultation Lein
            </WALink>
          </div>

          {/* Fix bad credit steps */}
          <h2 className="text-2xl font-extrabold text-gray-900 mt-10 mb-6">
            Bad Credit Score Fix Karne Ke 5 Steps — Pakistan Mein
          </h2>
          <div className="space-y-4 mb-10">
            {FIX_STEPS.map(({ n, title, detail }) => (
              <div key={n} className="flex gap-4 p-5 border-2 border-gray-100 rounded-2xl hover:border-[#312e81]/20 transition-colors">
                <div className="shrink-0 w-10 h-10 rounded-xl bg-[#312e81] text-white font-extrabold text-sm flex items-center justify-center">{n}</div>
                <div>
                  <p className="font-bold text-gray-900 mb-1">{title}</p>
                  <p className="text-gray-500 text-sm leading-relaxed">{detail}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Loan apps and eCIB */}
          <h2 className="text-2xl font-extrabold text-gray-900 mt-10 mb-4">
            Kya Loan Apps eCIB Ko Report Karte Hain Pakistan Mein?
          </h2>
          <p className="text-gray-700 leading-relaxed mb-5">
            Yeh common confusion hai. Short answer: <strong>kuch karte hain, kuch nahi</strong> —
            depends on their license type:
          </p>
          <div className="space-y-3 mb-8">
            {[
              { type: 'Microfinance Banks (MFBs)', report: 'SBP eCIB + PMCBS', examples: 'Telenor Microfinance, U Microfinance Bank', color: '#dc2626' },
              { type: 'NBFC-MFIs (Non-Banking Microfinance)', report: 'PMCBS (primarily)', examples: 'Most small loan apps fall here', color: '#b45309' },
              { type: 'Unlicensed / Grey Area Apps', report: 'Typically no formal reporting', examples: 'Some informal lending apps', color: '#4338ca' },
              { type: 'Banks (conventional & Islamic)', report: 'SBP eCIB (mandatory)', examples: 'HBL, MCB, Meezan, UBL etc.', color: '#006633' },
            ].map(({ type, report, examples, color }) => (
              <div key={type} className="flex gap-3 p-4 bg-gray-50 rounded-xl">
                <div className="shrink-0 w-2 rounded-full self-stretch" style={{ backgroundColor: color }} />
                <div>
                  <p className="font-bold text-gray-900 text-sm">{type}</p>
                  <p className="text-xs text-gray-500 mt-0.5">Reports to: <span className="font-semibold text-gray-700">{report}</span></p>
                  <p className="text-xs text-gray-400 mt-0.5">{examples}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-gray-700 leading-relaxed mb-10">
            Important note: <strong>Loan apps ka eCIB na report karna aapko safe nahi karta</strong>.
            Agar aap kal kisi bhi licensed bank se loan apply karein, bank khud aapki history check
            karega — aur loan app se unsettle debt kisi bhi bank ko flag ho sakti hai through
            informal channels ya interconnected bureau data. Settle karna always better hai.
          </p>

          {/* How long to rebuild */}
          <h2 className="text-2xl font-extrabold text-gray-900 mt-10 mb-4">
            Credit Score Rebuild Karne Mein Kitna Time Lagta Hai Pakistan Mein?
          </h2>
          <p className="text-gray-700 leading-relaxed mb-5">
            Sach baat: Pakistan mein credit recovery instant nahi hai. Realistic timeline yeh hai:
          </p>
          <div className="space-y-3 mb-8">
            {[
              { period: '0–6 Months After Settlement', what: 'eCIB status "settled" update hota hai. Recovery calls band. Legal risk zero.', progress: 25 },
              { period: '6–18 Months', what: 'Credit history gradually improve hoti hai. Kuch microfinance products possible ho sakte hain.', progress: 50 },
              { period: '18–36 Months', what: 'Banks typically reconsider. Secured credit products more accessible. Moderate risk category.', progress: 75 },
              { period: '3–5 Years', what: 'Full credit rehabilitation. Most lending products accessible. Old default "aged" and less impactful.', progress: 90 },
              { period: '5–7 Years', what: 'Entry fades from eCIB. Clean slate for most purposes.', progress: 100 },
            ].map(({ period, what, progress }) => (
              <div key={period} className="p-4 bg-gray-50 rounded-xl">
                <div className="flex justify-between items-center mb-2">
                  <p className="font-bold text-gray-900 text-sm">{period}</p>
                  <span className="text-xs font-bold text-[#312e81]">{progress}%</span>
                </div>
                <div className="h-1.5 bg-gray-200 rounded-full mb-2">
                  <div className="h-1.5 rounded-full" style={{ width: `${progress}%`, backgroundColor: progress < 50 ? '#f97316' : progress < 80 ? '#eab308' : '#16a34a' }} />
                </div>
                <p className="text-xs text-gray-500 leading-relaxed">{what}</p>
              </div>
            ))}
          </div>
          <p className="text-gray-700 leading-relaxed mb-10">
            <strong>Key insight:</strong> Jitna jaldi aap settle karein, utna jaldi yeh clock
            start hota hai. Jo log aaj settle karte hain 3 saal mein normal borrowing capacity
            regain kar sakte hain. Jo log 2 saal wait karte hain — unka clock 2 saal baad shuru
            hoga.
          </p>

          {/* FAQ */}
          <h2 className="text-2xl font-extrabold text-gray-900 mt-10 mb-5">
            Aksar Pooche Jaane Wale Sawalat (FAQ)
          </h2>
          <div className="space-y-4 mb-10">
            {[
              {
                q: 'How long does an overdue loan stay on credit report in Pakistan?',
                a: 'Pakistan ke eCIB system mein overdue ya default loan entry typically 5 se 7 saal tak visible rehti hai — settlement ke baad bhi. Lekin settlement ke baad status "overdue/default" se "settled" ho jaata hai, jo future creditworthiness ke liye kaafi better hai.',
              },
              {
                q: 'Kya loan clear karne ke baad credit report mein se delete ho jaata hai?',
                a: 'Nahi — record delete nahi hota immediately. Lekin status change hota hai "settled" ko. Banks "settled" aur "default" mein bahut farq karte hain. 5–7 saal baad record age off hota hai.',
              },
              {
                q: 'Bad credit score fix karne ka fastest tarika Pakistan mein kya hai?',
                a: 'Fastest path: (1) Sab outstanding loans officially settle karein aur NOC lein — yeh status change karta hai. (2) Koi naya default mat hone dein. (3) Secured credit product use karein new positive history banana ke liye. Professional loan clearance service pehla qadam fastest way se karta hai.',
              },
              {
                q: 'Loan default remove karne ka koi shortcut hai Pakistan mein?',
                a: 'Koi legal shortcut nahi hai. Jo log "eCIB report delete" ka claim karein — woh fraud hain. Legitimate tarika sirf yeh hai: officially settle karein, NOC lein, eCIB update verify karein, aur time ke saath rebuild karein. ByeBye Loan yeh process fast aur guaranteed karta hai.',
              },
              {
                q: 'Kya ek settled loan future mein job ya housing loan ke liye problem create karta hai?',
                a: 'Settled loan vs active default: bahut farq hai. Most employers aur lenders settled debts ko resolved maante hain — especially agar 2–3+ saal purana ho. Active default ya unsettled debt far more problematic hai. Isliye settlement + NOC zaroori hai chahe kitna bhi time lage.',
              },
            ].map(({ q, a }) => (
              <div key={q} className="border-2 border-gray-100 rounded-2xl p-5">
                <p className="font-bold text-gray-900 text-sm mb-2">Q: {q}</p>
                <p className="text-gray-600 text-sm leading-relaxed">A: {a}</p>
              </div>
            ))}
          </div>

          {/* Conclusion */}
          <h2 className="text-2xl font-extrabold text-gray-900 mt-10 mb-4">Conclusion</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Pakistan mein credit report aur eCIB ka system samajhna har loan borrower ke liye
            zaroori hai. Key takeaways:
          </p>
          <ul className="space-y-2 mb-6">
            {[
              'Overdue loan eCIB par 5–7 saal rehta hai — settled hone ke baad bhi',
              'Lekin status "settled" hona woh cheez hai jo future lending mein matter karti hai',
              'NOC certificate eCIB status update ka legal trigger hai — bagair NOC settlement incomplete hai',
              'Credit recovery ek process hai — immediate nahi lekin consistent action se possible hai',
              'Jitna jaldi settle karein, utna jaldi recovery clock start hota hai',
            ].map((item) => (
              <li key={item} className="flex gap-3 text-gray-700 text-sm">
                <span className="text-[#312e81] font-bold shrink-0 mt-0.5">✓</span>
                {item}
              </li>
            ))}
          </ul>
          <p className="text-gray-700 leading-relaxed mb-10">
            Agar aapka koi loan overdue ya default hai —{' '}
            <WALink className="text-[#006633] font-bold hover:underline">
              ByeBye Loan se aaj contact karein
            </WALink>{' '}
            . Hum professionally negotiate karte hain, official NOC dilwate hain, aur aapki
            credit recovery journey shuru karwate hain. 5,000+ Pakistanis ka trusted partner.
          </p>

          {/* Final CTA */}
          <div className="rounded-2xl overflow-hidden">
            <div style={{ background: 'linear-gradient(135deg, #1e1b4b 0%, #4338ca 100%)' }} className="px-6 py-5 text-center">
              <p className="text-white font-extrabold text-xl">Credit History Rebuild Karna Shuru Karein — Aaj</p>
              <p className="text-white/70 text-sm mt-1">Pehla qadam: outstanding loan officially settle karwayein + NOC lein</p>
            </div>
            <div className="p-6 bg-white border-2 border-[#312e81]/10 rounded-b-2xl text-center">
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <WALink className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1db954] text-white font-bold px-8 py-4 rounded-xl transition-colors">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  WhatsApp — Free Consultation
                </WALink>
                <Link
                  href="/tools/loan-penalty-calculator"
                  className="inline-flex items-center justify-center gap-2 border-2 border-[#312e81] text-[#312e81] font-bold px-8 py-4 rounded-xl hover:bg-[#312e81] hover:text-white transition-colors"
                >
                  Outstanding Amount Calculate Karein →
                </Link>
              </div>
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
