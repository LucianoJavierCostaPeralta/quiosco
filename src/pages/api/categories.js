import { PrismaClient } from "@prisma/client";

export default async function categories(req, res) {
  const prisma = new PrismaClient();

  try {
    const categories = await prisma.category.findMany({
      include: {
        Product: true,
      },
    });

    return res.status(200).json(categories);
  } catch (error) {
    console.error("Error retrieving categories:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
