import nextAuth from "next-auth";

export const {handlers, signIn, signOut, auth} = nextAuth({
    providers: []
})