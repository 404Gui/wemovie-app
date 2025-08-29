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
          ? "bg-[#039B00] hover:bg-green-700"
          : "bg-[#009EDD] hover:bg-blue-600"
      } text-white font-medium px-4 py-2 rounded-lg transition flex items-center justify-center gap-2 w-full cursor-pointer`}
    >
      <Image
        src="/carrinho_home.png"
        alt="Carrinho de compras"
        width={13}
        height={13}
        className="object-contain"
      />
      {quantity > 0 && <span className="text-[12px]">{quantity}</span>}
      <span className="uppercase font-bold text-[12px]">Adicionar ao Carrinho</span>
    </button>
  );
};

export default HomeAddButton;
