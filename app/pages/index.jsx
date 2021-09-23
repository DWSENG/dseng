import { useSession, getSession, signIn, signOut } from 'next-auth/client'
import Landing from '@components/Landing'
import Layout from '@components/Layout'

export default function App({ session }) {
  return session ? (
    <Layout>
      <section className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-gray-900">signed in as {session.user.name}</h1>
      </section>
    </Layout>
  ) : (
    <Landing />
  )
}

export async function getServerSideProps({ params, req, res }) {
  const session = await getSession({ req })

  return {
    props: { session: session ? session : null },
  }
}
