import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { PrismaAdapter } from '@auth/prisma-adapter';
import prisma from '@/lib/prisma';

export const authOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: "Email", type: "text" },
        code: { label: "Code", type: "text" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.code) {
          return null;
        }

        const verificationToken = await prisma.verificationToken.findUnique({
          where: {
            identifier_token: {
              identifier: credentials.email,
              token: credentials.code,
            },
          },
        });

        if (!verificationToken || verificationToken.expires < new Date()) {
            return null; // Token is invalid or expired
        }

        // Clean up the token after use
        await prisma.verificationToken.delete({
            where: {
                identifier_token: {
                    identifier: credentials.email,
                    token: credentials.code,
                }
            }
        });

        let user = await prisma.user.findUnique({
          where: { email: credentials.email },
        });

        if (!user) {
          user = await prisma.user.create({
            data: {
              email: credentials.email,
              emailVerified: new Date(),
            },
          });
        } else if (!user.emailVerified) {
            user = await prisma.user.update({
                where: { email: credentials.email },
                data: { emailVerified: new Date() }
            });
        }
        
        return user;
      },
    }),
  ],
  pages: {
    signIn: '/auth/signin',
  },
  session: {
    strategy: 'jwt',
  },
  secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
