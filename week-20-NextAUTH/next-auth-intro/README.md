

# key takeaways 
✔ Session Handling: NextAuth stores session data in a JWT (default) or a database.
✔ Session Expiry: Tokens expire in 30 days by default (maxAge in jwt settings).
✔ Session Strategy: strategy: "jwt" for stateless authentication.
✔ Custom Redirects: Use callbackUrl in signIn(), or set pages.signIn.
✔ Custom Sign-in Page: If defined (pages.signIn), NextAuth stops using the default UI.

✅ NextAuth does NOT auto-protect routes—you must check useSession() or getServerSession().
✅ The default redirect is the same page; set callbackUrl for custom redirects.
✅ If you define a custom sign-in page, NextAuth stops using the default UI.
✅ Session handling is done via JWT (default) or a database if configured.
✅ Protect API routes using getServerSession(authOptions).

