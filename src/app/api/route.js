import { NextResponse } from 'next/server';

export async function GET(request) {
  return Response.json({ message: 'Hello from Next.js!' });
}
