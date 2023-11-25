import React from 'react';
import { axiosInstance } from '@/axiosInstance';

import { quizData } from '@/constant/quiz';

const QuizItem = () => {
  const abc = async () => {
    const response = await axiosInstance.get('/summary');
    const data = await response.data;
    console.log('sdfsa', data);
  };

  const postQuiz = async () => {
    // const response = await axiosInstance.post('/quiz/cd17464f-c823-4c10-94d7-cfa6edf3a49d');
    const response = await fetch('https://sonkangjae.kro.kr/quiz/cd17464f-c823-4c10-94d7-cfa6edf3a49d');
    const data = await response.json();
    console.log('포스트', data);
  };

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
            <button
              onClick={postQuiz}
              className="w-[80px] h-[50px] border-2 border-primary-blue-solid rounded-xl text-primary-blue-solid hover:bg-primary-blue"
            >
              Prev
            </button>
            <button
              onClick={abc}
              className="w-[80px] h-[50px] border-2 border-primary-blue-solid rounded-xl text-primary-blue-solid hover:bg-primary-blue"
            >
              Nextssf
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default QuizItem;
