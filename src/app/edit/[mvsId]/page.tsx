import {
  DrawerClose,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
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
        <DrawerDescription>
          stand alone details page, mvsId: {mvsId}
        </DrawerDescription>
      </DrawerHeader>
      <DrawerFooter>
        <DrawerClose asChild>
          <div className="flex justify-center gap-2">
            <Link href="/">
              <Button>Close drawer</Button>
            </Link>
            <Link href={`/details/${mvsId}`}>
              <Button>Go to details</Button>
            </Link>
          </div>
        </DrawerClose>
      </DrawerFooter>
    </>
  );
}
