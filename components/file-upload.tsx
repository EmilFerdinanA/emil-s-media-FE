"use client";

import { ImagePlus, X } from "lucide-react";
import Image from "next/image";
import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { useController } from "react-hook-form";

interface UploadedFile {
  id: string;
  file: File;
  preview: string;
}

export function StyledDropzone({ name }: { name: string }) {
  const {
    field,
    fieldState: { error },
  } = useController({ name });

  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      const newFiles = acceptedFiles.map((file) => ({
        id: crypto.randomUUID(),
        file,
        preview: URL.createObjectURL(file),
      }));
      field.onChange([...field.value, ...newFiles]);
    },
    [field],
  );

  const removeFile = (id: string) => {
    const updated = field.value.filter((f: UploadedFile) => {
      if (f.id === id) {
        URL.revokeObjectURL(f.preview);
        return false;
      }
      return true;
    });
    field.onChange(updated);
  };

  const { getRootProps, getInputProps, isFocused, isDragAccept, isDragReject } =
    useDropzone({
      accept: { "image/*": [] },
      onDrop,
    });

  const getBorderClass = () => {
    if (isDragAccept) return "border-green-400";
    if (isDragReject) return "border-red-500";
    if (isFocused) return "border-blue-400";
    return "border-gray-300";
  };

  return (
    <div className="flex flex-wrap gap-1 p-2">
      {field.value.map((f: UploadedFile) => (
        <div
          key={f.id}
          className="relative w-30 h-30 rounded-md overflow-hidden group"
        >
          <Image src={f.preview} alt={f.file.name} fill />
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
            <button
              onClick={() => removeFile(f.id)}
              className="bg-white rounded-full p-1 text-red-500 hover:bg-red-500 hover:text-white transition-colors"
            >
              <X size={14} />
            </button>
          </div>
        </div>
      ))}

      <div
        {...getRootProps()}
        className={`
          flex flex-col items-center justify-center gap-1
          w-30 h-30 rounded-lg border-2 border-dashed
          bg-transparent text-gray-400
          outline-none transition-colors duration-200 ease-in-out
          cursor-pointer hover:border-blue-400 hover:text-blue-400
          ${getBorderClass()}
        `}
      >
        <input {...getInputProps()} />
        <ImagePlus size={24} />
        <p className="text-[10px] text-center leading-tight px-1">
          Drag & drop or select file
        </p>
      </div>
    </div>
  );
}
