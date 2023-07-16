import { useQuiosco } from "@/context/QuioscoProvider";
import { Category } from "../atoms";

export const CategoryList = () => {
  const { categories } = useQuiosco();

  return (
    <nav className="mt-5">
      {categories?.length && (
        <ul>
          {categories?.map((cat) => (
            <Category key={cat.id} category={cat} />
          ))}
        </ul>
      )}
    </nav>
  );
};
