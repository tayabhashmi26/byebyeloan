'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import type { NOCRecord } from '@/lib/supabase';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://byebyeloan.online';

function fmt(n: number) {
  return n.toLocaleString('en-PK', { minimumFractionDigits: 0 });
}

function groupByClient(nocs: NOCRecord[]) {
  const order: string[] = [];
  const map: Record<string, NOCRecord[]> = {};
  for (const noc of nocs) {
    if (!map[noc.client_name]) {
      order.push(noc.client_name);
      map[noc.client_name] = [];
    }
    map[noc.client_name].push(noc);
  }
  return order.map((name) => ({ name, nocs: map[name] }));
}

export default function DashboardPage() {
  const [nocs, setNocs] = useState<NOCRecord[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [copiedKey, setCopiedKey] = useState('');
  const router = useRouter();

  useEffect(() => {
    fetch('/api/noc')
      .then((r) => {
        if (r.status === 401) { router.push('/admin'); return null; }
        return r.json();
      })
      .then((d) => { if (d) setNocs(d.nocs ?? []); })
      .catch(() => setError('Could not load records.'))
      .finally(() => setLoading(false));
  }, [router]);

  async function logout() {
    await fetch('/api/admin/logout', { method: 'POST' });
    router.push('/admin');
  }

  async function toggleActive(id: string, current: boolean) {
    await fetch(`/api/noc/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ is_active: !current }),
    });
    setNocs((prev) => prev.map((n) => n.id === id ? { ...n, is_active: !current } : n));
  }

  function copyLinks(groupNocs: NOCRecord[], key: string) {
    const text = groupNocs
      .map((noc) => `${noc.loan_app}\n${SITE_URL}/verify/${noc.id}`)
      .join('\n\n');
    navigator.clipboard.writeText(text).then(() => {
      setCopiedKey(key);
      setTimeout(() => setCopiedKey(''), 2500);
    });
  }

  const groups = groupByClient(nocs);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top bar */}
      <div className="bg-[#006633] text-white px-6 py-4 flex items-center justify-between shadow">
        <div>
          <span className="font-extrabold text-lg">ByeBye Loan</span>
          <span className="ml-3 text-white/70 text-sm">Admin Dashboard</span>
        </div>
        <div className="flex gap-3">
          <button
            onClick={() => router.push('/admin/create')}
            className="bg-[#F5A623] hover:bg-[#e09500] text-white font-bold px-4 py-2 rounded-xl text-sm transition-colors"
          >
            + New NOC
          </button>
          <button
            onClick={logout}
            className="bg-white/10 hover:bg-white/20 text-white font-semibold px-4 py-2 rounded-xl text-sm transition-colors"
          >
            Logout
          </button>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
          {[
            { label: 'Total NOCs', value: nocs.length },
            { label: 'Active', value: nocs.filter((n) => n.is_active).length },
            { label: 'Revoked', value: nocs.filter((n) => !n.is_active).length },
            { label: 'This Month', value: nocs.filter((n) => new Date(n.created_at).getMonth() === new Date().getMonth()).length },
          ].map(({ label, value }) => (
            <div key={label} className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 text-center">
              <div className="text-3xl font-extrabold text-[#006633]">{value}</div>
              <div className="text-sm text-gray-500 mt-1">{label}</div>
            </div>
          ))}
        </div>

        {/* Table */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between">
            <h2 className="font-bold text-gray-900">All NOC Records</h2>
            <span className="text-sm text-gray-400">{nocs.length} records</span>
          </div>

          {loading && <div className="text-center py-16 text-gray-400">Loading…</div>}
          {error && <div className="text-center py-16 text-red-500">{error}</div>}
          {!loading && !error && nocs.length === 0 && (
            <div className="text-center py-16 text-gray-400">
              No NOCs yet.{' '}
              <button onClick={() => router.push('/admin/create')} className="text-[#006633] font-semibold">
                Create first NOC →
              </button>
            </div>
          )}

          {nocs.length > 0 && (
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-100">
                    {['NOC ID', 'Loan App', 'Amount (PKR)', 'Date', 'Status', 'Actions'].map((h) => (
                      <th key={h} className="text-left px-4 py-3 font-semibold text-gray-600 whitespace-nowrap">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {groups.map(({ name, nocs: groupNocs }) => (
                    <>
                      {/* Client group header row */}
                      <tr key={`group-${name}`} className="bg-[#f0fdf4] border-y border-[#006633]/10">
                        <td colSpan={6} className="px-4 py-2.5">
                          <div className="flex items-center justify-between">
                            <div>
                              <span className="font-bold text-[#006633] text-sm">{name}</span>
                              <span className="ml-2 text-xs text-gray-400">{groupNocs[0].cnic}</span>
                              <span className="ml-2 text-xs bg-[#006633]/10 text-[#006633] font-semibold px-2 py-0.5 rounded-full">
                                {groupNocs.length} NOC{groupNocs.length > 1 ? 's' : ''}
                              </span>
                            </div>
                            <button
                              onClick={() => copyLinks(groupNocs, name)}
                              className={`text-xs font-bold px-3 py-1.5 rounded-lg transition-colors ${
                                copiedKey === name
                                  ? 'bg-[#006633] text-white'
                                  : 'bg-white border border-[#006633]/30 text-[#006633] hover:bg-[#006633] hover:text-white'
                              }`}
                            >
                              {copiedKey === name ? '✓ Copied!' : `📋 Copy ${groupNocs.length > 1 ? `All ${groupNocs.length} Links` : 'Link'}`}
                            </button>
                          </div>
                        </td>
                      </tr>

                      {/* NOC rows for this client */}
                      {groupNocs.map((noc) => (
                        <tr key={noc.id} className="border-b border-gray-50 hover:bg-gray-50 transition-colors">
                          <td className="px-4 py-3 font-mono text-xs text-gray-500 pl-8">{noc.id.slice(0, 8).toUpperCase()}</td>
                          <td className="px-4 py-3 text-gray-700 whitespace-nowrap font-medium">{noc.loan_app}</td>
                          <td className="px-4 py-3 text-gray-700 font-mono whitespace-nowrap">PKR {fmt(noc.total_amount)}</td>
                          <td className="px-4 py-3 text-gray-500 whitespace-nowrap">{noc.issue_date}</td>
                          <td className="px-4 py-3">
                            <span className={`px-2 py-1 rounded-full text-xs font-bold ${noc.is_active ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-600'}`}>
                              {noc.is_active ? 'Active' : 'Revoked'}
                            </span>
                          </td>
                          <td className="px-4 py-3">
                            <div className="flex gap-2 flex-wrap">
                              <button
                                onClick={() => router.push(`/admin/noc/${noc.id}`)}
                                className="bg-[#006633] text-white px-3 py-1 rounded-lg text-xs font-semibold hover:bg-[#004d26] transition-colors"
                              >
                                View / Print
                              </button>
                              <button
                                onClick={() => router.push(`/admin/edit/${noc.id}`)}
                                className="bg-blue-600 text-white px-3 py-1 rounded-lg text-xs font-semibold hover:bg-blue-700 transition-colors"
                              >
                                Edit
                              </button>
                              <button
                                onClick={() => toggleActive(noc.id, noc.is_active)}
                                className={`px-3 py-1 rounded-lg text-xs font-semibold transition-colors ${noc.is_active ? 'bg-red-100 text-red-600 hover:bg-red-200' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
                              >
                                {noc.is_active ? 'Revoke' : 'Restore'}
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
