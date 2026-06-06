'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

const LOAN_APPS = [
  'Smart Qarza', 'Paisayaar', 'Aitemaad', 'Hakeem', 'Daira', 'Sahara',
  'Fauri Cash', 'Money Tap', 'PakCredit', 'Loan Lado', 'CashBazar', 'PaisaGhar', 'QarzMitra',
  'Abhi', 'ZoodPay', 'Muawin', 'Qist Bazaar', 'Tijara', 'Edufi', 'Taleem Connect',
  'Neem Paymenow', 'Nova Finance', 'Baadmay', 'Alif Shop',
  'Easypaisa', 'JazzCash', 'HBL Microfinance', 'Zindigi', 'Konnect by HBL', 'DOST',
];

type Installment = { no: number; due_date: string; amount: string };

const emptyRow = (n: number): Installment => ({ no: n, due_date: '', amount: '' });

export default function CreateNOCPage() {
  const router = useRouter();
  const [form, setForm] = useState({
    client_name: '',
    cnic: '',
    mobile: '',
    loan_app: '',
    issue_date: new Date().toISOString().split('T')[0],
  });
  const [installments, setInstallments] = useState<Installment[]>([emptyRow(1)]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const total = installments.reduce((s, i) => s + (parseFloat(i.amount) || 0), 0);

  function addRow() {
    setInstallments((prev) => [...prev, emptyRow(prev.length + 1)]);
  }

  function removeRow(idx: number) {
    setInstallments((prev) =>
      prev.filter((_, i) => i !== idx).map((r, i) => ({ ...r, no: i + 1 }))
    );
  }

  function updateRow(idx: number, field: keyof Installment, value: string) {
    setInstallments((prev) => prev.map((r, i) => (i === idx ? { ...r, [field]: value } : r)));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.loan_app) { setError('Please select a Loan App.'); return; }
    if (installments.some((i) => !i.due_date || !i.amount)) {
      setError('Please fill all installment rows.'); return;
    }
    setLoading(true);
    setError('');

    const payload = {
      ...form,
      total_amount: total,
      installments: installments.map((i) => ({
        no: i.no,
        due_date: i.due_date,
        amount: parseFloat(i.amount),
      })),
    };

    const res = await fetch('/api/noc', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    if (res.status === 401) { router.push('/admin'); return; }

    const data = await res.json();
    if (!res.ok) { setError(data.error || 'Failed to create NOC.'); setLoading(false); return; }

    router.push(`/admin/noc/${data.noc.id}`);
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top bar */}
      <div className="bg-[#006633] text-white px-6 py-4 flex items-center gap-4 shadow">
        <button onClick={() => router.push('/admin/dashboard')} className="text-white/70 hover:text-white text-sm">
          ← Dashboard
        </button>
        <span className="font-extrabold text-lg">Create New NOC</span>
      </div>

      <div className="container mx-auto px-4 py-8 max-w-2xl">
        <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8 space-y-6">

          {/* Client details */}
          <section>
            <h2 className="font-bold text-gray-900 mb-4 text-base">Client Details</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { name: 'client_name', label: 'Client Full Name', placeholder: 'e.g. Muhammad Ali Khan', required: true },
                { name: 'cnic', label: 'CNIC No', placeholder: '4210112345671', required: true },
                { name: 'mobile', label: 'Mobile No', placeholder: '03001234567', required: true },
                { name: 'issue_date', label: 'Issue Date', placeholder: '', required: true, type: 'date' },
              ].map(({ name, label, placeholder, required, type }) => (
                <div key={name}>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">{label}</label>
                  <input
                    type={type ?? 'text'}
                    value={form[name as keyof typeof form]}
                    onChange={(e) => setForm((f) => ({ ...f, [name]: e.target.value }))}
                    placeholder={placeholder}
                    required={required}
                    className="w-full border-2 border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-[#006633] transition-colors"
                  />
                </div>
              ))}
            </div>

            {/* Loan App select */}
            <div className="mt-4">
              <label className="block text-sm font-semibold text-gray-700 mb-1.5">Loan App / Bank</label>
              <select
                value={form.loan_app}
                onChange={(e) => setForm((f) => ({ ...f, loan_app: e.target.value }))}
                required
                className="w-full border-2 border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-[#006633] transition-colors bg-white"
              >
                <option value="">Select loan app or bank…</option>
                {LOAN_APPS.map((app) => (
                  <option key={app} value={app}>{app}</option>
                ))}
              </select>
            </div>
          </section>

          {/* Installments */}
          <section>
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-bold text-gray-900 text-base">Installments</h2>
              <button type="button" onClick={addRow}
                className="text-sm text-[#006633] font-semibold hover:underline">
                + Add Row
              </button>
            </div>

            <div className="rounded-xl border border-gray-200 overflow-hidden">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-200">
                    <th className="text-left px-3 py-2 font-semibold text-gray-600 w-12">#</th>
                    <th className="text-left px-3 py-2 font-semibold text-gray-600">Due Date</th>
                    <th className="text-left px-3 py-2 font-semibold text-gray-600">Amount (PKR)</th>
                    <th className="w-8" />
                  </tr>
                </thead>
                <tbody>
                  {installments.map((inst, idx) => (
                    <tr key={idx} className="border-b border-gray-100">
                      <td className="px-3 py-2 text-gray-500">{inst.no}</td>
                      <td className="px-3 py-2">
                        <input type="date" value={inst.due_date}
                          onChange={(e) => updateRow(idx, 'due_date', e.target.value)}
                          required
                          className="w-full border border-gray-200 rounded-lg px-2 py-1.5 text-sm focus:outline-none focus:border-[#006633]" />
                      </td>
                      <td className="px-3 py-2">
                        <input type="number" value={inst.amount} min="0" step="0.01"
                          onChange={(e) => updateRow(idx, 'amount', e.target.value)}
                          placeholder="0.00" required
                          className="w-full border border-gray-200 rounded-lg px-2 py-1.5 text-sm focus:outline-none focus:border-[#006633]" />
                      </td>
                      <td className="px-2 py-2">
                        {installments.length > 1 && (
                          <button type="button" onClick={() => removeRow(idx)}
                            className="text-red-400 hover:text-red-600 text-lg font-bold leading-none">×</button>
                        )}
                      </td>
                    </tr>
                  ))}
                  <tr className="bg-gray-50 font-bold">
                    <td colSpan={2} className="px-3 py-3 text-gray-900">Grand Total</td>
                    <td className="px-3 py-3 text-gray-900 font-mono">
                      PKR {total.toLocaleString('en-PK', { minimumFractionDigits: 2 })}
                    </td>
                    <td />
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 text-sm rounded-xl px-4 py-3">{error}</div>
          )}

          <button type="submit" disabled={loading}
            className="w-full bg-[#006633] hover:bg-[#004d26] disabled:opacity-60 text-white font-bold py-4 rounded-xl transition-colors text-base">
            {loading ? 'Generating NOC…' : '✓ Generate NOC & QR Code'}
          </button>
        </form>
      </div>
    </div>
  );
}
