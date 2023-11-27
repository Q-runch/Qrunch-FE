import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import useQuizItem from '@/hooks/quiz/useQuizItem';
import QuizSkeleton from '@/components/quiz/QuizSkeleton';
import QuizItem from '@/components/quiz/QuizItem';

interface QuizParamsProps {}

const QuizParams: React.FC<QuizParamsProps> = () => {
  const router = useRouter();
  const summaryId = String(router.query.id);
  const { data: fetchedData } = useQuizItem(summaryId);
  const [QuizData, setQuizData] = useState([]);
  const [quizIndex, setQuizIndex] = useState(0);

  useEffect(() => {
    if (fetchedData) {
      setQuizData(fetchedData.data.quizList);
    }
  }, [fetchedData]);

  const handlePrev = () => {
    setQuizIndex((prevIndex) => Math.max(0, prevIndex - 1));
  };

  const handleNext = () => {
    setQuizIndex((prevIndex) => Math.min(prevIndex + 1, QuizData.length - 1));
  };

  return (
    <>
      {QuizData.length === 0 ? (
        <QuizSkeleton />
      ) : (
        <QuizItem quiz={QuizData[quizIndex]} quizIndex={quizIndex} onPrev={handlePrev} onNext={handleNext} />
      )}
    </>
  );
};

export default QuizParams;
