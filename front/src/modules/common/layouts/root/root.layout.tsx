import type { Metadata } from "next";
import "@/styles/main.scss";
import { ApplicationProvider } from "../../providers/application.provider";

export const metadata: Metadata = {
  title: "Full stack archetype",
  description:
    "This is a full stack archetype supported in NextJS, NestJS and mysql",
};

export function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ApplicationProvider>{children}</ApplicationProvider>
      </body>
    </html>
  );
}
