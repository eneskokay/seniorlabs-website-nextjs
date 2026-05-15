import { NextRequest, NextResponse } from 'next/server'
import { decrypt } from '@/app/lib/session'

const adminRoutes = ['/admin/dashboard', '/admin/users']
const publicAdminRoutes = ['/admin/login']

export default async function proxy(req: NextRequest) {
  const path = req.nextUrl.pathname

  const isAdminRoute = adminRoutes.some((r) => path.startsWith(r))
  const isPublicAdminRoute = publicAdminRoutes.includes(path)

  if (!isAdminRoute && !isPublicAdminRoute) {
    return NextResponse.next()
  }

  const token = req.cookies.get('admin_session')?.value
  const session = await decrypt(token)

  if (isAdminRoute && !session?.userId) {
    return NextResponse.redirect(new URL('/admin/login', req.nextUrl))
  }

  if (isPublicAdminRoute && session?.userId) {
    return NextResponse.redirect(new URL('/admin/dashboard', req.nextUrl))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
}
