import Head from "next/head";
import Image from "next/image";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const AdminLayout = ({ children, page }) => {
  return (
    <>
      <Head>
        <title>{`Café - ${page}`}</title>
      </Head>

      <div className="md:flex">
        <aside className="md:w-4/12 xl:w-1/4 2xl:w-1/5">
          <Image
            width={250}
            height={100}
            src={`/logos/logo.svg`}
            alt="logo"
            className="mx-auto py-3"
            priority
          />
        </aside>

        <main className="md:w-8/12 xl:w-3/4 2xl:w-4/5 h-screen overflow-y-scroll">
          <div className="p-10">{children}</div>
        </main>
      </div>

      <ToastContainer />
    </>
  );
};
