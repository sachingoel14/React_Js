import { useState } from 'react'
function App() {
  const [count, setCount] = useState(0)

  function add(){
      if(count < 20){
        setCount(count+1);
      }else{
        alert("you can not enter grater than 20 value")
      }
  }

  function sub(){
    if(count > 0){
        setCount(count-1);
    }
    else{
      alert("you can not lower to zero");
    }
  }

  return (
    <>
      <h1>Octro Counter</h1>
      <br />
      <button onClick={add}>Add  {count}</button>
      <br />
      <button onClick={sub}>Remove</button>
    </>
  )
}

export default App
