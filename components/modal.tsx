import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Settings, X } from "lucide-react";
import { ButtonGroupDropdown } from "./button-group-dropdown";
import { StyledDropzone } from "./file-upload";
import { Textarea } from "./ui/textarea";
import { useController, useFormContext } from "react-hook-form";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface IProps {
  isOpen: boolean;
  onOpenChange?: (open: boolean) => void;
  pages: unknown;
}

export function Modal({ isOpen, onOpenChange, pages }: IProps) {
  const { register } = useFormContext();

  const {
    field: selectedPagesField,
    fieldState: { error: pagesError },
  } = useController({
    name: "selectedPages",
  });

  const selectedPages: string[] = selectedPagesField.value ?? [];

  const onClickSelectAll = () => {
    selectedPagesField.onChange(pages.map((page: any) => page.id));
  };

  const onClickUnselectAll = () => {
    selectedPagesField.onChange([]);
  };

  const onTogglePage = (id: string) => {
    const isSelected = selectedPages.includes(id);
    selectedPagesField.onChange(
      isSelected
        ? selectedPages.filter((p) => p !== id)
        : [...selectedPages, id],
    );
  };
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

          <div className="flex gap-1">
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={
                selectedPages.length === pages.length
                  ? onClickUnselectAll
                  : onClickSelectAll
              }
            >
              {selectedPages.length === pages.length
                ? "Unselect All"
                : "Select All"}
            </Button>

            {pages.map((page: any) => (
              <div
                key={page.id}
                onClick={() => onTogglePage(page.id)} // 👈 bonus: bisa toggle per page
                className={cn(
                  "flex items-center gap-2 cursor-pointer rounded p-0.5",
                  selectedPages.includes(page.id) &&
                    "border-2 border-yellow-500",
                )}
              >
                <Image
                  src={page.picture}
                  alt={page.name}
                  width={20}
                  height={20}
                />
              </div>
            ))}
          </div>

          <Textarea className="border-none" {...register("caption")} />

          <StyledDropzone name="files" />

          <DialogFooter>
            <ButtonGroupDropdown />
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  );
}
