import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { DayPicker } from "react-day-picker";
import { capitalizeFirstLetter } from "../app/utils/capitalizeFirstLetter";

interface DatePickerProps {
  value: Date;
  onChange?(date: Date): void;
}

export function DatePicker({ value, onChange }: DatePickerProps) {
  return (
    <DayPicker
      locale={ptBR}
      selected={value}
      mode="single"
      onSelect={(date) => onChange?.(date ?? new Date())}
      classNames={{
        caption: "flex items-center justify-between",
        caption_label: "px-2 py-[13px] text-sm tracking-[-0.5px] font-medium",
        nav: "flex gap-1",
        chevron: "fill-teal-900",
        button_previous: "flex items-center justify-center !bg-transparent",
        button_next: "flex items-center justify-center !bg-transparent",
        weekdays: "uppercase text-sm text-gray-500 font-medium pt-1 pb-2",
        day: "text-center text-gray-700 cursor-pointer w-10 h-10 hover:bg-teal-100 rounded-full",
      }}
      modifiersClassNames={{
        today: "bg-gray-100 font-bold text-gray-900",
        selected: "!bg-teal-900 text-white font-medium",
      }}
      formatters={{
        formatCaption: (date, options) => {
          return capitalizeFirstLetter(format(date, "LLLL yyyy", options));
        },
      }}
    />
  );
}
