import { Alchemy } from "alchemy-sdk";
import Image from "next/image";
import Link from "next/link";
import GoHome from "../../../components/GoHome";
import ethSvg from "../../../public/assets/eth.svg";
import useAlchemy from "../../../utils/hooks/useAlchemy";

export default async function Hashpage({ params }: any) {
  const alchemy = useAlchemy();
  const tx = await getTransactionDetails(alchemy, params.hash);

  return (
    <main className="pt-6">
      <GoHome />
      <h1 className="font-bold text-2xl mb-9">Transaction Details</h1>
      {tx ? (
        <div className="flex items-start justify-between">
          <ul className="text-[11px] xl:text-base">
            <li className="w-72 xl:w-auto overflow-hidden whitespace-nowrap text-ellipsis">
              <span className="font-bold capitalize">hash: </span>
              {tx?.transactionHash}
            </li>
            <li>
              <span className="font-bold capitalize">blocknumber: </span>
              {tx?.blockNumber}
            </li>
            <li>
              <Link
                href={`/address/${tx?.from}`}
                className="text-[#5690fa] font-bold inline-block hover:text-blue-700">
                <span className="font-bold capitalize text-white">from: </span>
                {tx?.from}
              </Link>
            </li>
            <li>
              <Link
                href={`/address/${tx?.to}`}
                className=" inline-block text-[#5690fa] font-bold hover:text-blue-700">
                <span className="font-bold text-white capitalize">to: </span>
                {tx?.to}
              </Link>
            </li>

            <li>
              <span className="font-bold capitalize">confirmations: </span>
              {tx?.confirmations}
            </li>

            <li>
              <span className="font-bold capitalize">gasUsed: </span>
              {tx?.gasUsed.toString()}
            </li>
            {tx?.contractAddress && (
              <li>
                <span className="font-bold capitalize">contract: </span>
                {tx?.contractAddress}
              </li>
            )}
            <li>
              <span className="font-bold capitalize">type: </span>
              {tx?.type}
            </li>
            <li>
              <span className="font-bold capitalize">byzantum: </span>
              {tx?.byzantium}
            </li>
            <li>
              <span className="font-bold capitalize">cummulative gas: </span>
              {tx?.cumulativeGasUsed.toString()}
            </li>
            {tx?.root && (
              <li>
                <span className="font-bold capitalize">root: </span>
                {tx?.root}
              </li>
            )}
            <li className="w-72 xl:w-auto overflow-hidden whitespace-nowrap text-ellipsis">
              <span className="font-bold capitalize">blockHash: </span>
              {tx?.blockHash}
            </li>
          </ul>
          <Image
            src={ethSvg}
            width={250}
            height={300}
            alt="eth"
            className="hidden xl:block"
          />
        </div>
      ) : (
        <p>Transaction Not Found</p>
      )}
    </main>
  );
}

async function getTransactionDetails(alchemy: Alchemy, hash: string) {
  const tx = await alchemy.core.getTransactionReceipt(hash);
  return tx;
}
