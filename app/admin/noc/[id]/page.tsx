'use client';

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import type { NOCRecord, Installment } from '@/lib/supabase';

function fmt(n: number) {
  return n.toLocaleString('en-PK', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}
function fmtDate(d: string) {
  const [y, m, day] = d.split('-');
  return `${day}-${m}-${y}`;
}

export default function AdminNOCPage() {
  const { id } = useParams<{ id: string }>();
  const router = useRouter();
  const [noc, setNoc] = useState<NOCRecord | null>(null);
  const [loading, setLoading] = useState(true);
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? '';
  const verifyUrl = `${siteUrl}/verify/${id}`;
  const certSerial = `BBL-${new Date().getFullYear()}-${id.slice(0, 8).toUpperCase()}`;

  useEffect(() => {
    fetch(`/api/noc/${id}`)
      .then((r) => { if (r.status === 404) { router.push('/admin/dashboard'); return null; } return r.json(); })
      .then((d) => { if (d) setNoc(d.noc); })
      .finally(() => setLoading(false));
  }, [id, router]);

  if (loading) return <div className="min-h-screen flex items-center justify-center text-gray-400">Loading…</div>;
  if (!noc) return null;

  return (
    <div className="min-h-screen bg-gray-100">

      {/* ── Admin bar (hidden on print) ── */}
      <div className="print:hidden bg-[#006633] text-white px-6 py-4 flex items-center justify-between shadow">
        <div className="flex items-center gap-4">
          <button onClick={() => router.push('/admin/dashboard')} className="text-white/70 hover:text-white text-sm">
            ← Dashboard
          </button>
          <span className="font-extrabold">NOC: {certSerial}</span>
        </div>
        <div className="flex gap-3">
          <a href={verifyUrl} target="_blank" rel="noopener noreferrer"
            className="bg-white/10 hover:bg-white/20 text-white font-semibold px-4 py-2 rounded-xl text-sm transition-colors">
            View Public Page
          </a>
          <button onClick={() => window.print()}
            className="bg-[#F5A623] hover:bg-[#e09500] text-white font-bold px-4 py-2 rounded-xl text-sm transition-colors">
            🖨 Print / Download PDF
          </button>
        </div>
      </div>

      {/* ── QR info bar (hidden on print) ── */}
      <div className="print:hidden container mx-auto px-4 py-4 max-w-2xl">
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm px-6 py-4 flex items-center gap-4">
          <img src={`https://api.qrserver.com/v1/create-qr-code/?size=64x64&data=${encodeURIComponent(verifyUrl)}`}
            alt="QR" width={64} height={64} className="rounded border border-gray-200 shrink-0" />
          <div>
            <p className="text-xs text-gray-400 mb-0.5 uppercase tracking-wide font-medium">Verification Link</p>
            <p className="text-sm font-mono text-[#006633] break-all">{verifyUrl}</p>
          </div>
        </div>
      </div>

      {/* ── PRINTABLE CERTIFICATE ── */}
      <div className="container mx-auto px-4 pb-10 max-w-2xl print:max-w-full print:px-0 print:pb-0">
        <div id="noc-print" className="bg-white shadow-lg print:shadow-none" style={{ borderRadius: '4px' }}>
          <div className="px-12 pt-10 pb-10">

            {/* ── HEADER: logo left | cert info right ── */}
            <div className="flex items-start justify-between mb-2">
              <img src="/state-logo.png" alt="State Logo" className="h-16 w-auto object-contain" />
              <div className="text-right">
                <p className="text-[10px] text-gray-400 uppercase tracking-wider">Certificate No.</p>
                <p className="text-sm font-bold text-[#006633] tracking-wider mt-0.5">{certSerial}</p>
                <p className="text-[10px] text-gray-400 mt-1">Issue Date: {fmtDate(noc.issue_date)}</p>
              </div>
            </div>

            {/* ── Company name + green underline ── */}
            <div className="mt-4 pb-4 border-b-2 border-[#006633]">
              <h1 className="text-2xl font-extrabold text-[#006633] uppercase tracking-wide">
                {noc.loan_app}
              </h1>
            </div>

            {/* ── NOC Title ── */}
            <div className="mt-8 mb-6">
              <h2 className="text-lg font-bold text-gray-900">NO OBJECTION CERTIFICATE (NOC)</h2>
            </div>

            {/* ── Body paragraph ── */}
            <p className="text-gray-700 text-sm leading-relaxed mb-8">
              This is to certify that <strong>{noc.client_name}</strong>, holding CNIC No.{' '}
              <strong>{noc.cnic}</strong> and Mobile No. <strong>{noc.mobile}</strong>, has obtained
              a loan facility from <strong>{noc.loan_app}</strong>. The repayment schedule and
              installment details are mentioned below. Upon full settlement of the total outstanding
              amount, the company shall have no objection and no claim remaining against the
              above-mentioned customer.
            </p>

            {/* ── Installment table ── */}
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

            {/* ── QR code + Signature ── */}
            <div className="flex justify-between items-end">
              <div>
                <p className="text-sm text-gray-600 mb-3">Verification QR Code:</p>
                <img
                  src={`https://api.qrserver.com/v1/create-qr-code/?size=130x130&data=${encodeURIComponent(verifyUrl)}`}
                  alt="Verification QR Code" width={130} height={130}
                />
                <p className="text-[9px] text-gray-400 mt-1 max-w-[130px] break-all">{verifyUrl}</p>
              </div>
              <div className="flex flex-col items-center">
                <img src="/Official-signature.png" alt="Authorized Signature" className="h-16 w-auto object-contain mb-2" />
                <div className="w-64 border-t border-gray-400 pt-2 text-center">
                  <p className="text-sm text-gray-600">Authorized Signature &amp; Official Stamp</p>
                </div>
              </div>
            </div>

            {/* ── Tiny footer ── */}
            <p className="text-[9px] text-gray-400 text-center mt-8 border-t border-gray-100 pt-3">
              This certificate is digitally issued by ByeBye Loan (byebyeloan.online). Any alteration is an offense under PECA 2016. &nbsp;|&nbsp; Cert: {certSerial}
            </p>

          </div>
        </div>
      </div>

      <style>{`
        @media print {
          @page { size: A4; margin: 15mm; }
          body { margin: 0; background: white; }
          #noc-print { page-break-inside: avoid; }
        }
      `}</style>
    </div>
  );
}
