import "bootstrap/dist/css/bootstrap.css";
import "../styles/global.scss";
import type { Metadata } from "next";
import { seoData } from "@/components/shared/seo/data";

const { name, title, description, tagline, github, twitter, url, image } =
  seoData;

export const metadata: Metadata = {
  title: {
    default: name + "-" + tagline,
    template: "%s - " + name,
  },
  description: description,
  metadataBase: new URL(url),
  openGraph: {
    url: url,
    title: name + "-" + tagline,
    description: description,
    images: [
      {
        url: image,
        width: 1200,
        height: 628,
        alt: name + "-" + tagline,
      },
    ],
    siteName: name,
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
