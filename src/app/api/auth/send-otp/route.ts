import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import prisma from '@/lib/prisma';
import { z } from 'zod';

const resend = new Resend(process.env.RESEND_API_KEY);

const EmailSchema = z.string().email();

// Function to generate a random 6-digit code
const generateRandomCode = () => {
  return Math.floor(100000 + Math.random() * 900000).toString();
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const validatedEmail = EmailSchema.safeParse(body.email);

    if (!validatedEmail.success) {
      return NextResponse.json({ message: 'Invalid email address.' }, { status: 400 });
    }
    
    const email = validatedEmail.data;
    const code = generateRandomCode();
    const expires = new Date(new Date().getTime() + 15 * 60 * 1000); // 15 minutes from now

    // Upsert the token: update if email exists, otherwise create new
    await prisma.verificationToken.upsert({
      where: { identifier: email },
      update: {
        token: code,
        expires,
      },
      create: {
        identifier: email,
        token: code,
        expires,
      },
    });

    // Send email with the code
    await resend.emails.send({
      from: process.env.EMAIL_FROM!,
      to: email,
      subject: 'Your Sign-In Code',
      html: `<p>Your one-time sign-in code is: <strong>${code}</strong></p><p>This code will expire in 15 minutes.</p>`,
    });

    return NextResponse.json({ message: 'Verification code sent.' }, { status: 200 });

  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: 'An error occurred.' }, { status: 500 });
  }
}
