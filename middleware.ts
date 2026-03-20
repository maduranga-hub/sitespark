import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const url = request.nextUrl;
  const hostname = request.headers.get('host') || '';

  // Define allowed domains (add your custom domain here after deploying)
  const allowedDomains = ['sitespark.io', 'localhost:3000', 'vercel.app'];

  // Check if the current hostname is one of the main domains
  const isMainDomain = allowedDomains.some(domain => hostname.includes(domain));

  if (!isMainDomain) {
    // Extract the subdomain (e.g., 'nirmal' from 'nirmal.sitespark.io')
    const subdomain = hostname.split('.')[0];
    
    if (subdomain && subdomain !== 'www') {
      // Rewrite to the dynamic site route
      return NextResponse.rewrite(new URL(`/sites/${subdomain}${url.pathname}`, request.url));
    }
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
