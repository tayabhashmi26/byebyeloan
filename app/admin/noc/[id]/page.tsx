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

      {/* ── Admin top bar (hidden when printing) ── */}
      <div className="print:hidden bg-[#006633] text-white px-6 py-4 flex items-center justify-between shadow">
        <div className="flex items-center gap-4">
          <button onClick={() => router.push('/admin/dashboard')} className="text-white/70 hover:text-white text-sm">
            ← Dashboard
          </button>
          <span className="font-extrabold">NOC: {certSerial}</span>
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

      {/* ── QR + URL info (admin only, hidden when printing) ── */}
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
            <p className="text-xs text-gray-400 mt-2">Share this link or the QR with the client to verify their NOC.</p>
          </div>
        </div>
      </div>

      {/* ── PRINTABLE NOC CERTIFICATE ── */}
      <div className="container mx-auto px-4 pb-8 max-w-2xl print:max-w-full print:px-0 print:pb-0">
        <div
          id="noc-print"
          className="bg-white shadow-xl rounded-2xl overflow-hidden print:shadow-none print:rounded-none"
          style={{ border: '3px solid #006633' }}
        >
          {/* Inner decorative border */}
          <div style={{ border: '1px solid #00663330', margin: '6px', borderRadius: '4px', minHeight: '100%' }}>

            {/* ── LETTERHEAD ── */}
            <div className="flex items-center justify-between px-10 pt-8 pb-6 border-b-4 border-[#006633]">
              <div className="flex items-center gap-4">
                <img
                  src="/state-logo.png"
                  alt="State Logo"
                  className="h-14 w-auto object-contain"
                />
              </div>
              <div className="text-right">
                <p className="text-[10px] text-gray-500 font-semibold uppercase tracking-wider">Certificate No.</p>
                <p className="text-sm font-extrabold text-[#006633] tracking-widest mt-0.5">{certSerial}</p>
                <p className="text-[10px] text-gray-400 mt-1">Issue Date: {fmtDate(noc.issue_date)}</p>
              </div>
            </div>

            <div className="px-10 py-8 space-y-5">

              {/* ── TITLE + SETTLEMENT BADGE ── */}
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs text-gray-500 font-semibold uppercase tracking-widest mb-1">{noc.loan_app}</p>
                  <h1 className="text-xl font-extrabold text-gray-900">NO OBJECTION CERTIFICATE (NOC)</h1>
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

              {/* ── BODY PARAGRAPH ── */}
              <p className="text-gray-700 text-sm leading-relaxed border-l-4 border-[#006633] pl-4 py-1 bg-[#F0F7F4] rounded-r-lg">
                This is to certify that <strong>{noc.client_name}</strong>, holding CNIC No.{' '}
                <strong>{noc.cnic}</strong> and Mobile No. <strong>{noc.mobile}</strong>, has obtained
                a loan facility from <strong>{noc.loan_app}</strong>. The repayment schedule and
                installment details are mentioned below. Upon full settlement of the total outstanding
                amount, the company shall have no objection and no claim remaining against the
                above-mentioned customer.
              </p>

              {/* ── INSTALLMENT TABLE ── */}
              <table className="w-full text-sm border-collapse overflow-hidden rounded-xl" style={{ border: '1px solid #e5e7eb' }}>
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

              {/* ── QR CODE + SIGNATURE ── */}
              <div className="flex justify-between items-end pt-2">
                <div>
                  <p className="text-xs text-gray-500 mb-2 font-semibold uppercase tracking-wide">Scan to Verify</p>
                  <img
                    src={`https://api.qrserver.com/v1/create-qr-code/?size=130x130&data=${encodeURIComponent(verifyUrl)}`}
                    alt="Verification QR Code"
                    width={130}
                    height={130}
                    className="border-2 border-[#006633] rounded-lg"
                  />
                  <p className="text-[10px] text-gray-400 mt-1 max-w-[130px] break-all">{verifyUrl}</p>
                </div>
                <div className="flex flex-col items-center">
                  <img
                    src="/Official-signature.png"
                    alt="Authorized Signature"
                    className="h-20 w-auto object-contain mb-1"
                  />
                  <div className="w-64 border-t-2 border-[#006633] pt-2 text-center">
                    <p className="text-sm font-bold text-gray-700">Authorized Signature &amp; Official Stamp</p>
                    <p className="text-[10px] text-gray-500 mt-0.5">ByeBye Loan — Pakistan</p>
                  </div>
                </div>
              </div>

              {/* ── LEGAL NOTICE ── */}
              <div className="bg-red-50 border border-red-200 rounded-xl px-4 py-2.5 flex gap-2 items-start">
                <svg className="w-4 h-4 text-red-500 shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M8.485 2.495c.673-1.167 2.357-1.167 3.03 0l6.28 10.875c.673 1.167-.17 2.625-1.516 2.625H3.72c-1.347 0-2.189-1.458-1.515-2.625L8.485 2.495zM10 5a.75.75 0 01.75.75v3.5a.75.75 0 01-1.5 0v-3.5A.75.75 0 0110 5zm0 9a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                </svg>
                <p className="text-[10px] text-red-700 leading-relaxed">
                  <strong>Anti-Tampering Notice:</strong> Any alteration or forgery of this certificate is a criminal offense
                  under <strong>PECA 2016 (Section 36)</strong>. Verify authenticity by scanning the QR code.
                </p>
              </div>

              {/* ── FOOTER ── */}
              <div className="flex items-center justify-between border-t border-gray-200 pt-3">
                <p className="text-[10px] text-gray-400">
                  Cert: <strong>{certSerial}</strong> &nbsp;|&nbsp; Issued: {fmtDate(noc.issue_date)}
                </p>
                <p className="text-[10px] text-gray-400">byebyeloan.online</p>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* ── Print styles ── */}
      <style>{`
        @media print {
          @page { size: A4; margin: 15mm; }
          body { margin: 0; background: white; }
          #noc-print { page-break-inside: avoid; border: 3px solid #006633 !important; }
        }
      `}</style>
    </div>
  );
}
