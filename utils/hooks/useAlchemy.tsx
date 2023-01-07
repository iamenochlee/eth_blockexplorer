import { Network, Alchemy } from "alchemy-sdk";
import { AlchemySettings } from "alchemy-sdk/dist/src/types/types";

//settings
const settings: AlchemySettings = {
  apiKey: process.env.ALCHEMY_API_KEY,
  network: Network.ETH_MAINNET,
};

export default function useAlchemy() {
  const alchemy: Alchemy = new Alchemy(settings);
  return alchemy;
}
