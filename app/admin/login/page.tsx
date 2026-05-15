import LoginForm from './login-form'

export const metadata = { title: 'Admin Login' }

export default function LoginPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50">
      <div className="w-full max-w-sm rounded-2xl bg-white p-8 shadow-sm ring-1 ring-zinc-200">
        <div className="mb-8">
          <h1 className="text-2xl font-bold tracking-tight text-zinc-900">
            Admin panel
          </h1>
          <p className="mt-1 text-sm text-zinc-500">
            Sign in to your admin account
          </p>
        </div>
        <LoginForm />
      </div>
    </div>
  )
}
