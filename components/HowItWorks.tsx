import { MessageSquare, Handshake, BadgeCheck } from 'lucide-react';
import { WHATSAPP_LINK } from '@/lib/constants';

const STEPS = [
  {
    number: '01',
    icon: MessageSquare,
    title: 'WhatsApp Pe Free Consultation',
    description:
      'Humse WhatsApp ya call par rabta karein. Apna loan detail batain — loan app ka naam, amount aur current status. Yeh bilkul free hai, koi charge nahi.',
    highlight: 'Free — Koi Charge Nahi',
  },
  {
    number: '02',
    icon: Handshake,
    title: 'Hum Negotiate & Settle Karte Hain',
    description:
      'Humari team directly bank ya loan app ke saath aapki taraf se baat karte hai. Hum minimum amount par maximum relief dilate hain — officially aur legally.',
    highlight: 'Official & Legal Process',
  },
  {
    number: '03',
    icon: BadgeCheck,
    title: 'NOC Milega — Calls Forever Band',
    description:
      'Settlement complete hone ke baad aapko verified NOC dete hain. Yeh document aapka proof hai. Is ke baad koi bhi call ya SMS nahi ayega — guarantee ke saath.',
    highlight: 'Lifetime Guarantee',
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      aria-label="How Loan Clearing Works in Pakistan"
      className="py-20 bg-white"
    >
      <div className="container mx-auto px-4 sm:px-6">
        {/* Heading */}
        <div className="text-center mb-14">
          <p className="text-[#006633] font-semibold text-sm uppercase tracking-widest mb-3">
            Process
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
            3 Asan Qadam Mein Loan Clear
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Koi complicated process nahi. Sirf 3 simple steps mein aapka loan clear ho jata hai.
          </p>
          <div className="section-divider mt-6" />
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto relative">
          {/* Connector line (desktop) */}
          <div
            aria-hidden="true"
            className="hidden md:block absolute top-16 left-[calc(16.666%+2rem)] right-[calc(16.666%+2rem)] h-0.5 bg-gradient-to-r from-[#006633] via-[#00A550] to-[#006633] opacity-20"
          />

          {STEPS.map(({ number, icon: Icon, title, description, highlight }, idx) => (
            <article
              key={number}
              className="relative flex flex-col items-center text-center group"
            >
              {/* Step circle */}
              <div className="relative w-20 h-20 rounded-full bg-[#006633] flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300 z-10">
                <Icon size={32} className="text-white" aria-hidden="true" />
                <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-[#F5A623] text-white text-xs font-extrabold flex items-center justify-center">
                  {idx + 1}
                </span>
              </div>

              {/* Step number background text */}
              <div aria-hidden="true" className="step-number">{number}</div>

              <h3 className="text-xl font-bold text-gray-900 mb-3 relative z-10">{title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-4 relative z-10">{description}</p>

              {/* Highlight badge */}
              <span className="inline-block bg-[#F0F7F4] text-[#006633] text-xs font-bold px-4 py-1.5 rounded-full border border-[#006633]/20 relative z-10">
                {highlight}
              </span>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-14">
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#25D366] hover:bg-[#1db954] text-white font-bold text-lg px-10 py-4 rounded-2xl transition-all duration-200 shadow-xl hover:shadow-2xl hover:-translate-y-0.5"
          >
            Abhi Start Karein — Free Hai
          </a>
          <p className="text-gray-400 text-sm mt-3">No commitment — sirf baat karte hain</p>
        </div>
      </div>
    </section>
  );
}
