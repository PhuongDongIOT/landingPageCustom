import {databaseSchema, db} from '@/lib/database'
import { NextResponse  } from 'next/server'
 
type ResponseData = {
  message: string
}
 
export async function GET(
) {
  return NextResponse.json({ message: 'Hello from Next.js!' })
}