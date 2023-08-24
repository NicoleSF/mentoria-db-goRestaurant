import { Metadata } from "next";

export const metadata: Metadata = {
    title: "GoRestaraunt",
}

type ProductsIdProps = {
    params: {
        id: string;
    }
}

export default function ProductsId({ params }: ProductsIdProps) {
    return (
        <h1>Products ID: {params.id}</h1>
    )
}