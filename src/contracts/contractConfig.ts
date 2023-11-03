import { CONTRACT_ADRESS } from "@/utils";
import NFT_ABI from "@/contracts/ABI/NFTS.json";

export const nftsConfigs = {
  address: CONTRACT_ADRESS.NFTS_ADDRESS as `0x${string}`,
  abi: NFT_ABI,
} as const;
