import { logout } from '@/app/lib/actions'
import React from 'react'




const LogoutButton = () => {
  return (
    <form action={logout}>
        <button className="block px-4 py-2 text-sm text-white hover:bg-gray-800 border-gray-800 border-2 w-full rounded-md">Logout</button>
    </form>
  )
}

export default LogoutButton