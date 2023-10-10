import UploadBox from '@/components/PDF/dragDrop';
import TextInput from '@/components/Text/text';
import UrlInput from '@/components/URL/UrlInput';
import { RootState } from '@/store/store';
import React from 'react';
import { useSelector } from 'react-redux';

const Home = function () {
  const activeButtonId = useSelector((state: RootState) => state.buttonToggle.activeButtonId);

  return (
    <div className="w-full h-screen flex items-center justify-center sm:w-screen md:w-screen lg:w-screen">
      <div className="w-2/3 h-4/5 border-2 border-primary-blue-solid ">
        {activeButtonId === 1 && (
          <p className="text-primary-blue-solid ">
            <UploadBox />
          </p>
        )}
        {activeButtonId === 2 && (
          <p className="text-primary-blue-solid">
            <UrlInput />
          </p>
        )}
        {activeButtonId === 3 && (
          <p className="text-primary-blue-solid">
            <TextInput />
          </p>
        )}
      </div>
    </div>
  );
};

export default Home;
