import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { axiosInstance } from '@/axiosInstance';
import QuizButton from '../quiz/quizButton';
import Swal from 'sweetalert2';
import icons from '@/assets/icons/icon';
import Skeleton from './skeleton';

const ClipBoardIcon = icons.clipboard;

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

  const copyToClipboard = () => {
    navigator.clipboard.writeText(summary?.summary || '');
    Swal.fire({
      position: 'top-end',
      html: '<p style="font-size: 14px;">요약문이 클립보드에 복사되었습니다.</p>',
      showConfirmButton: false,
      timer: 1500,
    });
  };

  if (!summary) {
    return <p>Loading...</p>;
  }

  return (
    <div className="w-full h-screen flex items-center flex-col justify-center ">
      <div className="w-5/6 text-primary-blue-solid mx-auto relative">
        <div className="flex justify-end mb-2">
          <button onClick={copyToClipboard} className="mr-5">
            <ClipBoardIcon size={22} />
          </button>

          <QuizButton id={summary.id} />
        </div>
        <div className="border-2 border-primary-blue-solid">
          <div
            className={`flex text-white text-xl sm:text-[10px] md:text-base lg:text-xl xl:text-2xl items-center text-center w-full h-[80vh] p-[70px] sm:p-2 sm:h-2/5 overflow-auto`}
          >
            {summary ? <p>{summary.summary}</p> : <Skeleton />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SummarizeComponents;
