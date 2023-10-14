import { formatter } from "@/lib/utils";
import { useEffect, useState } from "react";
interface CurrencyProps {
  value: string;
}
export const Currency: React.FC<CurrencyProps> = ({ value }) => {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);
  if (!isMounted) return null;
  return (
    <div className="font-bold dark:text-white">
      {formatter.format(Number(value))}
    </div>
  );
};
