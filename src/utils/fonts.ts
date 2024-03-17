import { Roboto_Slab } from "next/font/google";
import { Ubuntu_Mono } from "next/font/google";

export const ubuntu = Ubuntu_Mono({
  weight: ["400", "700"],
  subsets: ["cyrillic"],
});

export const roboto = Roboto_Slab({
  weight: ["400", "500", "600", "800"],
  subsets: ["cyrillic"],
});
