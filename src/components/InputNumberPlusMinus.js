import React, { useState } from 'react';

const InputNumberPlusMinus = () => {
    const [num, setNum] = useState(0);
    const [input, setInput] = useState(0);
    return (
        <div>
            <h1>{num}</h1>
            <input type="number" onChange={e => {
                setInput(e.target.value);
            }}></input>&nbsp;
            <button className="plus" onClick={() =>{
                setNum(num + Number(input));
            }}>+</button>&nbsp;
            <button className="minus" onClick={() => {
                setNum(num - input);
            }}>-</button>
        </div>
    );
};

export default InputNumberPlusMinus;