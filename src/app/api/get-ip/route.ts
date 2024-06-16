import { NextRequest, NextResponse } from 'next/server';

export const GET = async (request: NextRequest) => {
  const ip =
    request.headers.get('x-forwarded-for') ||
    request.ip ||
    request.headers.get('x-real-ip') ||
    'IP not found';
  return NextResponse.json({ ip });
};
