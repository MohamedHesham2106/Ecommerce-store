"use client";

import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { MobileMainNavigation } from "@/components/navigation/mobile-main-navigation";
import { Category } from "@/types";
import { useEffect, useState } from "react";
interface MobileToggleProps {
  data: Category[];
}

export const MobileToggle: React.FC<MobileToggleProps> = ({ data }) => {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);
  if (!isMounted) {
    return null;
  }
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="lg:hidden hover:bg-none">
          <Menu className="w-7 h-7 text-black dark:text-primary" />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="py-8">
        <SheetHeader>
          <SheetTitle>
            <h3 className="text-xl font-semibold text-center mb-5">Categories</h3>
          </SheetTitle>
        </SheetHeader>
        <MobileMainNavigation data={data} />
      </SheetContent>
    </Sheet>
  );
};
