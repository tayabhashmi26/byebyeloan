import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { SITE_URL, SITE_NAME } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Blog — Loan Clearing Guides & Tips Pakistan',
  description:
    'Pakistan mein loan clear karne ke complete guides. Loan app harassment, NOC certificate, loan settlement, Smart Qarza, Paisayaar aur sab apps ke baare mein expert articles.',
  alternates: { canonical: `${SITE_URL}/blog` },
  openGraph: {
    title: 'Blog — Loan Clearing Guides Pakistan | ByeBye Loan',
    description: 'Expert guides on loan clearance, NOC certificates, loan app harassment, and loan settlement in Pakistan.',
    url: `${SITE_URL}/blog`,
    type: 'website',
  },
};

const POSTS = [
  // --- Informational (high-traffic) ---
  {
    slug: 'loan-app-contacts-access-kyon',
    title: 'Pakistani Loan App Contacts Ko Access Kyon Karta Hai? Kya Ye Qanoni Hai?',
    excerpt: 'Loan app install kiya, contacts permission di, aur ab family ko calls aa rahi hain? Yahan poori haqeeqat hai — SECP, PTA, FIA kya kehte hain, aur permanent solution kya hai.',
    date: '2026-06-23',
    category: 'Informational',
    categoryColor: '#374151',
    readTime: '13 min',
  },
  {
    slug: 'loan-app-ghar-aa-jayen-kya-karein',
    title: 'Loan App Wale Ghar Aa Jayen Toh Kya Karein — Apne Aap Ko Kaise Bachayein',
    excerpt: 'Recovery agent aapke ghar par aa gaya? Ghabrayein nahi — aapke paas strong legal rights hain. Kya karein, kya na karein, aur situation permanently kaise resolve karein.',
    date: '2026-06-23',
    category: 'Emergency Guide',
    categoryColor: '#dc2626',
    readTime: '12 min',
  },
  {
    slug: 'loan-app-noc-kaise-milti-hai',
    title: 'Loan App Se Official NOC Kaise Milti Hai Pakistan Mein — Complete Guide',
    excerpt: 'NOC kya hoti hai, kyun zaroori hai, kaise milti hai, aur QR-verified NOC kya hai — Pakistan mein loan clearance ka sabse important document explained.',
    date: '2026-06-23',
    category: 'NOC Guide',
    categoryColor: '#15803d',
    readTime: '14 min',
  },
  // --- App-Specific Guides ---
  {
    slug: 'paisayaar-loan-clear-karna',
    title: 'Paisayaar Loan Clear Karne Ka Tarika — Official NOC Guide Pakistan',
    excerpt: 'Paisayaar ka loan clear karna chahte hain? Complete step-by-step guide — officially kaise settle karein, harassment calls kaise band karein, aur Official NOC kaise lein.',
    date: '2026-06-23',
    category: 'App Guides',
    categoryColor: '#4338ca',
    readTime: '12 min',
  },
  {
    slug: 'fauri-cash-loan-clear-karna',
    title: 'Fauri Cash Loan Clear Karne Ka Tarika — Official NOC Guide Pakistan',
    excerpt: 'Fauri Cash (Foricash) ka loan clear karna chahte hain? Complete step-by-step guide — settlement, calls band karna, aur Official NOC — sab kuch is guide mein.',
    date: '2026-06-23',
    category: 'App Guides',
    categoryColor: '#ea580c',
    readTime: '11 min',
  },
  {
    slug: 'qarzmitra-loan-clear-karna',
    title: 'QarzMitra Loan Clear Karne Ka Tarika — Official NOC Guide Pakistan',
    excerpt: 'QarzMitra ka loan default ho gaya ya clear karna chahte hain? Is complete step-by-step guide mein settlement process, legal rights, aur NOC guide sab kuch hai.',
    date: '2026-06-23',
    category: 'App Guides',
    categoryColor: '#059669',
    readTime: '11 min',
  },
  {
    slug: 'hakeem-app-loan-clear-karna',
    title: 'Hakeem App Loan Clear Karne Ka Tarika — Official NOC Guide Pakistan',
    excerpt: 'Hakeem App ka loan clear karna chahte hain? Complete guide — officially kaise settle karein, recovery calls kaise band karein, aur Official NOC kaise lein Pakistan mein.',
    date: '2026-06-23',
    category: 'App Guides',
    categoryColor: '#2563eb',
    readTime: '10 min',
  },
  {
    slug: 'pakcredit-loan-clear-karna',
    title: 'PakCredit Loan Clear Karne Ka Tarika — Official NOC Guide Pakistan',
    excerpt: 'PakCredit ka loan clear karna chahte hain? Step-by-step guide — officially kaise settle karein, recovery calls kaise band karein, aur Official NOC kaise lein.',
    date: '2026-06-23',
    category: 'App Guides',
    categoryColor: '#16213e',
    readTime: '10 min',
  },
  {
    slug: 'money-tap-loan-clear-karna',
    title: 'Money Tap Loan Clear Karne Ka Tarika — Official NOC Guide Pakistan',
    excerpt: 'Money Tap ka loan default ho gaya ya clear karna chahte hain? Complete guide — settlement process, calls band karna, aur Official NOC — sab kuch yahan.',
    date: '2026-06-23',
    category: 'App Guides',
    categoryColor: '#9333ea',
    readTime: '10 min',
  },
  {
    slug: 'paisaghar-loan-clear-karna',
    title: 'PaisaGhar Loan Clear Karne Ka Tarika — Official NOC Guide Pakistan',
    excerpt: 'PaisaGhar ka loan clear karna chahte hain? Complete guide — settlement, recovery calls band karna, aur Official QR-verified NOC kaise milti hai Pakistan mein.',
    date: '2026-06-23',
    category: 'App Guides',
    categoryColor: '#0f766e',
    readTime: '10 min',
  },
  // --- Existing posts ---
  {
    slug: 'smart-qarza-loan-clear-karna',
    title: 'Smart Qarza Loan Clear Karne Ka Tarika — Official NOC Guide',
    excerpt: 'Smart Qarza ka loan clear karna chahte hain? Is step-by-step guide mein jaanein ke officially Smart Qarza loan kaise settle hota hai aur NOC kaise milta hai Pakistan mein.',
    date: '2026-06-21',
    category: 'App Guides',
    categoryColor: '#4338ca',
    readTime: '7 min',
  },
  {
    slug: 'loan-app-harassment-calls-band-karna',
    title: 'Loan App Harassment Calls Kaise Band Karein — Complete Guide Pakistan',
    excerpt: 'Loan app ki calls aur SMS se pareshan hain? Yeh guide aapko batayegi ke calls permanently band karne ka ek hi aur 100% legal tarika kya hai Pakistan mein.',
    date: '2026-06-21',
    category: 'Harassment & Calls',
    categoryColor: '#dc2626',
    readTime: '6 min',
  },
  {
    slug: 'what-is-loan-clearance-service',
    title: 'What is a Loan Clearance Service and How Can It Save You Money?',
    excerpt: 'Pakistan mein loan clearance service kya hoti hai, yeh kaise kaam karti hai, aur yeh aapke paise aur mental peace dono kaise bacha sakti hai — complete guide.',
    date: '2026-06-21',
    category: 'Loan Clearance',
    categoryColor: '#006633',
    readTime: '8 min',
  },
  {
    slug: 'loan-default-solution-pakistan',
    title: 'Loan Default Ho Jaaye Toh Kya Karein? Pakistan Mein Complete Solution',
    excerpt: 'Loan default hona end nahi hai. Jaanein ke Pakistan mein loan default ke baad kya options hain, kaise settle karein, aur apni CNIC protect kaise karein.',
    date: '2026-06-21',
    category: 'Loan Default',
    categoryColor: '#b45309',
    readTime: '7 min',
  },
  {
    slug: 'loan-overdue-credit-report-pakistan',
    title: 'How Long Does an Overdue Loan Stay on Your Credit Report in Pakistan?',
    excerpt: 'Pakistan mein eCIB credit report par loan default kitne saal rehta hai? Bad credit score kaise fix karein aur NOC clearance certificate se credit history kaise rebuild hoti hai — complete guide.',
    date: '2026-06-21',
    category: 'Credit Report',
    categoryColor: '#312e81',
    readTime: '10 min',
  },
  {
    slug: 'loan-clearance-service-pakistan',
    title: 'Loan Clearance Service in Pakistan — #1 Trusted Service',
    excerpt: 'Pakistan mein loan clearance service kya hai, kaise kaam karti hai, aur ByeBye Loan kyun Pakistan ka #1 trusted choice hai. 5,000+ clients served. 24–48 ghante mein NOC guaranteed.',
    date: '2026-06-21',
    category: 'Loan Clearance',
    categoryColor: '#006633',
    readTime: '9 min',
  },
  {
    slug: 'loan-repayment-emergency-checklist',
    title: 'Struggling to Make a Loan Repayment? Here is Your Emergency Checklist',
    excerpt: 'Loan repayment afford nahi ho rahi? Yeh 6-step emergency checklist follow karein — aaj se. Step by step guide for Pakistanis struggling with loan payments.',
    date: '2026-06-21',
    category: 'Emergency Guide',
    categoryColor: '#1d4ed8',
    readTime: '8 min',
  },
];

