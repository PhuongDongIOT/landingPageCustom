import { DashboardPage } from '@/features/admin/pages'

export default function DashboardPageI() {
  return (
    <main className="w-full h-full flex max-h-screen overflow-y-auto flex-col items-center justify-between p-24 bg-slate-200">
      <DashboardPage />
    </main>
  );
}
