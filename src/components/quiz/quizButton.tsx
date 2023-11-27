import { axiosInstance } from '@/axiosInstance';
import axios from 'axios';
import { useRouter } from 'next/router';
import React from 'react';

interface QuizButtonProps {
  id: string;
}

const QuizButton: React.FC<QuizButtonProps> = ({ id }) => {
  const router = useRouter();
  const sendQuiz = async () => {
    try {
      const response = await axios.post(`https://sonkangjae.kro.kr/quiz`, { summaryId: id });
      console.log(response);
      router.push(`/quiz/${id}`);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <button onClick={sendQuiz} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
      Quiz 만들기
    </button>
  );
};

export default QuizButton;
