'use client';

import { useState, useEffect } from 'react';
import { useRouter, useParams } from 'next/navigation';

const LOAN_APPS = [
  'Smart Qarza', 'Paisayaar', 'Aitemaad', 'Hakeem', 'Daira', 'Sahara',
  'Fauri Cash', 'Money Tap', 'PakCredit', 'Loan Lado', 'CashBazar', 'PaisaGhar', 'QarzMitra',
  'Abhi', 'ZoodPay', 'Muawin', 'Qist Bazaar', 'Tijara', 'Edufi', 'Taleem Connect',
  'Neem Paymenow', 'Nova Finance', 'Baadmay', 'Alif Shop',
  'Easypaisa', 'JazzCash', 'HBL Microfinance', 'Zindigi', 'Konnect by HBL', 'DOST',
];

type Installment = { no: number; due_date: string; amount: string };

export default function EditNOCPage() {
  const { id } = useParams<{ id: string }>();
  const router = useRouter();

  const [form, setForm] = useState({
    client_name: '',
    cnic: '',
    mobile: '',
    loan_app: '',
    issue_date: '',
  });
  const [installments, setInstallments] = useState<Installment[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  // Load existing record
  useEffect(() => {
    fetch(`/api/noc/${id}`)
      .then((r) => { if (r.status === 404) { router.push('/admin/dashboard'); return null; } return r.json(); })
      .then((d) => {
        if (!d) return;
        const noc = d.noc;
        setForm({
          client_name: noc.client_name,
          cnic: noc.cnic,
          mobile: noc.mobile,
          loan_app: noc.loan_app,
          issue_date: noc.issue_date,
        });
        setInstallments(
          noc.installments.map((i: { no: number; due_date: string; amount: number }) => ({
            no: i.no,
            due_date: i.due_date,
            amount: String(i.amount),
          }))
        );
      })
      .finally(() => setLoading(false));
  }, [id, router]);

  const total = installments.reduce((s, i) => s + (parseFloat(i.amount) || 0), 0);

  function addRow() {
    setInstallments((prev) => [...prev, { no: prev.length + 1, due_date: '', amount: '' }]);
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
    setSaving(true);
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

    const res = await fetch(`/api/noc/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    if (res.status === 401) { router.push('/admin'); return; }

    const data = await res.json();
    if (!res.ok) { setError(data.error || 'Failed to save changes.'); setSaving(false); return; }

    setSuccess(true);
    setTimeout(() => router.push(`/admin/noc/${id}`), 1000);
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center text-gray-400">
        Loading NOC…
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top bar */}
      <div className="bg-[#006633] text-white px-6 py-4 flex items-center gap-4 shadow">
        <button onClick={() => router.push('/admin/dashboard')} className="text-white/70 hover:text-white text-sm">
          ← Dashboard
        </button>
        <span className="font-extrabold text-lg">Edit NOC — {id.slice(0, 8).toUpperCase()}</span>
      </div>

      <div className="container mx-auto px-4 py-8 max-w-2xl">
        <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8 space-y-6">

          {/* Client Details */}
          <section>
            <h2 className="font-bold text-gray-900 mb-4 text-base">Client Details</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { name: 'client_name', label: 'Client Full Name', type: 'text' },
                { name: 'cnic',        label: 'CNIC No',          type: 'text' },
                { name: 'mobile',      label: 'Mobile No',        type: 'text' },
                { name: 'issue_date',  label: 'Issue Date',       type: 'date' },
              ].map(({ name, label, type }) => (
                <div key={name}>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">{label}</label>
                  <input
                    type={type}
                    value={form[name as keyof typeof form]}
                    onChange={(e) => setForm((f) => ({ ...f, [name]: e.target.value }))}
                    required
                    className="w-full border-2 border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-[#006633] transition-colors"
                  />
                </div>
              ))}
            </div>

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
          {success && (
            <div className="bg-green-50 border border-green-200 text-green-700 text-sm rounded-xl px-4 py-3 font-semibold">
              ✓ Changes saved! Redirecting to NOC…
            </div>
          )}

          <div className="flex gap-3">
            <button type="button" onClick={() => router.push('/admin/dashboard')}
              className="flex-1 border-2 border-gray-200 text-gray-600 font-semibold py-3.5 rounded-xl hover:bg-gray-50 transition-colors text-sm">
              Cancel
            </button>
            <button type="submit" disabled={saving || success}
              className="flex-2 flex-grow bg-[#006633] hover:bg-[#004d26] disabled:opacity-60 text-white font-bold py-3.5 rounded-xl transition-colors text-base">
              {saving ? 'Saving…' : '✓ Save Changes'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
