import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const url = request.nextUrl;
  const hostname = request.headers.get('host') || '';

  // Define main platform domains
  const mainDomains = [
    'sitespark.online', 
    'www.sitespark.online', 
    'sitespark-phi.vercel.app', 
    'localhost:3000'
  ];

  // If the request is for the main domain, let it through
  if (mainDomains.includes(hostname)) {
    return NextResponse.next();
  }

  // Otherwise, extract the subdomain (e.g., 'nirmal' from 'nirmal.sitespark.online')
  const subdomain = hostname.split('.')[0];
  
  if (subdomain && subdomain !== 'www') {
    // Rewrite to the dynamic site route
    return NextResponse.rewrite(new URL(`/sites/${subdomain}${url.pathname}`, request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all paths except:
     * 1. /api routes
     * 2. /_next (Next.js internals)
     * 3. /static (public files)
     * 4. favicon.ico, images, etc.
     */
    '/((?!api|_next|static|[\\w-]+\\.\\w+).*)',
  ],
};
