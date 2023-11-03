export const data_images = [
  {
    id: 0,
    image: "/data/0.png",
    ipfs: "ipfs://QmVnS122QbPyuKbnPbFxaZo2j1VCXXua68GJ21yQcn3Qme",
  },
  {
    id: 1,
    image: "/data/1.png",
    ipfs: "ipfs://QmdXNZAr6v4rDC4vPMjH1oUPZeS4PbDRMw2rV6a1JxApWw",
  },
  {
    id: 2,
    image: "/data/2.png",
    ipfs: "ipfs://QmYPPF9b4FVVF8goccChFsz1WyLFNWFJZUgUyNSfvTY4We",
  },
  {
    id: 3,
    image: "/data/3.png",
    ipfs: "ipfs://QmbZt3WGKDHZUTWgWYxXK17coNotrf5ZBUANAucFjU2eaj",
  },
];

export const shortenAdress = (addr: string | undefined) =>
  addr != null ? `${addr.slice(0, 13)}...${addr.slice(addr.length - 13)}` : "";

export const CONTRACT_ADRESS = {
  NFTS_ADDRESS: process.env.NEXT_PUBLIC_NFT_ADDRESS,
};
