"use client";

import * as React from "react";
import { addMinutes, format, fromUnixTime, getUnixTime, set } from "date-fns";
import { ChevronDownIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useController } from "react-hook-form";

const WIB_OFFSET = 7 * 60 * 60;

export function DatePickerTime({ name }: { name: string }) {
  const [open, setOpen] = React.useState(false);
  const { field } = useController({ name });

  const date = field.value ? fromUnixTime(field.value) : undefined;
  const time = date
    ? format(date, "HH:mm:ss")
    : format(addMinutes(new Date(), 20), "HH:mm");

  const updateValue = (newDate?: Date, newTime?: string) => {
    const d = newDate ?? date;
    const t = newTime ?? time;
    if (!d) return;

    const [hours, minutes] = (t ?? "00:00").split(":").map(Number);
    const combined = set(d, { hours, minutes, seconds: 0 });

    const unixWIB = getUnixTime(combined);
    const unixUTC = unixWIB - WIB_OFFSET;

    field.onChange(unixUTC);
  };

  return (
    <FieldGroup className="mx-auto max-w-xs flex-row">
      <Field>
        <FieldLabel htmlFor="date-picker-optional">Date</FieldLabel>
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              id="date-picker-optional"
              className="w-32 justify-between font-normal"
            >
              {date ? format(date, "PPP") : "Select date"}
              <ChevronDownIcon />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto overflow-hidden p-0" align="start">
            <Calendar
              mode="single"
              selected={date}
              captionLayout="dropdown"
              defaultMonth={date}
              onSelect={(date) => {
                updateValue(date);
                setOpen(false);
              }}
            />
          </PopoverContent>
        </Popover>
      </Field>
      <Field className="w-32">
        <FieldLabel htmlFor="time-picker-optional">Time</FieldLabel>
        <Input
          type="time"
          id="time-picker-optional"
          defaultValue={time}
          className="appearance-none bg-background [&::-webkit-calendar-picker-indicator]:hidden [&::-webkit-calendar-picker-indicator]:appearance-none"
        />
      </Field>
    </FieldGroup>
  );
}
