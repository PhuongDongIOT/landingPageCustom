// import type { NextApiRequest, NextApiResponse } from 'next'
import { NextResponse  } from 'next/server'
 
type ResponseData = {
  message: string
}
 
export async function GET(
) {
  return NextResponse.json({ message: 'Hello from Next.js!' })
}

export async function POST() {
  return NextResponse.json({ message: 'Hello from Next.js!' })
}

export async function PUT() {
  return NextResponse.json({ message: 'Hello from Next.js!' })
}

export async function DELETE() {
  return NextResponse.json({ message: 'Hello from Next.js!' })
}