import Link from "next/link";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Darkysadow's First Shopify project",
  description: "Stack: Tailwind CSS, Next.js Shopify Storefront API",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={
          "flex min-h-screen w-[100%] flex-col items-center bg-slate-50 bg-gradient-to-b text-black"
        }
      >
        <header className="mb-2 flex w-[100%] flex-row items-center justify-center ">
          <nav className="container relative flex flex-row items-center justify-between py-3 before:absolute before:bottom-0 before:h-[0.5px] before:w-[100%] before:rounded before:bg-slate-900 ">
            <p className="text-2xl font-extrabold">Logo.</p>
            <ul className="flex flex-row items-center justify-center gap-5 font-medium">
              <li>
                <Link href={"/tables"}>Tables</Link>
              </li>
              <li>
                <Link href={"/"}>Home</Link>
              </li>
            </ul>
          </nav>
        </header>
        <main className="flex w-[100%] flex-col items-center">{children}</main>
        <footer className="mb-2 mt-auto flex w-[100%] flex-row items-center justify-center bg-zinc-400">
          <nav className="container flex flex-row-reverse items-center justify-between py-3">
            <p className="text-2xl font-extrabold">Logo.</p>
            <ul className="flex flex-row items-center justify-center gap-5 font-medium">
              <li>
                <Link href={"/tables"}>Tables</Link>
              </li>
              <li>
                <Link href={"/"}>Home</Link>
              </li>
            </ul>
          </nav>
        </footer>
      </body>
    </html>
  );
}
