import React, { useState } from 'react';

const NumberPlusMinus = () => {
    const [num, setNum] = useState(0);
    return (
        <div>
            <button className="minus" onClick={() => {
                setNum(num - 1);
            }}>-</button>&nbsp;
            <span>{num}</span>&nbsp;
            <button className="plus" onClick={() =>{
                setNum(num + 1);
            }}>+</button>
        </div>
    );
};

export default NumberPlusMinus;