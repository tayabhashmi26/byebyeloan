const BANKS = [
  { name: 'HBL',              abbr: 'HBL'  },
  { name: 'UBL',              abbr: 'UBL'  },
  { name: 'MCB',              abbr: 'MCB'  },
  { name: 'Meezan Bank',      abbr: 'MBL'  },
  { name: 'Bank Alfalah',     abbr: 'BAL'  },
  { name: 'Faysal Bank',      abbr: 'FBL'  },
  { name: 'Askari Bank',      abbr: 'AskB' },
  { name: 'NBP',              abbr: 'NBP'  },
];

const TRUST_STATS = [
  {
    icon: (
      <svg className="w-7 h-7 text-[#006633]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.955 11.955 0 01.25 12c0 6.075 4.925 11 11 11s11-4.925 11-11c0-2.86-1.087-5.467-2.865-7.4A11.96 11.96 0 0112 2.964z" />
      </svg>
    ),
    value: '5,000+',
    label: 'Loans Cleared',
  },
  {
    icon: (
      <svg className="w-7 h-7 text-[#006633]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
      </svg>
    ),
    value: '100%',
    label: 'NOC Verified',
  },
  {
    icon: (
      <svg className="w-7 h-7 text-[#006633]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
      </svg>
    ),
    value: '100%',
    label: 'Confidential',
  },
  {
    icon: (
      <svg className="w-7 h-7 text-[#006633]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    value: '24–48h',
    label: 'Process Time',
  },
];

function BankPill({ name, abbr }: { name: string; abbr: string }) {
  return (
    <span
      title={name}
      className="inline-flex items-center gap-1.5 bg-white border border-gray-200 rounded-lg px-3 py-1.5 shadow-sm"
    >
      {/* Mini bank icon */}
      <span className="w-6 h-6 rounded-md bg-[#006633] flex items-center justify-center shrink-0">
        <span className="text-white font-bold leading-none" style={{ fontSize: '7px' }}>{abbr}</span>
      </span>
      <span className="text-xs font-semibold text-gray-700 whitespace-nowrap">{name}</span>
    </span>
  );
}

export default function TrustBar() {
  return (
    <section aria-label="Trust and credibility indicators" className="bg-white border-b border-gray-100 shadow-sm">

      {/* ── Row 1: Key stats ── */}
      <div className="border-b border-gray-100">
        <div className="container mx-auto px-4 sm:px-6 py-5 grid grid-cols-2 md:grid-cols-4 gap-4">
          {TRUST_STATS.map((s) => (
            <div key={s.label} className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-[#F0F7F4] flex items-center justify-center shrink-0">
                {s.icon}
              </div>
              <div>
                <p className="text-xl font-extrabold text-gray-900 leading-tight">{s.value}</p>
                <p className="text-xs text-gray-500 font-medium">{s.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Row 2: Bank settlement logos ── */}
      <div className="container mx-auto px-4 sm:px-6 py-4">
        <div className="flex flex-col sm:flex-row items-center gap-4">
          {/* Label */}
          <div className="shrink-0 flex items-center gap-2">
            <svg className="w-4 h-4 text-[#006633]" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
            </svg>
            <p className="text-xs font-bold text-gray-600 uppercase tracking-wider whitespace-nowrap">
              Settlements via SBP-Regulated Banks
            </p>
          </div>

          {/* Divider */}
          <div className="hidden sm:block w-px h-8 bg-gray-200 shrink-0" />

          {/* Bank pills */}
          <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
            {BANKS.map((b) => (
              <BankPill key={b.name} name={b.name} abbr={b.abbr} />
            ))}
            <span className="inline-flex items-center bg-[#006633]/10 border border-[#006633]/20 text-[#006633] text-xs font-bold rounded-lg px-3 py-1.5 whitespace-nowrap">
              + All Pakistani Banks ✓
            </span>
          </div>
        </div>
      </div>

    </section>
  );
}
