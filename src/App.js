
import './App.css';
//import Component1 from './Components/Component1';
//import Component2 from './Components/Component2';
//import Component3 from './Components/Component3';
import Login from './Components/Login';
import Notlogin from './Components/Notlogin';
import { useEffect, useState } from 'react';


function App() {

  const [count, setCount] = useState(0)
  //let isVisible = false;
  const [loggedIn, setloggedIn] = useState(false)

  const handleClick = () => {
    setCount(count+1)
    
  }

  useEffect(() => {
    alert("Your count is increased")
  }, []);
  // let loggedIn =true;
  return (
    <>
      {/* <>
      <Component1/>
      </> */}
      
      {loggedIn ? <Login/> : <Notlogin loggedIn={loggedIn} setloggedIn={setloggedIn}/>}

        <>
        <h1>{count}</h1>
          <button onClick={handleClick}>Count</button>
        </>
    </>
  );
}
export default App;
