import Image from "next/image";
import HeaderItensButton from "./Button/Button";
import Link from "next/link";

const Header = () => {
  return (
    <header className="w-full h-20 bg-transparent">
      <div className="max-w-screen-xl mx-auto h-full flex items-center justify-between px-4 sm:px-6">
        <Link href="/">
          <h1 className="text-white text-[20px] font-bold">WeMovies</h1>
        </Link>

        <div className="flex items-center gap-3">
          <div className="flex flex-col text-right">
            <span className="text-white text-[14px] font-semibold cursor-pointer hidden sm:block">
              Meu Carrinho
            </span>
            <Link href="/carrinho">
              <HeaderItensButton />
            </Link>
          </div>

          <Link href="/carrinho">
            <button className="cursor-pointer transition-transform duration-200 hover:scale-105">
              <Image
                src="/carrinho.png"
                alt="Carrinho de compras"
                width={40}
                height={40}
                className="object-contain"
              />
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
