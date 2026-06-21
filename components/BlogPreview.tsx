import Link from 'next/link';

const FEATURED_POSTS = [
  {
    slug: 'loan-clearance-service-pakistan',
    title: 'Loan Clearance Service in Pakistan — Complete Guide',
    excerpt: 'Pakistan mein professional loan clearance service kya hai, kaise kaam karti hai, aur 5,000+ clients kyun ByeBye Loan trust karte hain.',
    category: 'Loan Clearance',
    categoryColor: '#006633',
    readTime: '9 min',
  },
  {
    slug: 'loan-overdue-credit-report-pakistan',
    title: 'How Long Does an Overdue Loan Stay on Your Credit Report?',
    excerpt: 'eCIB credit report par overdue loan 5–7 saal rehta hai — lekin "settled" status aur NOC se credit history rebuild hoti hai. Complete guide.',
    category: 'Credit Report',
    categoryColor: '#312e81',
    readTime: '10 min',
  },
  {
    slug: 'loan-repayment-emergency-checklist',
    title: 'Loan Repayment Afford Nahi? Emergency Checklist',
    excerpt: 'Loan repayment mushkil ho gayi? 6-step actionable checklist — aaj se follow karein. Panic mat karein, yeh steps kaam karte hain.',
    category: 'Emergency Guide',
    categoryColor: '#1d4ed8',
    readTime: '8 min',
  },
];

export default function BlogPreview() {
  return (
    <section className="bg-gray-50 py-20 px-4">
      <div className="max-w-6xl mx-auto">

        {/* Section header */}
        <div className="text-center mb-12">
          <span className="inline-block bg-[#006633]/10 text-[#006633] text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest mb-4">
            Expert Guides
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
            Loan Clearing Ka Poora Ilm — Free
          </h2>
          <p className="text-gray-500 text-base max-w-xl mx-auto">
            Pakistan mein loan clear karne ke complete guides — loan apps, credit score, settlement, aur NOC — sab ek jagah.
          </p>
        </div>

        {/* Post cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {FEATURED_POSTS.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg hover:border-[#006633]/30 hover:-translate-y-1 transition-all duration-200 flex flex-col overflow-hidden"
            >
              {/* Top accent bar */}
              <div className="h-1.5 w-full shrink-0" style={{ backgroundColor: post.categoryColor }} />

              <div className="p-6 flex flex-col flex-1">
                {/* Category + read time */}
                <div className="flex items-center justify-between mb-4">
                  <span
                    className="text-xs font-bold px-3 py-1 rounded-full text-white"
                    style={{ backgroundColor: post.categoryColor }}
                  >
                    {post.category}
                  </span>
                  <span className="text-xs text-gray-400">{post.readTime} read</span>
                </div>

                {/* Title */}
                <h3 className="text-base font-extrabold text-gray-900 leading-snug mb-3 group-hover:text-[#006633] transition-colors flex-1">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-gray-500 text-sm leading-relaxed mb-5 line-clamp-3">
                  {post.excerpt}
                </p>

                {/* Read more */}
                <span className="inline-flex items-center gap-1.5 text-sm font-bold text-[#006633] group-hover:gap-2.5 transition-all mt-auto">
                  Pura Article Parhen
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* View all + calculator */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 bg-[#006633] hover:bg-[#004d26] text-white font-bold px-7 py-3.5 rounded-xl transition-colors shadow-md"
          >
            Sab Articles Dekhein
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>
          <Link
            href="/tools/loan-penalty-calculator"
            className="inline-flex items-center gap-2 border-2 border-[#006633] text-[#006633] hover:bg-[#006633] hover:text-white font-bold px-7 py-3.5 rounded-xl transition-colors"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 11h.01M12 11h.01M15 11h.01M4 19h16a2 2 0 002-2V7a2 2 0 00-2-2H4a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Free Calculator Try Karein
          </Link>
        </div>

      </div>
    </section>
  );
}
