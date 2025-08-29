"use client";
import { useEffect } from "react";
import { useCart } from "@/context/CartContext";
import Image from "next/image";
import Link from "next/link";

const SuccessContent = () => {
  const { dispatch } = useCart();

  useEffect(() => {
    dispatch({ type: "CLEAR_CART" });
  }, [dispatch]);

  return (
    <div className="h-[596px] bg-white rounded-[4px] p-16 flex flex-col items-center justify-center gap-6 shadow-lg">
      <h2 className="text-[24px] text-center font-bold text-[#2F2E41]">
        Compra realizada com sucesso!
      </h2>

      <Image
        src="/sucesso.png"
        alt="Compra realizada com sucesso"
        width={256}
        height={256}
        className="object-contain"
      />

      <Link href="/" className="mt-4">
        <button className="bg-[#009EDD] text-white font-bold px-6 py-3 rounded hover:bg-blue-600 transition">
          VOLTAR
        </button>
      </Link>
    </div>
  );
};

export default SuccessContent;
