import Image from "next/image";
import { container } from "./style.css";

export const Card = ({ id, title, description, price, image }: CardProps) => {
  return (
    <div key={id} className={container}>
      <Image src={image} alt="pratos" width={500} height={500} />
      <h4>{title}</h4>
      <p>{description}</p>
      <p>{price}</p>
      <div>
        <button>Toggle</button>
      </div>
    </div>
  );
};
