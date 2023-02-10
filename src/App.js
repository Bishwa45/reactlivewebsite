import './App.css';
import Navbar from './components/Navbar';
import TextForms from './components/TextForms';
import Alert from './components/Alert';

//import About from './components/About';
import React, {useState} from 'react';
//import {
  //BrowserRouter as Router,
  //Routes,
  //Route,
  //Link
 //from "react-router-dom";

function App() {

const [mode, setMode] = useState('light');//whether dark mode is enable or not
const [alert, setAlert] = useState('null');//whether dark mode is enable or not

const showAlert = (message, type)=>{
setAlert({
  msg: message,
  type:type
})
setTimeout(()=>{
  setAlert(null);
},2000);

}


const togglemode =()=>{
  if(mode ==='light')
  {
  setMode ('dark');
  document.body.style.backgroundColor ='#042743'
  showAlert("Dark mode has been enabled","Sucess");
  document.title = "TextUtils-Dark Mode";
  }
  else{
    setMode ('light');
    document.body.style.backgroundColor ='white'
    showAlert("Light mode has been enabled","Sucess");
    document.title = "TextUtils-Light Mode";
  }
}



return (
  <>
<Navbar title = "TextUtils" mode = {mode} togglemode={togglemode}/>

<Alert alert = {alert}/>
<div className="container my-3">
{/*
<Routes>
    <Route exact path="/about" element={<About/>}>
          </Route>
          <Route exact path="/" 
          element={<TextForms showAlert={showAlert} heading ="Enter the text to analyze below" mode={mode}/>}>
          </Route>
        </Routes>
*/}
          <TextForms showAlert={showAlert} heading ="Enter the text to analyze below:" mode={mode}/>
          </div>
          </>
      // </Router> 
    
     
  );

}

export default App;
