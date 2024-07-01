'use client'
import { FC } from "react"
import { useRouter } from 'next/navigation'

export const BackComponent: FC = () => {

    const router = useRouter()

    return (
        <div>
            <p
                onClick={() => router.push('/admin')}
                className="flex h-10 items-center justify-center bg-indigo-600 px-4 text-sm font-medium text-white sm:px-6 lg:px-8">
                BACK ADMIN
            </p>
        </div>
    )
}