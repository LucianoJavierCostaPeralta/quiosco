import { Form } from "@/components/atoms";
import { Hero } from "@/components/atoms/Hero";
import { Layout } from "@/components/template";

const Total = () => {
  return (
    <Layout page="Total">
      <Hero
        title="Total y confirmar pedido "
        paragraph="Confirma tu pedido a continuación"
      />

      <Form />
    </Layout>
  );
};

export default Total;
