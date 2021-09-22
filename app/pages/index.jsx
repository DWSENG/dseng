import { useSession, signIn, signOut } from 'next-auth/client'

export default function App() {
  const [session] = useSession()

  return session ? (
    <div className="grid place-items-center h-screen">
      <div className="flex flex-col">
        Signed in as {session.user.name}
        <button onClick={signOut}>Sign out</button>
      </div>
    </div>
  ) : (
    <div className="grid place-items-center h-screen">
      <div className="flex flex-col">
        Not signed in <br />
        <button onClick={() => signIn('github')}>Sign in</button>
      </div>
    </div>
  )
}
