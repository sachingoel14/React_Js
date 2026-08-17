import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'




function App() {
 
let [color , setcolor]=useState("pink");
  return (
        <div className=' w-full h-screen duration-100' style={{backgroundColor :color}}>
          <div className='flex flex-wrap justify-center bottom-12 insert-x-0 '>
            <div className=' px-2'>
              <button onClick={()=>{
              setcolor("red")
            }}>RED</button>
            </div>
            
                         <div className=' px-2'>
              <button onClick={()=>{
              setcolor("green")
            }}>GREEN</button>
            </div>
                         <div className=' px-2'>
              <button onClick={()=>{
              setcolor("orange")
            }}>ORANGE</button>
            </div>
                        <div className=' px-2'>
              <button onClick={()=>{
              setcolor("blue")
            }}>BLUE</button>
            </div>
                        <div className=' px-2'>
              <button onClick={()=>{
              setcolor("violet")
            }}>VIOLET</button>
            </div>
                        <div className=' px-2'>
              <button onClick={()=>{
              setcolor("gray")
            }}>GRAY</button>
            </div>
          </div>
        </div>
  );
}
export default App;

