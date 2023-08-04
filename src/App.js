import './App.css';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import React, {useState} from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import TextForms from './components/TextForms';


function App() {
  // eslint-disable-next-line
  const[mode,setMode]=useState('light');
  const[alert,setAlert]=useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  }
//dark theme
  const toggleMode = () => {
    if(mode==='light'){
      setMode("dark");
      document.body.style.backgroundColor='#042743'
      document.body.style.color='white'
      
    }
    else{
      setMode("light");
      document.body.style.backgroundColor='white'
      document.body.style.color='black'
    }
  }
  return (
    <Router>
   <Navbar title="TEXTUTILS" mode={mode} toggleMode={toggleMode}/>
   <Alert alert={alert}/>
<div className='container mt-5'>
    <Routes>
    <Route exact path="/Textutils-React/" element={<TextForms showAlert={showAlert} heading="Enter the data in below box - Upper Case, Lower Case" mode={mode} toggleMode={toggleMode}></TextForms>
   }>
    </Route>
    </Routes>
</div>
   </Router>
  );
}

export default App;
