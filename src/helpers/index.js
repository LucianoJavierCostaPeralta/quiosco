export const formateCurrency = (c) =>
  c.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });
