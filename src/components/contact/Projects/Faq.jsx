import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Faq({items}) {
  return (
    <div className="w-11/12 max-w-[1400px] m-auto mb-32">
        <h1 className="text-4xl font-bold text-royal lg:text-center mb-16 ">Frequently Asked Questions</h1>
      <Accordion type="single" collapsible className="w-full lg:w-2/3 m-auto">
      {items.map(({ id, title, text }) => (
        <AccordionItem key={id} value={title}>
          <AccordionTrigger className="text-xl text-left">{title}</AccordionTrigger>
          <AccordionContent className="text-lg">
            {text}
          </AccordionContent>
        </AccordionItem>
      ))}
      </Accordion>
    </div>
  );
}
