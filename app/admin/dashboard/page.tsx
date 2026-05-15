import pool from '@/app/lib/db'
import { getSession } from '@/app/lib/session'

async function getStats() {
  const [usersResult] = await Promise.all([
    pool.query('SELECT COUNT(*) AS count FROM admin_users'),
  ])
  return {
    totalUsers: Number(usersResult.rows[0].count),
  }
}

export const metadata = { title: 'Dashboard' }

export default async function DashboardPage() {
  const [session, stats] = await Promise.all([getSession(), getStats()])

  return (
    <div className="flex flex-col gap-8">
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-zinc-900">
          Dashboard
        </h1>
        <p className="mt-1 text-sm text-zinc-500">
          Welcome back, admin #{session?.userId}
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <StatCard label="Total admin users" value={stats.totalUsers} />
      </div>
    </div>
  )
}

function StatCard({ label, value }: { label: string; value: number }) {
  return (
    <div className="rounded-xl border border-zinc-200 bg-white p-6">
      <p className="text-sm font-medium text-zinc-500">{label}</p>
      <p className="mt-2 text-3xl font-bold text-zinc-900">{value}</p>
    </div>
  )
}
