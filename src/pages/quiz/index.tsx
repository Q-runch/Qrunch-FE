import React from 'react';
import icons from '@/assets/icons/icon';
import { quizData } from '@/constant/quiz';

const Quiz = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      {quizData.map((quiz, index) => (
        <div key={index} className="w-5/6 mx-auto">
          <h1 className="text-primary-blue-solid text-[30px] font-bold">{quiz.question}</h1>
          <ul className="list-none mt-6">
            {quiz.options.map((option, optionIndex) => (
              <li
                key={optionIndex}
                className="h-[80px] w-full border-2 border-primary-blue-solid rounded-xl my-2 px-5 flex items-center hover:bg-primary-blue"
              >
                <span className="w-[45px] h-[45px] text-[24px] text-primary-blue-solid border-2 border-primary-blue-solid rounded-full flex items-center justify-center">
                  {optionIndex + 1}
                </span>
                <span className=" w-full text-primary-blue-solid whitespace-wrap ml-2">{option}</span>
              </li>
            ))}
          </ul>
          <div className="w-full flex justify-between mt-3">
            <button className="w-[80px] h-[50px] border-2 border-primary-blue-solid rounded-xl text-primary-blue-solid hover:bg-primary-blue">
              Prev
            </button>
            <button className="w-[80px] h-[50px] border-2 border-primary-blue-solid rounded-xl text-primary-blue-solid hover:bg-primary-blue">
              Next
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Quiz;
