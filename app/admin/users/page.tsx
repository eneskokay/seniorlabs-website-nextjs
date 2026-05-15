import pool from '@/app/lib/db'
import CreateUserForm from './create-user-form'
import DeleteButton from './delete-button'

type AdminUser = {
  id: number
  name: string
  email: string
  role: string
  created_at: Date
}

async function getUsers(): Promise<AdminUser[]> {
  const result = await pool.query<AdminUser>(
    'SELECT id, name, email, role, created_at FROM admin_users ORDER BY created_at DESC',
  )
  return result.rows
}

export const metadata = { title: 'Users' }

export default async function UsersPage() {
  const users = await getUsers()

  return (
    <div className="flex flex-col gap-8">
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-zinc-900">
          Users
        </h1>
        <p className="mt-1 text-sm text-zinc-500">
          Manage admin panel users
        </p>
      </div>

      <div className="rounded-xl border border-zinc-200 bg-white p-6">
        <h2 className="mb-4 text-sm font-semibold text-zinc-700">
          Create new user
        </h2>
        <CreateUserForm />
      </div>

      <div className="rounded-xl border border-zinc-200 bg-white">
        <div className="border-b border-zinc-200 px-6 py-4">
          <h2 className="text-sm font-semibold text-zinc-700">
            All users ({users.length})
          </h2>
        </div>

        {users.length === 0 ? (
          <p className="px-6 py-8 text-center text-sm text-zinc-400">
            No users yet. Create one above.
          </p>
        ) : (
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-zinc-200 text-left text-xs font-medium uppercase tracking-wider text-zinc-400">
                <th className="px-6 py-3">Name</th>
                <th className="px-6 py-3">Email</th>
                <th className="px-6 py-3">Role</th>
                <th className="px-6 py-3">Created</th>
                <th className="px-6 py-3" />
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-100">
              {users.map((user) => (
                <tr key={user.id} className="hover:bg-zinc-50">
                  <td className="px-6 py-4 font-medium text-zinc-900">
                    {user.name}
                  </td>
                  <td className="px-6 py-4 text-zinc-600">{user.email}</td>
                  <td className="px-6 py-4">
                    <span className="inline-flex rounded-full bg-zinc-100 px-2.5 py-0.5 text-xs font-medium text-zinc-700 capitalize">
                      {user.role}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-zinc-500">
                    {new Date(user.created_at).toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4 text-right">
                    <DeleteButton userId={user.id} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  )
}
