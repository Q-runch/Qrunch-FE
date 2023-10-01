import React from 'react';
import icons from '@/assets/icons/icon';
import { quizData } from '@/constant/quiz';

const Quiz = () => {
  return (
    <div className="w-10/12 h-screen mx-auto flex items-center justify-center">
      {quizData.map((quiz, index) => (
        <div key={index}>
          <h1 className="text-primary-blue text-[40px]">{quiz.question}</h1>
          <ul className="list-none">
            {quiz.options.map((option, optionIndex) => (
              <li
                key={optionIndex}
                className="border-2 border-primary-blue-solid rounded-xl m-2 p-4 hover:bg-primary-blue"
              >
                {option}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Quiz;
