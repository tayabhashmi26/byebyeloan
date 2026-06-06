import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const PROTECTED = ['/admin/dashboard', '/admin/create', '/admin/noc'];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const needsAuth = PROTECTED.some((p) => pathname.startsWith(p));

  if (needsAuth) {
    const token = request.cookies.get('admin-token')?.value;
    const expected = process.env.ADMIN_SESSION_TOKEN;
    if (!token || !expected || token !== expected) {
      const loginUrl = new URL('/admin', request.url);
      loginUrl.searchParams.set('redirect', pathname);
      return NextResponse.redirect(loginUrl);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/dashboard/:path*', '/admin/create/:path*', '/admin/noc/:path*'],
};
