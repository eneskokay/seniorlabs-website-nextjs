'use server'
import { revalidatePath } from 'next/cache'
import bcrypt from 'bcryptjs'
import pool from '@/app/lib/db'
import { getSession } from '@/app/lib/session'

export type UserFormState =
  | { error?: string; success?: string }
  | undefined

export async function createUser(
  _state: UserFormState,
  formData: FormData,
): Promise<UserFormState> {
  const session = await getSession()
  if (!session?.userId) return { error: 'Unauthorized.' }

  const name = (formData.get('name') as string).trim()
  const email = (formData.get('email') as string).trim().toLowerCase()
  const password = formData.get('password') as string
  const role = (formData.get('role') as string) || 'admin'

  if (!name || !email || !password) {
    return { error: 'All fields are required.' }
  }
  if (password.length < 8) {
    return { error: 'Password must be at least 8 characters.' }
  }

  const hash = await bcrypt.hash(password, 10)

  try {
    await pool.query(
      'INSERT INTO admin_users (name, email, password, role) VALUES ($1, $2, $3, $4)',
      [name, email, hash, role],
    )
  } catch (err: unknown) {
    const pg = err as { code?: string }
    if (pg.code === '23505') return { error: 'Email already exists.' }
    return { error: 'Failed to create user.' }
  }

  revalidatePath('/admin/users')
  return { success: 'User created.' }
}

export async function deleteUser(userId: number) {
  const session = await getSession()
  if (!session?.userId) return

  await pool.query('DELETE FROM admin_users WHERE id = $1', [userId])
  revalidatePath('/admin/users')
}
