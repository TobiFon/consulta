import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Faqs = () => {
  return (
    <Accordion type="single" collapsible className="w-full text-left">
      <AccordionItem value="item-1">
        <AccordionTrigger>
          <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
            What does telemedicine mean?
          </h4>
        </AccordionTrigger>
        <AccordionContent>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis error,
          deserunt explicabo asperiores rem, sequi porro ullam autem, numquam
          amet impedit sed omnis possimus est reprehenderit. Rerum, repellendus
          tenetur.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>
          <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
            What is telemedicine used for?
          </h4>
        </AccordionTrigger>
        <AccordionContent>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic delectus
          laboriosam nihil ullam amet. Blanditiis officiis veritatis odio minus
          incidunt, ipsum quas corporis at alias sequi expedita, eveniet
          mollitia praesentium, repellendus necessitatibus dignissimos placeat
          quisquam dolore error eligendi distinctio.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>
          <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
            What equipment do you require for telemedicine{" "}
          </h4>
        </AccordionTrigger>
        <AccordionContent>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse cum
          repellat quae ut deleniti obcaecati praesentium vero aliquid quas
          reprehenderit ducimus, molestias hic vel non fugit eveniet et? Libero,
          iure.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-4">
        <AccordionTrigger>
          <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
            What are the pros and cons of telemedicine
          </h4>
        </AccordionTrigger>
        <AccordionContent>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse cum
          repellat quae ut deleniti obcaecati praesentium vero aliquid quas
          reprehenderit ducimus, molestias hic vel non fugit eveniet et? Libero,
          iure.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default Faqs;
