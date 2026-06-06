import { Phone, MapPin, Clock } from 'lucide-react';
import { SITE_NAME, WHATSAPP_LINK, PHONE_HREF, PHONE_DISPLAY } from '@/lib/constants';

const CITIES = [
  'Karachi', 'Lahore', 'Islamabad', 'Rawalpindi',
  'Faisalabad', 'Multan', 'Peshawar', 'Quetta',
  'Gujranwala', 'Sialkot', 'Hyderabad', 'Sargodha',
];

const SERVICES_LIST = [
  'Smart Qarza Loan Clear',
  'Paisayaar Settlement',
  'Fauri Cash Clearance',
  'QarzMitra Settlement',
  'Bank Loan Clearance',
  'Credit Loan Repayment',
  'Official NOC Certificate',
  'Calls & SMS Band Service',
];

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer
      aria-label="Footer"
      style={{ background: '#0a1a0f' }}
      className="text-gray-400"
    >
      {/* Main footer */}
      <div className="container mx-auto px-4 sm:px-6 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="text-2xl font-extrabold text-white mb-3">
              <span className="text-[#F5A623]">ByeBye</span> Loan
            </div>
            <p className="text-sm leading-relaxed mb-5">
              Pakistan ka trusted loan clearing service. Loan apps aur bank loans ka
              official settlement — NOC ke saath, calls band hone ki guarantee ke saath.
            </p>
            {/* Contact */}
            <div className="space-y-2 text-sm">
              <a
                href={`tel:${PHONE_HREF}`}
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <Phone size={14} aria-hidden="true" />
                {PHONE_DISPLAY}
              </a>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-[#25D366] transition-colors"
              >
                <WhatsAppIcon />
                WhatsApp
              </a>
              <div className="flex items-center gap-2">
                <MapPin size={14} aria-hidden="true" />
                Pakistan — Puri Country Mein
              </div>
              <div className="flex items-center gap-2">
                <Clock size={14} aria-hidden="true" />
                Mon–Sat: 9am – 9pm
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-bold mb-5 text-sm uppercase tracking-wider">
              Hamare Services
            </h3>
            <ul className="space-y-2.5">
              {SERVICES_LIST.map((svc) => (
                <li key={svc}>
                  <a
                    href="#services"
                    className="text-sm hover:text-white transition-colors duration-150 hover:pl-1"
                  >
                    {svc}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Loan Apps */}
          <div>
            <h3 className="text-white font-bold mb-5 text-sm uppercase tracking-wider">
              Loan Apps Cleared
            </h3>
            <ul className="space-y-2.5">
              {[
                'Smart Qarza', 'Paisayaar', 'Aitemaad', 'Hakeem',
                'Daira', 'Fauri Cash', 'QarzMitra', 'Abhi',
                'JazzCash', 'Easypaisa', 'ZoodPay', 'PakCredit',
              ].map((app) => (
                <li key={app} className="text-sm">
                  {app}
                </li>
              ))}
            </ul>
          </div>

          {/* Cities */}
          <div>
            <h3 className="text-white font-bold mb-5 text-sm uppercase tracking-wider">
              Coverage — Tamam Pakistan
            </h3>
            <div className="flex flex-wrap gap-2">
              {CITIES.map((city) => (
                <span
                  key={city}
                  className="text-xs bg-white/10 px-3 py-1.5 rounded-full hover:bg-[#006633] hover:text-white transition-colors cursor-default"
                >
                  {city}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 sm:px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
          <div className="flex flex-col sm:flex-row items-center gap-3">
            <p>&copy; {year} {SITE_NAME}. All rights reserved. Pakistan Loan Clearing Service.</p>
            <div className="flex items-center gap-4">
              <a href="/terms-and-conditions" className="hover:text-white transition-colors">Terms &amp; Conditions</a>
              <a href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</a>
            </div>
          </div>
          <p className="text-center sm:text-right text-gray-500 max-w-md">
            <strong className="text-gray-400">Disclaimer:</strong> We provide debt settlement
            advisory services. Results may vary. We are not affiliated with any loan app or bank.
          </p>
        </div>
      </div>
    </footer>
  );
}
