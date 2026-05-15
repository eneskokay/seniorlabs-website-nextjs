'use client'
import { deleteUser } from './actions'

export default function DeleteButton({ userId }: { userId: number }) {
  return (
    <button
      onClick={() => deleteUser(userId)}
      className="text-sm font-medium text-red-500 transition-colors hover:text-red-700"
    >
      Delete
    </button>
  )
}
