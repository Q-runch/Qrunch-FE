import React from 'react';
import icons from '@/assets/icons/icon';
import QuizItem from '@/components/quiz/QuizItem';
import { axiosInstance } from '@/axiosInstance';

const Quiz = (props: any) => {
  // console.log(props);
  return <QuizItem />;
};

export const getStaticProps = async () => {
  try {
    const response = await axiosInstance.get('/quiz/1');
    const data = await response.data;
    return {
      props: {
        quizDatas: data,
      },
    };
  } catch (err) {
    return {
      props: {
        error: 'error',
      },
    };
  }
};

export default Quiz;
