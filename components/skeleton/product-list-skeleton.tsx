import { Skeleton } from "@/components/ui/skeleton";

export const ProductListSkeleton = ({
  title,
  iterate,
}: {
  title: string;
  iterate: number;
}) => {
  return (
    <div className="flex flex-col gap-y-8 px-4">
      <h3 className="font-bold text-3xl">{title}</h3>
      <div className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-4">
          {Array.from({ length: iterate }).map((_, i) => (
            <div
              key={i}
              className="bg-white group cursor-pointer rounded-xl border p-3 space-y-4"
            >
              <Skeleton className="rounded-xl h-[225px]" />
              <div className="flex flex-col space-y-1">
                <Skeleton className="h-4 w-2/3" />
                <Skeleton className="h-4 w-2/5" />
              </div>
              <div className="flex items-center justify-between">
                <Skeleton className="h-4 w-1/6" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
