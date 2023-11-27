//@ts-nocheck
import React from 'react';

interface QuizItemProps {
  quiz: QuizItemData;
  quizIndex: number;
  onPrev: () => void;
  onNext: () => void;
}

const QuizItem: React.FC<QuizItemProps> = ({ quiz, quizIndex, onNext, onPrev }) => {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="w-5/6 mx-auto">
        <h1 className="text-primary-blue-solid text-[30px] font-bold sm:text-[22px]">
          Q{quizIndex + 1}. {quiz.q}
        </h1>
        <ul className="list-none mt-6">
          {quiz.choices.map((choice, index) => (
            <li
              key={index}
              className="h-[70px] w-full border-2 border-primary-blue-solid rounded-xl my-2 px-5 flex items-center hover:bg-primary-blue"
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
            className="w-[80px] h-[50px] border-2 border-primary-blue-solid rounded-xl text-primary-blue-solid hover:bg-primary-blue"
          >
            Prev
          </button>
          <button
            onClick={onNext}
            className="w-[80px] h-[50px] border-2 border-primary-blue-solid rounded-xl text-primary-blue-solid hover:bg-primary-blue"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuizItem;
