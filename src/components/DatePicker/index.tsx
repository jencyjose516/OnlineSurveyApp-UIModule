import { Input } from "components/Input";
import React, { useRef, useState } from "react";
import DayPicker, { DateUtils } from "react-day-picker";
import "react-day-picker/lib/style.css";
import { toast } from "react-toastify";
import { DatePickerProps } from "types/props";
import { useOutsideClick } from "utils/hooks";

export function DatePicker(props: DatePickerProps) {
  const { id, label, placeholder, selectedDay, setSelectedDays } = props;

  const [open, setOpen] = useState<boolean>(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useOutsideClick(wrapperRef, () => {
    setOpen(false);
  });

  return (
    <div className="relative">
      <Input
        id={id}
        isRequired
        label={label}
        placeholder={placeholder}
        readOnly
        type="text"
        value={selectedDay?.toString()}
        onFocus={() => {
          setOpen((val) => !val);
        }}
      />

      {open && (
        <div
          className="bg-white rounded-lg p-3 shadow-2xl absolute bottom-12 left-10 border-2 border-purple-500"
          ref={wrapperRef}
        >
          <DayPicker
            selectedDays={selectedDay}
            onDayClick={(day) => {
              const isFuture = DateUtils.isFutureDay(day);

              if (isFuture) {
                setSelectedDays(day);
                setOpen(false);
              } else {
                toast.warning("Pick a day greater than today");
              }
            }}
          />
        </div>
      )}
    </div>
  );
}
