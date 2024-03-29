import React from "react";

export const Hero = ({ title, paragraph }) => {
  return (
    <>
      <h1 className="text-4xl font-bold">{title}</h1>

      <p className="text-2xl my-10">{paragraph}</p>
    </>
  );
};
