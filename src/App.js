import { Container } from '@mui/material';
import { useState } from 'react';
import './App.css';


function App() {

  const [num,setNum] =useState(0);
  const [oldNum,setOldNum] =useState(0);
  const [operator,setOperator] =useState();

  function inputNum(e){
    var input=e.target.value
    if(num==0){
      setNum(input)
    }else{
      setNum(num+input)
    }
  }

  function clear(){
    setNum(0)
  }

  function percentage(){
    setNum(num/100)
  }

  function changeSign(){
    setNum(-1*num)
    // if(num>0){
    //   setNum(-num)
    // }else{
    //   setNum(Math.abs(num))
    // }
  }

  function operateHandler(e){
    let input=e.target.value;
    setOperator(input);
    setOldNum(num);
    setNum(0)
  }

  function calculate(){
    if(operator==="/"){
      setNum(parseFloat(oldNum)/parseFloat(num));
    }
    if(operator==="X"){
      setNum(parseFloat(oldNum)*parseFloat(num));
    }
    if(operator==="-"){
      setNum(parseFloat(oldNum)-parseFloat(num));
    }
    if(operator==="+"){
      setNum(parseFloat(oldNum)+parseFloat(num));
    }
  }

  return (
    <div>
      
      <Container maxWidth="xs" className='wrapper'>
        <h1 className='resultado'>{num}</h1>

        <button onClick={clear}>AC</button>
        <button onClick={changeSign}>+/-</button>
        <button onClick={percentage}>%</button>
        <button className='orange' onClick={operateHandler} value={"/"}>/</button>

        <button className='grey' onClick={inputNum} value={7}>7</button>
        <button className='grey' onClick={inputNum} value={8}>8</button>
        <button className='grey' onClick={inputNum} value={9}>9</button>
        <button className='orange' onClick={operateHandler} value={"X"}>X</button>

        <button className='grey' onClick={inputNum} value={4}>4</button>
        <button className='grey' onClick={inputNum} value={5}>5</button>
        <button className='grey' onClick={inputNum} value={6}>6</button>
        <button className='orange' onClick={operateHandler} value={"-"}>-</button>

        <button className='grey' onClick={inputNum} value={1}>1</button>
        <button className='grey' onClick={inputNum} value={2}>2</button>
        <button className='grey' onClick={inputNum} value={3}>3</button>
        <button className='orange' onClick={operateHandler} value={"+"}>+</button>

        <button className='grey'>0</button>
        <button style={{visibility:'hidden'}}></button>
        <button className='grey'>.</button>
        <button className='orange' onClick={calculate}>=</button>
        
      </Container>
    </div>
  );
}

export default App;

