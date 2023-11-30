import React from 'react';
import { useRouter } from 'next/router';
import icons from '@/assets/icons/icon';
import { uploadPdf } from '@/api/pdf/pdfApi';
import { useUploadHandlers } from '@/utils/upLoadHandler';

const UploadIcons = icons.upload;

const UploadBox: React.FC = () => {
  const router = useRouter();

  const {
    files,
    dragging,
    handleFileSelect,
    handleIconClick,
    handleDragIn,
    handleDragOut,
    handleDragOver,
    handleDrop,
    fileInputRef,
  } = useUploadHandlers();

  const upload = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (files.length === 0) {
      alert('파일을 선택해주세요.');
      return;
    }
    const id = await uploadPdf(files);
    if (id) {
      router.push(`/summary/${id}`);
    } else {
      alert('에러가 발생했습니다.');
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
