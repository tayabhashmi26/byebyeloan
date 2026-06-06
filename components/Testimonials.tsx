import { Star, Quote } from 'lucide-react';

const TESTIMONIALS = [
  {
    name: 'Muhammad Usman',
    city: 'Lahore',
    loan: 'Smart Qarza + Paisayaar',
    rating: 5,
    text: 'Main 3 mahine se Smart Qarza aur Paisayaar ke calls se pareshan tha. Roz 10-15 calls aati thin. ByeBye Loan ne 2 din mein dono loans clear kara diye. Ab koi call nahi aata. NOC bhi mil gaya. Allah aapka bhala kare!',
  },
  {
    name: 'Fatima Noor',
    city: 'Karachi',
    loan: 'HBL Credit Loan',
    rating: 5,
    text: 'HBL credit card ka loan baar barh gaya tha. Interest pe interest lag raha tha. Inke zariye official settlement ho gayi aur NOC bhi mila. Ab koi tension nahi. Service bohat achi hai, confidential bhi.',
  },
  {
    name: 'Bilal Ahmed Khan',
    city: 'Islamabad',
    loan: 'Foricash + EasyLoan + UBL',
    rating: 5,
    text: '3 jagah se loan tha. Ghar walo ko calls aa rahi thin jo bohat sharmindagi ki baat thi. ByeBye Loan ne teen month mein sab kuch settle karwa diya. Professional team hai aur process transparent tha. 100% recommend.',
  },
];

const Stars = ({ count }: { count: number }) => (
  <div className="flex gap-0.5" aria-label={`${count} out of 5 stars`}>
    {Array.from({ length: count }).map((_, i) => (
      <Star key={i} size={16} className="fill-[#F5A623] text-[#F5A623]" aria-hidden="true" />
    ))}
  </div>
);

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      aria-label="Client Testimonials — ByeBye Loan Pakistan"
      className="py-20 bg-[#F0F7F4]"
    >
      <div className="container mx-auto px-4 sm:px-6">
        {/* Heading */}
        <div className="text-center mb-14">
          <p className="text-[#006633] font-semibold text-sm uppercase tracking-widest mb-3">
            Client Reviews
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
            Unhone Loan Clear Karaya — Ab Aapki Baari
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Pakistan bhar se hazaron satisfied clients — real stories, real results.
          </p>
          <div className="section-divider mt-6" />
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {TESTIMONIALS.map(({ name, city, loan, rating, text }) => (
            <article
              key={name}
              className="bg-white rounded-2xl p-7 shadow-sm border border-[#006633]/10 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative"
            >
              {/* Quote icon */}
              <div className="absolute top-5 right-6">
                <Quote size={36} className="text-[#006633]/10" aria-hidden="true" />
              </div>

              {/* Stars */}
              <Stars count={rating} />

              {/* Review text */}
              <blockquote className="mt-4 mb-6 text-gray-600 text-sm leading-relaxed">
                &ldquo;{text}&rdquo;
              </blockquote>

              {/* Divider */}
              <div className="border-t border-gray-100 pt-4">
                <p className="font-bold text-gray-900">{name}</p>
                <p className="text-gray-400 text-xs mt-0.5">
                  {city} &mdash; Cleared:{' '}
                  <span className="text-[#006633] font-semibold">{loan}</span>
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* Social proof bar */}
        <div className="text-center mt-12">
          <div className="inline-flex flex-wrap justify-center items-center gap-3 sm:gap-6 bg-white rounded-2xl px-8 py-4 shadow-sm border border-[#006633]/10">
            <div className="flex items-center gap-2">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} size={16} className="fill-[#F5A623] text-[#F5A623]" aria-hidden="true" />
                ))}
              </div>
              <span className="font-bold text-gray-900">4.9/5</span>
            </div>
            <div className="w-px h-6 bg-gray-200 hidden sm:block" />
            <span className="text-gray-600 text-sm font-medium">5,000+ clients satisfied</span>
            <div className="w-px h-6 bg-gray-200 hidden sm:block" />
            <span className="text-gray-600 text-sm font-medium">Pakistan ka trusted loan clearing service</span>
          </div>
        </div>
      </div>
    </section>
  );
}
