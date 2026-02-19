
import './App.css';
//import Component1 from './Components/Component1';
//import Component2 from './Components/Component2';
//import Component3 from './Components/Component3';
import Login from './Components/Login';
import Notlogin from './Components/Notlogin';
import { useEffect, useReducer, useState } from 'react';


function App() {

  // const [count, setCount] = useState(0)
  //let isVisible = false;
  const [loggedIn, setloggedIn] = useState(false)

  // const handleIncrement = () => {
  //   setCount(count+1)
    
  // }

  // const handleDecrement = () => {
  //   setCount(count-1)
  // }

  const initialState = {
    count:0,
    toggle:false,
    data:""
  }
const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
    return {count: state.count+1};
    case "DECREMENT":
      return {count:state.count - 1};
    case "TOGGLE":
      return {toggle:!state.toggle};
    case "DATA":
      return{data:state.data="Test"};
    default:
      return state
  }
}

  const[state, dispatch]=useReducer(reducer, initialState)
  const handleIncrement = ()=> {
    dispatch({ type: "INCREMENT"});
    
  }
  const handleDecrement = ()=> {
    dispatch({type: "DECREMENT"});
  }

  // useEffect(() => {
  //   alert("Your count is increased")
  // }, []);
  // let loggedIn =true;

  console.log(state.count)
  console.log(state.toggle)
  return (
    <>
      {/* <>
      <Component1/>
      </> */}
      
      {loggedIn ? <Login/> : <Notlogin loggedIn={loggedIn} setloggedIn={setloggedIn}/>}

        <>
        <h1>{state.count}</h1>
          {/* <button onClick={handleIncrement}>+</button> */}
          <button onClick={handleDecrement}>-</button>
          <button onClick={handleIncrement}>+</button>
          <button onClick={() => dispatch({type: "TOGGLE"})}>Toggle</button>
          <h1>{state.data}</h1>
          <button onClick={() => dispatch({type: "DATA"})}>Get DATA</button>
        </> 
    </>
  );
}
export default App;
