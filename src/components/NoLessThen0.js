import React, { useState } from 'react';

const NoLessThen0 = () => {
    const [num, setNum] = useState(0);
    return (
        <div>
            <button className="minus" onClick={() => {
                if(num > 0){
                    setNum(num - 1);
                } else{
                    alert('0미만으로 내려갈 수 없습니다.');
                }
            }}>-</button>&nbsp;
            <span>{num}</span>&nbsp;
            <button className="plus" onClick={() =>{
                setNum(num + 1);
            }}>+</button>
        </div>
    );
};

export default NoLessThen0;