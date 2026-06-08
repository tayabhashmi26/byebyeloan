import { BANKS } from '@/lib/constants';
import WALink from '@/components/WALink';

const GROUPS = [
  {
    title: 'Direct Loan Apps',
    subtitle: 'Dedicated personal loan applications',
    accent: '#006633',
    bg: '#F0FDF4',
    check: '#16a34a',
    apps: [
      'Smart Qarza', 'Paisayaar', 'Aitemaad', 'Hakeem', 'Daira', 'Sahara',
      'Fauri Cash', 'Money Tap', 'PakCredit', 'Loan Lado', 'CashBazar',
      'PaisaGhar', 'QarzMitra',
    ],
  },
  {
    title: 'Fintech, BNPL & Digital Credit',
    subtitle: 'Buy-now-pay-later and digital lending platforms',
    accent: '#4338ca',
    bg: '#EEF2FF',
    check: '#4338ca',
    apps: [
      'Abhi', 'ZoodPay', 'ZoodMall', 'Muawin', 'Qist Bazaar', 'Tijara',
      'Edufi', 'Taleem Connect', 'Neem Paymenow', 'Nova Finance', 'Alif Shop',
    ],
  },
  {
    title: 'Mobile Wallets & Microfinance',
    subtitle: 'Telecom wallets and integrated bank micro-loans',
    accent: '#b45309',
    bg: '#FFFBEB',
    check: '#b45309',
    apps: [
      'Easypaisa', 'JazzCash', 'HBL Microfinance', 'Zindigi', 'Konnect by HBL', 'DOST',
    ],
  },
];

function CheckIcon({ color }: { color: string }) {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      aria-hidden="true"
      className="shrink-0"
    >
      <circle cx="7" cy="7" r="7" fill={color} opacity="0.15" />
      <path
        d="M4 7l2 2 4-4"
        stroke={color}
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function LoanApps() {
  return (
    <section
      id="loan-apps"
      aria-label="All Loan Apps and Banks We Clear in Pakistan"
      className="py-20"
      style={{ background: 'linear-gradient(180deg, #F0F7F4 0%, #E8F4ED 100%)' }}
    >
      <div className="container mx-auto px-4 sm:px-6 max-w-5xl">

        {/* Section heading */}
        <div className="text-center mb-14">
          <p className="text-[#006633] font-semibold text-sm uppercase tracking-widest mb-3">
            Complete Coverage
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
            Konse Loans Hum Clear Karte Hain?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Pakistan ke 30+ loan apps, fintech platforms, mobile wallets aur tamam commercial banks —
            sab hamare coverage mein hain.
          </p>
          <div className="section-divider mt-6" />
        </div>

        {/* App Groups */}
        <div className="space-y-10">
          {GROUPS.map((group) => (
            <div
              key={group.title}
              className="rounded-2xl border border-gray-200 bg-white shadow-sm overflow-hidden"
            >
              {/* Group header */}
              <div
                className="flex items-center justify-between px-6 py-4"
                style={{ background: group.bg, borderBottom: `2px solid ${group.accent}18` }}
              >
                <div className="flex items-center gap-3">
                  <div
                    className="w-1 h-7 rounded-full"
                    style={{ backgroundColor: group.accent }}
                  />
                  <div>
                    <h3 className="text-base font-extrabold text-gray-900 leading-tight">
                      {group.title}
                    </h3>
                    <p className="text-xs text-gray-500 mt-0.5">{group.subtitle}</p>
                  </div>
                </div>
                <span
                  className="text-xs font-bold px-3 py-1.5 rounded-full text-white shrink-0"
                  style={{ backgroundColor: group.accent }}
                >
                  {group.apps.length} Apps ✓
                </span>
              </div>

              {/* Pills */}
              <div className="px-6 py-5 flex flex-wrap gap-2.5">
                {group.apps.map((app) => (
                  <span
                    key={app}
                    className="inline-flex items-center gap-1.5 bg-white border border-gray-200 text-gray-800 text-sm font-medium px-4 py-2 rounded-full shadow-sm hover:border-gray-300 hover:shadow transition-all duration-150"
                  >
                    <CheckIcon color={group.check} />
                    {app}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Banks */}
        <div className="mt-10 rounded-2xl border border-[#006633]/20 bg-white shadow-sm overflow-hidden">
          <div
            className="flex items-center justify-between px-6 py-4"
            style={{ background: '#F0FDF4', borderBottom: '2px solid #00663318' }}
          >
            <div className="flex items-center gap-3">
              <div className="w-1 h-7 rounded-full bg-[#006633]" />
              <div>
                <h3 className="text-base font-extrabold text-gray-900 leading-tight">
                  Pakistan Ke Sab Commercial Banks
                </h3>
                <p className="text-xs text-gray-500 mt-0.5">HBL, UBL, MCB, Meezan Bank aur baaki sab</p>
              </div>
            </div>
            <span className="text-xs font-bold px-3 py-1.5 rounded-full text-white bg-[#006633] shrink-0">
              All Banks ✓
            </span>
          </div>
          <div className="px-6 py-5 flex flex-wrap gap-2.5">
            {BANKS.map((bank) => (
              <span
                key={bank}
                className="inline-flex items-center gap-1.5 bg-white border border-gray-200 text-gray-800 text-sm font-medium px-4 py-2 rounded-full shadow-sm"
              >
                <CheckIcon color="#006633" />
                {bank}
              </span>
            ))}
            <span className="inline-flex items-center gap-1.5 bg-[#006633] text-white text-sm font-semibold px-4 py-2 rounded-full shadow-sm">
              + Sab Baaki Banks ✓
            </span>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-8 text-center">
          <div className="inline-block bg-white rounded-2xl border-2 border-[#006633]/20 px-8 py-4 shadow-sm">
            <p className="text-gray-700 font-medium text-sm sm:text-base">
              Apna app ya bank list mein nahi?{' '}
              <WALink className="text-[#006633] font-bold hover:underline">
                Hum se puchein — hum zaroor help karein ge
              </WALink>
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
