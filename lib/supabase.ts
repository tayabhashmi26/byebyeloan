import { createClient, SupabaseClient } from '@supabase/supabase-js';

export type Installment = {
  no: number;
  due_date: string; // YYYY-MM-DD
  amount: number;
};

export type NOCRecord = {
  id: string;
  client_name: string;
  cnic: string;
  mobile: string;
  loan_app: string;
  total_amount: number;
  installments: Installment[];
  issue_date: string;
  is_active: boolean;
  created_at: string;
};

// Lazy singleton — only initialised when first called (avoids build-time crash)
let _client: SupabaseClient | null = null;

export function getSupabase(): SupabaseClient {
  if (!_client) {
    const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
    if (!url || !key) throw new Error('Missing Supabase env vars');
    _client = createClient(url, key);
  }
  return _client;
}

// Convenience alias kept for backward-compat imports
export const supabase = new Proxy({} as SupabaseClient, {
  get(_, prop) {
    return (getSupabase() as unknown as Record<string, unknown>)[prop as string];
  },
});
