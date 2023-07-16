import { formateCurrency } from "@/helpers";
import Image from "next/image";
import { Button } from "../atoms";
import { useQuiosco } from "@/context/QuioscoProvider";

export const ProductCard = ({ product }) => {
  const { name, image, price } = product;
  const { handleSetProduct, handleChangeModal } = useQuiosco();

  return (
    <div className="border rounded shadow-md flex flex-col justify-between gap-2 relative">
      {image && (
        <Image
          src={`/assets/${image ?? null}.jpg`}
          alt={`Imagen de ${name}`}
          width={400}
          height={500}
          className="object-cover w-full"
          priority
        />
      )}

      <div className="flex flex-col p-3 flex-grow justify-between gap-4">
        {name && <h1 className="text-2xl font-bold ">{name}</h1>}
        {price && (
          <p className=" text-4xl text-amber-500 font-black ">
            {formateCurrency(price)}
          </p>
        )}
      </div>

      <Button
        onClick={() => {
          handleChangeModal();
          handleSetProduct(product);
        }}
      >
        Agregar
      </Button>
    </div>
  );
};
