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
      {/* Admin top bar — hidden when printing */}
      <div className="print:hidden bg-[#006633] text-white px-6 py-4 flex items-center justify-between shadow">
        <div className="flex items-center gap-4">
          <button onClick={() => router.push('/admin/dashboard')} className="text-white/70 hover:text-white text-sm">
            ← Dashboard
          </button>
          <span className="font-extrabold">NOC: {id.slice(0, 8).toUpperCase()}</span>
        </div>
        <div className="flex gap-3">
          <a
            href={verifyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/10 hover:bg-white/20 text-white font-semibold px-4 py-2 rounded-xl text-sm transition-colors"
          >
            View Public Page
          </a>
          <button
            onClick={() => window.print()}
            className="bg-[#F5A623] hover:bg-[#e09500] text-white font-bold px-4 py-2 rounded-xl text-sm transition-colors"
          >
            🖨 Print / Download PDF
          </button>
        </div>
      </div>

      {/* QR + URL info — admin only, hidden when printing */}
      <div className="print:hidden container mx-auto px-4 py-4 max-w-2xl">
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm px-6 py-4 flex flex-col sm:flex-row items-center gap-4">
          <img
            src={`https://api.qrserver.com/v1/create-qr-code/?size=80x80&data=${encodeURIComponent(verifyUrl)}`}
            alt="QR Preview"
            width={80}
            height={80}
            className="rounded-lg border border-gray-200 shrink-0"
          />
          <div className="flex-1 min-w-0">
            <p className="text-xs text-gray-400 mb-1 font-medium uppercase tracking-wide">Verification Link</p>
            <p className="text-sm font-mono text-[#006633] break-all">{verifyUrl}</p>
            <p className="text-xs text-gray-400 mt-2">
              This QR code and link are embedded in the printed NOC below.
            </p>
          </div>
        </div>
      </div>

      {/* ── PRINTABLE NOC CERTIFICATE ── */}
      <div className="container mx-auto px-4 pb-8 max-w-2xl print:max-w-full print:px-0 print:pb-0">
        <div
          id="noc-print"
          className="bg-white shadow-xl rounded-2xl overflow-hidden print:shadow-none print:rounded-none"
        >
          {/* Company header */}
          <div className="border-b-4 border-[#006633] px-10 pt-10 pb-6">
            <h1 className="text-2xl font-extrabold text-[#006633] uppercase tracking-wide">
              {noc.loan_app}
            </h1>
          </div>

          <div className="px-10 py-8 space-y-6">
            {/* NOC Title */}
            <h2 className="text-xl font-bold text-gray-900">NO OBJECTION CERTIFICATE (NOC)</h2>

            {/* Body paragraph */}
            <p className="text-gray-700 text-sm leading-relaxed">
              This is to certify that <strong>{noc.client_name}</strong>, holding CNIC No.{' '}
              <strong>{noc.cnic}</strong> and Mobile No. <strong>{noc.mobile}</strong>, has obtained
              a loan facility from <strong>{noc.loan_app}</strong>. The repayment schedule and
              installment details are mentioned below. Upon full settlement of the total outstanding
              amount, the company shall have no objection and no claim remaining against the
              above-mentioned customer.
            </p>

            {/* Installment Table */}
            <table className="w-full text-sm border border-gray-300 border-collapse">
              <thead>
                <tr className="border border-gray-300">
                  <th className="text-left px-4 py-2.5 font-semibold text-gray-700 border border-gray-300 bg-gray-50">
                    Installment No
                  </th>
                  <th className="text-left px-4 py-2.5 font-semibold text-gray-700 border border-gray-300 bg-gray-50">
                    Due Date
                  </th>
                  <th className="text-right px-4 py-2.5 font-semibold text-gray-700 border border-gray-300 bg-gray-50">
                    Amount (PKR)
                  </th>
                </tr>
              </thead>
              <tbody>
                {noc.installments.map((inst: Installment) => (
                  <tr key={inst.no} className="border border-gray-300">
                    <td className="px-4 py-2.5 border border-gray-300 text-gray-700">{inst.no}</td>
                    <td className="px-4 py-2.5 border border-gray-300 text-gray-700">{fmtDate(inst.due_date)}</td>
                    <td className="px-4 py-2.5 border border-gray-300 text-right text-gray-700 font-mono">{fmt(inst.amount)}</td>
                  </tr>
                ))}
                <tr className="border border-gray-300 font-bold">
                  <td colSpan={2} className="px-4 py-2.5 border border-gray-300 text-gray-900">Grand Total</td>
                  <td className="px-4 py-2.5 border border-gray-300 text-right text-gray-900 font-mono">{fmt(noc.total_amount)}</td>
                </tr>
              </tbody>
            </table>

            {/* QR Code + Signature */}
            <div className="flex justify-between items-end pt-4">
              <div>
                <p className="text-sm text-gray-600 mb-3">Verification QR Code:</p>
                <img
                  src={`https://api.qrserver.com/v1/create-qr-code/?size=130x130&data=${encodeURIComponent(verifyUrl)}`}
                  alt="Verification QR Code"
                  width={130}
                  height={130}
                  className="border border-gray-200"
                />
              </div>
              <div className="flex flex-col items-center">
                {/* Official Signature */}
                <img
                  src="/Official-signature.png"
                  alt="Authorized Signature"
                  className="h-20 w-auto object-contain mb-1"
                />
                <div className="w-64 border-t border-gray-500 pt-2 text-center">
                  <p className="text-sm text-gray-600">Authorized Signature &amp; Official Stamp</p>
                </div>
              </div>
            </div>

            {/* Footer */}
            <p className="text-xs text-gray-400 text-right border-t border-gray-100 pt-4">
              Issue Date: {fmtDate(noc.issue_date)} &nbsp;|&nbsp; NOC Ref: {id.slice(0, 8).toUpperCase()}
            </p>
          </div>
        </div>
      </div>

      {/* Print styles */}
      <style>{`
        @media print {
          body { margin: 0; }
          #noc-print { page-break-inside: avoid; }
        }
      `}</style>
    </div>
  );
}
