import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface Summary {
  id: string;
  summary: string;
}

const SummarizeComponents = () => {
  const [summaries, setSummaries] = useState<Summary[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://sonkangjae.kro.kr/summary');
        setSummaries(response.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  if (!summaries.length) {
    return <p>Loading...</p>;
  }

  return (
    <div className="text-white">
      {summaries.map((summary, index) => (
        <p key={index}>{summary.summary}</p>
      ))}
    </div>
  );
};

export default SummarizeComponents;
