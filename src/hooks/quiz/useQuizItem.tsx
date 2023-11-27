import { useState, useEffect } from 'react';
import { axiosInstance } from '@/axiosInstance';
interface QuizItem {
  data: any;
  // Define the structure of your QuizItem data
}

export interface QuizItemData {
  data: QuizItem | null;
}

const useQuizItem = (quizId: any): QuizItemData => {
  const [data, setData] = useState<QuizItem | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://sonkangjae.kro.kr/summary/${quizId}`);
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
      }
    };

    fetchData();
  }, [quizId]); // Include quizId in the dependency array to trigger the effect when quizId changes

  return { data };
};

export default useQuizItem;
