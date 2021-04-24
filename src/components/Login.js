import React,{ useState } from 'react';
import auth from '../firebase';
import '../App.css';

const Login = ({setSession}) =>{

const [Username,setUsername] = useState(''); //studentID
const [password,setPassword]  = useState(''); //password

const handleLogin = async () => {
     try{
        const response= await auth.signInWithEmailAndPassword(Username,password);

        const { user } = response;
        
            setSession({
            isLoggedIn:true,
            currentUser:user
      });

     }catch(error){
         setSession({
             isLoggedIn:false,
             currentUser:null,
             errorMessage:error.Message
         })
     }

    };
   
    const handleUsername = Event =>{
       setUsername(Event.target.value);
    }//studentID
    const handlePassword = Event =>{
        setPassword(Event.target.value);
    }//password


    return(
    <div  >
        
       
        <center>
        <div className="Box" > 
            <header class="pleaseinputtext" >Please input your passport account name and your Password 
            /กรุณากรอกบัญชี PSU Passport และรหัสผ่าน</header><br></br>
       
            <input type="Email" placeholder = "PSU Passport Account Name" class="holder"  onChange={handleUsername}/> 
           <p></p>
            <input type="password"  placeholder = "Password" class="holder"  onChange={handlePassword}/> <br></br><br></br>

            <button type = "button" class="button:hover" class="button" onClick={handleLogin} >Login </button>
        </div>
        </center>
    
        </div>
    )
}

export default Login;