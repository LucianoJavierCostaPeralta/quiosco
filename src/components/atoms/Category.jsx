import { useQuiosco } from "@/context/QuioscoProvider";
import Image from "next/image";

export const Category = ({ category }) => {
  const { currenCategory, handleClickCategory } = useQuiosco();
  const { id, name, icon } = category;

  return (
    <li
      className={`${
        currenCategory?.id === id ? "bg-amber-400" : "hover:bg-amber-400"
      } hover:cursor-pointer  border w-full`}
      onClick={() => handleClickCategory(id)}
    >
      <div className="flex gap-4 items-center p-4 w-full">
        {icon && (
          <Image
            width={75}
            height={75}
            alt={`Icon ${name ?? null}`}
            src={`/logos/icono_${icon}.svg`}
          />
        )}

        {name && <p className="text-2xl font-bold">{name}</p>}
      </div>
    </li>
  );
};
