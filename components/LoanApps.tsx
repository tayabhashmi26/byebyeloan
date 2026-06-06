import { LOAN_APPS, BANKS, WHATSAPP_LINK } from '@/lib/constants';

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

        {/* Loan Apps */}
        <div className="mb-14">
          <h3 className="text-center text-lg font-bold text-gray-800 mb-6">
            Loan Apps — Jinhe Hum Clear Karte Hain
          </h3>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {LOAN_APPS.map(({ name }) => (
              <div
                key={name}
                className="group relative flex items-center gap-2 bg-white border-2 border-[#006633]/20 hover:border-[#006633] hover:bg-[#006633] rounded-xl px-5 py-3 cursor-default transition-all duration-200 shadow-sm hover:shadow-md"
              >
                <span className="w-2 h-2 rounded-full bg-[#006633] group-hover:bg-white transition-colors duration-200" />
                <span className="font-semibold text-gray-800 group-hover:text-white transition-colors duration-200 text-sm sm:text-base">
                  {name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Banks */}
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

          {/* Bottom note */}
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
