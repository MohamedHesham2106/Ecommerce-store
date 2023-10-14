"use client";

import { ShoppingBag } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import { useCart } from "@/hooks/use-cart";
import { ModeToggle } from "../mode-toggle";

export const NavigationActions = () => {
  const [isMounted, setIsMounted] = useState(false);
  const router = useRouter();
  const cart = useCart();

  useEffect(() => {
    setIsMounted(true);
  }, []);
  if (!isMounted) {
    return null;
  }
  return (
    <div className=" flex items-center gap-x-4">
      <ModeToggle />
      <Button
        onClick={() => router.push("/cart")}
        variant="default"
        size="sm"
        className="rounded-full bg-black hover:bg-gray-800 flex items-center dark:bg-primary dark:hover:bg-primary/90"
      >
        <ShoppingBag size={18} />
        <span className="ml-1.5  font-semibold">{cart.items.length}</span>
      </Button>
    </div>
  );
};
