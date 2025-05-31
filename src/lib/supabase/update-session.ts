import { createServerClient } from '@supabase/ssr'
import { type NextRequest, NextResponse } from 'next/server'

export const updateSession = async (request: NextRequest) => {
  // Create a base response object
  let response = NextResponse.next()

  try {
    const supabase = createServerClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
      {
        cookies: {
          getAll() {
            return request.cookies.getAll()
          },
          setAll(cookiesToSet) {
            cookiesToSet.forEach(({ name, value, options }) => {
              response.cookies.set(name, value, options)
            })
          },
        },
      },
    )

    const {
      data: { user },
      error,
    } = await supabase.auth.getUser()

    const pathname = request.nextUrl.pathname

    // ✅ Redirect logic
    if (pathname.startsWith('/blog') && error) {
      return NextResponse.redirect(new URL('/sign-in', request.url))
    }

    if (pathname === '/' && user) {
      return NextResponse.redirect(new URL('/(main)', request.url)) // Update if your actual route is different
    }

    if (pathname === '/(main)' && !user) {
      return NextResponse.redirect(new URL('/sign-in', request.url))
    }

    return response
  } catch (e) {
    console.error('Supabase middleware error:', e)

    // Return base response even on failure
    return response
  }
}
