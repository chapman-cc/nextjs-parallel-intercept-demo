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
        <DrawerTitle>You are reading mvs by id in url</DrawerTitle>
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
            <Link href={`/edit/${mvsId}`}>
              <Button>Go to edit</Button>
            </Link>
          </div>
        </DrawerClose>
      </DrawerFooter>
    </>
  );
}
