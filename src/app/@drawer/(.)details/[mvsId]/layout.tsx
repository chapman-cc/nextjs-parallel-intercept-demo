import { Drawer, DrawerContent } from "@/components/ui/drawer";
import { PropsWithChildren } from "react";

export default function layout({ children }: PropsWithChildren) {
  return (
    <Drawer open>
      <DrawerContent>{children}</DrawerContent>
    </Drawer>
  );
}
