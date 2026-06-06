import { CheckCircle, Phone } from 'lucide-react';
import { WHATSAPP_LINK, PHONE_HREF, PHONE_DISPLAY, STATS } from '@/lib/constants';

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const TRUST_BADGES = [
  '100% Official NOC',
  'All Banks of Pakistan',
  '30+ Loan Apps Cleared',
  'Calls & SMS Forever Band',
];

export default function Hero() {
  return (
    <section
      id="home"
      aria-label="Hero — Loan Clearing Service Pakistan"
      className="relative min-h-[92vh] flex flex-col items-center justify-center overflow-hidden"
      style={{
        background: 'linear-gradient(150deg, #003d1a 0%, #006633 55%, #007a40 100%)',
      }}
    >
      {/* Decorative background blobs */}
      <div aria-hidden="true" className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-white opacity-[0.03]" />
        <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] rounded-full bg-white opacity-[0.03]" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[300px] h-[300px] rounded-full bg-[#F5A623] opacity-[0.04]" />
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 py-24 text-center">
        {/* Announcement badge */}
        <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-5 py-2 mb-8 text-white/90 text-sm font-medium backdrop-blur-sm">
          <span className="w-2 h-2 rounded-full bg-[#F5A623] animate-pulse" />
          Pakistan Ka #1 Loan Clearing Service — 5,000+ Satisfied Clients
        </div>

        {/* H1 — primary SEO keyword */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6 max-w-4xl mx-auto">
          Apna Loan Clear Karein —{' '}
          <span className="gradient-text">Official NOC</span>{' '}
          Ke Saath
        </h1>

        {/* Value proposition */}
        <p className="text-lg sm:text-xl text-white/85 max-w-2xl mx-auto mb-10 leading-relaxed">
          Smart Qarza, Paisayaar, Foricash, QarzMitra aur Pakistan ke{' '}
          <strong className="text-white">sab bank loans</strong> hum officially settle karte hain.
          Clearance ke baad{' '}
          <strong className="text-[#F5A623]">koi bhi call ya SMS nahi ayega</strong> — lifetime guarantee.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#1db954] text-white font-bold text-lg px-8 py-4 rounded-2xl transition-all duration-200 shadow-xl hover:shadow-2xl hover:-translate-y-0.5 active:translate-y-0"
            aria-label="WhatsApp pe free consultation lein"
          >
            <WhatsAppIcon />
            Free Consultation — WhatsApp
          </a>
          <a
            href={`tel:${PHONE_HREF}`}
            className="flex items-center justify-center gap-3 bg-white/10 hover:bg-white/20 border-2 border-white/70 hover:border-white text-white font-bold text-lg px-8 py-4 rounded-2xl transition-all duration-200 backdrop-blur-sm"
            aria-label={`Call karein ${PHONE_DISPLAY}`}
          >
            <Phone size={22} aria-hidden="true" />
            Call: {PHONE_DISPLAY}
          </a>
        </div>

        {/* Trust badges */}
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-3 mb-16">
          {TRUST_BADGES.map((badge) => (
            <div key={badge} className="flex items-center gap-2 text-white/80 text-sm font-medium">
              <CheckCircle size={16} className="text-[#25D366] shrink-0" aria-hidden="true" />
              {badge}
            </div>
          ))}
        </div>
      </div>

      {/* Stats bar pinned to bottom */}
      <div className="absolute bottom-0 left-0 right-0 bg-black/25 backdrop-blur-sm border-t border-white/10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-wrap justify-center gap-8 sm:gap-16">
            {STATS.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl sm:text-3xl font-extrabold text-[#F5A623]">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm text-white/70">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
