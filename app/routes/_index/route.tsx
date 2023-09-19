import type { LoaderFunctionArgs, MetaFunction } from "@remix-run/cloudflare";
import { getIndexData } from "./get-index-data";
import { useLoaderData } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "Testing Remix v2 Newt" },
    { name: "description", content: "Testing Remix v2 with Newt" },
  ];
};

export const loader = async (_: LoaderFunctionArgs) => {
  return await getIndexData();
};

export default function Index() {
  const data = useLoaderData<typeof loader>();
  return (
    <div>
      <h1>Remix v2 with Newt</h1>
      <div>
        <code>
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </code>
      </div>
    </div>
  );
}
