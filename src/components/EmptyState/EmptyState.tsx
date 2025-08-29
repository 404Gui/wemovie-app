import Image from "next/image";
import Link from "next/link";
import { EmptyStateProps } from "./types";


const EmptyState = ({
  title,
  image,
  buttonLabel,
  buttonHref,
  onClick,
}: EmptyStateProps) => {
  const ButtonContent = (
    <button
      onClick={onClick}
      className="bg-blue-500 text-white font-medium px-6 py-3 rounded hover:bg-blue-600 transition"
    >
      {buttonLabel}
    </button>
  );

  return (
    <div className="h-[596px] bg-white rounded-[4px] p-16 flex flex-col items-center justify-center gap-6 shadow-lg">
      <h2 className="text-xl text-center font-semibold text-gray-900">
        {title}
      </h2>

      <Image
        src={image}
        alt={title}
        width={179}
        height={265}
        className="object-contain"
      />

      <div className="mt-4">
        {buttonHref ? (
          <Link href={buttonHref}>{ButtonContent}</Link>
        ) : (
          ButtonContent
        )}
      </div>
    </div>
  );
};

export default EmptyState;
