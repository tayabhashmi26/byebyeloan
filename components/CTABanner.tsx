import { Phone } from 'lucide-react';
import { PHONE_HREF, PHONE_DISPLAY } from '@/lib/constants';
import WALink from '@/components/WALink';

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

export default function CTABanner() {
  return (
    <section
      aria-label="Contact ByeBye Loan — Free Consultation"
      className="py-20 relative overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #004d26 0%, #006633 50%, #F5A623 200%)' }}
    >
      {/* Background decor */}
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 -right-24 w-80 h-80 rounded-full bg-[#F5A623] opacity-10" />
        <div className="absolute -bottom-24 -left-24 w-80 h-80 rounded-full bg-white opacity-5" />
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 text-center">
        <p className="text-[#F5A623] font-semibold text-sm uppercase tracking-widest mb-4">
          Aaj Hi Shuru Karein
        </p>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-5 max-w-3xl mx-auto">
          Loan Se Hamesha Ke Liye Azaad Ho Jao!
        </h2>
        <p className="text-white/80 text-lg max-w-xl mx-auto mb-10 leading-relaxed">
          Abhi humse contact karein. Pehli consultation bilkul free hai —{' '}
          <strong className="text-[#F5A623]">koi charge nahi, koi commitment nahi.</strong>
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <WALink
            className="flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#1db954] text-white font-bold text-lg px-10 py-5 rounded-2xl transition-all duration-200 shadow-2xl hover:-translate-y-0.5"
            aria-label="WhatsApp pe free loan consultation lein"
          >
            <WhatsAppIcon />
            WhatsApp — Free Consultation
          </WALink>
          <a
            href={`tel:${PHONE_HREF}`}
            className="flex items-center justify-center gap-3 bg-white hover:bg-gray-50 text-[#006633] font-bold text-lg px-10 py-5 rounded-2xl transition-all duration-200 shadow-2xl hover:-translate-y-0.5"
            aria-label={`Call karein ${PHONE_DISPLAY}`}
          >
            <Phone size={22} aria-hidden="true" />
            Call Karein: {PHONE_DISPLAY}
          </a>
        </div>

        {/* Trust notes */}
        <div className="flex flex-wrap justify-center gap-6 mt-10 text-white/70 text-sm">
          <span>✓ Free Consultation</span>
          <span>✓ No Commitment</span>
          <span>✓ 100% Confidential</span>
          <span>✓ 24-48 Hour Process</span>
        </div>
      </div>
    </section>
  );
}
