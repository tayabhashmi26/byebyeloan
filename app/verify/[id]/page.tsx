import { notFound } from 'next/navigation';
import { supabase, NOCRecord, Installment } from '@/lib/supabase';
import type { Metadata } from 'next';

type Props = { params: Promise<{ id: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const { data } = await supabase.from('noc_records').select('client_name,loan_app').eq('id', id).single();
  if (!data) return { title: 'NOC Not Found' };
  return {
    title: `NOC Verified — ${data.client_name} | ${data.loan_app}`,
    description: `Verified No Objection Certificate for ${data.client_name} issued by ${data.loan_app}. Loan fully settled.`,
    robots: { index: false, follow: false },
  };
}

function fmt(amount: number) {
  return amount.toLocaleString('en-PK', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

function fmtDate(d: string) {
  const [y, m, day] = d.split('-');
  return `${day}-${m}-${y}`;
}

export default async function VerifyPage({ params }: Props) {
  const { id } = await params;

  const { data: noc, error } = await supabase
    .from('noc_records')
    .select('*')
    .eq('id', id)
    .single<NOCRecord>();

  if (error || !noc) notFound();

  const verifyUrl = `${process.env.NEXT_PUBLIC_SITE_URL}/verify/${id}`;

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-8 px-4">

      {/* Verified banner */}
      <div className="w-full max-w-2xl mb-4">
        <div className="flex items-center justify-center gap-3 bg-[#006633] text-white rounded-2xl px-6 py-3 shadow-lg">
          <svg className="w-6 h-6 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span className="font-bold text-lg tracking-wide">✓ NOC VERIFIED — Document is Authentic</span>
        </div>
      </div>

      {/* NOC Certificate Card */}
      <div className="w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden print:shadow-none print:rounded-none">

        {/* Header */}
        <div className="border-b-4 border-[#006633] px-8 pt-8 pb-5">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-[#006633] uppercase tracking-wide">
            {noc.loan_app}
          </h1>
        </div>

        <div className="px-8 py-6 space-y-6">
          {/* Title */}
          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-4">
              NO OBJECTION CERTIFICATE (NOC)
            </h2>

            {/* Body text */}
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
              This is to certify that <strong>{noc.client_name}</strong>, holding CNIC No.{' '}
              <strong>{noc.cnic}</strong> and Mobile No. <strong>{noc.mobile}</strong>, has
              obtained a loan facility from <strong>{noc.loan_app}</strong>. The repayment
              schedule and installment details are mentioned below. Upon full settlement of the
              total outstanding amount, the company shall have no objection and no claim remaining
              against the above-mentioned customer.
            </p>
          </div>

          {/* Installments table */}
          <div className="overflow-x-auto rounded-xl border border-gray-200">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-200">
                  <th className="text-left px-4 py-3 font-semibold text-gray-700">Installment No</th>
                  <th className="text-left px-4 py-3 font-semibold text-gray-700">Due Date</th>
                  <th className="text-right px-4 py-3 font-semibold text-gray-700">Amount (PKR)</th>
                </tr>
              </thead>
              <tbody>
                {noc.installments.map((inst: Installment) => (
                  <tr key={inst.no} className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="px-4 py-3 text-gray-700">{inst.no}</td>
                    <td className="px-4 py-3 text-gray-700">{fmtDate(inst.due_date)}</td>
                    <td className="px-4 py-3 text-right text-gray-700 font-mono">{fmt(inst.amount)}</td>
                  </tr>
                ))}
                <tr className="bg-gray-50 font-bold">
                  <td colSpan={2} className="px-4 py-3 text-gray-900">Grand Total</td>
                  <td className="px-4 py-3 text-right text-gray-900 font-mono">{fmt(noc.total_amount)}</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* QR + Signature row */}
          <div className="flex flex-col sm:flex-row justify-between items-start gap-6 pt-2">
            <div>
              <p className="text-sm text-gray-600 mb-2 font-medium">Verification QR Code:</p>
              {/* Inline SVG QR placeholder — actual QR rendered via img from a QR API */}
              <img
                src={`https://api.qrserver.com/v1/create-qr-code/?size=130x130&data=${encodeURIComponent(verifyUrl)}`}
                alt="Verification QR Code"
                width={130}
                height={130}
                className="border border-gray-200 rounded-lg"
              />
              <p className="text-[10px] text-gray-400 mt-1 max-w-[130px] break-all">
                {verifyUrl}
              </p>
            </div>

            <div className="flex flex-col items-end justify-end flex-1">
              <div className="mt-16 border-t border-gray-400 pt-2 text-right w-64">
                <p className="text-sm text-gray-600">Authorized Signature &amp; Official Stamp</p>
              </div>
            </div>
          </div>

          {/* Issue date */}
          <p className="text-xs text-gray-400 text-right">
            Issue Date: {fmtDate(noc.issue_date)} &nbsp;|&nbsp; NOC ID: {id.slice(0, 8).toUpperCase()}
          </p>
        </div>
      </div>

      {/* Back link */}
      <p className="mt-6 text-sm text-gray-500">
        Powered by{' '}
        <a href="/" className="text-[#006633] font-semibold hover:underline">
          ByeBye Loan
        </a>{' '}
        — Pakistan Loan Clearing Service
      </p>
    </div>
  );
}
