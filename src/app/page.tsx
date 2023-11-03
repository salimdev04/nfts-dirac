/* eslint-disable @next/next/no-img-element */
import { data_images } from "@/data";
import Image from "next/image";

export default function Home() {
  return (
    <main className="relative p-[2rem]">
      <button className="p-2 bg-green-500 rounded-md absolute top-[1rem] right-[2rem]">
        Connect Your Waller
      </button>

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
