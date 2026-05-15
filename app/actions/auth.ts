'use server'
import { redirect } from 'next/navigation'
import bcrypt from 'bcryptjs'
import pool from '@/app/lib/db'
import { createSession, deleteSession } from '@/app/lib/session'

export type LoginState =
  | { error: string }
  | undefined

export async function login(
  _state: LoginState,
  formData: FormData,
): Promise<LoginState> {
  const email = formData.get('email') as string
  const password = formData.get('password') as string

  if (!email || !password) {
    return { error: 'Email and password are required.' }
  }

  const result = await pool.query(
    'SELECT id, password, role FROM admin_users WHERE email = $1',
    [email],
  )
  const user = result.rows[0]

  if (!user) {
    return { error: 'Invalid credentials.' }
  }

  const valid = await bcrypt.compare(password, user.password)
  if (!valid) {
    return { error: 'Invalid credentials.' }
  }

  await createSession(user.id, user.role)
  redirect('/admin/dashboard')
}

export async function logout() {
  await deleteSession()
  redirect('/admin/login')
}
