import icons from '@/assets/icons/icon';
import { axiosInstance } from '@/axiosInstance';
import { QuizButtonDTO } from '@/types/quizButton';
import { useRouter } from 'next/router';
import React from 'react';

const QuizIcon = icons.quiz;

const QuizButton: React.FC<QuizButtonDTO> = ({ id, title }) => {
  const router = useRouter();
  const sendQuiz = async () => {
    try {
      const response = await axiosInstance.post(`quiz`, { summaryId: id });
      console.log(response);
      router.push(`/quiz/${id}`);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <button onClick={sendQuiz} title={title}>
      <QuizIcon size={20} />
    </button>
  );
};

export default QuizButton;
