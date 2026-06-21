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
    slug: 'smart-qarza-loan-clear-karna',
    title: 'Smart Qarza Loan Clear Karne Ka Tarika — Official NOC Guide',
    excerpt: 'Smart Qarza ka loan clear karna chahte hain? Is step-by-step guide mein jaanein ke officially Smart Qarza loan kaise settle hota hai aur NOC kaise milta hai Pakistan mein.',
    date: '2026-06-21',
    category: 'App Guides',
    categoryColor: '#4338ca',
    readTime: '7 min',
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

            {/* Back to home */}
            <div className="text-center mt-12">
              <Link
                href="/"
                className="inline-flex items-center gap-2 bg-[#006633] hover:bg-[#004d26] text-white font-bold px-8 py-4 rounded-2xl transition-colors shadow-lg"
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
