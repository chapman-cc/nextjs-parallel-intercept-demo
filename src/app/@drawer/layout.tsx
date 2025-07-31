"use client";
import { DrawerContentPure } from "@/components/custom/DrawerContentPure";
import { Drawer } from "@/components/ui/drawer";
import { PropsWithChildren } from "react";

export default function layout({ children }: PropsWithChildren) {
  return (
    <Drawer open>
      <DrawerContentPure className="bg-gray-200">{children}</DrawerContentPure>
    </Drawer>
  );
}
