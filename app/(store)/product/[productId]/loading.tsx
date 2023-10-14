import { ProductListSkeleton } from "@/components/skeleton/product-list-skeleton";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";
import { ShoppingCart } from "lucide-react";
import React from "react";

const Loading = () => {
  return (
    <div className="bg-white dark:bg-inherit">
      <Container>
        <div className="px-4 py-10 sm:px-6 lg:px-8">
          {/* Gallery */}
          <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
            <div className="flex flex-col-reverse">
              <div className="mx-auto mt-6 hidden w-full max-w-2xl sm:block lg:max-w-none">
                <div className="grid grid-cols-4 gap-6">
                  <div>
                    <div className="relative flex aspect-square cursor-pointer items-center justify-center rounded-md bg-white">
                      <div>
                        <Skeleton className="absolute h-full w-full aspect-square inset-0 overflow-hidden rounded-md" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="aspect-square w-full">
                <Skeleton className="aspect-square relative h-full w-full  sm:rounded-lg overflow-hidden" />
              </div>
            </div>
            {/* Info */}
            <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
              <div>
                <Skeleton className="h-10 w-1/2" />
                <div className="mt-3 flex items-end justify-between">
                  <Skeleton className="h-8 w-1/4" />
                </div>
                <Separator className="my-4" />
                <div className="flex flex-col gap-y-6">
                  <div className="flex items-center gap-x-4">
                    <h3 className="font-semibold text-black">Size:</h3>
                    <Skeleton className="h-4 w-1/5" />
                  </div>
                  <div className="flex items-center gap-x-4">
                    <h3 className="font-semibold text-black">Color:</h3>
                    <Skeleton className="h-6 w-6 rounded-full border" />
                  </div>
                  <div className="mt-10 flex items-center gap-x-3">
                    <Button
                      disabled
                      className="flex items-center gap-x-2 rounded-full"
                    >
                      Add To Cart <ShoppingCart />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Product List */}
          <Separator className="my-10" />
          <ProductListSkeleton title="Related Items" iterate={4} />
        </div>
      </Container>
    </div>
  );
};

export default Loading;
