import { Metadata } from "next";
import { Card } from "@/components/Card";
import { teste } from "../components/style.css";

export const metadata: Metadata = {
  title: "Home",
};

export default async function Home() {
  const response = await fetch("http://localhost:3000/db.json", {
    next: { revalidate: 1 },
  });
  const foods = await response.json();

  return (
    <div className={teste}>
      {foods.map((food: CardProps) => (
        <Card
          key={food.id}
          id={food.id}
          image={food.image}
          title={food.title}
          description={food.description}
          price={food.price}
        />
      ))}
    </div>
  );
}
