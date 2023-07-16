import { useQuiosco } from "@/context/QuioscoProvider";
import { ProductCard } from "../molecules";

export const ProductList = () => {
  const { currenCategory } = useQuiosco();

  return (
    <div
      className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3
      2xl:grid-cols-4 gap-4"
    >
      {currenCategory?.Product?.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};
