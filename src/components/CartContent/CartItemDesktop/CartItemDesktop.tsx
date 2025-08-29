import Image from "next/image";
import { useCart } from "@/context/CartContext";
import { CartItemType } from "../types";

type CartItemDesktopProps = {
  item: CartItemType;
};

const CartItemDesktop = ({ item }: CartItemDesktopProps) => {
  const { dispatch } = useCart();

  return (
    <div className="hidden sm:grid grid-cols-4 items-center">
      <div className="flex items-center gap-4">
        <Image
          src={item.image}
          alt={item.title}
          width={70}
          height={90}
          className="object-contain rounded"
        />
        <div>
          <h2 className="font-semibold text-gray-800">{item.title}</h2>
          <p className="font-bold text-[#2F2E41]">R$ {item.price.toFixed(2)}</p>
        </div>
      </div>

      <div className="flex items-center justify-center gap-2">
        <button
          onClick={() =>
            dispatch({ type: "DECREMENT_ITEM", payload: { id: item.id } })
          }
        >
          <Image src="/remove.png" alt="diminuir" width={18} height={18} />
        </button>
        <input
          type="number"
          value={item.quantity}
          min={1}
          onChange={(e) =>
            dispatch({
              type: "SET_ITEM_QUANTITY",
              payload: {
                id: item.id,
                quantity: Math.max(1, Number(e.target.value)),
              },
            })
          }
          className="w-12 text-center border border-[#D9D9D9] rounded py-1 text-sm text-gray-800 focus:outline-none"
        />
        <button
          onClick={() =>
            dispatch({ type: "INCREMENT_ITEM", payload: { id: item.id } })
          }
        >
          <Image src="/add.png" alt="aumentar" width={18} height={18} />
        </button>
      </div>

      <div className="text-right font-bold text-[#2F2E41]">
        R$ {(item.price * item.quantity).toFixed(2)}
      </div>

      <div className="flex justify-end">
        <button
          onClick={() =>
            dispatch({ type: "REMOVE_ITEM", payload: { id: item.id } })
          }
        >
          <Image src="/lixeira.png" alt="remover" width={20} height={20} />
        </button>
      </div>
    </div>
  );
};

export default CartItemDesktop;
