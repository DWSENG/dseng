import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'

export default NextAuth({
  providers: [
    Providers.GitHub({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
  // secret: process.env.AUTH_SECRET,
  // jwt: {
  //   signingKey: process.env.JWT_SECRET,
  //   verificationOptions: {
  //     algorithms: ['HS256'],
  //   },
  // },
})
