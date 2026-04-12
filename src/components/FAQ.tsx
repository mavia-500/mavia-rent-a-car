import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How can I book a car with Al Buraq Rent A car  & Tour?",
    answer: "You can book easily through our website, call, or WhatsApp. Just choose your vehicle, date, and location — we'll handle the rest."
  },
  {
    question: "Do you offer cars with drivers and self-drive options?",
    answer: "Yes, we provide only cars with drivers"
  },
  // {
  //   question: "What documents are required for self-drive car rental?",
  //   answer: "You need a valid CNIC, driving license, and a refundable security deposit at the time of booking."
  // },
  {
    question: "What areas do you service?",
    answer: "We operate nationwide across Pakistan, with primary offices in Islamabad. We also provide intercity transfers and long-term rentals."
  },
  // {
  //   question: "Are your vehicles insured?",
  //   answer: "Yes, all our vehicles are fully insured for your safety and peace of mind. Additional coverage options are available upon request."
  // },
];

const FAQ = () => {
  return (
    <section id="faq" className="py-24 dark-section">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="section-subtitle justify-center mb-4">Frequently Asked Questions</p>
          <h2 className="section-title">
            Everything You Need to Know About Our Services
          </h2>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-dark-light rounded-lg px-6 border-0"
              >
                <AccordionTrigger className="text-left text-lg font-medium hover:text-primary hover:no-underline py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-secondary-foreground/70 pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
