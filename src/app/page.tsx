import { Metadata } from "next";
import next from "next/types";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Home",
};

type FoodProps = {
  id: number;
  title: string;
  price: number;
  image: string;
};

export default async function Home() {
  const response = await fetch(
    "https://raw.githubusercontent.com/NicoleSF/mentoria-db-goRestaurant/main/db.json",
    { next: { revalidate: 60 * 60 * 24 } }
  );
  const foods = await response.json();

  return (
    <div>
      {foods.map((food: FoodProps) => (
        <>
          <li key={food.id}>{food.title}</li>
          <Image src={food.image} alt="prato" width={200} height={100} />
        </>
      ))}
    </div>
  );
}
