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
type LoanSection = { id: number; loan_app: string; installments: Installment[] };

const newInstallment = (n: number): Installment => ({ no: n, due_date: '', amount: '' });
const newSection = (id: number): LoanSection => ({ id, loan_app: '', installments: [newInstallment(1)] });

export default function CreateNOCPage() {
  const router = useRouter();
  const [client, setClient] = useState({
    client_name: '', cnic: '', mobile: '',
    issue_date: new Date().toISOString().split('T')[0],
  });
  const [sections, setSections] = useState<LoanSection[]>([newSection(1)]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // ── Section helpers ──────────────────────────────────────────
  function addSection() {
    setSections((prev) => [...prev, newSection(prev.length + 1)]);
  }

  function removeSection(sid: number) {
    setSections((prev) => prev.filter((s) => s.id !== sid));
  }

  function updateSection(sid: number, loan_app: string) {
    setSections((prev) => prev.map((s) => s.id === sid ? { ...s, loan_app } : s));
  }

  // ── Installment helpers ──────────────────────────────────────
  function addRow(sid: number) {
    setSections((prev) => prev.map((s) => s.id === sid
      ? { ...s, installments: [...s.installments, newInstallment(s.installments.length + 1)] }
      : s));
  }

  function removeRow(sid: number, idx: number) {
    setSections((prev) => prev.map((s) => s.id === sid
      ? { ...s, installments: s.installments.filter((_, i) => i !== idx).map((r, i) => ({ ...r, no: i + 1 })) }
      : s));
  }

  function updateRow(sid: number, idx: number, field: keyof Installment, value: string) {
    setSections((prev) => prev.map((s) => s.id === sid
      ? { ...s, installments: s.installments.map((r, i) => i === idx ? { ...r, [field]: value } : r) }
      : s));
  }

  // ── Submit ───────────────────────────────────────────────────
  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    for (const s of sections) {
      if (!s.loan_app) { setError('Please select a Loan App for each section.'); return; }
      if (s.installments.some((i) => !i.due_date || !i.amount)) {
        setError('Please fill all installment rows in every section.'); return;
      }
    }
    setLoading(true);
    setError('');

    const createdIds: string[] = [];

    for (const s of sections) {
      const total = s.installments.reduce((sum, i) => sum + (parseFloat(i.amount) || 0), 0);
      const payload = {
        ...client,
        loan_app: s.loan_app,
        total_amount: total,
        installments: s.installments.map((i) => ({
          no: i.no, due_date: i.due_date, amount: parseFloat(i.amount),
        })),
      };
      const res = await fetch('/api/noc', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      if (res.status === 401) { router.push('/admin'); return; }
      if (!res.ok) {
        const d = await res.json();
        setError(d.error || 'Failed to create NOC.'); setLoading(false); return;
      }
      const d = await res.json();
      createdIds.push(d.noc.id);
    }

    // Single NOC → go straight to print view
    if (createdIds.length === 1) {
      router.push(`/admin/noc/${createdIds[0]}`);
    } else {
      // Multiple → batch print page
      router.push(`/admin/batch?ids=${createdIds.join(',')}`);
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top bar */}
      <div className="bg-[#006633] text-white px-6 py-4 flex items-center gap-4 shadow">
        <button onClick={() => router.push('/admin/dashboard')} className="text-white/70 hover:text-white text-sm">
          ← Dashboard
        </button>
        <span className="font-extrabold text-lg">Create New NOC</span>
        {sections.length > 1 && (
          <span className="ml-2 bg-white/20 text-white text-xs font-bold px-2.5 py-1 rounded-full">
            {sections.length} Apps
          </span>
        )}
      </div>

      <div className="container mx-auto px-4 py-8 max-w-2xl">
        <form onSubmit={handleSubmit} className="space-y-5">

          {/* ── CLIENT DETAILS (shared across all NOCs) ── */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8">
            <h2 className="font-bold text-gray-900 mb-4 text-base flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-[#006633] text-white text-xs font-extrabold flex items-center justify-center">1</span>
              Client Details
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { name: 'client_name', label: 'Client Full Name', placeholder: 'e.g. Muhammad Ali Khan', type: 'text' },
                { name: 'cnic',        label: 'CNIC No',          placeholder: '4210112345671',         type: 'text' },
                { name: 'mobile',      label: 'Mobile No',        placeholder: '03001234567',            type: 'text' },
                { name: 'issue_date',  label: 'Issue Date',       placeholder: '',                       type: 'date' },
              ].map(({ name, label, placeholder, type }) => (
                <div key={name}>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">{label}</label>
                  <input
                    type={type}
                    value={client[name as keyof typeof client]}
                    onChange={(e) => setClient((f) => ({ ...f, [name]: e.target.value }))}
                    placeholder={placeholder}
                    required
                    className="w-full border-2 border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-[#006633] transition-colors"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* ── LOAN APP SECTIONS ── */}
          {sections.map((section, sIdx) => {
            const total = section.installments.reduce((s, i) => s + (parseFloat(i.amount) || 0), 0);
            return (
              <div key={section.id} className="bg-white rounded-2xl shadow-sm border-2 border-gray-100 p-6 sm:p-8 relative">

                {/* Section label + remove */}
                <div className="flex items-center justify-between mb-4">
                  <h2 className="font-bold text-gray-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-[#006633] text-white text-xs font-extrabold flex items-center justify-center">
                      {sIdx + 2}
                    </span>
                    Loan App {sections.length > 1 ? `#${sIdx + 1}` : ''}
                  </h2>
                  {sections.length > 1 && (
                    <button
                      type="button"
                      onClick={() => removeSection(section.id)}
                      className="text-red-400 hover:text-red-600 text-sm font-semibold flex items-center gap-1"
                    >
                      ✕ Remove
                    </button>
                  )}
                </div>

                {/* Loan app dropdown */}
                <div className="mb-4">
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">Loan App / Bank</label>
                  <select
                    value={section.loan_app}
                    onChange={(e) => updateSection(section.id, e.target.value)}
                    required
                    className="w-full border-2 border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-[#006633] transition-colors bg-white"
                  >
                    <option value="">Select loan app or bank…</option>
                    {LOAN_APPS.map((app) => (
                      <option key={app} value={app}>{app}</option>
                    ))}
                  </select>
                </div>

                {/* Installments */}
                <div className="flex items-center justify-between mb-3">
                  <p className="text-sm font-semibold text-gray-700">Installments</p>
                  <button type="button" onClick={() => addRow(section.id)}
                    className="text-sm text-[#006633] font-semibold hover:underline">
                    + Add Row
                  </button>
                </div>

                <div className="rounded-xl border border-gray-200 overflow-hidden">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-gray-50 border-b border-gray-200">
                        <th className="text-left px-3 py-2 font-semibold text-gray-600 w-10">#</th>
                        <th className="text-left px-3 py-2 font-semibold text-gray-600">Due Date</th>
                        <th className="text-left px-3 py-2 font-semibold text-gray-600">Amount (PKR)</th>
                        <th className="w-8" />
                      </tr>
                    </thead>
                    <tbody>
                      {section.installments.map((inst, idx) => (
                        <tr key={idx} className="border-b border-gray-100">
                          <td className="px-3 py-2 text-gray-500">{inst.no}</td>
                          <td className="px-3 py-2">
                            <input type="date" value={inst.due_date}
                              onChange={(e) => updateRow(section.id, idx, 'due_date', e.target.value)}
                              required
                              className="w-full border border-gray-200 rounded-lg px-2 py-1.5 text-sm focus:outline-none focus:border-[#006633]" />
                          </td>
                          <td className="px-3 py-2">
                            <input type="number" value={inst.amount} min="0" step="0.01"
                              onChange={(e) => updateRow(section.id, idx, 'amount', e.target.value)}
                              placeholder="0.00" required
                              className="w-full border border-gray-200 rounded-lg px-2 py-1.5 text-sm focus:outline-none focus:border-[#006633]" />
                          </td>
                          <td className="px-2 py-2">
                            {section.installments.length > 1 && (
                              <button type="button" onClick={() => removeRow(section.id, idx)}
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
              </div>
            );
          })}

          {/* ── ADD ANOTHER LOAN APP ── */}
          <button
            type="button"
            onClick={addSection}
            className="w-full border-2 border-dashed border-[#006633]/40 hover:border-[#006633] text-[#006633] font-semibold py-4 rounded-2xl transition-colors text-sm flex items-center justify-center gap-2 hover:bg-[#F0F7F4]"
          >
            <span className="text-xl leading-none">+</span>
            Add Another Loan App {sections.length > 0 && `(will create ${sections.length + 1} separate NOCs)`}
          </button>

          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 text-sm rounded-xl px-4 py-3">{error}</div>
          )}

          <button type="submit" disabled={loading}
            className="w-full bg-[#006633] hover:bg-[#004d26] disabled:opacity-60 text-white font-bold py-4 rounded-xl transition-colors text-base">
            {loading
              ? 'Generating…'
              : sections.length === 1
                ? '✓ Generate NOC & QR Code'
                : `✓ Generate ${sections.length} NOCs & Print All`}
          </button>
        </form>
      </div>
    </div>
  );
}
