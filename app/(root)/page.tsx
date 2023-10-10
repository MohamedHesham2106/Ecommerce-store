import { Container } from "@/components/ui/container";
import { Billboard } from "@/components/ui/billboard";
import getBillboard from "@/services/get-billboard";
import getProducts from "@/services/get-products";
import { ProductList } from "@/components/product-list";

export const revalidate = 0;
const HomeScreen = async () => {
  const products = await getProducts({ isFeatured: true });
  const billboard = await getBillboard(process.env.NEXT_BILLBOARD_ID as string);

  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Billboard data={billboard} billboardTitleColor="black"/>
        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
          <ProductList title="Featured Products" items={products} />
        </div>
      </div>
    </Container>
  );
};
export default HomeScreen;
