import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

import prisma from "@/libs/prismadb";
import { errorResponse, successResponse } from "../(utils)/reponseType";

export async function POST(req: Request) {
  const body = await req.json();

  const { email, password } = body;

  if (!email || !password) {
    return errorResponse("Please provide email, password", 400);
  }
  const isEmailExisted = await prisma.user.findUnique({
    where: {
      email: email,
    },
  });

if(!isEmailExisted){
    return errorResponse("This email does not exist in our system.", 409)
}


if(isEmailExisted ){
    const isPasswordCorrect = await bcrypt.compare(password, isEmailExisted.hashedPassword as string);
    if(isPasswordCorrect){  
        const access_token = jwt.sign({id: isEmailExisted.id}, process.env.NEXTAUTH_SECRET as string, {expiresIn: 60 * 60})
        const {hashedPassword, ...rest} = isEmailExisted;
        return successResponse({...rest, access_token});
    }else{
        return errorResponse("Incorrect email or password.", 400)
    }
}

}
