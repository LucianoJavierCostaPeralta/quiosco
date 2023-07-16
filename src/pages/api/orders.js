import { PrismaClient } from "@prisma/client";

export default async function orders(req, res) {
  const prisma = new PrismaClient();

  if (req.method === "GET") {
    // GET ORDER
    try {
      const Gorders = await prisma.order.findMany({
        where: {
          state: false,
        },
      });
      res.status(200).json(Gorders);
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "Internal server error" });
    }
  } else if (req.method === "POST") {
    // POST ORDER
    try {
      const ORDER = await prisma.order.create({
        data: {
          name: req.body.name,
          date: req.body.date,
          total: req.body.total,
          order: req.body.order,
        },
      });

      res.status(201).json(ORDER);
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "Internal server error" });
    }
  } else {
    res.status(405).json({ error: "Method Not Allowed" });
  }

  await prisma.$disconnect();
}
