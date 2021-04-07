import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import Login from './components/Login';
import './App.css';
import auth from './firebase';


document.body.style.background = "#e6f7ff"; //พื้นหลังทั้งเว็บ
function App() {
  const [session, setSession] = useState({
    isLoggedIn: false,
    cerrentUser: null,
    errorMessage: null,
  });
  /* useEffect(() => {
     const handleAuth = auth.onAuthStateChanged(user =>{
       if(user){
         setSession({
          isLoggedIn: true,
          cerrentUser: null,
          errorMessage: null,
         });
       }
     });
   
     return() => {
       handleAuth();
     }
   }, [])*/
  
   
  return (
  <div className="App"  >
    
        {session.isLoggedIn ? (
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.js</code> and save to reload.
                 </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer">
              Learn React
                    </a>
          </header>) :
          (<Login setSession={setSession} />)

        }


      </div>
   

  );

}

export default App;
