import { useSession, getSession, signIn, signOut } from 'next-auth/client'

export async function getServerSideProps({ params, req, res }) {
  const session = await getSession({ req })

  return {
    props: { session: session ? session : null },
  }
}

export default function App({ session }) {
  return session ? (
    <div className="grid place-items-center h-screen">
      <div className="flex flex-col">
        Signed in as {session.user.name}
        <button onClick={signOut}>Sign out</button>
      </div>
    </div>
  ) : (
    <Landing />
  )
}

function Landing() {
  return (
    <main className="h-screen w-screen flex flex-col justify-center items-center bg-red-800 space-y-6">
      <p className="flex flex-col items-center text-gray-100 text-4xl">
        dunwoody <span className="text-gray-900">software</span> engineering
      </p>
      <button
        className="text-gray-900 hover:shadow-white font-bold transition bg-gray-100 rounded-xl py-2 px-4"
        onClick={() => signIn('github')}
      >
        sign in
      </button>
    </main>
  )
}
