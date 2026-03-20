import { NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { siteId, userId, name, email, phone, message } = body;

    if (!siteId || !name || !email) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const { error } = await supabase.from('leads').insert([{
      site_id: siteId,
      user_id: userId,
      name,
      email,
      phone,
      message,
      status: 'new'
    }]);

    if (error) throw error;

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error('Lead Submission Error:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
