import { Hero } from "@/components/atoms/Hero";
import { OrderCard } from "@/components/molecules";
import { AdminLayout } from "@/components/template";
import axios from "axios";
import useSWR from "swr";

const Admin = () => {
  const fetcher = () => axios("/api/orders").then((res) => res.data);

  const { data, error, isLoading } = useSWR("/api/orders", fetcher, {
    refreshInterval: 100,
  });

  return (
    <AdminLayout page="Admin">
      <Hero
        title="Panel de Administración"
        paragraph="Administra las ordenes"
      />

      {data && data?.length ? (
        data?.map((order) => <OrderCard key={order.id} order={order} />)
      ) : (
        <p>No hay pedido</p>
      )}
    </AdminLayout>
  );
};

export default Admin;
