import { useState, useEffect } from 'react';

interface QuizItem {
  data: any;
  // Define the structure of your QuizItem data
}

export interface QuizItemData {
  data: QuizItem | null;
  loading: boolean;
}

const useQuizItem = (quizId: any): QuizItemData => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<QuizItem | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(`https://sonkangjae.kro.kr/summary/${quizId}`);
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [quizId]); // Include quizId in the dependency array to trigger the effect when quizId changes

  return { data, loading };
};

export default useQuizItem;
