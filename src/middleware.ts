import { updateSession } from '../src/lib/supabase/update-session'
import { type NextRequest } from 'next/server'

export async function middleware(request: NextRequest) {
  return await updateSession(request)
}

export const config = {
  matcher: [
    '/', // Homepage
    '/(main)', // Your main dashboard
    '/blog/:path*', // Blog pages
    '/products/:path*', // Any protected routes
  ],
}
