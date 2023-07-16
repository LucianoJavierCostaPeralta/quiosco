import { Home, Layout } from "@/components/template";
import { useQuiosco } from "@/context/QuioscoProvider";

const HomePage = () => {
  const { currenCategory } = useQuiosco();
  return (
    <Layout page={currenCategory?.name}>
      <Home />
    </Layout>
  );
};

export default HomePage;
