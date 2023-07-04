import React, { useState } from 'react';

const Test2 = () => {
    const [text, setText] = useState('변경 버튼 클릭시 이 부분이 변경됩니다');
    const [input, setInput] = useState('');

    return(
        <div>
            <h1>{text}</h1>
            
            <input onChange={ e => {setInput(e.target.value)} }/>

            <button onClick={ () => {setText(input)} }>변경</button>
            <button onClick={ () => {setText('')} }>삭제</button>
        </div>
    )
}

export default Test2;