import { PrismaClient } from "@prisma/client";

export default async function handler(req, res) {
  const prisma = new PrismaClient();

  try {
    if (req.method === "POST") {
      const { id } = req.query;

      const updateOrder = await prisma.order.update({
        where: {
          id: parseInt(id),
        },
        data: {
          state: true,
        },
      });

      res.status(200).json("Update state order");
    }
  } catch (error) {
    console.log(error);
  }
}
