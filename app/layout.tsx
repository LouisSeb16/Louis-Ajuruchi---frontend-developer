import type { Metadata } from "next";
import "bootstrap/dist/css/bootstrap.css";
import "../styles/global.scss";
import AppSeo from "@/components/shared/seo";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <AppSeo />
        {children}
      </body>
    </html>
  );
}
