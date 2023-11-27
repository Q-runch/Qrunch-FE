import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { axiosInstance } from '@/axiosInstance';

interface Summary {
  id: string;
  summary: string;
}

const SummarizeComponents = () => {
  const router = useRouter();
  const [summary, setSummary] = useState<Summary | null>(null);

  useEffect(() => {
    if (!router.isReady) return;

    const fetchData = async () => {
      try {
        const response = await axiosInstance.get(`summary/${router.query.id}`);
        setSummary(response.data.data.summary);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [router.isReady, router.query.id]);

  if (!summary) {
    return <p>Loading...</p>;
  }

  return (
    <div
      className={`flex text-white text-xl sm:text-[10px] md:text-base lg:text-xl xl:text-2xl items-center text-center w-full h-[80vh] p-[70px] sm:p-2 sm:h-2/5 overflow-auto`}
    >
      <p>{summary.summary}</p>
    </div>
  );
};

export default SummarizeComponents;
