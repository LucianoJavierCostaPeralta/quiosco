import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useRouter } from "next/router";

export const QuioscoCOntext = createContext();

export const useQuiosco = () => useContext(QuioscoCOntext);

export const QuioscoProvider = ({ children }) => {
  const routter = useRouter();
  const [categories, setCategories] = useState([]);
  const [currenCategory, setCurrenCategory] = useState({});
  const [product, setproduct] = useState({});
  const [modal, setModal] = useState(false);
  const [order, setOrder] = useState([]);
  const [name, setName] = useState("");
  const [total, setTotal] = useState(0);

  const getCategories = async () => {
    const categories = await axios.get("/api/categories");

    setCategories(categories.data);
  };

  const handleClickCategory = (id) => {
    const category = categories.filter((cat) => cat.id === id);
    setCurrenCategory(category[0]);
    routter.push("/");
  };

  const handleSetProduct = (prod) => setproduct(prod);

  const handleChangeModal = () => setModal(!modal);

  const handleAddOrder = (prod) => {
    if (order.some((p) => p.id === prod.id)) {
      const updateProduct = order.map((p) => (p.id === prod.id ? prod : p));
      setOrder(updateProduct);
      toast.success("Guardado correctamente");
    } else {
      setOrder([...order, prod]);
      toast.success("Agregado al pedido");
    }

    setModal(false);
  };

  const handleEditCount = (id) => {
    const UpdateProduct = order.filter((p) => p.id === id);
    setproduct(UpdateProduct[0]);
    handleChangeModal();
  };

  const handleDeleteProduct = (id) => {
    const confirmDelete = window.confirm(
      "¿Estás seguro de que deseas eliminar el producto?"
    );

    if (confirmDelete) {
      const updatedOrder = order.filter((p) => p.id !== id);
      setOrder(updatedOrder);
      toast.success("Producto eliminado");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const DATA = { name, date: Date.now().toString(), total, order };

    try {
      await axios.post("/api/orders", DATA);

      // Restart app
      setCurrenCategory(categories[0]);
      setOrder([]);
      setName();
      setTotal(0);

      toast.success("Pedido enviado correctamente");

      setTimeout(() => {
        routter.push("/");
      }, 4000);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCategories();
  }, []);

  useEffect(() => {
    setCurrenCategory(categories[0]);
  }, [categories]);

  useEffect(() => {
    const totalPrice = order.reduce(
      (total, product) => product.price * product.count + total,
      0
    );
    setTotal(totalPrice);
  }, [order]);

  return (
    <QuioscoCOntext.Provider
      value={{
        categories,
        currenCategory,
        handleClickCategory,
        product,
        handleSetProduct,
        modal,
        handleChangeModal,
        handleAddOrder,
        order,
        handleEditCount,
        handleDeleteProduct,
        name,
        setName,
        handleSubmit,
        total,
      }}
    >
      {children}
    </QuioscoCOntext.Provider>
  );
};
