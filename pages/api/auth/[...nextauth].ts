import NextAuth from 'next-auth';
import GithubProvider from 'next-auth/providers/github';

export const authOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
    // ...add more providers here
  ],
  secret: 'wDmD7WcIhMncgVZ0ICoLYM1JokWwp8wUo+iFMQHQwk4=',
};

export default NextAuth(authOptions);
