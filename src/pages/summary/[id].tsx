// pages/summary/[id].tsx
import React from 'react';

import SummarizeComponents from '@/components/summary/summary';

const SummaryPage: React.FC = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center sm:w-screen md:w-screen lg:w-screen">
      <div className="w-2/3 h-4/5 text-primary-blue-solid  sm:h-[250px]  sm:border-0">
        <div className="border-2 border-primary-blue-solid">
          <SummarizeComponents />
        </div>
      </div>
    </div>
  );
};

export default SummaryPage;
