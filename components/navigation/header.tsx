import Link from "next/link";

import { MainNavigation } from "@/components/navigation/main-navigation";
import { NavigationActions } from "@/components/navigation/navigation-actions";
import getCategories from "@/services/get-categories";

export const Header = async () => {
  const categories = await getCategories();
  const sortedCategories = categories.sort((a, b) =>
    a.name < b.name ? -1 : 1
  );
  return (
    <div className="shadow-md fixed w-full bg-white z-50">
      <div className="relative px-4 sm:px-6 lg:px-8 flex h-16 items-center">
        <Link href="/" className="ml-4 flex lg:ml-0 gap-x-2">
          <p className="font-bold text-2xl">{categories[0].store.name}</p>
        </Link>
        <MainNavigation data={sortedCategories} />
        <NavigationActions />
      </div>
    </div>
  );
};
