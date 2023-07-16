import Head from "next/head";
import { Navigation, Sidebar } from "../organisms";
import Modal from "react-modal";
import { useQuiosco } from "@/context/QuioscoProvider";
import { ModalCard } from "../atoms";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Layout = ({ children, page }) => {
  const { modal, handleChangeModal } = useQuiosco();
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };

  Modal.setAppElement("#__next");

  return (
    <>
      <Head>
        <title>{`Café - ${page}`}</title>
      </Head>

      <div className="md:flex">
        <aside className="md:w-4/12 xl:w-1/4 2xl:w-1/5">
          <Sidebar />
        </aside>

        <main className="md:w-8/12 xl:w-3/4 2xl:w-4/5 h-screen overflow-y-scroll">
          <div className="p-10">
            <Navigation />
            {children}
          </div>
        </main>
      </div>

      {modal && (
        <Modal
          isOpen={modal}
          onRequestClose={handleChangeModal}
          style={customStyles}
        >
          <ModalCard />
        </Modal>
      )}
      <ToastContainer />
    </>
  );
};
