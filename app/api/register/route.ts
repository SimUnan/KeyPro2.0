import { NextResponse } from "next/server";
import bcrypt from "bcrypt";

import prisma from "@/libs/prismadb";
import { errorResponse, successResponse } from "../(utils)/reponseType";


export async function POST(req: Request) {
  const body = await req.json();
  const { email, name, password, confirm_password } = body;
  
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  
  if (!email || !name || !password) {
    return errorResponse("Please provide name, email, password", 400)
  }

  if(name.length < 4){
    return errorResponse("Name must be at least 4 charactors.", 400)
  }
  else if(password.length < 6){
    return errorResponse("Password must be at least 6 charactor.", 400)
  }
  else if(!emailRegex.test(email)){
    return errorResponse("Email is not invalid.", 400)
  }
  const isEmailUsed = await prisma.user.findUnique({
    where: {
      email: email,
    },
  });

  if (isEmailUsed) {
    return errorResponse("This email already existed in our system.", 409)
  }

  const hasedPassword = await bcrypt.hash(password, 10);

  const user = await prisma.user.create({
    data: {
      name: name,
      email: email,
      hashedPassword: hasedPassword,
    },
  });

  const {hashedPassword, ...rest} = user;

  return successResponse({rest, password})
}
