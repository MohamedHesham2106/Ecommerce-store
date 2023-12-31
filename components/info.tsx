"use client";

import { Product } from "@/types";
import { Currency } from "./ui/currency";
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";
import { ShoppingCart } from "lucide-react";

interface InfoProps {
  data: Product;
}
export const Info: React.FC<InfoProps> = ({ data }) => {
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
        {data.name}
      </h1>
      <div className="mt-3 flex items-end justify-between">
        <div className="text-2xl text-gray-900">
          <Currency value={data?.price} />
        </div>
      </div>
      <Separator className="my-4" />
      <div className="flex flex-col gap-y-6">
        <div className="flex items-center gap-x-4">
          <h3 className="font-semibold text-black dark:text-white">Size:</h3>
          <div>{data?.size?.name}</div>
        </div>
        <div className="flex items-center gap-x-4 ">
          <h3 className="font-semibold text-black dark:text-white">Color:</h3>
          <div
            className="h-6 w-6 rounded-full border border-gray-600"
            style={{
              backgroundColor: data?.color?.value,
            }}
            title={data?.color?.name}
          />
        </div>
        <div className="mt-10 flex items-center gap-x-3 ml-auto">
          <Button className="flex items-center gap-x-2 rounded-full">
            Add To Cart <ShoppingCart />
          </Button>
        </div>
      </div>
    </div>
  );
};
