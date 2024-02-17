import React from 'react';

const QuizSkeleton = () => {
  const numberOfChoices = 5; // Change this if you want a different number of choices

  return (
    <>
      <div className="w-full h-screen flex items-center justify-center">
        <div className="w-5/6 mx-auto">
          <h1 className="text-primary-blue-solid text-[30px] font-bold sm:text-[22px]">
            <span className="animate-pulse bg-slate-200">loading...</span>
          </h1>

          <ul className="list-none mt-6">
            {[...Array(numberOfChoices)].map((_, index) => (
              <li
                key={index}
                className="h-[80px] w-full border-2 border-primary-blue-solid rounded-xl my-2 px-5 flex items-center hover:bg-primary-blue"
              >
                <span className="w-[35px] h-[35px] text-[26px] text-primary-blue-solid  border-primary-blue-solid rounded-full flex items-center justify-center">
                  {index + 1}.
                </span>
                <span className="w-full text-primary-blue-solid whitespace-wrap ml-2">
                  <span className="loading loading-text loading-lg"></span>
                </span>
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
      </div>
    </>
  );
};

export default QuizSkeleton;
