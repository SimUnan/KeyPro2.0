import prisma from '@/libs/prismadb'
import { error } from 'console';
import { NextResponse } from 'next/server'

export async function GET(res: Response){
    
    const allUsers = await prisma.user.findMany();
    
    return NextResponse.json({allUsers})
}