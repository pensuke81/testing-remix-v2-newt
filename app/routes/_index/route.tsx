import {
  json,
  type LoaderFunctionArgs,
  type MetaFunction,
} from "@remix-run/cloudflare";
import type { Page } from "./get-index-data";
import { getIndexData } from "./get-index-data";
import { useLoaderData } from "@remix-run/react";
import { Hero } from "./Hero";
import { FAQ } from "./FAQ";

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
        switch (section.type) {
          case "Hero":
            return <Hero {...section.data} />;
          case "FAQ":
            return <FAQ {...section.data} />;
          default:
            return null;
        }
      })}
    </div>
  );
}
