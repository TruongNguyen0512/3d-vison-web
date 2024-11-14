import { Button } from "@/components/ui/button";
import BgAnimation from "../BgAnimation";

type TBtn = {
  children: React.ReactNode;
  className?: string;
};

export default function Btn({ children, className }: TBtn) {
  return (
    <Button
      className={`w-44 h-auto px-8 py-2 relative overflow-hidden group rounded-none hover:text-white ${className}`}
      variant="outline"
    >
      <BgAnimation />
      <div className="relative z-20">{children}</div>
    </Button>
  );
}
