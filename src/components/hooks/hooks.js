import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
 
function LifecycleDemo() {
  useEffect(() => {
    console.log('render!');
    // 如果要实现 componentWillUnmount，
    return function cleanup () {
        console.log('unmounting...');
    }
  },[])  
  return "I'm a lifecycle demo";
}

const HookTest = () => {
      const [random, setRandom] = useState(Math.random());
      const reRender = () => setRandom(Math.random());
     
      return (
        <>
          <button onClick={reRender}>Re-render</button>
          <LifecycleDemo/>
        </>
      );
}

export default HookTest
    
