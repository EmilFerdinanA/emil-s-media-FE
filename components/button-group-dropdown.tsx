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

export function ButtonGroupDropdown() {
  const { handleSubmit } = useFormContext();

  const onSUbmit = (datas: any) => {
    console.log(datas);
  };
  return (
    <ButtonGroup>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" className="pl-2!">
            Now
            <ChevronDownIcon />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-44">
          <DropdownMenuGroup>
            <DropdownMenuItem>
              <VolumeOffIcon />
              Now
            </DropdownMenuItem>

            <DropdownMenuItem>
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
  );
}
