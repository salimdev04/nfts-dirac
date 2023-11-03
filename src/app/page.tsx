"use client";

/* eslint-disable @next/next/no-img-element */
import { data_images, shortenAdress } from "@/utils";
import Image from "next/image";
import { connect } from "@wagmi/core";
import { InjectedConnector } from "wagmi/connectors/injected";
import { useAccount } from "wagmi";
import { toast } from "react-toastify";

export default function Home() {
  const { address } = useAccount();
  const connectWallet = async () => {
    await connect({
      connector: new InjectedConnector() as any,
    });
  };
  return (
    <main className=" p-[2rem]">
      <button
        onClick={connectWallet}
        className="p-2 bg-green-500 rounded-md absolute top-[1rem] right-[2rem]"
      >
        Connect Your Waller
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
            <button className="p-2 my-4 w-full text-center bg-red-400 rounded-sm">
              Mint Token
            </button>
          </div>
        ))}
      </div>
    </main>
  );
}
