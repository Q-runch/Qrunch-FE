import React, { useState, ChangeEvent } from 'react';
import { useDispatch } from 'react-redux';
import { setText } from '@/reducer/textInput';

const TextInput = () => {
  const dispatch = useDispatch();
  const [inputText, setInputText] = useState('');

  const handleInputChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setInputText(e.target.value);
  };

  const handleSubmit = () => {
    if (inputText) {
      dispatch(setText(inputText));
    }
  };

  return (
    <div className="w-full h-screen flex items-center flex-col justify-center ">
      <textarea
        value={inputText}
        onChange={handleInputChange}
        placeholder="Enter text"
        className="resize-none w-5/6 text-primary-blue-solid mx-auto relative border-2 rounded-xl p-2 h-96 sm:h-72 bg-black "
      />
      <div className="mt-2 flex justify-end w-5/6 mx-auto">
        <button
          onClick={handleSubmit}
          className="border-2 border-primary-blue duration-500 cursor-pointer hover:bg-primary-blue-solid text-white px-4 py-2 sm:px-2 sm:py-1 rounded-xl"
        >
          요약문 만들기
        </button>
      </div>
    </div>
  );
};

export default TextInput;
