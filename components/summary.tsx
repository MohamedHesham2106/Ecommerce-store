"use client";

import axiosInstance from "@/lib/axios";
import { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { Button } from "./ui/button";
import { Currency } from "./ui/currency";
import { useCart } from "@/hooks/use-cart";
import toast from "react-hot-toast";
export const Summary = () => {
  const items = useCart((state) => state.items);
  const removeAll = useCart((state) => state.clearItems);
  const searchParams = useSearchParams();

  const totalPrice = items.reduce((total, item) => {
    return total + Number(item.price);
  }, 0);

  useEffect(() => {
    if (searchParams.get("success")) {
      removeAll();
    }
    if (searchParams.get("canceled")) {
      toast.error("Something went wrong.");
    }
  }, [searchParams, removeAll]);

  const onCheckout = async () => {
    const response = await axiosInstance.post("/orders/checkout", {
      productIds: items.map((item) => item.id),
      storeId: process.env.NEXT_PUBLIC_STORE_ID,
    });
    window.location = response.data.data.url;
  };
  return (
    <div className="mt-16 rounded-lg bg-gray-50 px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8 dark:bg-zinc-800">
      <h2 className="text-lg font-medium text-gray-900 dark:text-white">
        Order Summary
      </h2>
      <div className="mt-6 space-y-4">
        <div className="flex items-center justify-between border-t border-gray-200 pt-4 ">
          <div className="text-base font-medium text-gray-900 dark:text-white">
            Order total
          </div>
          <Currency value={String(totalPrice)} />
        </div>
      </div>
      <Button onClick={onCheckout} className="w-full mt-6">
        Checkout
      </Button>
    </div>
  );
};
