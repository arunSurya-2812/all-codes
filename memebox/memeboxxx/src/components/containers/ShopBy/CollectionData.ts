import {
  image,
  image1,
  images3,
  images4,
  images2,
  images5,
  images7,

  images6,
} from "../../../assets/image/collections";

export interface ICollectionData {
  image: any;
  name: string;
}

export const CollectionData: ICollectionData[] = [
  {
    image: image,
    name: "STONE JEWELLERY",
  },
  {
    image: images2,
    name: "NINJA HOODIES",
  },
  {
    image: images3,
    name: "CASUAL SHOES",
  },
  {
    image: images4,
    name: "FORAML SHOES",
  },
  {
    image: images5,
    name: "WOMEN'S TEES & TOPS",
  },
  {
    image: images6,
    name: "LEATHER SNEAKERS",
  },
  {
    image: images7,
    name: "RAPID DRY POLOS",
  },
  {
    image: image1,
    name: "MENS T-SHIRTS",
  },
];
