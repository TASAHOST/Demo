import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PostClassComponenct from './componenct/PostClassComponenct'
import PostFunctionComponenct from './componenct/PostFunctionComponenct'
import Comment from './componenct/Comment'
import Stateinclass from './componenct/stateinclass'
import Stateinfunction from './componenct/Stateinfunction'
import Card from './componenct/Cardcomponenct'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <>
        <h1>React Demo</h1>

        <PostClassComponenct userId="tossapon_SE" 
        message="จะอ้วกแล้ว" >

        <Comment userId="Kong:"
          message="ตายละ"/>
          <Comment userId="kema:"
          message="ครับ"/>

          
          <Stateinclass />
          <Stateinfunction/> <p></p>
          <Card />  
          </PostClassComponenct>
       
      </>
      
    </>
  )
}

export default App;
