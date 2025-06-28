import { NextResponse } from 'next/server';
import { getBotResponse } from '@/lib/helpBotService';

export async function POST(request: Request) {
  try {
    const { query } = await request.json();
    
    if (!query || typeof query !== 'string') {
      return NextResponse.json(
        { error: 'Invalid query provided' }, 
        { status: 400 }
      );
    }

    const answer = await getBotResponse(query);
    return NextResponse.json({ answer });
  } catch (error) {
    console.error('Helpbot API Error:', error);
    return NextResponse.json(
      { error: 'Internal Server Error' }, 
      { status: 500 }
    );
  }
}
