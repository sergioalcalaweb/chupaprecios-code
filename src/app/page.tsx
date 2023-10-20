import ProductCard from "@/components/product-card/product-card"
import { getProducts } from "@/utils/services"

export default async function Home() {
  //obtenemos la lista de productos de la API
  const productsInfo = await getProducts()
  return (
    <main className="my-5">
      <section className="flex flex-wrap w-full justify-center mx-auto gap-5">
        {productsInfo.data.items.map((product) => (
          <ProductCard key={product.asin} product={product} />
        ))}
      </section>
    </main>
  )
}
