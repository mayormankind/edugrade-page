import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { QuoteIcon } from "lucide-react";

interface Testimonial {
  quote: string;
  author: string;
  position: string;
  image: string;
}

interface TestimonialSectionProps {
  testimonials: Testimonial[];
}

const TestimonialSection = ({ testimonials }: TestimonialSectionProps) => {
  return (
    <section id="testimonials" className="py-20 px-8 md:px-4 bg-blue-50 w-full">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center max-w-3xl mx-auto mb-16 fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Trusted by Educators and Parents
          </h2>
          <p className="text-lg text-gray-600">
            See what school administrators and parents are saying about how EduGrade
            has transformed their approach to academic reporting.
          </p>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-6xl mx-auto"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 pl-4">
                <div className="p-1">
                  <Card className="bg-white shadow-md h-full border-0">
                    <CardContent className="p-6 flex flex-col h-full">
                      <QuoteIcon className="h-8 w-8 text-blue-500 opacity-50 mb-4" />
                      <p className="text-gray-700 mb-6 flex-grow">{testimonial.quote}</p>
                      <div className="flex items-center mt-auto">
                        <div className="h-12 w-12 rounded-full bg-gray-200 overflow-hidden mr-4">
                          <img
                            src={testimonial.image}
                            alt={testimonial.author}
                            className="h-full w-full object-cover"
                          />
                        </div>
                        <div>
                          <p className="font-semibold">{testimonial.author}</p>
                          <p className="text-sm text-gray-600">{testimonial.position}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center mt-8">
            <CarouselPrevious className="static transform-none mx-2 bg-black" />
            <CarouselNext className="static transform-none mx-2 bg-black" />
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default TestimonialSection;
