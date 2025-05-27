import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQ {
  question: string;
  answer: string;
}

interface FaqSectionProps {
  faqs: FAQ[];
}

const Faqs = ({ faqs }: FaqSectionProps) => {
  return (
    <section id="faq" className="py-20 px-8 md:px-4 bg-gray-50 w-full">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600">
            Get answers to common questions about EduGrade's platform, security, and support.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full bg-white">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left px-0 py-8 font-medium text-lg bg-transparent text-black hover:bg-transparent">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600">
            Still have questions?{" "}
            <a href="#" className="text-blue-600 font-medium hover:underline">
              Contact our support team
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Faqs;
