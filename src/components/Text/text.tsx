import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setText } from '@/reducer/textInput'; // Import your Redux action

const TextInput = () => {
  const dispatch = useDispatch();
  const [inputText, setInputText] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputText(event.target.value);
  };

  const handleSubmit = () => {
    // Dispatch the action to update the text in the Redux store
    dispatch(setText(inputText));

    // Here, you can send `inputText` to your server using an API call or any other method.
    // ...

    // Clear the input field
    setInputText('');
  };

  return (
    <div className="flex flex-col justify-center items-center ">
      <textarea
        className="flex justify-center bg-black items-center w-full h-[79.5vh]"
        placeholder="Enter Text"
        value={inputText}
        onChange={handleChange}
      />
      <button className="cursor-pointer" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
};

export default TextInput;
