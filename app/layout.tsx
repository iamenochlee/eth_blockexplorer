import { Raleway } from "@next/font/google";
import Image from "next/image";
import Link from "next/link";
import Search from "../components/Search";
import "../styles/globals.css";

const raleway = Raleway({ display: "swap" });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body
        className={`${raleway.className} w-full pb-9 bg-[#0a0b0e] text-gray-200 px-6 sm:px-12 xl:px-24 min-h-[100vh]`}>
        <header className="w-full flex items-end justify-end py-10">
          <div>
            <Search />
          </div>
        </header>
        <main className="">{children}</main>
        <div className="flex gap-9 items-center justify-center w-full">
          <Link
            href="https://alchemy.com/"
            className="block text-sm xl:text-base"
            target={"_blank"}>
            powered by{" "}
            <span className="text-[#5690fa] font-bold">@Alchemy</span>
          </Link>
          <Link
            href="https://github.com/iamenochlee"
            target={"_blank"}
            className="block">
            <Image
              src="/assets/github.svg"
              alt="enochlee's github page"
              width={40}
              height={40}
            />
          </Link>
        </div>
      </body>
    </html>
  );
}
