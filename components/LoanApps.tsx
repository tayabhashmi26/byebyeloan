import Image from 'next/image';
import { BANKS, WHATSAPP_LINK } from '@/lib/constants';

const LOAN_APPS = [
  { name: 'Smart Qarza', logo: '/logos/smart-qarza.svg',  slug: 'smart-qarza'  },
  { name: 'Paisayaar',   logo: '/logos/paisayaar.svg',    slug: 'paisayaar'    },
  { name: 'Foricash',    logo: '/logos/foricash.svg',     slug: 'foricash'     },
  { name: 'QarzMitra',   logo: '/logos/qarzmitra.svg',    slug: 'qarzmitra'    },
  { name: 'LudoLoan',    logo: '/logos/ludoloan.svg',     slug: 'ludoloan'     },
  { name: 'EasyLoan',    logo: '/logos/easyloan.svg',     slug: 'easyloan'     },
  { name: 'UpLoan',      logo: '/logos/uploan.svg',       slug: 'uploan'       },
  { name: 'PakCredit',   logo: '/logos/pakcredit.svg',    slug: 'pakcredit'    },
  { name: 'HakeemApp',   logo: '/logos/hakeemapp.svg',    slug: 'hakeemapp'    },
  { name: 'DairaApp',    logo: '/logos/dairaapp.svg',     slug: 'dairaapp'     },
  { name: 'PaysaGhur',   logo: '/logos/paysaghur.svg',    slug: 'paysaghur'    },
  { name: 'MoneyTab',    logo: '/logos/moneytab.svg',     slug: 'moneytab'     },
];

export default function LoanApps() {
  return (
    <section
      id="loan-apps"
      aria-label="Loan Apps and Banks We Clear in Pakistan"
      className="py-20"
      style={{ background: 'linear-gradient(180deg, #F0F7F4 0%, #E8F4ED 100%)' }}
    >
      <div className="container mx-auto px-4 sm:px-6">

        {/* Heading */}
        <div className="text-center mb-14">
          <p className="text-[#006633] font-semibold text-sm uppercase tracking-widest mb-3">
            Coverage
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
            Konse Loans Hum Clear Karte Hain?
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            Pakistan ke 12 major loan apps aur tamam banks — sab hamare coverage mein hain.
          </p>
          <div className="section-divider mt-6" />
        </div>

        {/* ── Loan App Logo Grid ── */}
        <div className="mb-16">
          <h3 className="text-center text-xl font-bold text-gray-800 mb-8">
            Loan Apps — Jinhe Hum Clear Karte Hain
          </h3>

          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4 max-w-4xl mx-auto">
            {LOAN_APPS.map(({ name, logo }) => (
              <article
                key={name}
                className="flex flex-col items-center gap-2 group cursor-default"
                aria-label={`${name} loan clearance`}
              >
                {/* App icon */}
                <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden shadow-md group-hover:shadow-xl group-hover:scale-110 transition-all duration-200 border-2 border-white">
                  <Image
                    src={logo}
                    alt={`${name} logo`}
                    fill
                    sizes="80px"
                    className="object-cover"
                    unoptimized
                  />
                </div>
                {/* App name */}
                <span className="text-center text-xs sm:text-sm font-semibold text-gray-700 leading-tight">
                  {name}
                </span>
              </article>
            ))}
          </div>

          {/* "Replace with real logos" helper note — remove after adding real logos */}
          <p className="text-center text-xs text-gray-400 mt-6">
            💡 To use real logos: drop PNG/JPG files into{' '}
            <code className="bg-gray-100 px-1 rounded">public/logos/</code>{' '}
            with the same filenames
          </p>
        </div>

        {/* ── Banks Grid ── */}
        <div>
          <h3 className="text-center text-lg font-bold text-gray-800 mb-6">
            Pakistan Ke Sab Banks — Credit &amp; Personal Loans
          </h3>

          <div className="flex flex-wrap justify-center gap-2 max-w-4xl mx-auto mb-8">
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

          {/* Prompt for unknown apps */}
          <div className="text-center">
            <div className="inline-block bg-white rounded-2xl border-2 border-[#006633]/20 px-8 py-4 shadow-sm">
              <p className="text-gray-700 font-medium text-sm sm:text-base">
                Apna loan app ya bank list mein nahi?{' '}
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#006633] font-bold hover:underline"
                >
                  Hum se puchein — hum zaroor madad karein ge
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
