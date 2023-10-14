"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Category } from "@/types";

interface MainNavigationProps {
  data: Category[];
}

export const MainNavigation: React.FC<MainNavigationProps> = ({ data }) => {
  const pathname = usePathname();

  const routes = data.map((route) => ({
    href: `/category/${route.id}`,
    label: route.name,
    active: pathname === `/category/${route.id}`,
  }));
  return (
    <nav className="mx-6 hidden md:flex items-center space-x-4 lg:space-x-6">
      {routes.map((route) => (
        <Link
          key={route.href}
          href={route.href}
          className={cn(
            "font-semibold transition-colors hover:text-primary dark:hover:text-primary",
            route.active ? "text-primary " : "text-zinc-900 dark:text-white"
          )}
        >
          {route.label}
        </Link>
      ))}
    </nav>
  );
};
