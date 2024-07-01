import {
  RegisterLink,
  LoginLink,
  getKindeServerSession,
  LogoutLink
} from "@kinde-oss/kinde-auth-nextjs/server";

import { ClientProviderComponent } from '@/providers'
import { HeroComponent } from '@/components/atoms'
import { HomePage } from '@/features/home/pages'
import { MainBanner, MainHeader, MainFooter } from '@/components/layouts'

// async function getData() {
//   const res = await fetch('https://api.github.com/repos/vercel/next.js', { cache: 'force-cache' })

//   if (!res.ok) {
//     throw new Error('Failed to fetch data')
//   }

//   return res.json()
// }

export default async function Home() {
  const { getUser, isAuthenticated } = getKindeServerSession();
  console.log('====================================');
  console.log(getUser, isAuthenticated);
  console.log('====================================');
  return (
    <ClientProviderComponent>
      <LoginLink>Sign in</LoginLink>

      <RegisterLink>Sign up</RegisterLink>
      <LogoutLink className="inline-block mt-8 underline text-blue-500">
        Logout
      </LogoutLink>
      <MainBanner />
      <MainHeader />
      <HeroComponent />
      <HomePage />
      <MainFooter />
    </ClientProviderComponent>
  );
}
