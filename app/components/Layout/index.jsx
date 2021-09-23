// import { signOut } from 'next-auth/client'
import { LogoutIcon } from '@heroicons/react/solid'

import Nav from './Nav'

export default function Layout({ children }) {
  return (
    <main>
      <Nav />
      <button
        className="px-4 py-2 rounded-lg shadow hover:shadow-lg hover:text-red-800 transition absolute top-5 right-5"
        onClick={() => {
          // confirm('are you sure you want to sign out?') && signOut()
        }}
      >
        <LogoutIcon width={20} />
      </button>
      {children}
    </main>
  )
}
