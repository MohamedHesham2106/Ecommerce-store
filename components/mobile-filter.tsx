"use client";

import { Color, Size } from "@/types";
import { useState } from "react";
import { Button } from "./ui/button";
import { Filter as FilterIcon, Plus } from "lucide-react";
import { Dialog } from "@headlessui/react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Filter } from "./filter";

interface MobileFiltersProps {
  sizes: Size[];
  colors: Color[];
}
export const MobileFilters: React.FC<MobileFiltersProps> = ({
  sizes,
  colors,
}) => {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={() => setOpen(!open)}>
      <SheetTrigger asChild>
        <Button onClick={() => setOpen(true)} className="lg:hidden rounded-md">
          Filters
          <FilterIcon className="ml-1 w-4 h-4" />
        </Button>
      </SheetTrigger>
      <SheetContent className="z-[99] flex max-w-xs flex-col overflow-y-auto py-4 pb-6">
        <SheetHeader>
          <SheetTitle className="text-2xl font-bold">Filter Items</SheetTitle>
        </SheetHeader>
        <div className="p-4">
          <Filter valueKey="sizeId" name="Sizes" data={sizes} />
          <Filter valueKey="colorId" name="Colors" data={colors} />
        </div>
      </SheetContent>
    </Sheet>
  );
};
