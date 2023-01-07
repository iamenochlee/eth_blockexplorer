import { Raleway } from "@next/font/google";
import Search from "../components/Search";
import "../styles/globals.css";

const raleway = Raleway();

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body
        className={`${raleway.className} w-full bg-[#0a0b0e] text-gray-200 px-6 sm:px-12 xl:px-24 min-h-[100vh]`}>
        <header className="w-full flex items-end justify-end py-10">
          <div>
            <Search />
          </div>
        </header>
        <main className="">{children}</main>
      </body>
    </html>
  );
}
