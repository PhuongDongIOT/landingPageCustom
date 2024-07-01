import { db, databaseSchema } from "@/lib/database"
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server"
import { eq } from "drizzle-orm"
import { NextResponse } from "next/server"

import { checkIsEmtyArray } from '@/utils'

export async function GET() {
    const customersConection = databaseSchema.customers
    // check if user exists
    const { getUser, getOrganization } = getKindeServerSession()
    const user = await getUser()
    // const { orgCode } = await getOrganization()

    if (!user || user == null || !user.id) {
        return NextResponse.json({
            status: false
        })
        // throw new Error("something went wrong with authentication" + user)
    }
    else {
        const dbUser = await db.select({
            id: customersConection.id
        }).from(customersConection).where(eq(customersConection.id, user.id))

        if (!(checkIsEmtyArray(dbUser))) {
            await db.insert(customersConection)
                .values({
                    id: user.id,
                    firstName: user.given_name,
                    lastName: user.given_name,
                    email: user.email
                })
        }

        return NextResponse.redirect("http://localhost:3000/")
    }

}