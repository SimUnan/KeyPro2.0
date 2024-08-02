import { NextResponse } from "next/server";
import bcrypt from "bcrypt";

import prisma from "@/libs/prismadb";
import { error } from "console";

export async function POST(req: Request) {
  const body = await req.json();

  const { email, name, password, confirm_password } = body;

  const hasedPassword = await bcrypt.hash(password, 10);

    const isEmailUsed = await prisma.user.findUnique({
        where: {
            email: email
        }
    })

    if(isEmailUsed){
        return NextResponse.json({error: "Email existed."}, {status: 400})
    }

  const user = await prisma.user.create({
    data: {
      name: name,
      email: email,
      hashedPassword: hasedPassword,
    },
  });

  return NextResponse.json(user);
}
