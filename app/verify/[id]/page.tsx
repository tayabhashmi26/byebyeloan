import { notFound } from 'next/navigation';
import { supabase, NOCRecord, Installment } from '@/lib/supabase';
import type { Metadata } from 'next';
import { SITE_URL, PHONE_DISPLAY } from '@/lib/constants';

type Props = { params: Promise<{ id: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const { data } = await supabase.from('noc_records').select('client_name,loan_app').eq('id', id).single();
  if (!data) return { title: 'NOC Not Found' };
  return {
    title: `NOC Verified — ${data.client_name} | ${data.loan_app}`,
    description: `Verified No Objection Certificate for ${data.client_name} issued by ${data.loan_app}. Loan fully settled by ByeBye Loan.`,
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
    .from('noc_records').select('*').eq('id', id).single<NOCRecord>();

  if (error || !noc) notFound();

  const verifyUrl = `${SITE_URL}/verify/${id}`;
  const certSerial = `BBL-${new Date().getFullYear()}-${id.slice(0, 8).toUpperCase()}`;
  const verifiedAt = new Date().toLocaleString('en-PK', {
    timeZone: 'Asia/Karachi',
    day: '2-digit', month: 'long', year: 'numeric',
    hour: '2-digit', minute: '2-digit', hour12: true,
  });
  const shareText = `Mera loan officially clear ho gaya hai. Verified NOC dekhein: ${verifyUrl}`;
  const whatsappShare = `https://wa.me/?text=${encodeURIComponent(shareText)}`;

  return (
    <div className="min-h-screen flex flex-col items-center py-6 px-4" style={{ background: '#F0F4F8' }}>

      {/* ── Verified banner ── */}
      <div className="w-full max-w-2xl mb-5">
        <div className="flex items-center justify-center gap-3 bg-[#006633] text-white rounded-2xl px-6 py-4 shadow-lg">
          <svg className="w-7 h-7 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <div>
            <p className="font-extrabold text-lg leading-tight">DIGITALLY VERIFIED — Document is Authentic</p>
            <p className="text-green-200 text-xs mt-0.5">Verified on: {verifiedAt} (PKT)</p>
          </div>
        </div>
      </div>

      {/* ── Certificate card ── */}
      <div className="w-full max-w-2xl bg-white shadow-xl" style={{ borderRadius: '4px' }}>
        <div className="px-10 pt-9 pb-10">

          {/* ── Header: logo left | cert info right ── */}
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

          {/* ── QR + Signature ── */}
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
            Digitally issued by ByeBye Loan (byebyeloan.online). Any alteration is an offense under PECA 2016. &nbsp;|&nbsp; Cert: {certSerial}
          </p>

        </div>
      </div>

      {/* ── Action buttons ── */}
      <div className="w-full max-w-2xl mt-5 flex flex-col sm:flex-row gap-3">
        <a href={whatsappShare} target="_blank" rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1db954] text-white font-bold py-3.5 rounded-2xl transition-colors shadow text-sm">
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
          Share This NOC on WhatsApp
        </a>
        <a href={`https://wa.me/923176619813?text=${encodeURIComponent('Assalam o Alaikum! Mujhe apna loan clear karna hai.')}`}
          target="_blank" rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 bg-[#006633] hover:bg-[#004d26] text-white font-bold py-3.5 rounded-2xl transition-colors shadow text-sm">
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
          </svg>
          Contact ByeBye Loan
        </a>
      </div>

      <p className="mt-5 text-xs text-gray-400 text-center">
        Issued by <a href="/" className="text-[#006633] font-semibold hover:underline">ByeBye Loan</a>
        {' '}— Pakistan Ka #1 Loan Clearing Service &nbsp;|&nbsp; {PHONE_DISPLAY}
      </p>
    </div>
  );
}
