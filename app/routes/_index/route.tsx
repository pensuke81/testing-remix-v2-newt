import {
  json,
  type LoaderFunctionArgs,
  type MetaFunction,
} from "@remix-run/cloudflare";
import type { Page } from "./get-index-data";
import { getIndexData } from "./get-index-data";
import { useLoaderData } from "@remix-run/react";
import { Hero } from "./Hero";

export const meta: MetaFunction = () => {
  return [
    { title: "Testing Remix v2 Newt" },
    { name: "description", content: "Testing Remix v2 with Newt" },
  ];
};

type LoaderData = Page;

export const loader = async (_: LoaderFunctionArgs) => {
  const data: LoaderData = await getIndexData();
  return json(data);
};

export default function Index() {
  // @ts-expect-error JsonifyObjectとかがおかしそう https://github.com/remix-run/remix/issues/7246
  const data: LoaderData = useLoaderData();
  return (
    <div>
      {data.sections.map((section) => {
        return section.type === "Hero" && <Hero {...section.data} />;
      })}
    </div>
  );
}
