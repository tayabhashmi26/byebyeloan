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
    <div className="bg-white print-page" style={{ borderRadius: '4px' }}>
      <div className="px-12 pt-10 pb-10">

        {/* Header */}
        <div className="flex items-start justify-between mb-2">
          <img src="/state-logo.png" alt="State Logo" className="h-16 w-auto object-contain" />
          <div className="text-right">
            <p className="text-[10px] text-gray-400 uppercase tracking-wider">Certificate No.</p>
            <p className="text-sm font-bold text-[#006633] tracking-wider mt-0.5">{certSerial}</p>
            <p className="text-[10px] text-gray-400 mt-1">Issue Date: {fmtDate(noc.issue_date)}</p>
          </div>
        </div>

        <div className="mt-4 pb-4 border-b-2 border-[#006633]">
          <h1 className="text-2xl font-extrabold text-[#006633] uppercase tracking-wide">{noc.loan_app}</h1>
        </div>

        <div className="mt-8 mb-6">
          <h2 className="text-lg font-bold text-gray-900">NO OBJECTION CERTIFICATE (NOC)</h2>
        </div>

        <p className="text-gray-700 text-sm leading-relaxed mb-8">
          This is to certify that <strong>{noc.client_name}</strong>, holding CNIC No.{' '}
          <strong>{noc.cnic}</strong> and Mobile No. <strong>{noc.mobile}</strong>, has obtained
          a loan facility from <strong>{noc.loan_app}</strong>. The repayment schedule and
          installment details are mentioned below. Upon full settlement of the total outstanding
          amount, the company shall have no objection and no claim remaining against the
          above-mentioned customer.
        </p>

        <table className="w-full text-sm mb-10" style={{ borderCollapse: 'collapse', border: '1px solid #d1d5db' }}>
          <thead>
            <tr style={{ background: '#f3f4f6' }}>
              <th className="text-left px-4 py-2.5 font-semibold text-gray-700" style={{ border: '1px solid #d1d5db' }}>Installment No</th>
              <th className="text-left px-4 py-2.5 font-semibold text-gray-700" style={{ border: '1px solid #d1d5db' }}>Due Date</th>
              <th className="text-right px-4 py-2.5 font-semibold text-gray-700" style={{ border: '1px solid #d1d5db' }}>Amount (PKR)</th>
            </tr>
          </thead>
          <tbody>
            {noc.installments.map((inst: Installment) => (
              <tr key={inst.no}>
                <td className="px-4 py-2.5 text-gray-700" style={{ border: '1px solid #d1d5db' }}>{inst.no}</td>
                <td className="px-4 py-2.5 text-gray-700" style={{ border: '1px solid #d1d5db' }}>{fmtDate(inst.due_date)}</td>
                <td className="px-4 py-2.5 text-right text-gray-700 font-mono" style={{ border: '1px solid #d1d5db' }}>{fmt(inst.amount)}</td>
              </tr>
            ))}
            <tr>
              <td colSpan={2} className="px-4 py-2.5 font-bold text-gray-900" style={{ border: '1px solid #d1d5db' }}>Grand Total</td>
              <td className="px-4 py-2.5 text-right font-bold text-gray-900 font-mono" style={{ border: '1px solid #d1d5db' }}>{fmt(noc.total_amount)}</td>
            </tr>
          </tbody>
        </table>

        <div className="flex justify-between items-end">
          <div>
            <p className="text-sm text-gray-600 mb-3">Verification QR Code:</p>
            <img src={`https://api.qrserver.com/v1/create-qr-code/?size=120x120&data=${encodeURIComponent(verifyUrl)}`}
              alt="Verification QR Code" width={120} height={120} />
            <p className="text-[9px] text-gray-400 mt-1 max-w-[120px] break-all">{verifyUrl}</p>
          </div>
          <div className="flex flex-col items-center">
            <img src="/Official-signature.png" alt="Authorized Signature" className="h-16 w-auto object-contain mb-2" />
            <div className="w-56 border-t border-gray-400 pt-2 text-center">
              <p className="text-sm text-gray-600">Authorized Signature &amp; Official Stamp</p>
            </div>
          </div>
        </div>

        <p className="text-[9px] text-gray-400 text-center mt-8 border-t border-gray-100 pt-3">
          Digitally issued by ByeBye Loan (byebyeloan.online). Any alteration is an offense under PECA 2016. &nbsp;|&nbsp; Cert: {certSerial}
        </p>
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
  const [copied, setCopied] = useState(false);

  function copyAllLinks() {
    const links = nocs
      .map((noc) => `${noc.loan_app} — ${noc.client_name}\n${siteUrl}/verify/${noc.id}`)
      .join('\n\n');
    navigator.clipboard.writeText(links).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    });
  }

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
        <div className="flex gap-3">
          <button
            onClick={copyAllLinks}
            className={`font-bold px-5 py-2 rounded-xl text-sm transition-colors ${copied ? 'bg-white text-[#006633]' : 'bg-white/15 hover:bg-white/25 text-white'}`}
          >
            {copied ? '✓ Copied!' : '📋 Copy All Links'}
          </button>
          <button
            onClick={() => window.print()}
            className="bg-[#F5A623] hover:bg-[#e09500] text-white font-bold px-6 py-2 rounded-xl text-sm transition-colors"
          >
            🖨 Print All {nocs.length} NOCs
          </button>
        </div>
      </div>

      {/* Links panel — hidden when printing */}
      <div className="print:hidden container mx-auto px-4 py-4 max-w-2xl space-y-3">
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm px-6 py-4">
          <div className="flex items-center justify-between mb-3">
            <p className="text-sm font-bold text-gray-700">Verification Links ({nocs.length})</p>
            <button
              onClick={copyAllLinks}
              className={`text-xs font-bold px-3 py-1.5 rounded-lg transition-colors ${copied ? 'bg-[#006633] text-white' : 'bg-gray-100 hover:bg-gray-200 text-gray-700'}`}
            >
              {copied ? '✓ Copied All!' : 'Copy All'}
            </button>
          </div>
          <div className="space-y-2">
            {nocs.map((noc) => {
              const url = `${siteUrl}/verify/${noc.id}`;
              return (
                <div key={noc.id} className="flex items-center gap-3 bg-gray-50 rounded-xl px-4 py-2.5">
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-bold text-[#006633]">{noc.loan_app}</p>
                    <p className="text-xs text-gray-400 font-mono truncate">{url}</p>
                  </div>
                  <button
                    onClick={() => navigator.clipboard.writeText(url)}
                    className="shrink-0 text-[10px] font-semibold text-gray-400 hover:text-[#006633] transition-colors"
                  >
                    Copy
                  </button>
                </div>
              );
            })}
          </div>
        </div>
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm px-6 py-3">
          <p className="text-sm text-gray-500">
            <strong>{nocs.length} separate NOC certificates</strong> below — click <strong>Print All</strong> to print as separate A4 pages.
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
