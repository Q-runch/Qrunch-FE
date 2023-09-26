import React from 'react';

const Quiz = () => {
  // 퀴즈 항목 데이터 배열
  const quizItems = [1, 2, 3, 4];

  return (
    <div className="w-full h-screen bg-dark-gray">
      <h1 className="text-primary-blue text-[40px] md:text-[20px]">퀴즈zz</h1>
      {quizItems.map((item, index) => (
        <div key={index} className="border-2 border-primary-blue rounded-xl m-2 w-[900px] h-[120px]">
          {item}
        </div>
      ))}
    </div>
  );
};

export default Quiz;
