import { Hero } from "@/components/atoms/Hero";
import { SummaryProductCard } from "@/components/molecules";
import { Layout } from "@/components/template";
import { useQuiosco } from "@/context/QuioscoProvider";

const Summary = () => {
  const { order } = useQuiosco();

  const Paragraph = () => (
    <span className="text-2xl bg-amber-200 p-4 font-black">
      No hay elementos en tu pedido
    </span>
  );

  return (
    <Layout page="Resumen">
      <Hero title="Resumen" paragraph="Revisa tu pedido" />

      {order.length === 0 ? (
        <Paragraph />
      ) : (
        order?.map((item) => <SummaryProductCard key={item.id} item={item} />)
      )}
    </Layout>
  );
};

export default Summary;
