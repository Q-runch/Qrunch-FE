import React, { ChangeEvent, FormEvent, useState } from 'react';
import { useRouter } from 'next/router';
import icons from '@/assets/icons/icon';
import { axiosInstance } from '@/axiosInstance';

const UploadIcons = icons.upload;

const UploadBox: React.FC = () => {
  const router = useRouter();
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
      formData.append('file', el);
    });
    console.log(`${process.env.NEXT_PUBLIC_BASE_URL}summary/pdf`);

    try {
      const response = await axiosInstance.post(`summary/pdf`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data;',
        },
        transformRequest: [
          function () {
            return formData;
          },
        ],
      });
      console.log(response.data.data.summarize.id);
      const id = response.data.data.summarize.id;
      router.push(`/summary/${id}`);
    } catch (error) {
      alert('에러 ㅠ');
      console.log(error);
    }
  };

  return (
    <div
      className={`flex flex-col justify-center items-center cursor-pointer w-full h-[80vh] m-auto p-[70px] sm:h-2/5`}
    >
      <form onSubmit={upload} encType="multipart/form-data">
        <input type="file" name="file" accept="application/pdf" multiple onChange={onChangeFiles} />
        <UploadIcons size={64} color="blue" />
        <p className="font-medium text-[20px] my-5 mb-3 sm:text-[10px]">PDF 파일을 올려주세요</p>
        <input type="submit" />
      </form>
    </div>
  );
};

export default UploadBox;
