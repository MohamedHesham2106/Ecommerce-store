import { ProductList } from "@/components/product-list";
import { Gallery } from "@/components/gallery";
import { Container } from "@/components/ui/container";
import { Info } from "@/components/info";
import getProduct from "@/services/get-product";
import getProducts from "@/services/get-products";
import { Separator } from "@/components/ui/separator";
interface ProductPageProps {
  params: {
    productId: string;
  };
}

const ProductScreen: React.FC<ProductPageProps> = async ({ params }) => {
  const product = await getProduct(params.productId);
  const suggestedProducts = await getProducts({
    categoryId: product?.category?.id,
  });

  if (!product) {
    return null;
  }

  return (
    <div className="bg-white dark:bg-black">
      <Container>
        <div className="px-4 py-10 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
            <Gallery images={product.images} />
            <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
              <Info data={product} />
            </div>
          </div>
          <Separator className="my-10" />
          <ProductList title="Related Items" items={suggestedProducts} />
        </div>
      </Container>
    </div>
  );
};

export default ProductScreen;
