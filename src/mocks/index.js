import { faker } from "@faker-js/faker";
faker.locale = "es";
export default function generateMockProducts(cantidad) {
  const products = [];
  for (let i = 0; i < cantidad; i++) {
    const product = {
      title: faker.commerce.productName(),
      description: faker.commerce.productDescription(),
      price: faker.commerce.price(),
      category: faker.commerce.department(),
      thumbnail: faker.image.imageUrl(),
      code: faker.datatype.uuid(),
      stock: faker.random.numeric(1),
    };
    products.push(product);
  }
  return products;
}
