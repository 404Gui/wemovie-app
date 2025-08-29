import Image from "next/image";
import { useCart } from "@/context/CartContext";
import { CartItemType } from "../types";

type CartItemMobileProps = {
  item: CartItemType;
};

const CartItemMobile = ({ item }: CartItemMobileProps) => {
  const { dispatch } = useCart();

  return (
    <div className="flex sm:hidden items-start gap-3 border-b pb-3">
      <Image
        src={item.image}
        alt={item.title}
        width={60}
        height={80}
        className="object-contain rounded flex-shrink-0"
      />

      <div className="flex flex-col flex-1 gap-2">
        <div className="flex items-start justify-between">
          <h2 className="font-bold text-[#2F2E41] leading-tight max-w-[120px]">
            {item.title}
          </h2>

          <div className="flex items-center gap-2">
            <p className="text-[#2F2E41] text-[15px] font-bold whitespace-nowrap  ">
              R$ {item.price.toFixed(2)}
            </p>
            <button
              onClick={() =>
                dispatch({ type: "REMOVE_ITEM", payload: { id: item.id } })
              }
            >
              <Image src="/lixeira.png" alt="remover" width={20} height={20} />
            </button>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
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
              className="w-[62px] text-center border border-[#D9D9D9] rounded py-1 text-sm text-gray-800 focus:outline-none"
            />

            <button
              onClick={() =>
                dispatch({ type: "INCREMENT_ITEM", payload: { id: item.id } })
              }
            >
              <Image src="/add.png" alt="aumentar" width={18} height={18} />
            </button>
          </div>

          <div className="text-right">
            <span className="block text-[12px] font-bold text-[#999999]">
              SUBTOTAL
            </span>
            <span className="block font-bold text-[#2F2E41]">
              R$ {(item.price * item.quantity).toFixed(2)}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItemMobile;
