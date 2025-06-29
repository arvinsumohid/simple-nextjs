import PrivateLayout from "@/components/layouts/private";

export default function LoginLayout({ children }: { children: React.ReactNode }) {
  return <PrivateLayout>{children}</PrivateLayout>;
}