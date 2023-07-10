import React, { useState } from 'react';

const NoLessThen0 = () => {
    const [num, setNum] = useState(0);

    return(
        <div>
            <button onClick={ ()=>{
                if(num > 0){
                    setNum(num - 1);
                }else{
                    alert('0 미만으로 내려갈 수 없습니다')
                }

            }}>-</button>

            <span>{num}</span>

            <button onClick={ ()=>{
                setNum(num + 1);
            }}>+</button>
        </div>
    );

}

export default NoLessThen0;

