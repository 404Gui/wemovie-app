"use client";

import { useCart } from "@/context/CartContext";

const HeaderItensButton = () => {
  const { state } = useCart();

  const totalItens = state.items.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <button
      className="text-[#999999] text-[12px] font-semibold cursor-pointer hover:text-gray-100 transition-colors duration-200"
    >
      {totalItens} itens
    </button>
  );
};

export default HeaderItensButton;
