import React ,{useState} from 'react';
import CustomButton from './CustomButton';
function SignUp() {
    const[userup,setUser] = useState('');
    const[emailup,setEmailUp] = useState('');
    const[passwordUp,setPasswordUP] = useState('');
    const[cpassword,setCPassword] = useState('');
    const onUserChangeHandle = e =>setUser(e.target.value);
    const onEmailUpChangeHandle = e =>setEmailUp(e.target.value);
    const onPasswordUpChange = e =>setPasswordUP(e.target.value);
    const onConfirmPasswordChange = e =>setCPassword(e.target.value);
    const OnSignUpSubmit = e =>{
        e.preventDefault();
         if(passwordUp!==cpassword){
         alert("password and confirm password not matched")
         return;
     }
    } 
    return (
        <div className="signupcontainer">
            <h1 className="signupheader">I DON'T HAVE AN ACCOUNT</h1>
            <span>PLEASE SIGN UP BY FILLING BELOW FORM</span>
            <form onSubmit={OnSignUpSubmit}>
             <div>
                 <label className="userup" htmlFor="labeluser" >UserName</label>
                 <input type="text" id="labeluser" value={userup} onChange={onUserChangeHandle} className="i usernameinput"/>
             </div>
             <div>
                 <label className="emailup" htmlFor="labelemailup">Email</label>
                 <input type="email" id="labelemail" value={emailup} onChange={onEmailUpChangeHandle} className="i emailup"/>
             </div>
             <div>
                 <label className="passwordup" htmlFor="labelpwd">Password</label>
                 <input type="password" id="labelpwd" value={passwordUp} onChange={onPasswordUpChange} className="i pwdinput"/>
             </div>
             <div>
                 <label className="conpwdup" htmlFor="labelcpwd">Confirm Password</label>
                 <input type="password" id="labelcpwd" value={cpassword} onChange={onConfirmPasswordChange} className="i cpwdinput"/>
             </div>
             <CustomButton value="signup" type="submit">SIGNUP</CustomButton>
            </form>
        </div>
    )
}

export default SignUp
