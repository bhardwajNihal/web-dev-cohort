import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { NextAuthOptions } from "next-auth";

// Define auth options separately
export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email", placeholder: "user@example.com" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        // Simulated database user lookup (replace with real DB call)
        const user = { id: "1", name: "Nihal Bhardwaj", email: "nihal123@gmail.com", password: "nihal123" };

        if (credentials?.email === user.email && credentials?.password === user.password) {
          return user; // ✅ Successful login
        }

        return null; // ❌ Invalid credentials
      },
    }),
  ],

  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.email = user.email;
        token.name = user.name;
      }
      return token;
    },

    async session({ session, token }) {
      session.user.id = token.id;
      return session;
    },
  },

  session: {
    strategy: "jwt",
  },

  pages: {
    signIn: "/signin",
  },

  secret: process.env.NEXTAUTH_SECRET, // Ensure this is set in .env.local
};

// ✅ Correct handler export for App Router
const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
