import { db } from "@/app/_lib/prisma";
import { PrismaAdapter } from "@auth/prisma-adapter";
import NextAuth from "next-auth";
import { Adapter } from "next-auth/adapters";
import GoolgeProvider from 'next-auth/providers/google'

const handler = NextAuth({
  adapter: PrismaAdapter(db) as Adapter,
  providers: [
    GoolgeProvider ({
      clientId: "",
      clientSecret: "",
    }),
  ],
});

export { handler as GET, handler as POST }