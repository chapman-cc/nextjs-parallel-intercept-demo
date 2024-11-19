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
      <h1 className="text-2xl">
        Demo - NextJS Parallel route + Intercept route
      </h1>

      <p>
        this demo is a test for opening Modal/Drawer and changing the uri,
        making the uri sharable, all in Server side environment
      </p>

      <ol>
        <li>
          <p>
            consider the app can display detailed data in{" "}
            <code>/details/&lt;mvsId&gt;</code>{" "}
          </p>
        </li>
        <li>
          <p>
            if user navigate inside app, user clicks onto a{" "}
            <code>&lt;Link href="/details/123456" &gt;</code>, a modal or drawer
            will pop up on screen.
          </p>
        </li>
        <li>
          <p>
            exiting the modal/drawer will close it and show the previous screen
            without refresh
          </p>
        </li>

        <li>
          <p>
            if user copy the url <code>/details/&lt;mvsId&gt;</code>, and paste
            in address bar, it would show the non-modal/drawer page instead
          </p>
        </li>

        <li>
          <p>
            if no intercepted page is present, the modal will open, but the page
            underneath is 404
          </p>
        </li>
      </ol>

      <div className="mb-5">
        <Link href="/details/abcdefg">
          <Button>Open drawer with url &quot;/details/abcdefg&quot;</Button>
        </Link>
      </div>
      <div>
        <Link href="/edit/abcdefg">
          <Button>Open drawer with url &quot;/edit/abcdefg&quot;</Button>
        </Link>
      </div>

      <p className="mt-5">
        Repo:{" "}
        <a href="https://github.com/chapman-cc/nextjs-parallel-intercept-demo">
          https://github.com/chapman-cc/nextjs-parallel-intercept-demo
        </a>
      </p>
      <p>
        Docs:
        <a href="https://nextjs.org/docs/app/building-your-application/routing/parallel-routes#modals">
          https://nextjs.org/docs/app/building-your-application/routing/parallel-routes#modals
        </a>
      </p>
    </div>
  );
}
