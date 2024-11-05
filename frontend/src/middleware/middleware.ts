import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export default function middleware(request: NextRequest) {
  const token = request.cookies.get('jwt')?.value;
  console.log(token);

  if (!token) {
    return new NextResponse(JSON.stringify({ message: 'Not authenticated' }), {
      status: 401,
      headers: { 'Content-Type': 'application/json' },
    });
  }
  return NextResponse.next();
}

export const config = {
  matcher: '/auth/status',
};
