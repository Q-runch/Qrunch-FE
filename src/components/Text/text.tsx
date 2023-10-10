import React, { useState, ChangeEvent } from 'react';
import { useDispatch } from 'react-redux';
import { setText } from '@/reducer/textInput'; // Import your Redux action

const TextInput = () => {
  const dispatch = useDispatch();
  const [inputText, setInputText] = useState('');

  const handleInputChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setInputText(e.target.value);
  };

  const handleSubmit = () => {
    // Process the text entered here so that it can be sent to the server.
    if (inputText) {
      dispatch(setText(inputText)); // Update state using Redux actions
    }
  };

  return (
    <div className="flex justify-center items-center w-full h-[80vh] sm:h-[30vh]">
      <div className="p-4 sm:p-8">
        <textarea
          value={inputText}
          onChange={handleInputChange}
          placeholder="Enter text"
          className="resize-none border-2 rounded-md p-2 w-full h-96 sm:h-72 bg-black text-white"
        />
        <button
          onClick={handleSubmit}
          className="mt-4 sm:mt-6 border-2 text-white px-4 py-2 rounded-md hover:bg-primary-blue-dark transition duration-300 ease-in-out"
        >
          Create a summary
        </button>
      </div>
    </div>
  );
};

export default TextInput;
