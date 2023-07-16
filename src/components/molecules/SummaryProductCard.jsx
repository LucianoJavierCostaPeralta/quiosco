import { formateCurrency } from "@/helpers";
import Image from "next/image";
import { ButtonAction } from "../atoms";
import { useQuiosco } from "@/context/QuioscoProvider";

export const SummaryProductCard = ({ item }) => {
  const { handleEditCount, handleDeleteProduct } = useQuiosco();

  const Paragraph = ({ title, content, bgValue = false }) => (
    <p className={`${bgValue ? "text-amber-500" : "text-gray-700"} text-2xl`}>
      <span className="font-black">{title}&nbsp;:&nbsp;&nbsp;</span>
      {content}
    </p>
  );

  const ContentComponent = () => (
    <div className="flex  flex-col justify-between gap-4 ">
      {" "}
      {item?.name && <h3 className="text-3xl font-bold">{item.name}</h3>}
      {item?.count && (
        <Paragraph title="Cantidad" content={item?.count} bgValue={false} />
      )}
      {item?.price && (
        <Paragraph
          title="Precio"
          content={formateCurrency(item.price)}
          bgValue={true}
        />
      )}
      <Paragraph
        title="SubTotal"
        content={formateCurrency(item.price * item.count)}
      />
    </div>
  );

  return (
    <div className="shadow p-5 mb-3 flex  flex-col md:flex-row items-start gap-5">
      <div className="md:w-1/6">
        <Image
          width={300}
          height={400}
          alt={`Imagen del producto ${item?.name}`}
          src={`/assets/${item?.image}.jpg`}
          className="w-full"
        />
      </div>
      <div className="md:w-5/6 flex flex-col md:flex-row justify-between gap-5">
        <ContentComponent />
        <div className="flex flex-col gap-5">
          <ButtonAction edit onClick={() => handleEditCount(item?.id)} />

          <ButtonAction onClick={() => handleDeleteProduct(item?.id)} />
        </div>
      </div>
    </div>
  );
};
