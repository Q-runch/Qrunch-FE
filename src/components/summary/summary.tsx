import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import QuizButton from '@/components/quiz/quizButton';
import Swal from 'sweetalert2';
import icons from '@/assets/icons/icon';
import Skeleton from '@/components/summary/skeleton';
import { getSummary } from '@/api/summary/summaryApi';
import { SummaryDTO } from '@/types/summary';

const ClipBoardIcon = icons.clipboard;

const SummarizeComponents = () => {
  const router = useRouter();
  const [summary, setSummary] = useState<SummaryDTO | null>(null);

  useEffect(() => {
    if (!router.isReady) return;

    const fetchData = async () => {
      const summaryData = await getSummary(router.query.id as string);
      setSummary(summaryData);
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
          <button onClick={copyToClipboard} className="mr-5" title="클립보드에 복사">
            <ClipBoardIcon size={22} />
          </button>

          <QuizButton id={summary.id} title="퀴즈 만들기" />
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
