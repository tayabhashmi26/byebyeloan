import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';
import { cookies } from 'next/headers';

export async function POST(req: NextRequest) {
  // Verify admin
  const cookieStore = await cookies();
  const token = cookieStore.get('admin-token')?.value;
  if (!token || token !== process.env.ADMIN_SESSION_TOKEN) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const body = await req.json();
  const { client_name, cnic, mobile, loan_app, total_amount, installments, issue_date } = body;

  if (!client_name || !cnic || !mobile || !loan_app || !total_amount || !installments) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
  }

  const { data, error } = await supabase
    .from('noc_records')
    .insert([{ client_name, cnic, mobile, loan_app, total_amount, installments, issue_date }])
    .select()
    .single();

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ noc: data }, { status: 201 });
}

export async function GET() {
  // Verify admin
  const cookieStore = await cookies();
  const token = cookieStore.get('admin-token')?.value;
  if (!token || token !== process.env.ADMIN_SESSION_TOKEN) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const { data, error } = await supabase
    .from('noc_records')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ nocs: data });
}
