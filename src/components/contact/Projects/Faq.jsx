import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Faq() {
  const items = [
    {
      id: 0,
      title: "What taxes do I have to pay?",
      text: "When you purchase a property, you pay a one-time fee of 4% of its price to the Dubai Land Department (DLD). You do not pay any taxes on profits when you decide to sell the property. The entire return on the property’s appreciation is yours!",
    },
   
    {
      id: 1,
      title: "How can I pay for the property?",
      text: "Several payment options are available for purchasing a property. You can pay in cash, use cryptocurrencies, credit cards, or make a bank transfer. Important: the payment goes directly to the developer's escrow account and not through the real estate agent!"
    },
    {
      id: 2,
      title: "If I invest in the project, will I be the owner of the property?",
      text: "Yes, definitely. When you purchase the property, you become the owner of the property and the land forever until you decide to sell it. In 2006, the government approved full ownership for all foreigners in 33 free trade zones in Dubai. After completing the registration of the property at the Dubai Land Department (DLD), you will receive a deed of ownership of the property directly to your email address.",
    },
    {
      id: 3,
      title: "Is my money in a safe place?",
      text: "The funds you transfer to the developer are held in an escrow account with bank support, ensuring the safety of investors’ funds until the property is delivered. The developer doesn’t accept cash more than $10,000. In Dubai, there are strict government oversight, control, and enforcement mechanisms in place to fully protect investors’ funds.",
    },
    {
      id: 4,
      title: "Should I take a lawyer to review the contract?",
      text: "No, there is no need. In Dubai, there is a uniform property purchase contract for all construction companies, which cannot be changed.",
    },
  ];
  return (
    <div className="w-11/12 max-w-[1200px] m-auto mb-32">
        <h1 className="text-4xl font-bold text-royal lg:text-center mb-16 ">Frequently Asked Questions</h1>
      <Accordion type="single" collapsible className="w-full  m-auto">
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
