import React from "react";
import { Edit, Trash } from "tabler-icons-react";

export const ButtonAction = ({ edit = false, ...orthers }) => {
  return (
    <button
      type="button"
      className={`${edit ? "bg-sky-600  " : "bg-red-600 "}${
        edit ? "hover:bg-sky-800" : "hover:bg-red-800"
      }  flex px-6 py-3 text-white rounded-md font-bold uppercase w-full
      shadow-md text-center gap-3  justify-center md:justify-start `}
      {...orthers}
    >
      {edit ? <Edit /> : <Trash />}
      {edit ? "Editar" : "Eliminar"}
    </button>
  );
};
