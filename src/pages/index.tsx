import UploadBox from '@/components/PDF/dragDrop';
import TextInput from '@/components/Text/text';
import { RootState } from '@/store/store';
import React from 'react';
import { useSelector } from 'react-redux';

const Home = function () {
  const activeButtonId = useSelector((state: RootState) => state.buttonToggle.activeButtonId);

  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="w-5/6 mx-auto">
        {activeButtonId === 1 && <UploadBox />}

        {activeButtonId === 2 && <TextInput />}
      </div>
    </div>
  );
};

export default Home;
