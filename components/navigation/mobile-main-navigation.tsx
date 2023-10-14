"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Category } from "@/types";
import { usePathname } from "next/navigation";
import Link from "next/link";
interface MainNavigationProps {
  data: Category[];
}

export const MobileMainNavigation: React.FC<MainNavigationProps> = ({
  data,
}) => {
  const pathname = usePathname();
  const routes = data.map((route) => ({
    href: `/category/${route.id}`,
    label: route.name,
    active: pathname === `/category/${route.id}`,
  }));

  return (
    <nav className={"flex flex-col items-center space-y-4 mt-5"}>
      {routes.map((route) => (
        <Link
          key={route.href}
          href={route.href}
          className={"w-full transition-colors hover:text-primary"}
        >
          <Button
            className={cn(
              "w-full font-medium text-lg p-6",
              route.active
                ? "text-white dark:text-white dark:bg-primary bg-zinc-900 dark:hover:bg-primary-foreground/90 hover:bg-zinc-900/90 hover:text-primary dark:hover:text-muted"
                : "text-muted-foreground"
            )}
            variant="ghost"
          >
            {route.label}
          </Button>
        </Link>
      ))}
    </nav>
  );
};
