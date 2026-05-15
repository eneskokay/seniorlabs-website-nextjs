'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { logout } from '@/app/actions/auth'

const links = [
  { href: '/admin/dashboard', label: 'Dashboard' },
  { href: '/admin/users', label: 'Users' },
]

export default function AdminNav() {
  const pathname = usePathname()

  return (
    <aside className="flex w-56 flex-col border-r border-zinc-200 bg-white px-4 py-6">
      <span className="mb-8 px-2 text-xs font-semibold uppercase tracking-widest text-zinc-400">
        Seniorlabs
      </span>

      <nav className="flex flex-1 flex-col gap-1">
        {links.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className={`rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
              pathname.startsWith(href)
                ? 'bg-zinc-100 text-zinc-900'
                : 'text-zinc-500 hover:bg-zinc-50 hover:text-zinc-800'
            }`}
          >
            {label}
          </Link>
        ))}
      </nav>

      <form action={logout}>
        <button
          type="submit"
          className="w-full rounded-lg px-3 py-2 text-left text-sm font-medium text-zinc-500 transition-colors hover:bg-zinc-50 hover:text-zinc-800"
        >
          Sign out
        </button>
      </form>
    </aside>
  )
}
