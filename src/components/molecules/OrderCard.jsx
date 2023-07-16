import { formateCurrency } from "@/helpers";
import Image from "next/image";
import { Button } from "../atoms";
import axios from "axios";
import { toast } from "react-toastify";

export const OrderCard = ({ order }) => {
  const handleUpdateStateOrder = async (id) => {
    try {
      await axios.post(`/api/order/${order?.id}`);
      toast.success("Pedido finalizado");
    } catch (error) {
      toast.error("Hubo un error en el pedido");
    }
  };

  return (
    <div
      className="border p-10 space-y-5 flex flex-col md:flex-row
    justify-between  my-4 rounded-md shadow-md"
    >
      <div className="flex flex-col gap-3 justify-between">
        <h3 className="text-3xl font-bold">Orden : {order?.id}</h3>
        <p className="text-2xl font-semibold">Cliente : {order?.name}</p>
        {order?.order &&
          order?.order?.map((item) => (
            <div
              key={item.id}
              className="flex flex-col md:flex-row py-3 gap-4 "
            >
              <div className="">
                <Image
                  src={`/assets/${item.image}.jpg`}
                  alt={`Imagen del producto ${item.name}`}
                  width={300}
                  height={300}
                  className="w-40"
                />
              </div>
              <div className="flex flex-col gap-4 ">
                <h4 className="text-2xl font-bold text-amber-500">
                  {item.name}
                </h4>
                <p className="text-2xl ">
                  Cantidad : <span>{item.count}</span>
                </p>
                <p className="text-2xl ">
                  Cantidad : <span>{formateCurrency(item?.price)}</span>
                </p>
              </div>
            </div>
          ))}
        <p className="text-4xl font-bold mt-4 text-amber-600">
          Total a pagar : {formateCurrency(order?.total)}
        </p>
      </div>
      <div>
        <Button onClick={() => handleUpdateStateOrder(order?.id)}>
          Pedido listo para entregar
        </Button>
      </div>
    </div>
  );
};
