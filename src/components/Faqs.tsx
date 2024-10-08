import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "~/components/UI/Accordion";
import { faqs } from "~/DATA/data";

const Faqs = () => {
  return (
    <section aria-labelledby="faq-heading" className="bg-white px-4 py-16">
      <div className="mx-auto max-w-3xl">
        <h1 className="mb-4 text-center text-3xl font-bold" id="faq-heading">
          Foire aux questions
        </h1>

        <p className="mb-8 text-center text-gray-600">Nos réponses à vos questions les plus fréquentes</p>

        <Accordion className="space-y-8" type="single" collapsible>
          {faqs.map((faq, index) => (
            <AccordionItem className="rounded-lg" key={index} value={`item-${index}`}>
              <AccordionTrigger className="flex h-14 w-full items-center justify-between rounded-t-3xl p-4">
                <span className="text-lg font-semibold">{faq.question}</span>
              </AccordionTrigger>
              <AccordionContent className="rounded-b-3xl bg-blue-50 p-4 text-gray-700">
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
