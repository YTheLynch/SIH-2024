import NextAuth from 'next-auth'
// import AppleProvider from 'next-auth/providers/apple'
// import FacebookProvider from 'next-auth/providers/facebook'
// import GoogleProvider from 'next-auth/providers/google'
// import EmailProvider from 'next-auth/providers/email'
import GitHubProvider from "next-auth/providers/github"
// import mongoose from 'mongoose'
// import User from '@/models/User'
// import Payment from '@/models/Payment'

export const authoptions = NextAuth({
  providers: [
    // OAuth authentication providers...
    GitHubProvider({
        clientId: process.env.GITHUB_ID,
        clientSecret: process.env.GITHUB_SECRET 
    }),

    // AppleProvider({
    //   clientId: process.env.APPLE_ID,
    //   clientSecret: process.env.APPLE_SECRET
    // }),
    // FacebookProvider({
    //   clientId: process.env.FACEBOOK_ID,
    //   clientSecret: process.env.FACEBOOK_SECRET
    // }),
    // GoogleProvider({
    //   clientId: process.env.GOOGLE_ID,
    //   clientSecret: process.env.GOOGLE_SECRET
    // }),
    // // Passwordless / email sign in
    // EmailProvider({
    //   server: process.env.MAIL_SERVER,
    //   from: 'NextAuth.js <no-reply@example.com>'
    // }),
  ],
callbacks: {
  async signIn({ user, account, profile, email, credentials }) {
      if(account.provider == "github"){
        //Connect to the database
        const client = await mongoose.connect("mongodb://localhost:27017/chai")
        // check if user already exist in database
        const currentUser = User.findOne({email:email})
        if(!currentUser){
          //Create a new user
          const newUser = new User({
            email:email,
            // name:profile.name,
            username:email.split("@")[0],
            // profilepic:profile.profile_url
          })
          await newUser.save()
       }
       
       return true
    }
  },
  async session({ session, user, token }) {
    const dbUser = await User.find({email: session.user.email})
    session.user.name = dbUser.username

    return session
  },
}
})

export {authoptions as GET,authoptions as POST }