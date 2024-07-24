
import { Accordion,
   AccordionItem,
    AccordionTrigger, 
    AccordionContent } from '~/components/UI/accordion';

    type Faq={
      question:string;
      answer:string
    }
const faqs = [
  {
    question: 'Is there a free trial available?',
    answer: "Yes, you can try us for free for 30 days. If you want, we'll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible."
  },
  {
    question: 'Can I change my plan later?',
    answer: 'Yes, you can upgrade or downgrade your plan at any time. Changes will take effect immediately.'
  },
  {
    question: 'What is your cancellation policy?',
    answer: 'You can cancel your subscription at any time. Your subscription will remain active until the end of the current billing period.'
  }
];

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
