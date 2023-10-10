import { cn } from "@/lib/utils";
import { Billboard as BillboardType } from "@/types";

interface BillboardProps {
  data: BillboardType;
  billboardTitleColor?: string;
}

export const Billboard: React.FC<BillboardProps> = ({
  data,
  billboardTitleColor,
}) => {
  return (
    <div className="p-4 sm:p-6 lg:p-8 rounded-xl overflow-hidden">
      <div
        style={{ backgroundImage: `url(${data?.imageUrl})` }}
        className="rounded-xl relative aspect-square md:aspect-[2.4/1] overflow-hidden bg-cover"
      >
        <div className="h-full w-full flex flex-col justify-center items-center text-center gap-y-8">
          <div
            className={cn(
              "font-bold text-3xl sm:text-6xl lg:text-7xl sm:max-w-xl max-w-xs text-primary",
              billboardTitleColor && `text-${billboardTitleColor}`
            )}
          >
            {data.label}
          </div>
        </div>
      </div>
    </div>
  );
};
