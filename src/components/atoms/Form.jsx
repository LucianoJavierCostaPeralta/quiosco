import { useQuiosco } from "@/context/QuioscoProvider";
import { Button } from "./Button";
import { useCallback, useEffect } from "react";
import { formateCurrency } from "@/helpers";

export const Form = () => {
  const { order, name, setName, handleSubmit, total } = useQuiosco();

  const checkOrder = useCallback(() => {
    return order?.length === 0 || name === "" || name.length < 3;
  }, [order, name]);

  useEffect(() => {
    checkOrder();
  }, [order, checkOrder]);

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 items-start justify-between"
    >
      <label htmlFor="name" className="block text-2xl font-bold uppercase">
        Nombre
      </label>
      <input
        type="text"
        name="name"
        id="name"
        placeholder="Ingresa tu nombre"
        className="block bg-gray-200 w-full lg:w-1/3 border border-gray-300
        rounded-md p-3 shadow-md focus:outline-none focus:ring-2
        focus:ring-indigo-500 focus:border-indigo-500"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <p className="text-2xl mt-4 ">
        Total a pagar: {""}{" "}
        <span className="font-bold">{formateCurrency(total)}</span>
      </p>

      <input
        type="submit"
        id="name"
        name="name"
        value="Comprobar pedido"
        className={`${
          checkOrder()
            ? "bg-indigo-100 "
            : "bg-indigo-600 hover:bg-indigo-800 hover:cursor-pointer"
        } p-4 block  w-full lg:w-1/3 text-2xl uppercase text-white
        mt-4 rounded-md text-center font-bold`}
        disabled={checkOrder()}
      />
    </form>
  );
};
