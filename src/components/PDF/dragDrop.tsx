import React, { ChangeEvent, FormEvent, useState } from 'react';

import icons from '@/assets/icons/icon';
import { axiosInstance } from '@/axiosInstance';

const UploadIcons = icons.upload;

const UploadBox: React.FC = () => {
  const [files, setFiles] = useState<FileList | undefined>();

  const onChangeFiles = (e: ChangeEvent<HTMLInputElement>) => {
    const fileList = e.target.files;
    if (fileList !== null) {
      setFiles(fileList);
    }
  };

  const upload = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!files) {
      alert('파일을 선택해주세요.');
      return;
    }
    const formData = new FormData();
    Array.from(files).forEach((el) => {
      formData.append('userfile', el);
    });
    console.log(`${process.env.NEXT_PUBLIC_BASE_URL}summary/pdf`);

    try {
      const response = await axiosInstance.post(`summary/pdf`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        transformRequest: [
          function () {
            return formData;
          },
        ],
      });
      alert('성공');
    } catch (error) {
      alert('에러 ㅠ');
      console.log(error);
    }
  };

  return (
    <label
      className={`flex flex-col  justify-center items-center cursor-pointer w-full h-[80vh] m-auto p-[70px] sm:h-2/5`}
    >
      <form onSubmit={upload} encType="multipart/form-data">
        <input type="file" name="userfile" multiple className="hidden" onChange={onChangeFiles} />

        <UploadIcons size={64} color="blue" />
        <span className="font-medium text-[20px] my-5 mb-3 sm:text-[10px]">PDF 파일을 올려주세요</span>
        <input type="submit" />
      </form>
    </label>
  );
};

export default UploadBox;
