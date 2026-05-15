import { redirect } from 'next/navigation'
import { getSession } from '@/app/lib/session'
import AdminNav from './nav'

export const metadata = { title: 'Admin' }

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await getSession()
  if (!session?.userId) redirect('/admin/login')

  return (
    <div className="flex min-h-screen bg-zinc-50">
      <AdminNav />
      <main className="flex-1 p-8">{children}</main>
    </div>
  )
}
