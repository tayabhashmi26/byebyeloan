'use client';

import { useEffect, useState, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import type { NOCRecord, Installment } from '@/lib/supabase';

function fmt(n: number) {
  return n.toLocaleString('en-PK', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}
function fmtDate(d: string) {
  const [y, m, day] = d.split('-');
  return `${day}-${m}-${y}`;
}

function NOCCertificate({ noc, siteUrl }: { noc: NOCRecord; siteUrl: string }) {
  const verifyUrl = `${siteUrl}/verify/${noc.id}`;
  const certSerial = `BBL-${new Date().getFullYear()}-${noc.id.slice(0, 8).toUpperCase()}`;

  return (
    <div
      className="bg-white print-page"
      style={{ border: '3px solid #006633', borderRadius: '8px', marginBottom: '0' }}
    >
      <div style={{ border: '1px solid #00663330', margin: '6px', borderRadius: '4px' }}>

        {/* Letterhead */}
        <div className="flex items-center justify-between px-10 pt-8 pb-5 border-b-4 border-[#006633]">
          <img src="/state-logo.png" alt="State Logo" className="h-14 w-auto object-contain" />
          <div className="text-right">
            <p className="text-[10px] text-gray-500 font-semibold uppercase tracking-wider">Certificate No.</p>
            <p className="text-sm font-extrabold text-[#006633] tracking-widest mt-0.5">{certSerial}</p>
            <p className="text-[10px] text-gray-400 mt-1">Issue Date: {fmtDate(noc.issue_date)}</p>
          </div>
        </div>

        <div className="px-10 py-7 space-y-5">
          {/* Title + badge */}
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-xs text-gray-500 font-semibold uppercase tracking-widest mb-1">{noc.loan_app}</p>
              <h2 className="text-xl font-extrabold text-gray-900">NO OBJECTION CERTIFICATE (NOC)</h2>
            </div>
            <div
              className="shrink-0 flex items-center gap-1.5 px-3 py-2 rounded-xl text-white text-xs font-extrabold tracking-wide text-center shadow"
              style={{ background: 'linear-gradient(135deg, #006633, #009944)' }}
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              SETTLEMENT<br />COMPLETE
            </div>
          </div>

          {/* Body */}
          <p className="text-gray-700 text-sm leading-relaxed border-l-4 border-[#006633] pl-4 py-1 bg-[#F0F7F4] rounded-r-lg">
            This is to certify that <strong>{noc.client_name}</strong>, holding CNIC No.{' '}
            <strong>{noc.cnic}</strong> and Mobile No. <strong>{noc.mobile}</strong>, has obtained
            a loan facility from <strong>{noc.loan_app}</strong>. The repayment schedule and
            installment details are mentioned below. Upon full settlement of the total outstanding
            amount, the company shall have no objection and no claim remaining against the
            above-mentioned customer.
          </p>

          {/* Table */}
          <table className="w-full text-sm border-collapse" style={{ border: '1px solid #e5e7eb' }}>
            <thead>
              <tr style={{ background: '#006633' }}>
                <th className="text-left px-4 py-2.5 font-semibold text-white">Installment No</th>
                <th className="text-left px-4 py-2.5 font-semibold text-white">Due Date</th>
                <th className="text-right px-4 py-2.5 font-semibold text-white">Amount (PKR)</th>
              </tr>
            </thead>
            <tbody>
              {noc.installments.map((inst: Installment, i: number) => (
                <tr key={inst.no} style={{ background: i % 2 === 0 ? '#fff' : '#F9FAFB', borderBottom: '1px solid #e5e7eb' }}>
                  <td className="px-4 py-2.5 text-gray-700">{inst.no}</td>
                  <td className="px-4 py-2.5 text-gray-700">{fmtDate(inst.due_date)}</td>
                  <td className="px-4 py-2.5 text-right text-gray-700 font-mono">{fmt(inst.amount)}</td>
                </tr>
              ))}
              <tr className="font-bold" style={{ background: '#F0F7F4' }}>
                <td colSpan={2} className="px-4 py-2.5 text-[#006633]">Grand Total</td>
                <td className="px-4 py-2.5 text-right text-[#006633] font-mono text-base">{fmt(noc.total_amount)}</td>
              </tr>
            </tbody>
          </table>

          {/* QR + Signature */}
          <div className="flex justify-between items-end pt-1">
            <div>
              <p className="text-xs text-gray-500 mb-2 font-semibold uppercase tracking-wide">Scan to Verify</p>
              <img
                src={`https://api.qrserver.com/v1/create-qr-code/?size=120x120&data=${encodeURIComponent(verifyUrl)}`}
                alt="Verification QR Code" width={120} height={120}
                className="border-2 border-[#006633] rounded-lg"
              />
              <p className="text-[10px] text-gray-400 mt-1 max-w-[120px] break-all">{verifyUrl}</p>
            </div>
            <div className="flex flex-col items-center">
              <img src="/Official-signature.png" alt="Authorized Signature" className="h-16 w-auto object-contain mb-1" />
              <div className="w-56 border-t-2 border-[#006633] pt-2 text-center">
                <p className="text-xs font-bold text-gray-700">Authorized Signature &amp; Official Stamp</p>
                <p className="text-[10px] text-gray-500 mt-0.5">ByeBye Loan — Pakistan</p>
              </div>
            </div>
          </div>

          {/* Legal notice */}
          <div className="bg-red-50 border border-red-200 rounded-xl px-4 py-2 flex gap-2 items-start">
            <svg className="w-4 h-4 text-red-500 shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M8.485 2.495c.673-1.167 2.357-1.167 3.03 0l6.28 10.875c.673 1.167-.17 2.625-1.516 2.625H3.72c-1.347 0-2.189-1.458-1.515-2.625L8.485 2.495zM10 5a.75.75 0 01.75.75v3.5a.75.75 0 01-1.5 0v-3.5A.75.75 0 0110 5zm0 9a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
            </svg>
            <p className="text-[10px] text-red-700 leading-relaxed">
              <strong>Anti-Tampering Notice:</strong> Any alteration or forgery is a criminal offense under <strong>PECA 2016 (Section 36)</strong>. Verify by scanning the QR code.
            </p>
          </div>

          {/* Footer */}
          <div className="flex items-center justify-between border-t border-gray-200 pt-3">
            <p className="text-[10px] text-gray-400">Cert: <strong>{certSerial}</strong> &nbsp;|&nbsp; Issued: {fmtDate(noc.issue_date)}</p>
            <p className="text-[10px] text-gray-400">byebyeloan.online</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function BatchContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const ids = (searchParams.get('ids') ?? '').split(',').filter(Boolean);
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? '';

  const [nocs, setNocs] = useState<NOCRecord[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!ids.length) { router.push('/admin/dashboard'); return; }
    Promise.all(ids.map((id) => fetch(`/api/noc/${id}`).then((r) => r.json()).then((d) => d.noc)))
      .then((results) => setNocs(results.filter(Boolean)))
      .finally(() => setLoading(false));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center text-gray-400">Loading {ids.length} NOCs…</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Admin bar — hidden when printing */}
      <div className="print:hidden bg-[#006633] text-white px-6 py-4 flex items-center justify-between shadow sticky top-0 z-10">
        <div className="flex items-center gap-4">
          <button onClick={() => router.push('/admin/dashboard')} className="text-white/70 hover:text-white text-sm">
            ← Dashboard
          </button>
          <span className="font-extrabold">{nocs.length} NOCs Ready to Print</span>
        </div>
        <button
          onClick={() => window.print()}
          className="bg-[#F5A623] hover:bg-[#e09500] text-white font-bold px-6 py-2 rounded-xl text-sm transition-colors"
        >
          🖨 Print All {nocs.length} NOCs
        </button>
      </div>

      {/* Preview info — hidden when printing */}
      <div className="print:hidden container mx-auto px-4 py-4 max-w-2xl">
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm px-6 py-4">
          <p className="text-sm text-gray-600">
            <strong>{nocs.length} separate NOC certificates</strong> are shown below — one per loan app.
            Click <strong>Print All</strong> to print them as separate pages in one go.
          </p>
        </div>
      </div>

      {/* NOC certificates — stacked with page breaks */}
      <div className="container mx-auto px-4 pb-10 max-w-2xl print:max-w-full print:px-0 print:pb-0 space-y-8 print:space-y-0">
        {nocs.map((noc, i) => (
          <div key={noc.id} className={i < nocs.length - 1 ? 'print:page-break-after' : ''}>
            <NOCCertificate noc={noc} siteUrl={siteUrl} />
          </div>
        ))}
      </div>

      <style>{`
        @media print {
          @page { size: A4; margin: 15mm; }
          body { margin: 0; background: white; }
          .print\\:page-break-after { page-break-after: always; }
          .print-page { page-break-inside: avoid; border: 3px solid #006633 !important; }
        }
      `}</style>
    </div>
  );
}

export default function BatchPrintPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center text-gray-400">Loading…</div>}>
      <BatchContent />
    </Suspense>
  );
}
