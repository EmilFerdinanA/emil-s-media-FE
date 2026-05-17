import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Field, FieldGroup } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Settings, X } from "lucide-react";
import { ButtonGroupDropdown } from "./button-group-dropdown";

interface IProps {
  isOpen: boolean;
  onOpenChange?: (open: boolean) => void;
}

export function Modal({ isOpen, onOpenChange }: IProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <form>
        <DialogContent showCloseButton={false} className="sm:max-w-sm">
          <DialogHeader>
            <div className="flex items-center justify-between">
              <DialogTitle>Create Post</DialogTitle>
              <div className="flex gap-1">
                <Button variant="ghost" size="icon">
                  <Settings className="size-4" />
                </Button>
                <DialogClose asChild>
                  <Button variant="ghost" size="icon">
                    <X className="h-4 w-4" />
                  </Button>
                </DialogClose>
              </div>
            </div>
          </DialogHeader>

          <FieldGroup>
            <Field>
              <Label htmlFor="name-1">Name</Label>
              <Input id="name-1" name="name" defaultValue="Pedro Duarte" />
            </Field>
            <Field>
              <Label htmlFor="username-1">Username</Label>
              <Input id="username-1" name="username" defaultValue="@peduarte" />
            </Field>
          </FieldGroup>
          <DialogFooter>
            <ButtonGroupDropdown />
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  );
}
