export const Button = ({ children, ...others }) => {
  return (
    <button
      type="button"
      className="bg-indigo-600 hover:bg-indigo-800 text-white uppercase
      font-bold text-lg w-full p-3 rounded block"
      {...others}
    >
      {children}
    </button>
  );
};
