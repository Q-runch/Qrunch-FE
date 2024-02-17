import { axiosInstance } from '@/axiosInstance';

export const uploadPdf = async (files: Array<File>) => {
  const formData = new FormData();
  files.forEach((file) => {
    formData.append('file', file);
  });
  try {
    const response = await axiosInstance.post(`summary/pdf`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data.data.summarize.id;
  } catch (error) {
    console.error(error);
    return null;
  }
};
