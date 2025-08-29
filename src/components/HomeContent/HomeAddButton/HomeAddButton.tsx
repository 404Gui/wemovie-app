"use client";
import { useCart } from "@/context/CartContext";
import Image from "next/image";
import { HomeAddButtonProps } from "./types";

const HomeAddButton = ({
  movieId,
  title,
  price,
  image,
}: HomeAddButtonProps) => {
  const { state, dispatch } = useCart();

  const item = state.items.find((i) => i.id === movieId);
  const quantity = item?.quantity ?? 0;

  const handleAdd = () => {
    dispatch({
      type: "ADD_ITEM",
      payload: { id: movieId, title, price, image, quantity: 1 },
    });
  };

  return (
    <button
      onClick={handleAdd}
      className={`${
        quantity > 0
          ? "bg-green-600 hover:bg-green-700"
          : "bg-blue-500 hover:bg-blue-600"
      } text-white font-medium px-4 py-2 rounded-lg transition flex items-center justify-center gap-2 w-full`}
    >
      <Image
        src="/carrinho_home.png"
        alt="Carrinho de compras"
        width={13}
        height={13}
        className="object-contain"
      />
      {quantity > 0 && <span>{quantity}</span>}
      <span className="uppercase">Adicionar ao Carrinho</span>
    </button>
  );
};

export default HomeAddButton;
