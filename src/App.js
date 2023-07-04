import './App.css';
import Test1 from './Test1';
import Test2 from './Test2';

function App() {
    return(
        <>
            {/* 카운트 증가/감소 */}
            <Test1/>

            <hr/>

            {/* h1 내용 변경/삭제하기 */}
            <Test2/>
        </>
    );
}

export default App;
