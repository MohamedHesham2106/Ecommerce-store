import { ProductListSkeleton } from "@/components/skeleton/product-list-skeleton";
import { Container } from "@/components/ui/container";
import { Skeleton } from "@/components/ui/skeleton";

const Loading = () => {
  return (
    <Container>
      <div className="space-y-10 pb-10 ">
        <div className="p-4 sm:p-6 lg:p-8 rounded-xl overflow-hidden">
          <Skeleton className="rounded-xl relative aspect-square md:aspect-[2.4/1]" />
        </div>
        <ProductListSkeleton title="Featured Products" iterate={8} />
      </div>
    </Container>
  );
};
export default Loading;
