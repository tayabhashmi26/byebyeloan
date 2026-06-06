import { PhoneIncoming, TrendingUp, AlertTriangle, UserX } from 'lucide-react';

const PAIN_POINTS = [
  {
    icon: PhoneIncoming,
    title: 'Roz Roz Harassment Calls',
    desc: 'Subah se raat tak loan app ke agents baar baar call karte hain. Contacts ko bhi disturb kiya jata hai aur ghar walo ko bhi.',
    color: '#dc2626',
    bg: '#fef2f2',
    border: '#fecaca',
  },
  {
    icon: TrendingUp,
    title: 'Barhta Hua Interest & Penalty',
    desc: 'Har guzarta din interest aur late payment charges barha raha hai. Asli loan se kahin zyada amount ban jati hai.',
    color: '#b45309',
    bg: '#fffbeb',
    border: '#fde68a',
  },
  {
    icon: AlertTriangle,
    title: 'Legal Notice & Court Ka Dar',
    desc: 'Bank ya loan app legal notice bhej rahi hai. Arrest warrant ya property seize hone ka darr laga rehta hai.',
    color: '#7c3aed',
    bg: '#f5f3ff',
    border: '#ddd6fe',
  },
  {
    icon: UserX,
    title: 'CNIC Blacklist & Credit Score',
    desc: 'Pakistan mein credit score kharab ho raha hai. CNIC blacklist hone se future mein koi bhi loan ya service nahi milti.',
    color: '#0369a1',
    bg: '#eff6ff',
    border: '#bfdbfe',
  },
];

export default function PainPoints() {
  return (
    <section
      id="problems"
      aria-label="Loan Harassment Problems in Pakistan"
      className="py-20 bg-gray-50"
    >
      <div className="container mx-auto px-4 sm:px-6">
        {/* Heading */}
        <div className="text-center mb-14">
          <p className="text-[#006633] font-semibold text-sm uppercase tracking-widest mb-3">
            Kya Aap Bhi Ye Sab Face Kar Rahe Hain?
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
            Loan Ka Bojh Aur Harassment Se{' '}
            <span className="text-[#dc2626]">Pareshan Hain?</span>
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-base">
            Hum samajhte hain. Pakistan mein lakhon log inhi maslon se guzar rahe hain.
            Aur humara kaam hai aapko is sab se forever free karna.
          </p>
          <div className="section-divider mt-6" />
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {PAIN_POINTS.map(({ icon: Icon, title, desc, color, bg, border }) => (
            <article
              key={title}
              className="rounded-2xl p-6 border-2 transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
              style={{ backgroundColor: bg, borderColor: border }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                style={{ backgroundColor: color + '20' }}
              >
                <Icon size={24} style={{ color }} aria-hidden="true" />
              </div>
              <h3 className="font-bold text-gray-900 text-base mb-2">{title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
            </article>
          ))}
        </div>

        {/* Bridge to solution */}
        <div className="text-center mt-12">
          <p className="text-lg text-gray-700 font-medium">
            In sab maslon ka{' '}
            <strong className="text-[#006633]">ek hal hai</strong> — ByeBye Loan
          </p>
        </div>
      </div>
    </section>
  );
}
