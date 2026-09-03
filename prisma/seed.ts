import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.product.deleteMany();
  await prisma.category.deleteMany();

  const bluder = await prisma.category.create({
    data: { name: "Roti Bluder", slug: "roti-bluder" },
  });
  const sobek = await prisma.category.create({
    data: { name: "Roti Sobek & Sisir", slug: "roti-sobek" },
  });
  const hampers = await prisma.category.create({
    data: { name: "Hampers", slug: "hampers" },
  });

  await prisma.product.createMany({
    data: [
      {
        name: "Roti Bluder Cokelat Keju",
        price: 12000,
        image: "/images/roti-1.png",
        status: "FRESH_READY",
        statusText: "SISA 8",
        categoryId: bluder.id,
      },
      {
        name: "Roti Sobek Spesial Daging",
        price: 28000,
        image: "/images/roti-2.png",
        status: "FRESH_READY",
        statusText: null,
        categoryId: sobek.id,
      },
      {
        name: "Roti Sisir Mentega Classic",
        price: 18000,
        image: "/images/roti-3.png",
        status: "DIPROSES_OVEN",
        statusText: "READY 14:00",
        categoryId: sobek.id,
      },
      {
        name: "Paket Oleh-oleh Mruyung Isi 6",
        price: 65000,
        image: "/images/roti-4.png",
        status: "BEST_SELLER",
        statusText: null,
        categoryId: hampers.id,
      },
    ],
  });

  console.log("Seed data .png berhasil disinkronkan!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