function CalendarIcon() {
  return (
    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}

export default function BlogPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <div className="bg-gradient-to-b from-[#003d1a] to-[#006633] py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block bg-white/10 text-white/80 text-xs font-semibold px-4 py-1.5 rounded-full mb-5 uppercase tracking-widest">
              ByeBye Loan Blog
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
              Loan Clearing Guides & Expert Tips
            </h1>
            <p className="text-white/80 text-lg max-w-2xl mx-auto">
              Pakistan mein loan app clearance, NOC certificate, loan settlement aur loan
              harassment ke baare mein complete guides — bilkul free.
            </p>
          </div>
        </div>

        {/* Posts grid */}
        <div className="bg-gray-50 py-16 px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid sm:grid-cols-2 gap-6">
              {POSTS.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:border-[#006633]/30 transition-all duration-200 overflow-hidden flex flex-col"
                >
                  {/* Top accent bar */}
                  <div className="h-1.5 w-full" style={{ backgroundColor: post.categoryColor }} />

                  <div className="p-6 flex flex-col flex-1">
                    {/* Category badge */}
                    <span
                      className="self-start text-xs font-bold px-3 py-1 rounded-full text-white mb-4"
                      style={{ backgroundColor: post.categoryColor }}
                    >
                      {post.category}
                    </span>

                    {/* Title */}
                    <h2 className="text-lg font-extrabold text-gray-900 leading-snug mb-3 group-hover:text-[#006633] transition-colors">
                      {post.title}
                    </h2>

                    {/* Excerpt */}
                    <p className="text-gray-500 text-sm leading-relaxed flex-1 mb-5">
                      {post.excerpt}
                    </p>

                    {/* Meta */}
                    <div className="flex items-center justify-between text-xs text-gray-400 pt-4 border-t border-gray-100">
                      <span className="flex items-center gap-1.5">
                        <CalendarIcon />
                        {new Date(post.date).toLocaleDateString('en-PK', { day: 'numeric', month: 'long', year: 'numeric' })}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <ClockIcon />
                        {post.readTime} read
                      </span>
                    </div>
                  </div>

                  {/* Read more */}
                  <div className="px-6 pb-5">
                    <span className="inline-flex items-center gap-1 text-sm font-bold text-[#006633] group-hover:gap-2 transition-all">
                      Pura Article Parhen →
                    </span>
                  </div>
                </Link>
              ))}
            </div>

            {/* Calculator promo */}
            <div className="mt-12 bg-white border-2 border-[#006633]/20 rounded-2xl p-6 flex flex-col sm:flex-row items-center gap-5">
              <div className="shrink-0 w-14 h-14 rounded-2xl bg-[#006633] flex items-center justify-center">
                <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 11h.01M12 11h.01M15 11h.01M4 19h16a2 2 0 002-2V7a2 2 0 00-2-2H4a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="flex-1 text-center sm:text-left">
                <p className="font-extrabold text-gray-900 mb-1">Free Loan Penalty Calculator</p>
                <p className="text-gray-500 text-sm">Principal + interest + late fees — sab ek jagah calculate karein. Bilkul free.</p>
              </div>
              <Link
                href="/tools/loan-penalty-calculator"
                className="shrink-0 bg-[#006633] hover:bg-[#004d26] text-white font-bold px-6 py-3 rounded-xl transition-colors text-sm whitespace-nowrap"
              >
                Calculator Try Karein →
              </Link>
            </div>

            {/* Back to home */}
            <div className="text-center mt-6">
              <Link
                href="/"
                className="inline-flex items-center gap-2 text-[#006633] hover:underline font-medium text-sm"
              >
                ← Wapas ByeBye Loan Home Par
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
