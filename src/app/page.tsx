'use client'

import { Metadata } from "next"
import { useEffect, useState } from "react";

export const metadata: Metadata = {
  title: "Home",
}

type FoodProps = {
  id: number;
  title: string;
  price: number;
  image: string;
}

export default function Home() {

  const [foods, setFoods] = useState([]);

  const fetchFoodsData = () => {
    fetch("http://localhost:3333/food")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setFoods(data);
      });
  };

  useEffect(() => {
    fetchFoodsData();
  }, []);
  return (
    
    <div>
      {foods.map((food: FoodProps) => (
        <li key={food.id}>{food.title}</li>
      ))}
    </div>
  )
}
