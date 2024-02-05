import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetDescription,
  SheetTitle,
  SheetFooter,
  SheetClose,
} from "./ui/sheet";
import { Menu } from "lucide-react";

export default function HomeMenu() {
  return (
    <Sheet>
      <SheetTrigger>
        <Menu size={36} />
      </SheetTrigger>
    </Sheet>
  );
}
