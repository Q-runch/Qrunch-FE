import React, { useRef, useState } from 'react';
import { useRouter } from 'next/router';
import icons from '@/assets/icons/icon';
import { axiosInstance } from '@/axiosInstance';

const UploadIcons = icons.upload;

const UploadBox: React.FC = () => {
  const router = useRouter();
  const [files, setFiles] = useState<Array<File>>([]);
  const [dragging, setDragging] = useState<boolean>(false);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const fileList = e.target.files;
      setFiles((prev) => [...prev, ...Array.from(fileList)]);
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
      setFiles((prev) => [...prev, ...Array.from(e.dataTransfer.files)]);
      e.dataTransfer.clearData();
    }
  };

  const upload = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (files.length === 0) {
      alert('파일을 선택해주세요.');
      return;
    }
    const formData = new FormData();
    files.forEach((file) => {
      formData.append('file', file);
    });
    try {
      const response = await axiosInstance.post(`summary/pdf`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data;',
        },
      });
      const id = response.data.data.summarize.id;
      router.push(`/summary/${id}`);
    } catch (error) {
      alert('에러 ㅠ');
      console.log(error);
    }
  };

  return (
    <div className="border-2 border-primary-blue-solid rounded-xl relative">
      <input type="file" ref={fileInputRef} onChange={handleFileSelect} className="hidden" multiple />
      <div
        onDragEnter={handleDragIn}
        onDragLeave={handleDragOut}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
        className={`flex flex-col justify-center items-center cursor-pointer w-full h-[80vh] m-auto p-[70px] sm:h-2/5 ${
          dragging ? 'bg-blue-200' : ''
        }`}
      >
        <div className="flex flex-col justify-center items-center">
          <button onClick={handleIconClick}>
            <UploadIcons size={64} color="skyblue" />
          </button>
          <p className="font-medium text-[20px] text-primary-blue-solid my-5 mb-3 sm:text-[10px]">
            PDF 파일을 드래그 앤 드롭하세요
          </p>
          {files.length > 0 &&
            files.map((file, index) => (
              <p key={index} className="text-white">
                {file.name}
              </p>
            ))}
        </div>
      </div>

      <form onSubmit={upload} encType="multipart/form-data" className="absolute  right-0 bottom-0 m-4">
        <input
          type="submit"
          className="border-2 border-primary-blue duration-500 cursor-pointer hover:bg-primary-blue-solid text-white px-4 py-2 sm:px-2 sm:py-1 rounded-xl"
        />
      </form>
    </div>
  );
};

export default UploadBox;
