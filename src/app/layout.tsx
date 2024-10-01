import "./globals.css";
import type { Metadata } from "next";
import { Nav, NavLink, Footer } from "@/components";
import { routes } from "../keys/routes";

export const metadata: Metadata = {
  title: "Gallery",
  description: "Simple gallery",
  icons:
    "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🖼️</text></svg>",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <Nav>
          <NavLink href={routes.HOME}>Home</NavLink>
          <NavLink href={routes.CATEGORIES}>Categories</NavLink>
          <NavLink href={routes.NEW_IMAGE}>New Image</NavLink>
          <NavLink href={routes.NEW_CATEGORY}>New Category</NavLink>
        </Nav>
        <main className="flex-grow px-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
