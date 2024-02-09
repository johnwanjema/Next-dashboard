import NextAuth from "next-auth";
import { authConfig } from "./auth.config";
import Credentials from "next-auth/providers/credentials";
import { z } from "zod";
import { sql } from "@vercel/postgres";
import type { User } from "@/app/lib/definitions";
import bcrypt from "bcrypt";
import axios from "axios";

async function getUser(email: string,password:string): Promise<User | undefined> {
    try {
      const response = await axios.post("https://apptest.dekioz.co.ke/api/Auth/login", {
          user:email,
          password: password,
      });
      
      return response.data;

    } catch (error) {
        console.error("Failed to fetch user:", error);
        throw new Error("Failed to fetch user.");
    }
}

export const { auth, signIn, signOut } = NextAuth({
    ...authConfig,
    providers: [
        Credentials({
            async authorize(credentials) {
                console.log(credentials)
                const parsedCredentials = z.object({ username: z.string(), password: z.string().min(6) }).safeParse(credentials);
                if (parsedCredentials.success) {
                    const { username, password } = parsedCredentials.data;
                    console.log(username)
                    console.log(password)

                    const user = await getUser(username,password);
                    if (!user) return null;
                    // const passwordsMatch = await bcrypt.compare(password, user.password);

                     return user;
                }
                console.log("Invalid credentials");
                return null;
            },
        }),
    ],
});
