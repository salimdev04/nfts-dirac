"use client";

/* eslint-disable @next/next/no-img-element */
import { data_images, shortenAdress } from "@/utils";
import Image from "next/image";
import { connect } from "@wagmi/core";
import { InjectedConnector } from "wagmi/connectors/injected";
import { useAccount } from "wagmi";
import { toast } from "react-toastify";
import {
  useNFTsContractRead,
  useNFTsContractWrite,
} from "@/contracts/contracts";

export default function Home() {
  const { address } = useAccount();
  const { write: setTokenURI } = useNFTsContractWrite("setTokenURI");
  const { write: tokenURI } = useNFTsContractWrite("tokenURI");
  const { write: safeMint } = useNFTsContractWrite("safeMint");

  const connectWallet = async () => {
    await connect({
      connector: new InjectedConnector() as any,
    });
  };

  const addTokenUri = async () => {
    const uri = "ipfs://QmUQ9zRfoi2LYPtiwLs2saKSVRTgimBnRCYtdkMsWjaB9a";
    await setTokenURI({ args: [uri] });
  };

  const checkTokenID = async () => {
    const _id = 1;
    const result = await tokenURI({ args: [_id] });
    console.log("result: ", result);
  };

  const mintToken = async (_uri: string) => {
    await safeMint({ args: [_uri] });
    toast.success("successfully");
  };

  return (
    <main className=" p-[2rem]">
      <button
        onClick={connectWallet}
        className="p-2 bg-green-500 rounded-md absolute top-[1rem] right-[2rem]"
      >
        Connect Your Waller
      </button>
      <button className=" border m-2" onClick={addTokenUri}>
        add Token uri
      </button>

      <button className=" border m-2" onClick={checkTokenID}>
        check Token id
      </button>
      {address && (
        <div className="mt-[2rem] text-right text-red-400">
          <p>Polygon zkEVM Testnet</p>
          <p>{shortenAdress(address)}</p>
        </div>
      )}

      <div className="grid grid-cols-4 gap-[1rem] my-[4rem]">
        {data_images.map((item, idx) => (
          <div key={idx}>
            <img
              className="mx-auto"
              src={item.image}
              alt="token nft"
              width={300}
              height={400}
            />
            <button
              onClick={() => mintToken(item.ipfs)}
              className="p-2 my-4 w-full text-center bg-red-400 rounded-sm"
            >
              Mint Token
            </button>
          </div>
        ))}
      </div>
    </main>
  );
}
