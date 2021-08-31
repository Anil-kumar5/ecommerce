import React from 'react'
import CustomButton from './CustomButton';
import './SignInSignUp.css'
import SignUp from './SignUp';
function SignInSignUp({history,match,location}) {
    console.log(location)
    const[email,setEmail] = React.useState('');
    const[password,setPassword] = React.useState('');
    const onEmailChangeHandle = e =>{
        setEmail(e.target.value)
    }
    const onPasswordHandleChange = e =>{
        setPassword(e.target.value)
    }
    const onSubmitHandler = e =>{
        e.preventDefault();
    }
    return (
        <>
        <div className="signinsignup">
        <div className="signincontainer">
         <h1 className="signinheader">I ALREADY HAVE AN ACCOUNT</h1>
         <span>PLEASE SIGN IN WITH EMAIL AND PASSWORD</span>
          <form onSubmit={onSubmitHandler}>
         <div className="emaildiv">   
         <label htmlFor="email" className={`labelemail`}>EMAIL</label>
         <input type="email" value={email} onChange={onEmailChangeHandle} id="email" className="emailinput"/>
         </div>  
         <div>
         <label htmlFor="password" className="labelpassword">PASSWORD</label>
         <input type="password" value={password} onChange={onPasswordHandleChange} id="password" className="passwordinput"/>
         </div>
         <CustomButton type="submit" onClick={()=>history.push('/collections')}>signin</CustomButton>
         </form>     
        </div>
        <SignUp/>
        </div>
        </>
    )
}

export default SignInSignUp
