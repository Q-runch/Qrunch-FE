//@ts-nocheck
import { axiosInstance } from '@/axiosInstance';
import React from 'react';
import Swal from 'sweetalert2';

interface QuizItemProps {
  quiz: QuizItemData;
  quizIndex: number;
  quizMaxIndex: number;
  selectIndex: number;
  onSelectIndex: () => void;
  onPrev: () => void;
  onNext: () => void;
}

const QuizItem: React.FC<QuizItemProps> = ({
  quiz,
  quizIndex,
  onNext,
  onPrev,
  quizMaxIndex,
  selectIndex,
  onSelectIndex,
}) => {
  const SubmitAnswer = async (userAnswer: number) => {
    onSelectIndex(userAnswer);

    const response = await axiosInstance.post(`quiz/submit/${quiz.id}`, { answer: userAnswer });
    const data = response.data;
    Swal.fire({
      title: data.message,
      confirmButtonText: '확인',
    });
  };

  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="w-5/6 mx-auto">
        <h1 className="text-primary-blue-solid text-[26px] font-bold animate-headerFadeIn sm:text-[22px]">
          Q{quizIndex + 1}. {quiz.q}
        </h1>
        <ul className="list-none mt-6">
          {quiz.choices.map((choice, index) => (
            <li
              key={index + 1}
              className="h-[70px] w-full border-2 border-primary-blue-solid rounded-xl my-2 px-5 flex items-center hover:bg-primary-blue animate-fadeIn"
              onClick={() => SubmitAnswer(index + 1)}
            >
              <span className="w-[35px] h-[35px] text-[26px] text-primary-blue-solid  border-primary-blue-solid flex items-center justify-center sm:text-[20px]">
                {index + 1}.
              </span>
              <span className="w-full text-primary-blue-solid whitespace-wrap ml-2 sm:text-[15px]">{choice}</span>
            </li>
          ))}
        </ul>
        <div className="w-full flex justify-between mt-3">
          <button
            onClick={onPrev}
            disabled={quizIndex === 0}
            className={`w-[80px] h-[50px] border-2 border-primary-blue-solid rounded-xl text-primary-blue-solid hover:bg-primary-blue ${
              quizIndex === 0 ? 'opacity-50 cursor-not-allowed' : ''
            }`}
          >
            Prev
          </button>
          <button
            onClick={onNext}
            disabled={quizIndex === quizMaxIndex}
            className={`w-[80px] h-[50px] border-2 border-primary-blue-solid rounded-xl text-primary-blue-solid hover:bg-primary-blue ${
              quizIndex === quizMaxIndex ? 'opacity-50 cursor-not-allowed' : ''
            }`}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuizItem;
