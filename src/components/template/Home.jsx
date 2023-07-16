import { useQuiosco } from "@/context/QuioscoProvider";
import { ProductList } from "../organisms";
import { Hero } from "../atoms/Hero";

export const Home = () => {
  const { currenCategory } = useQuiosco();
  return (
    <div>
      <Hero
        title={currenCategory?.name}
        paragraph="Elije y personalza tu pedido a continuación"
      />

      <ProductList />
    </div>
  );
};
