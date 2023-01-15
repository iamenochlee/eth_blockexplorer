import { BlockWithTransactions } from "@ethersproject/abstract-provider";
import { Alchemy } from "alchemy-sdk";
import { ethers } from "ethers";
import Block from "../components/Block";
import BlockBox from "../components/BlockBox";
import blockSvg from "../public/assets/block.svg";
import ethSvg from "../public/assets/eth.svg";
import gasSvg from "../public/assets/gas.svg";
import useAlchemy from "../utils/hooks/useAlchemy";

export default async function Page(): Promise<JSX.Element> {
  const alchemy = useAlchemy();
  const { block, gasPrice, ethPrice } = await getHomePageDetails(alchemy);

  return (
    <>
      <div className="flex xl:gap-12 gap-1 flex-col pb-12 text-[12px]">
        <section className="xl:bg-[#151922] xl:py-9 xl:px-12 xl:flex gap-2 xl:gap-6 items-center justify-between">
          <BlockBox
            name="current block"
            value={`#${block.number}`}
            icon={blockSvg}
          />
          <BlockBox
            name="eth price"
            value={`$${ethPrice?.ethereum?.usd}`}
            icon={ethSvg}
          />
          <BlockBox
            name="gas price"
            value={`${ethers.utils
              .formatUnits(gasPrice.toString(), "gwei")
              .toString()
              .slice(0, 5)} Gwei`}
            icon={gasSvg}
          />
        </section>
        <Block block={block} />
      </div>
    </>
  );
}

async function getHomePageDetails(alchemy: Alchemy) {
  let ethPrice: IethPrice;
  try {
    const res = await fetch(
      "https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd",
      { cache: "no-store" }
    );
    ethPrice = await res.json();
  } catch (error: any) {
    console.log(error.message);
    ethPrice = { ethereum: { usd: "0000" } };
  }
  const block: BlockWithTransactions =
    await alchemy.core.getBlockWithTransactions("latest");
  const gasPrice = await alchemy.core.getGasPrice();
  return { block, gasPrice, ethPrice };
}

interface IethPrice {
  ethereum: {
    usd: string | number;
  };
}
