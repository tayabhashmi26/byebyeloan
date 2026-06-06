import { Smartphone, Building2, FileCheck, BellOff } from 'lucide-react';
import { WHATSAPP_LINK } from '@/lib/constants';

const SERVICES = [
  {
    icon: Smartphone,
    title: 'Loan App Clearance',
    description:
      'Smart Qarza, Paisayaar, Foricash, QarzMitra, LudoLoan, EasyLoan, UpLoan, PakCredit, HakeemApp, DairaApp, PaysaGhur, MoneyTab — hum sab apps ke loans officially clear karte hain.',
    badge: '12+ Apps',
    badgeColor: '#006633',
  },
  {
    icon: Building2,
    title: 'Bank Credit Loan Repayment',
    description:
      'HBL, UBL, MCB, ABL, Meezan Bank, Bank Alfalah, Faysal Bank aur Pakistan ke sab banks ke credit loans aur personal loans ka official settlement karte hain.',
    badge: 'All Banks',
    badgeColor: '#007a40',
  },
  {
    icon: FileCheck,
    title: 'Official NOC Certificate',
    description:
      'Loan clear hone ke baad hum aapko verified aur official No Objection Certificate (NOC) dete hain. Yeh aapka legal proof hai ke aap par koi liability nahi.',
    badge: '100% Verified',
    badgeColor: '#004d26',
  },
  {
    icon: BellOff,
    title: 'Calls & SMS Permanently Band',
    description:
      'Clearance ke baad koi bhi bank ya loan app aapko call nahi karega, SMS nahi bhejega. Yeh hamare service ki lifetime guarantee hai.',
    badge: 'Guaranteed',
    badgeColor: '#006633',
  },
];

export default function Services() {
  return (
    <section
      id="services"
      aria-label="Loan Clearing Services Pakistan"
      className="py-20 bg-white"
    >
      <div className="container mx-auto px-4 sm:px-6">
        {/* Heading */}
        <div className="text-center mb-14">
          <p className="text-[#006633] font-semibold text-sm uppercase tracking-widest mb-3">
            Hamare Services
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
            Hum Kya Karte Hain?
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Pakistan mein loan app aur bank loan clearance ke liye complete solution —
            ek jagah, sab kuch.
          </p>
          <div className="section-divider mt-6" />
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {SERVICES.map(({ icon: Icon, title, description, badge, badgeColor }) => (
            <article
              key={title}
              className="relative rounded-2xl border border-gray-100 p-8 hover:border-[#006633]/30 hover:shadow-xl transition-all duration-300 group stat-card bg-white"
            >
              {/* Badge */}
              <span
                className="absolute top-5 right-5 text-white text-xs font-bold px-3 py-1 rounded-full"
                style={{ backgroundColor: badgeColor }}
              >
                {badge}
              </span>

              {/* Icon */}
              <div className="w-14 h-14 rounded-2xl bg-[#F0F7F4] flex items-center justify-center mb-5 group-hover:bg-[#006633] transition-colors duration-300">
                <Icon
                  size={28}
                  className="text-[#006633] group-hover:text-white transition-colors duration-300"
                  aria-hidden="true"
                />
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{description}</p>
            </article>
          ))}
        </div>

        {/* CTA below */}
        <div className="text-center mt-12">
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#006633] hover:bg-[#004d26] text-white font-bold px-8 py-4 rounded-2xl text-base transition-colors duration-200 shadow-lg"
          >
            Apna Loan Clear Karaen — Free Consultation
          </a>
        </div>
      </div>
    </section>
  );
}
