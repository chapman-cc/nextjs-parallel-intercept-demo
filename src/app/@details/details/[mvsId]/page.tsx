import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import RouterBackButton from "./RouterBackButton";

export default async function page({
  params,
}: {
  params: Promise<{ mvsId: string }>;
}) {
  const { mvsId } = await params;

  return (
    <Drawer open>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>You are reading mvs by id in url</DrawerTitle>
          <DrawerDescription>Id: {mvsId}</DrawerDescription>
        </DrawerHeader>
        <DrawerFooter>
          <DrawerClose>
            <RouterBackButton>Close drawer</RouterBackButton>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
