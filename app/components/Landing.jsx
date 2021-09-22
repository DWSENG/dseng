import { signIn } from 'next-auth/client'

export default function Landing() {
  return (
    <main className="h-screen w-screen flex flex-col justify-center items-center bg-red-800 space-y-6 md:flex-row md:space-x-20 transition">
      <p className="flex flex-col items-center text-gray-100 text-4xl">
        dunwoody <span className="text-gray-900">software</span> engineering
      </p>
      <button
        className="text-gray-900 hover:shadow-white hover:text-red-800 font-bold transition bg-gray-100 rounded-xl py-2 px-4"
        onClick={() => signIn('github')}
      >
        sign in
      </button>
    </main>
  )
}
