import { useRouter } from "next/router";
import { links } from "@/constants";

export const Navigation = () => {
  const router = useRouter();

  const calculateProgress = () => {
    let value;

    switch (router.pathname) {
      case "/":
        value = 2;
        break;
      case "/summary":
        value = 50;
        break;
      default:
        value = 100;
        break;
    }
    return value;
  };

  return (
    <>
      {links?.length && (
        <div
          className="flex flex-col justify-between mb-3 md:flex-row
        items-start gap-4"
        >
          {links?.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                router.push(item?.link);
              }}
              className="text-2xl font-bold"
            >
              {item.label}
            </button>
          ))}
        </div>
      )}

      <div className="bg-gray-100 mb-10">
        <div
          className="rounded-full bg-amber-500 text-xs leading-none h-2
        text-center text-white transition-all duration-1000"
          style={{
            width: `${calculateProgress()}%`,
          }}
        ></div>
      </div>
    </>
  );
};
