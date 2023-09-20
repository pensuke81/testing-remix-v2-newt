import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import type { FAQSection } from "./get-index-data";

export type FAQProps = FAQSection["data"];

export function FAQ({ items, titleCopy }: FAQProps) {
  return (
    <div className="container max-w-5xl pb-28">
      <h2 className="text-2xl mb-6">{titleCopy}</h2>
      <Accordion type="single" collapsible className="w-full">
        {items.map((item) => (
          <AccordionItem key={item._id} value={item._id}>
            <AccordionTrigger>{item.question}</AccordionTrigger>
            <AccordionContent>{item.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
