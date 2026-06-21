'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WALink from '@/components/WALink';
import { WHATSAPP_NUMBER } from '@/lib/constants';

const PRESETS = [
  { name: 'Smart Qarza', monthlyRate: 3.5, dailyFee: 150 },
  { name: 'Paisayaar', monthlyRate: 3.0, dailyFee: 120 },
  { name: 'Aitemaad', monthlyRate: 3.0, dailyFee: 100 },
  { name: 'Fori Qarza', monthlyRate: 4.0, dailyFee: 200 },
  { name: 'Paisa Guru', monthlyRate: 4.0, dailyFee: 180 },
  { name: 'Fauri Cash', monthlyRate: 3.5, dailyFee: 150 },
  { name: 'Loan Lado', monthlyRate: 3.0, dailyFee: 100 },
  { name: 'Money Tap', monthlyRate: 3.5, dailyFee: 150 },
  { name: 'Other App', monthlyRate: 3.0, dailyFee: 100 },
  { name: 'Bank Loan', monthlyRate: 1.5, dailyFee: 0 },
];

function fmt(n: number) {
  return 'Rs ' + Math.round(n).toLocaleString('en-PK');
}

export default function LoanCalculator() {
  const [preset, setPreset] = useState(PRESETS[0]);
  const [principal, setPrincipal] = useState('');
  const [days, setDays] = useState('');
  const [rate, setRate] = useState(String(PRESETS[0].monthlyRate));
  const [dailyFee, setDailyFee] = useState(String(PRESETS[0].dailyFee));

  function selectPreset(p: typeof PRESETS[0]) {
    setPreset(p);
    setRate(String(p.monthlyRate));
    setDailyFee(String(p.dailyFee));
  }

  const result = useMemo(() => {
    const p = parseFloat(principal.replace(/,/g, ''));
    const d = parseInt(days, 10);
    const r = parseFloat(rate);
    const df = parseFloat(dailyFee);
    if (!p || p <= 0 || !d || d <= 0 || !r || r <= 0) return null;

    const dailyRate = r / 100 / 30;
    const interest = p * dailyRate * d;
    const penalties = isNaN(df) ? 0 : df * d;
    const total = p + interest + penalties;
    const settlementLow = total * 0.60;
    const settlementHigh = total * 0.80;

    let urgency: 'low' | 'medium' | 'high';
    if (d <= 15) urgency = 'low';
    else if (d <= 45) urgency = 'medium';
    else urgency = 'high';

    return { p, d, interest, penalties, total, settlementLow, settlementHigh, urgency };
  }, [principal, days, rate, dailyFee]);

  const urgencyConfig = {
    low: { label: 'Abhi Bhi Manageable', color: '#006633', bg: '#f0fdf4', border: '#bbf7d0' },
    medium: { label: 'Jaldi Action Lein', color: '#b45309', bg: '#fffbeb', border: '#fde68a' },
    high: { label: 'Urgent — Aaj Hi Contact Karein', color: '#dc2626', bg: '#fef2f2', border: '#fecaca' },
  };

  const waMessage = result
    ? `Assalam o Alaikum! Mera ${preset.name} loan clear karna hai. Outstanding amount approximately Rs ${Math.round(result.total).toLocaleString('en-PK')} hai (${result.d} days overdue). Please guide karein.`
    : `Assalam o Alaikum! Mujhe apna loan clear karna hai. Please guide karein.`;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebApplication',
            name: 'Pakistan Loan Penalty Calculator',
            description: 'Calculate your total outstanding loan amount including interest and late fees for Pakistani loan apps.',
            url: 'https://byebyeloan.online/tools/loan-penalty-calculator',
            applicationCategory: 'FinanceApplication',
            offers: { '@type': 'Offer', price: '0', priceCurrency: 'PKR' },
            operatingSystem: 'Web Browser',
          }),
        }}
      />
      <Header />
      <main className="bg-gray-50 min-h-screen">

        {/* Hero */}
        <div style={{ background: 'linear-gradient(135deg, #003d1f 0%, #006633 100%)' }} className="py-14 px-4">
          <div className="max-w-2xl mx-auto text-center">
            <span className="inline-block bg-white/10 text-white/80 text-xs font-semibold px-4 py-1.5 rounded-full mb-4 uppercase tracking-widest">
              Free Tool
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight mb-3">
              Loan Penalty Calculator Pakistan
            </h1>
            <p className="text-white/80 text-base max-w-xl mx-auto">
              Apna total outstanding amount calculate karein — principal, interest, aur late fees ke saath. Bilkul free.
            </p>
          </div>
        </div>

        <div className="max-w-2xl mx-auto px-4 py-10 space-y-6">

          {/* Step 1 — Pick app */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Step 1 — Loan App Select Karein</p>
            <div className="flex flex-wrap gap-2">
              {PRESETS.map((p) => (
                <button
                  key={p.name}
                  onClick={() => selectPreset(p)}
                  className={`px-3.5 py-2 rounded-xl text-xs font-semibold border-2 transition-all ${
                    preset.name === p.name
                      ? 'bg-[#006633] border-[#006633] text-white shadow-md'
                      : 'bg-white border-gray-200 text-gray-600 hover:border-[#006633] hover:text-[#006633]'
                  }`}
                >
                  {p.name}
                </button>
              ))}
            </div>
          </div>

          {/* Step 2 — Inputs */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 space-y-5">
            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">Step 2 — Loan Details Bharein</p>

            {/* Principal */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                Original Loan Amount (Principal)
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 font-semibold text-sm">Rs</span>
                <input
                  type="number"
                  value={principal}
                  onChange={(e) => setPrincipal(e.target.value)}
                  placeholder="e.g. 20000"
                  min="0"
                  className="w-full pl-11 pr-4 py-3.5 border-2 border-gray-200 rounded-xl text-sm focus:border-[#006633] focus:outline-none transition-colors"
                />
              </div>
            </div>

            {/* Days overdue */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                Days Overdue (Due Date Se Kitne Din Baad?)
              </label>
              <input
                type="number"
                value={days}
                onChange={(e) => setDays(e.target.value)}
                placeholder="e.g. 30"
                min="1"
                className="w-full px-4 py-3.5 border-2 border-gray-200 rounded-xl text-sm focus:border-[#006633] focus:outline-none transition-colors"
              />
            </div>

            {/* Rate + daily fee side by side */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                  Monthly Interest Rate (%)
                </label>
                <div className="relative">
                  <input
                    type="number"
                    value={rate}
                    onChange={(e) => setRate(e.target.value)}
                    placeholder="3.0"
                    step="0.1"
                    min="0"
                    className="w-full px-4 pr-8 py-3.5 border-2 border-gray-200 rounded-xl text-sm focus:border-[#006633] focus:outline-none transition-colors"
                  />
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm">%</span>
                </div>
                <p className="text-xs text-gray-400 mt-1">Auto-filled for {preset.name}</p>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                  Daily Late Fee (Rs)
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm">Rs</span>
                  <input
                    type="number"
                    value={dailyFee}
                    onChange={(e) => setDailyFee(e.target.value)}
                    placeholder="100"
                    min="0"
                    className="w-full pl-9 pr-4 py-3.5 border-2 border-gray-200 rounded-xl text-sm focus:border-[#006633] focus:outline-none transition-colors"
                  />
                </div>
                <p className="text-xs text-gray-400 mt-1">0 for bank loans</p>
              </div>
            </div>
          </div>

          {/* Results */}
          {result ? (
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
              {/* Urgency banner */}
              <div
                className="px-6 py-3 text-sm font-bold flex items-center gap-2"
                style={{
                  backgroundColor: urgencyConfig[result.urgency].bg,
                  color: urgencyConfig[result.urgency].color,
                  borderBottom: `2px solid ${urgencyConfig[result.urgency].border}`,
                }}
              >
                <span>{result.urgency === 'low' ? '✓' : result.urgency === 'medium' ? '⚠' : '🚨'}</span>
                {urgencyConfig[result.urgency].label}
                <span className="font-normal text-xs ml-auto opacity-70">{result.d} days overdue</span>
              </div>

              <div className="p-6">
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-5">Aapka Estimate</p>

                {/* Breakdown rows */}
                <div className="space-y-3 mb-5">
                  <div className="flex justify-between items-center py-2.5 border-b border-gray-50">
                    <span className="text-sm text-gray-600">Original Principal</span>
                    <span className="text-sm font-semibold text-gray-900">{fmt(result.p)}</span>
                  </div>
                  <div className="flex justify-between items-center py-2.5 border-b border-gray-50">
                    <span className="text-sm text-gray-600">
                      Interest ({rate}% / month × {result.d} days)
                    </span>
                    <span className="text-sm font-semibold text-orange-600">+ {fmt(result.interest)}</span>
                  </div>
                  {result.penalties > 0 && (
                    <div className="flex justify-between items-center py-2.5 border-b border-gray-50">
                      <span className="text-sm text-gray-600">
                        Late Fees (Rs {dailyFee}/day × {result.d} days)
                      </span>
                      <span className="text-sm font-semibold text-red-600">+ {fmt(result.penalties)}</span>
                    </div>
                  )}
                </div>

                {/* Total */}
                <div className="rounded-xl p-4 mb-6" style={{ background: 'linear-gradient(135deg, #003d1f 0%, #006633 100%)' }}>
                  <div className="flex justify-between items-center">
                    <span className="text-white/80 text-sm font-medium">Total Outstanding</span>
                    <span className="text-white text-2xl font-extrabold">{fmt(result.total)}</span>
                  </div>
                </div>

                {/* Settlement estimate */}
                <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 mb-6">
                  <p className="text-xs font-bold text-blue-800 mb-2 uppercase tracking-wide">Professional Settlement Estimate</p>
                  <p className="text-blue-700 text-sm">
                    ByeBye Loan ke zariye aap typically{' '}
                    <strong>{fmt(result.settlementLow)} – {fmt(result.settlementHigh)}</strong> mein settle kar sakte hain.
                  </p>
                  <p className="text-blue-500 text-xs mt-1.5">
                    * Estimate hai — actual amount negotiation par depend karta hai.
                  </p>
                </div>

                {/* CTA */}
                <WALink
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(waMessage)}`}
                  className="flex items-center justify-center gap-3 w-full bg-[#25D366] hover:bg-[#1db954] text-white font-bold py-4 rounded-xl transition-colors text-sm"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 shrink-0">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Exact Quote Lein — WhatsApp Par Free
                </WALink>
                <p className="text-center text-xs text-gray-400 mt-2">
                  Aapka amount pre-filled message mein jayega — fast response guaranteed
                </p>
              </div>
            </div>
          ) : (
            /* Placeholder when no input yet */
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 text-center">
              <div className="w-16 h-16 rounded-2xl bg-gray-50 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 11h.01M12 11h.01M15 11h.01M4 19h16a2 2 0 002-2V7a2 2 0 00-2-2H4a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <p className="text-gray-400 text-sm">Upar loan details bharein — result yahan dikhega</p>
            </div>
          )}

          {/* How to use */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Yeh Calculator Kaise Kaam Karta Hai</p>
            <div className="space-y-3">
              {[
                { icon: '1', text: 'Apna loan app select karein — rate aur fees auto-fill ho jaate hain' },
                { icon: '2', text: 'Original loan amount aur kitne din se overdue hai — yeh bharen' },
                { icon: '3', text: 'Total outstanding instantly calculate ho jaata hai — interest aur late fees ke saath' },
                { icon: '4', text: 'Settlement estimate dekhen aur WhatsApp par exact quote lein' },
              ].map(({ icon, text }) => (
                <div key={icon} className="flex gap-3 text-sm text-gray-600">
                  <span className="shrink-0 w-6 h-6 rounded-lg bg-[#006633] text-white text-xs font-bold flex items-center justify-center">{icon}</span>
                  {text}
                </div>
              ))}
            </div>
          </div>

          {/* Disclaimer */}
          <div className="text-xs text-gray-400 leading-relaxed text-center px-4 pb-2">
            <strong className="text-gray-500">Disclaimer:</strong> Yeh estimates hain — actual amount loan app ki exact terms aur conditions par depend karti hai. Exact amount ke liye hum se WhatsApp par rabta karein. ByeBye Loan SECP registered service hai.
          </div>

          <div className="flex items-center justify-center gap-4 text-sm pb-4">
            <Link href="/blog" className="text-[#006633] hover:underline font-medium">← Blog Articles</Link>
            <span className="text-gray-300">|</span>
            <Link href="/" className="text-[#006633] hover:underline font-medium">Home</Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
