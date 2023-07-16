import Image from "next/image";
import { CategoryList } from "../molecules";

export const Sidebar = () => {
  return (
    <>
      <Image
        width={250}
        height={100}
        src={`/logos/logo.svg`}
        alt="logo"
        className="mx-auto py-3"
        priority
      />

      <CategoryList />
    </>
  );
};
