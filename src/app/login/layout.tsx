'use client'

import PublicLayout from "@/components/layouts/public";

export default function LoginLayout({ children }: { children: React.ReactNode }) {
  return <PublicLayout title="Login">{children}</PublicLayout>;
}