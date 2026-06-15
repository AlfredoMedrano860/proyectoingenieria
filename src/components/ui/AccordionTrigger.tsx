import * as React from "react";
import { Accordion } from "radix-ui";
import { ChevronDown, type LucideIcon } from "lucide-react";

interface AccordionTriggerProps {
  icon: LucideIcon;
  children: React.ReactNode;
}

const AccordionTrigger = React.forwardRef<HTMLButtonElement, AccordionTriggerProps>(
  ({ icon: Icon, children }, ref) => (
    <Accordion.Header>
      <Accordion.Trigger ref={ref} className="accordion-trigger w-full flex items-center justify-between px-5 py-4 hover:bg-gray-50 transition-colors duration-150">
        <div className="flex items-center gap-3">
          <Icon size={22} className="text-black" />
          <span className="text-sm font-medium text-black">{children}</span>
        </div>
        <ChevronDown size={18} className="accordion-chevron text-gray-400" aria-hidden />
      </Accordion.Trigger>
    </Accordion.Header>
  )
);

export default AccordionTrigger;
