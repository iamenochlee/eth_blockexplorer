import { BlockWithTransactions } from "@ethersproject/abstract-provider";
import "../styles/scroll.css";
import TxComponent from "./TxComponent";

export default function Block({ block }: { block: BlockWithTransactions }) {
  return (
    <section className="flex flex-col xl:flex-row xl:h-96 max-h-[120vh] xl:relative overflow-hidden xl:px-12 py-9 xl:bg-[#151922] gap-5 justify-between relative">
      <div className="text-[0.63rem] md:text-[13px] xl:text-sm">
        <h3 className="text-lg font-semibold mb-2"> Block #{block.number}</h3>
        <p className="mb-4 text-base">
          Block Transactions: {block.transactions.length}
        </p>
        <ul className="flex flex-col gap-1">
          <li className="text-[8.6px] md:text-[13px] xl:text-sm">
            <span className="font-semibold capitalize">hash: </span>
            {block.hash}
          </li>
          <li>
            <span className="font-semibold capitalize">nonce: </span>
            {block.nonce}
          </li>
          <li>
            <span className="font-semibold capitalize">timestamp:</span>{" "}
            {new Intl.DateTimeFormat("en-US", {
              year: "numeric",
              month: "2-digit",
              day: "2-digit",
              hour: "2-digit",
              minute: "2-digit",
              second: "2-digit",
            }).format(block.timestamp * 1000)}
          </li>
          <li>
            <span className="font-semibold capitalize">parentHash: </span>
            {block.parentHash}
          </li>
          <li>
            <span className="font-semibold capitalize">miner:</span>{" "}
            {block.miner}
          </li>
          <li>
            <span className="font-semibold capitalize">gasLimit:</span>{" "}
            {block.gasLimit.toString()}
          </li>
          <li>
            <span className="font-semibold capitalize">baseFeePerGas:</span>{" "}
            {block.baseFeePerGas?.toString()}
          </li>
          <li>
            <span className="font-semibold capitalize">extra data:</span>{" "}
            {block.extraData}
          </li>
        </ul>
        <h2 className="xl:hidden mt-8 font-bold text-lg">Transactions</h2>
        <div className="flex xl:hidden gap-24 md:gap-36 mt-3 -mb-4">
          <h4>Hash</h4>
          <h4>From</h4>
          <h4>To</h4>
        </div>
      </div>
      <div className=" overflow-y-scroll overflow-x-hidden scroll pr-2">
        <div className="hidden xl:flex gap-24 pr-16 pl-12 mt-3 -mb-4 absolute top-[3px]">
          <h4>Hash</h4>
          <h4>From</h4>
          <h4>To</h4>
        </div>
        <div className="xl:flex justify-between xl:justify-center px-[72px] pr-8 items-center absolute xl:top-0 xl:gap-24 hidden pt-[7px]"></div>
        {block.transactions.map((tx, i) => (
          <TxComponent key={tx.toString() + i} tx={tx} i={i} />
        ))}
      </div>
    </section>
  );
}
