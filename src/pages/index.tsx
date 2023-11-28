import UploadBox from '@/components/PDF/dragDrop';
import TextInput from '@/components/Text/text';
import { RootState } from '@/store/store';
import React from 'react';
import { useSelector } from 'react-redux';

const Home = function () {
  const activeButtonId = useSelector((state: RootState) => state.buttonToggle.activeButtonId);

  return (
    <div className="w-full h-screen flex items-center justify-center sm:w-screen md:w-screen lg:w-screen">
      <div className="w-2/3 h-4/5 text-primary-blue-solid  sm:h-[250px]  sm:border-0 d">
        {activeButtonId === 1 && <UploadBox />}

        {activeButtonId === 2 && <TextInput />}
      </div>
    </div>
  );
};

export default Home;
