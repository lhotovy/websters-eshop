import bcrypt from "bcrypt";
import prisma from "@/lib/prismadb";
import { NextResponse } from "next/server";

export async function POST(request: any) {
    const body = await request.json();
    const { password, email, name } = body;

    if (!name || !email || !password) {
        return new NextResponse("Missing fields", { status: 400 });
    };

    const existingUser = await prisma.user.findUnique({
        where: {
            email
        }
    });

    if (existingUser) {
        throw new Error("Username already exists");
    };

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await prisma.user.create({
        data: {
            name,
            email,
            password: hashedPassword
        }
    });

    return NextResponse.json(user);
};