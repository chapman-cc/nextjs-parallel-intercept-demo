import {
  DrawerClose,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import RouterBackButton from "../../RouterBackButton";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default async function page({
  params,
}: {
  params: Promise<{ mvsId: string }>;
}) {
  const { mvsId } = await params;

  return (
    <>
      <DrawerHeader>
        <DrawerTitle>You are editing mvs by id in url</DrawerTitle>
        <DrawerDescription>Id: {mvsId}</DrawerDescription>
      </DrawerHeader>
      <DrawerFooter>
        <DrawerClose asChild>
          <div className="flex justify-center gap-2">
            <RouterBackButton>
              <Button>Close drawer</Button>
            </RouterBackButton>
            <Link href={`/details/${mvsId}`}>
              <Button>Go to details</Button>
            </Link>
          </div>
        </DrawerClose>
      </DrawerFooter>
    </>
  );
}
