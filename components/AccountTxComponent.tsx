"use client";

import { AssetTransfersWithMetadataResult } from "alchemy-sdk";
import Link from "next/link";
import shorten from "../utils/shorten";

const TxComponent = ({
  tx,
  address,
}: {
  tx: AssetTransfersWithMetadataResult;
  address: string;
}) => {
  console.log();

  return (
    <div className="flex items-center xl:gap-5 gap-2 mb-3">
      <p className="w-20 hidden xl:block py-1 xl:py-1.5 text-center bg-[#151922] ">
        {tx.category}
      </p>
      <p className="w-16 xl:w-24 py-1.5 xl:py-[0.6rem] text-center text-[0.63rem] bg-[#151922] font-semibold">
        {tx.asset === null ? "null" : tx.asset.slice(0, 5)}
      </p>
      <Link
        className="w-60 md:w-[80%] px-2 xl:px-0 overflow-hidden whitespace-nowrap text-ellipsis xl:w-[47%] text-center py-1  xl:py-1.5 bg-[#151922] text-[#5690fa] hover:bg-black hover:text-gray-400 hover:scale-[1.02] duration-100 ease-in"
        href={`/tx/${tx.hash}`}>
        {tx.hash}
      </Link>
      {tx.from === address ? (
        <div className="w-48 py-1.5 hidden xl:block  text-center bg-[#151922] text-gray-300">
          {shorten(tx.from, 9, 8)}
        </div>
      ) : (
        <Link
          className="hidden xl:block w-48 py-1.5 text-center bg-[#151922] text-[#5690fa] hover:bg-black hover:text-gray-400 hover:scale-[1.02] duration-100 ease-in"
          href={`/address/${tx.from}`}>
          {shorten(tx.from, 9, 8)}
        </Link>
      )}
      {tx.to === address ? (
        <div className=" w-48 py-1.5 hidden xl:block   text-center bg-[#151922] text-gray-300">
          {" "}
          {tx.to ? shorten(tx.to, 9, 8) : 0x000000000}
        </div>
      ) : (
        <Link
          className="hidden xl:block  w-48 py-1.5  text-center bg-[#151922] text-[#5690fa] hover:bg-black hover:text-gray-400 hover:scale-[1.02] duration-100 ease-in"
          href={`/address/${tx.to}`}>
          {tx.to ? shorten(tx.to, 9, 8) : 0x000000000}
        </Link>
      )}

      <p className="bg-[#151922] w-16 text-center py-1.5 text-[0.68rem] xl:text-sm xl:py-1.5">
        {tx.value !== null ? tx.value?.toString().slice(0, 5) : "null"}
      </p>
    </div>
  );
};

export default TxComponent;
