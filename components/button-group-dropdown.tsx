"use client";

import { ChevronDownIcon, ShareIcon, VolumeOffIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { ButtonGroup } from "@/components/ui/button-group";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useFormContext } from "react-hook-form";
import { schedulePost } from "@/service/facebook";
import { useState } from "react";
import { DatePickerTime } from "./date-picker-time";

export function ButtonGroupDropdown() {
  const [activeItem, setActiveItem] = useState("now");
  const { handleSubmit } = useFormContext();

  const onSUbmit = (datas: any) => {
    const formData = new FormData();
    formData.append("caption", datas.caption);
    formData.append("scheduledAt", datas.scheduledAt);
    formData.append("pages", datas.selectedPages);
    datas.files.forEach((f: any) => {
      formData.append("files", f.file);
    });

    schedulePost(formData);
  };

  return (
    <>
      {activeItem === "time" && <DatePickerTime name="scheduledAt" />}
      <ButtonGroup>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="pl-2!">
              {activeItem === "now" ? "Now" : "Time"}
              <ChevronDownIcon />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-44">
            <DropdownMenuGroup>
              <DropdownMenuItem onClick={() => setActiveItem("now")}>
                <VolumeOffIcon />
                Now
              </DropdownMenuItem>

              <DropdownMenuItem onClick={() => setActiveItem("time")}>
                <ShareIcon />
                Set Date and Time
              </DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
        <Button variant="outline" onClick={handleSubmit(onSUbmit)}>
          Publish Now
        </Button>
      </ButtonGroup>
    </>
  );
}
