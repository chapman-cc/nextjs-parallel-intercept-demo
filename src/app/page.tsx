import { Button } from "@/components/ui/button";
import Link from "next/link";

interface Props {
  searchParams: Promise<{
    mvsId?: string;
  }>;
}

export default async function Home({ searchParams }: Props) {
  
  return (
    <div>
      <Link href="/details/abcdefg">
        <Button>Open drawer with url &quot;/details/abcdefg&quot;</Button>
      </Link>
    </div>
  );
}
