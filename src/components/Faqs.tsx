
import { Accordion,
   AccordionItem,
    AccordionTrigger, 
    AccordionContent } from '~/components/UI/Accordion_';
    import { faqs } from '~/DATA/data';

    



   


const Faqs = () => {

  
  return (
    <section className="py-16 px-4 bg-white" aria-labelledby="faq-heading">
      <div className="max-w-3xl mx-auto">
        <h2 id="faq-heading" className="text-3xl font-bold text-center mb-4">FAQs</h2>
        <p className="text-center text-gray-600 mb-8">Nos réponses à vos questions les plus fréquentes</p>
        <Accordion type="single" collapsible className="space-y-8">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="rounded-lg">
              
              <AccordionTrigger className=" flex justify-between items-center w-full p-4 h-14 rounded-tr-3xl rounded-tl-3xl">
                <span className="text-lg font-semibold">{faq.question}</span>
              </AccordionTrigger>
              <AccordionContent className="p-4 text-gray-700 bg-blue-50 rounded-br-3xl rounded-bl-3xl">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default Faqs;
