import Link from "next/link";

import { MainNavigation } from "@/components/navigation/main-navigation";
import { NavigationActions } from "@/components/navigation/navigation-actions";
import getCategories from "@/services/get-categories";
import { MobileToggle } from "../mobile-toggle";

export const Header = async () => {
  const categories = await getCategories();
  const sortedCategories = categories.sort((a, b) =>
    a.name < b.name ? -1 : 1
  );
  return (
    <div className="shadow-md fixed w-full bg-white z-50 dark:bg-black dark:shadow-zinc-800 dark:shadow">
      <div className="relative px-2 sm:px-4 lg:px-8 flex h-[65px] items-center">
        <MobileToggle data={sortedCategories} />
        <Link href="/" className="ml-4 flex lg:ml-0 gap-x-2">
          <p className="font-medium text-2xl">
            <span className="text-primary text-3xl font-bold">
              {categories[0].store.name.charAt(0)}
            </span>
            {categories[0].store.name.split("").slice(1).join("")}
          </p>
        </Link>
        <div className="ml-auto flex items-center gap-x-2">
          <MainNavigation data={sortedCategories} />
          <NavigationActions />
        </div>
      </div>
    </div>
  );
};
