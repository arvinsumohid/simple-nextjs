'use client'

import PublicLayout from "@/components/layouts/public";

export default function RegisterLayout({ children }: { children: React.ReactNode }) {
  return <PublicLayout title="Register" maxWidth={600}>{children}</PublicLayout>;
}