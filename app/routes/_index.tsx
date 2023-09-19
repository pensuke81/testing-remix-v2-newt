import type { MetaFunction } from "@remix-run/cloudflare";

export const meta: MetaFunction = () => {
  return [
    { title: "Testing Remix v2 Newt" },
    { name: "description", content: "Testing Remix v2 with Newt" },
  ];
};

export default function Index() {
  return (
    <div>
      <h1>Welcome to Remix</h1>
    </div>
  );
}
