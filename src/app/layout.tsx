import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/Footer";
import { Nav, NavLink } from "@/components/Nav";

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
          <NavLink href={"/"}>Home</NavLink>
          <NavLink href={"/categories"}>Categories</NavLink>
        </Nav>
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
