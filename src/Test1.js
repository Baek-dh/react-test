import React, { useState } from 'react';

// 카운트 증가/감소
const Test1 = () => {
    
    const [count, setCount] = useState(0);

    return(
        <div>
            <button onClick={ () => {setCount(count - 1)} }>-</button>

            <span className="number">{count}</span>

            <button onClick={ () => {setCount(count + 1)} }>+</button>
        </div>
    );
}

export default Test1;