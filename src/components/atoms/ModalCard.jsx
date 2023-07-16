import { formateCurrency } from "@/helpers";
import Image from "next/image";
import { Button } from "./Button";
import { useQuiosco } from "@/context/QuioscoProvider";

import { useEffect, useState } from "react";
import { CircleMinus, CirclePlus, CircleX } from "tabler-icons-react";

export const ModalCard = () => {
  const { handleChangeModal, handleAddOrder, product, order } = useQuiosco();
  const [count, setcount] = useState(1);
  const [edit, setEdit] = useState(false);

  useEffect(() => {
    if (order.some((p) => p.id === product.id)) {
      const editProduct = order.find((e) => e.id === product.id);

      setEdit(true);
      setcount(editProduct.count);
    }
  }, [product, order]);

  const CountGroupButton = () => {
    const handleSetCountPlus = () => {
      if (count >= 5) return;
      setcount(count + 1);
    };

    const handleSetCountMinus = () => {
      if (count <= 1) return;
      setcount(count - 1);
    };

    const StylesButton =
      "hover:text-amber-500 h-12 w-12 text-indigo-600 hover:cursor-pointer";

    return (
      <div className="flex gap-4 items-center">
        <CircleMinus
          onClick={() => handleSetCountMinus()}
          className={StylesButton}
        />
        <p className="text-4xl font-bold">{count}</p>
        <CirclePlus
          onClick={() => handleSetCountPlus()}
          className={StylesButton}
        />
      </div>
    );
  };

  const Card = () => (
    <div className="flex gap-5 flex-col md:flex-row ">
      <div className="md:w-1/3">
        {product?.image && (
          <Image
            width={300}
            height={400}
            alt={`Imagen de ${product?.name}`}
            src={`/assets/${product?.image}.jpg`}
            priority
            className="w-full"
          />
        )}
      </div>

      <div className="md:w-2/3 flex flex-col  justify-between gap-5">
        {product?.name && (
          <h1 className="text-3xl md:text-4xl font-bold">{product.name}</h1>
        )}

        <div className="flex justify-between md:flex-col gap-5">
          {product?.price && (
            <p className="text-5xl font-bold text-amber-500">
              {formateCurrency(product.price)}
            </p>
          )}

          <CountGroupButton />
        </div>

        <Button onClick={() => handleAddOrder({ ...product, count })}>
          {edit ? "Guardar cambios" : "Añadir producto"}
        </Button>
      </div>
    </div>
  );

  const CloseIconButton = () => (
    <div className="flex justify-end ">
      <CircleX
        onClick={() => handleChangeModal()}
        className="text-indigo-700 hover:text-red-600 h-10 w-10
        hover:cursor-pointer"
      />
    </div>
  );

  return (
    <div className="flex flex-col justify-between gap-4">
      <CloseIconButton />
      <Card />
    </div>
  );
};
