import React, { useState } from 'react';

import icons from '@/assets/icons/icon';

interface UploadedInfo {
  name: string;
  size: string;
  type: string;
}

const UploadIcons = icons.upload;

const UploadBox: React.FC = () => {
  const [isActive, setActive] = useState(false);
  const [uploadedInfo, setUploadedInfo] = useState<UploadedInfo | null>(null);

  const handleDragStart = () => setActive(true);
  const handleDragEnd = () => setActive(false);
  const handleDragOver = (event: React.DragEvent<HTMLLabelElement>) => {
    event.preventDefault();
  };

  const setFileInfo = (file: File) => {
    const { name, size: byteSize, type } = file;
    const size = (byteSize / (1024 * 1024)).toFixed(2) + 'mb';
    setUploadedInfo({ name, size, type });
  };

  const handleDrop = (event: React.DragEvent<HTMLLabelElement>) => {
    event.preventDefault();
    setActive(false);

    const file = event.dataTransfer.files[0];
    if (file) {
      setFileInfo(file);
    }
  };

  const handleUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setFileInfo(file);
    }
  };

  return (
    <label
      className={`flex flex-col  justify-center items-center cursor-pointer w-full h-[80vh] m-auto  p-[70px]  sm:h-2/5 ${
        isActive ? ' active' : ''
      } `}
      onDragEnter={handleDragStart}
      onDragOver={handleDragOver}
      onDragLeave={handleDragEnd}
      onDrop={handleDrop}
    >
      <input type="file" className="hidden" onChange={handleUpload} />
      {uploadedInfo && (
        <ul className="w-full list-none p-0 gap-4 flex flex-col">
          <span>기다려주셔</span>
        </ul>
      )}
      {!uploadedInfo && (
        <>
          <UploadIcons size={64} color="blue" />
          <span className="font-medium text-[20px] my-5 mb-3 sm:text-[10px]">PDF 파일을 올려주세요</span>
        </>
      )}
    </label>
  );
};

export default UploadBox;
