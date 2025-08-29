"use client";

import { useCart } from "@/context/CartContext";
import Link from "next/link";
import EmptyState from "../EmptyState/EmptyState";
import CartItemDesktop from "./CartItemDesktop/CartItemDesktop";
import CartItemMobile from "./CartItemMobile/CartItemMobile";

const CartContent = () => {
  const { state } = useCart();

  const total = state.items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  if (state.items.length === 0) {
    return (
      <EmptyState
        title="Seu carrinho está vazio"
        image="/vazio.png"
        buttonLabel="VOLTAR"
        buttonHref="/"
      />
    );
  }

  return (
    <div className="bg-white rounded p-6 mb-6">
      <div className="hidden sm:grid grid-cols-4 font-semibold text-sm text-[#999999] border-b pb-2 mb-4">
        <span>PRODUTO</span>
        <span className="text-center">QTD</span>
        <span className="text-right">SUBTOTAL</span>
        <span className="invisible">Ações</span>
      </div>

      <div className="flex flex-col gap-4">
        {state.items.map((item) => (
          <div key={item.id}>
            <CartItemDesktop item={item} />
            <CartItemMobile item={item} />
          </div>
        ))}
      </div>

      <div className="flex flex-col-reverse sm:flex-row justify-between items-center border-t mt-6 pt-4 gap-4">
        <Link
          href="/sucesso"
          className="bg-[#009EDD] hover:bg-blue-600 text-white text-[12px] px-6 py-3 rounded-md font-bold w-full sm:w-auto text-center"
        >
          FINALIZAR PEDIDO
        </Link>

        <div className="flex items-center justify-between w-full sm:w-auto gap-2">
          <span className="text-[#999999] text-[14px] font-bold">TOTAL</span>
          <span className="text-[24px] font-bold text-[#2F2E41]">
            R$ {total.toFixed(2)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default CartContent;
