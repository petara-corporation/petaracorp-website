import { NextResponse } from 'next/server';

export async function POST(request) {
  const body = await request.json();
  return Response.json({
    message: "Your request has been received. We'll get back to you soon!",
  });
}
