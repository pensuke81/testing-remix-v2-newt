import type { Image, ListRes } from "@/utils/fetchNewt";
import { fetchNewt } from "@/utils/fetchNewt";

export type Page = {
  pageName: string;
  slug: string;
  meta: {
    title: string;
    description: string;
    ogImage: Image | null;
  };
  sections: Section[];
};

export type Section = HeroSection | CTASection | FAQSection;

type SectionBase<Data> = {
  _id: string;
  type: "Hero" | "Logo" | "CTA" | "FAQ";
  data: Data;
};

type BackgroundImage = {
  _id: string;
  altText: string;
  description: string;
  fileName: string;
  fileSize: number;
  fileType: string;
  height: number;
  src: string;
  title: string;
  width: number;
};

type CtaButton = {
  label: string;
  url: string;
  newTab: boolean;
};

export type HeroData = {
  shoulderCopy: string;
  titleCopy: string;
  text: string;
  ctaButton: CtaButton;
  backgroundImage: BackgroundImage;
};

export type HeroSection = { type: "Hero" } & SectionBase<HeroData>;

export type CTAData = {
  titleCopy: string;
  text: string;
  ctaButton: CtaButton;
};

export type CTASection = { type: "CTA" } & SectionBase<CTAData>;

export type FAQData = {
  titleCopy: string;
  items: FAQItem[];
};

type FAQItem = {
  question: string;
  answer: string;
  _id: string;
};

export type FAQSection = { type: "FAQ" } & SectionBase<FAQData>;

export const getIndexData = async () => {
  const slug = `page-1`;
  const res = await fetchNewt<ListRes<Page>>(
    `/landing-page/landing-page?slug=${slug}`
  );
  const item = res.items?.[0];
  if (!item) throw new Error(`No data found for slug ${slug}`);

  return item;
};
