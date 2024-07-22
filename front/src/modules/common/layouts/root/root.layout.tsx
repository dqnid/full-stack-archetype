import type { Metadata } from "next";
import "@/styles/main.scss";

export const metadata: Metadata = {
  title: "Personal finance - Home",
  description: "Manage your money blablabla",
};

export function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
