import Image from 'next/image';
import { BANKS, WHATSAPP_LINK } from '@/lib/constants';

// ── Group 1: Direct Loan Apps ────────────────────────────────────────────────
const LOAN_APPS = [
  { name: 'Smart Qarza',  logo: '/logos/smart-qarza.svg'  },
  { name: 'Paisayaar',    logo: '/logos/paisayaar.svg'    },
  { name: 'Aitemaad',     logo: '/logos/aitemaad.svg'     },
  { name: 'Hakeem',       logo: '/logos/hakeem.svg'       },
  { name: 'Daira',        logo: '/logos/daira.svg'        },
  { name: 'Sahara',       logo: '/logos/sahara.svg'       },
  { name: 'Fauri Cash',   logo: '/logos/fauri-cash.svg'   },
  { name: 'Money Tap',    logo: '/logos/money-tap.svg'    },
  { name: 'PakCredit',    logo: '/logos/pakcredit.svg'    },
  { name: 'Loan Lado',    logo: '/logos/loan-lado.svg'    },
  { name: 'CashBazar',    logo: '/logos/cashbazar.svg'    },
  { name: 'PaisaGhar',    logo: '/logos/paisaghar.svg'    },
  { name: 'QarzMitra',    logo: '/logos/qarzmitra.svg'    },
];

// ── Group 2: Fintech, BNPL & Digital Credit ──────────────────────────────────
const FINTECH_APPS = [
  { name: 'Abhi',            logo: '/logos/abhi.svg'           },
  { name: 'ZoodPay',         logo: '/logos/zoodpay.svg'        },
  { name: 'Muawin',          logo: '/logos/muawin.svg'         },
  { name: 'Qist Bazaar',     logo: '/logos/qist-bazaar.svg'    },
  { name: 'Tijara',          logo: '/logos/tijara.svg'         },
  { name: 'Edufi',           logo: '/logos/edufi.svg'          },
  { name: 'Taleem Connect',  logo: '/logos/taleem-connect.svg' },
  { name: 'Neem Paymenow',   logo: '/logos/neem.svg'           },
  { name: 'Nova Finance',    logo: '/logos/nova-finance.svg'   },
  { name: 'Baadmay',         logo: '/logos/baadmay.svg'        },
  { name: 'Alif Shop',       logo: '/logos/alif-shop.svg'      },
];

// ── Group 3: Mobile Wallets & Microfinance ───────────────────────────────────
const WALLET_APPS = [
  { name: 'Easypaisa',       logo: '/logos/easypaisa.svg'        },
  { name: 'JazzCash',        logo: '/logos/jazzcash.svg'         },
  { name: 'HBL Microfinance',logo: '/logos/hbl-microfinance.svg' },
  { name: 'Zindigi',         logo: '/logos/zindigi.svg'          },
  { name: 'Konnect by HBL',  logo: '/logos/konnect-hbl.svg'     },
  { name: 'DOST',            logo: '/logos/dost.svg'             },
];

function AppGrid({ apps }: { apps: { name: string; logo: string }[] }) {
  return (
    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 gap-4">
      {apps.map(({ name, logo }) => (
        <article
          key={name}
          className="flex flex-col items-center gap-2 group cursor-default"
          aria-label={`${name} loan clearance`}
        >
          <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-2xl overflow-hidden shadow-md group-hover:shadow-xl group-hover:scale-110 transition-all duration-200 border-2 border-white">
            <Image
              src={logo}
              alt={`${name} logo`}
              fill
              sizes="64px"
              className="object-cover"
              unoptimized
            />
          </div>
          <span className="text-center text-[11px] sm:text-xs font-semibold text-gray-700 leading-tight px-0.5">
            {name}
          </span>
        </article>
      ))}
    </div>
  );
}

function GroupBlock({
  title,
  subtitle,
  apps,
  accentColor = '#006633',
}: {
  title: string;
  subtitle: string;
  apps: { name: string; logo: string }[];
  accentColor?: string;
}) {
  return (
    <div className="mb-14">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-1 h-8 rounded-full" style={{ backgroundColor: accentColor }} />
        <div>
          <h3 className="text-lg font-extrabold text-gray-900 leading-tight">{title}</h3>
          <p className="text-xs text-gray-500">{subtitle}</p>
        </div>
        <span
          className="ml-auto text-xs font-bold px-3 py-1 rounded-full text-white"
          style={{ backgroundColor: accentColor }}
        >
          {apps.length} Apps
        </span>
      </div>
      <AppGrid apps={apps} />
    </div>
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
      <div className="container mx-auto px-4 sm:px-6">

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

        {/* Group 1 */}
        <GroupBlock
          title="Direct Loan Apps"
          subtitle="Dedicated personal loan applications"
          apps={LOAN_APPS}
          accentColor="#006633"
        />

        {/* Group 2 */}
        <GroupBlock
          title="Fintech, BNPL & Digital Credit"
          subtitle="Buy-now-pay-later and digital lending platforms"
          apps={FINTECH_APPS}
          accentColor="#4338ca"
        />

        {/* Group 3 */}
        <GroupBlock
          title="Mobile Wallets & Microfinance"
          subtitle="Telecom wallets and integrated bank micro-loans"
          apps={WALLET_APPS}
          accentColor="#b45309"
        />

        {/* Banks */}
        <div className="pt-6 border-t border-[#006633]/10">
          <h3 className="text-lg font-extrabold text-gray-900 mb-6 flex items-center gap-3">
            <div className="w-1 h-8 rounded-full bg-[#006633]" />
            <span>Pakistan Ke Sab Commercial Banks</span>
            <span className="ml-auto text-xs font-bold px-3 py-1 rounded-full text-white bg-[#006633]">
              All Banks
            </span>
          </h3>

          <div className="flex flex-wrap gap-2 mb-8">
            {BANKS.map((bank) => (
              <span
                key={bank}
                className="bg-[#006633] text-white text-xs sm:text-sm font-semibold px-4 py-2 rounded-full"
              >
                {bank}
              </span>
            ))}
            <span className="bg-[#004d26] text-white text-xs sm:text-sm font-semibold px-4 py-2 rounded-full">
              + Sab Baaki Banks ✓
            </span>
          </div>

          <div className="text-center">
            <div className="inline-block bg-white rounded-2xl border-2 border-[#006633]/20 px-8 py-4 shadow-sm">
              <p className="text-gray-700 font-medium text-sm sm:text-base">
                Apna app ya bank list mein nahi?{' '}
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#006633] font-bold hover:underline"
                >
                  Hum se puchein — hum zaroor help karein ge
                </a>
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
