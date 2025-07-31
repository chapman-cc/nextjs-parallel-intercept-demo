import { Drawer, DrawerContentAbsolute } from "@/components/ui/drawer";
import { PropsWithChildren } from "react";

export default function layout({ children }: PropsWithChildren) {
  return (
    <Drawer open>
      <DrawerContentAbsolute>{children}</DrawerContentAbsolute>
    </Drawer>
  );
}
