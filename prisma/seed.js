const { PrismaClient } = require("@prisma/client");
const { categories, products } = require("./data");

const prisma = new PrismaClient();

const main = async (second) => {
  try {
    await prisma.category.createMany({
      data: categories,
    });

    await prisma.product.createMany({
      data: products,
    });
  } catch (error) {
    console.log(error);
  }
};

main();
