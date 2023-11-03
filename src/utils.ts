export const data_images = [
  {
    id: 0,
    image: "/data/0.png",
  },
  {
    id: 1,
    image: "/data/1.png",
  },
  {
    id: 2,
    image: "/data/2.png",
  },
  {
    id: 3,
    image: "/data/3.png",
  },
];

export const shortenAdress = (addr: string | undefined) =>
  addr != null ? `${addr.slice(0, 13)}...${addr.slice(addr.length - 13)}` : "";