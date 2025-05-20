import * as Icons from "lucide-react";
import { cn } from "./utils";

const getIconComponent = (iconName: string, className?: string) => {
  const Icon = Icons[iconName as keyof typeof Icons] as Icons.LucideIcon;
  return <Icon className={cn("size-4", className)} />;
};

export default getIconComponent;
