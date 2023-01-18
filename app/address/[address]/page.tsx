import { Lexend_Deca } from "@next/font/google";
import { Alchemy, AssetTransfersWithMetadataResult } from "alchemy-sdk";
import { utils } from "ethers";
import Image from "next/image";
import AccountTxComponent from "../../../components/AccountTxComponent";
import GoHome from "../../../components/GoHome";
import ethSvg from "../../../public/assets/eth.svg";
import "../../../styles/scroll.css";
import useAlchemy from "../../../utils/hooks/useAlchemy";
const lexend = Lexend_Deca({ display: "swap" });

export default async function AddressPage({
  params,
}: {
  params: { address: string };
}) {
  const alchemy = useAlchemy();
  const { address, ens, balance, txs } = await getAddressDetails(
    alchemy,
    params.address
  );

  return (
    <main className="pt-3 pb-12 max-w-full overflow-hidden">
      <GoHome />
      <h1 className="font-bold text-xl xl:text-2xl mb-5">Account Details</h1>
      <ul className="flex items-start lg:items-center xl:text-base flex-col xl:flex-row gap-3 xl:gap-5 mb-12">
        <li className={`${lexend.className} py-1.5 text-sm xl:text-lg`}>
          Address:{"  "}
          <span className="bg-[#151922] py-1.5 text-[12px] xl:text-lg px-2 md:px-3 mt-3  block md:inline-block xl:mt-0">
            {" "}
            {address}
          </span>
        </li>
        {ens && (
          <li className="bg-[#151922] py-[4.5px] px-3 xl:py-[5.5px] text-[12px] xl:text-lg xl:px-4 text-center">
            {"  "}@{ens}
          </li>
        )}
        <li className=" text-lg py-1.5  xl:px-4 items-center flex gap-2">
          <p className={`${lexend.className} text-sm xl:text-lg`}>
            ETH Balance:{" "}
          </p>
          <span className="bg-[#151922] sm:pr-3 py-[2px] xl:py-[4.5px] text-[12px] xl:text-lg px-2 xl:px-4 ml-2 xl:ml-0  flex gap-1 items-center">
            <Image
              alt="eth"
              aria-hidden={true}
              src={ethSvg}
              priority={true}
              width={24}
              height={24}
            />
            {utils.formatEther(balance).toString().slice(0, 7)}{" "}
          </span>
        </li>
        <li
          className={` ${lexend.className} py-1.5 xl:py-4 text-sm xl:text-lg xl:px-4`}>
          Total Transactions:{"  "}{" "}
          <span className="bg-[#151922] py-1 ml-2 xl:ml-0 xl:py-2 text-[12px] xl:text-lg px-2 xl:px-4">
            {txs.transfers.length === 1000 ? "1000+" : txs.transfers.length}
          </span>
        </li>
      </ul>

      <div className="">
        <h2
          className={`${lexend.className} mb-6 font-semibold xl:text-xl text-base`}>
          Recent Transactions
        </h2>
        {txs.transfers.length ? (
          <div
            className={`flex items-center gap-5 md:pl-1 pl-0 lg:pl-0 md:gap-32 lg:gap-[11.2rem] xl:gap-5 text-[13px] font-normal mb-2 xl:text-base xl:font-semibold ${lexend.className}}`}>
            <h4 className={`w-20 ${lexend.className} hidden xl:block `}>
              Type
            </h4>
            <h4 className={`w-24 ${lexend.className}`}>Token</h4>
            <h4 className={`w-[47%] ${lexend.className}`}>Hash</h4>
            <h4 className={`w-48 ${lexend.className} hidden xl:block `}>
              From
            </h4>
            <h4 className={`w-48 ${lexend.className} hidden xl:block `}>To</h4>
            <h4 className={`w-16 ${lexend.className}`}>Value</h4>
          </div>
        ) : (
          <p>No Transactions</p>
        )}
        <div className="max-h-[75vh] overflow-y-scroll scroll pr-2">
          {txs.transfers
            .reverse()
            .map((tx: AssetTransfersWithMetadataResult, i: number) => (
              <AccountTxComponent
                key={tx.toString() + i}
                tx={tx}
                address={address}
              />
            ))}
        </div>
      </div>
    </main>
  );
}

async function getAddressDetails(alchemy: Alchemy, address: string) {
  const txs = await alchemy.core.getAssetTransfers({
    fromAddress: address,
    category: ["external", "internal", "erc20"],
  });
  const ens = await alchemy.core.lookupAddress(address);
  console.log(ens);

  const balance = await alchemy.core.getBalance(address);
  return { address, ens, balance, txs };
}
