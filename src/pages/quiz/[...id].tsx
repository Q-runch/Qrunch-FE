import React, { useEffect } from 'react';
import { useRouter } from 'next/router';

import useQuizItem, { QuizItemData } from '@/hooks/quiz/useQuizItem';

interface QuizParamsProps {}

const QuizParams: React.FC<QuizParamsProps> = () => {
  
  const router = useRouter()
  const quizId = String(router.query.id);
 
  const { data:result, loading } = useQuizItem(quizId);
  
  if(result){
      //@ts-ignore
      console.log(result.data.quizList)
  }

  return (
    <>
    {loading?<>로딩중</>:<> <div className='bg-white'>
      params
      <h1>아</h1>
      <h1>DD</h1>
      <h1>파</h1>
      <h1>가</h1>
      <h1></h1>
    </div></>}
   
    </>
  );
};

export default QuizParams;
