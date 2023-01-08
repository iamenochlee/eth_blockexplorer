import { TransactionResponse } from "@ethersproject/abstract-provider";
import Link from "next/link";
import shorten from "../utils/shorten";

const TxComponent = ({ tx, i }: { tx: TransactionResponse; i: number }) => {
  return (
    <div className="flex items-center justify-between gap-1 ">
      <p className="pb-2 font-bold hidden xl:block">tx{i + 1}:</p>

      <div className="flex mb-2 bg-[#1b1e25]">
        <Link
          className="w-[7rem] md:w-40 xl:w-32 xl:text-base text-center py-1.5 text-[#5690fa]  border-[#0a0b0e] border-[1.5px] hover:bg-black hover:text-gray-400 hover:scale-[1.02] duration-100"
          href={`/tx/${tx.hash}`}>
          {shorten(tx.hash, 6, 5)}
        </Link>
        <Link
          className="w-[6.2rem] md:w-32 l:w-28 py-1.5 xl:text-base text-center text-[#5690fa] border-[#0a0b0e] border-[1.5px] hover:bg-black hover:text-gray-400 hover:scale-[1.02] duration-100"
          href={`/address/${tx.from}`}>
          {shorten(tx.from)}
        </Link>
        <Link
          className="w-[6.2rem] md:w-32 xl:w-28 py-1.5  xl:text-base text-center text-[#5690fa] border-[#0a0b0e] border-[1.5px] hover:bg-black hover:text-gray-400 hover:scale-[1.02] duration-100"
          href={`/address/${tx.to}`}>
          {tx.to ? shorten(tx.to) : 0x00}
        </Link>
      </div>
    </div>
  );
};

export default TxComponent;
