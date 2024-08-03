import { NextResponse } from "next/server";

export function successResponse(successData: any){
    return NextResponse.json({
        success: true,
        data: successData,
        error: null,
    })
};

export function errorResponse(errorMessage: string, status?: number){
    return NextResponse.json({
        success: true,
        data: null,
        error: errorMessage,
    }, {status: status})
} 