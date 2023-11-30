import React, { useState, useRef } from 'react';

export const useUploadHandlers = () => {
  const [files, setFiles] = useState<Array<File>>([]);
  const [dragging, setDragging] = useState<boolean>(false);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const fileList = e.target.files;
      setFiles([Array.from(fileList)[0]]);
    }
  };

  const handleIconClick = () => {
    fileInputRef.current?.click();
  };

  const handleDragIn = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDragOut = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setDragging(false);
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setDragging(true);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      setFiles([Array.from(e.dataTransfer.files)[0]]);
      e.dataTransfer.clearData();
    }
  };

  return {
    files,
    setFiles,
    dragging,
    setDragging,
    handleFileSelect,
    handleIconClick,
    handleDragIn,
    handleDragOut,
    handleDragOver,
    handleDrop,
    fileInputRef,
  };
};
