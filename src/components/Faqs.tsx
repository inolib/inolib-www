import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "~/components/UI/Accordion";
import { faqs } from "~/DATA/data";

const Faqs = () => {
  return (
    <section className="bg-white px-4 py-16" aria-labelledby="faq-heading">
      <div className="mx-auto max-w-3xl">
        <h2 id="faq-heading" className="mb-4 text-center text-3xl font-bold">
          FAQs
        </h2>
        <p className="mb-8 text-center text-gray-600">Nos réponses à vos questions les plus fréquentes</p>
        <Accordion type="single" collapsible className="space-y-8">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="rounded-lg">
              <AccordionTrigger className="flex h-14 w-full items-center justify-between rounded-tl-3xl rounded-tr-3xl p-4">
                <span className="text-lg font-semibold">{faq.question}</span>
              </AccordionTrigger>
              <AccordionContent className="rounded-bl-3xl rounded-br-3xl bg-blue-50 p-4 text-gray-700">
                <div dangerouslySetInnerHTML={{ __html: faq.answer }} />
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default Faqs;
