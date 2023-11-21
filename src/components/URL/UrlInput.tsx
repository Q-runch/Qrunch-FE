import React from 'react';
import icons from '@/assets/icons/icon';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '@/hooks/reduxHook';
import { RootState } from '@/store/store';
import { setUrl } from '@/reducer/urlInput';

const Search = icons.search;

const UrlInput: React.FC = () => {
  const dispatch = useDispatch();
  const url = useAppSelector((state: RootState) => state.url.url);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newUrl = e.target.value;
    dispatch(setUrl(newUrl));
  };

  const handleSubmit = () => {
    if (url) {
      console.log(`Sending URL to server: ${url}`);
    }
  };

  return (
    <div className="flex justify-center items-center w-full h-[80vh] sm:h-[30vh]">
      <div className="w-full sm:max-w-[400px] border-2 bg-black rounded-md p-2 flex">
        <input
          type="text"
          value={url}
          onChange={handleInputChange}
          placeholder="URL을 입력하세요"
          className="flex-grow bg-transparent outline-none"
        />
        <button onClick={handleSubmit} className="ml-2 cursor-pointer">
          <div className="flex items-center">
            <Search size={32} />
          </div>
        </button>
      </div>
    </div>
  );
};

export default UrlInput;
