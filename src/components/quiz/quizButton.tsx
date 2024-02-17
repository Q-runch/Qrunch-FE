import icons from '@/assets/icons/icon';
import { axiosInstance } from '@/axiosInstance';
import { useRouter } from 'next/router';
import React from 'react';

const QuizIcon = icons.quiz;

interface QuizButtonProps {
  id: string;
}

const QuizButton: React.FC<QuizButtonProps> = ({ id }) => {
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
    <button onClick={sendQuiz}>
      <QuizIcon size={20} />
    </button>
  );
};

export default QuizButton;
