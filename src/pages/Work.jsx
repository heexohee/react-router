import React from 'react';
import { useParams } from 'react-router-dom';
import { data } from '../shared/data';

function Work() {
    const params = useParams();
    // console.log('params', params);

    // 어떤 todo인지 찾아보기

    const foundData = data.find((item)=>{

        // console.log('item.id', item.id)
        // console.log('prams.id', params.id)
        // console.log('-----------')
        return item.id === parseInt(params.id); 
        // == 동등연산자
        // === 타입연산자-> 타입까지 맞아야 출력됨.

       
})

console.log('foundData', foundData);
  return <div>
    <h3>할일 : {foundData.todo} </h3>
  </div>;
  
}

export default Work;