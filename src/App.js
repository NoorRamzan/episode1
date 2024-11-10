
import React,{Component}  from 'react'
import "./App.css";
import About from './About';
import Navbar from './Navbar';
 import Textform from './Textform';
import Message from './component/Message';
import Greet from './component/Greet';
 import Counter from './component/Counter';
import FunctionClick from './component/FunctionClick';
import ClassClick from './component/ClassClick';
import EventBind from './component/EventBind';
import ParentComponent from './component/ParentComponent';
import UserGreeting from './component/UserGreeting';
import NameList from './component/NameList';
import Form from './component/Form';
import LifeCycleA from './component/LifeCycleA';
function App() {
 
  return (
   <div className='App'>
    {/* <LifeCycleA/> */}
    <Form/>
    <NameList/>
    {/* <UserGreeting/> */}
    {/* <ParentComponent/> */}
    {/* <EventBind/> */}
    {/* <FunctionClick/>
    <ClassClick/> */}
  {/* <Counter/> */}


   {/* <Greet/>  */}
   <Message name="zara" heroName="batman" />
  <p>this is children</p><Message/>
  <Message name="noor" heroName="superman"/>
   <button >click</button>
<Message name="ayesha" heroName="wonderman"/> 
 <Navbar/>  
    <Navbar title="texttiles2 "homeabout="about text"/>   
   <div className='container my-3'>   
      <Textform heading="Enter the valid text" />     
      </div> 
   <About/> 
     
 </div>
    );
  }

  
 

export default App
    
  
  

