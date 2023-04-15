import React,{Fragment,useState} from 'react'
import "./Login.css"
import Header from "../layout/header/Header"
import {Link} from "react-router-dom"
import {Divider} from "antd"
import {FcGoogle} from "react-icons/fc"
import { Checkbox } from 'antd';

const Login = () => {
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
  return (
    <Fragment>
        <Header type={"register"}/>
        <div className="loginbtn1"><Link to={`/login`}><button>Create account</button></Link></div>
        <div className='loginlogo'>
            <img src="./images/sec7img1.png" alt="aboutlogo" />
        </div>

        <section className='loginpage'>
            <div className="logincontainer">
                <h3>Glad to see you!</h3>
                <p>Please enter details to continue</p>

                <form>
                    <div>
                        <label>Email</label>
                        <input type="text"
                        required
                        // placeholder='Email'
                        value={email}
                        onChange={(e)=>setEmail(e.target.value)}
                        />
                    </div>
                    <div>
                        <label>Password</label>
                        <input type="text"
                        required
                        // placeholder='Password'
                        value={password}
                        onChange={(e)=>setPassword(e.target.value)}
                        />
                    </div>
                    <div>
                        
                        <span><Checkbox>Remember me</Checkbox> </span>
                        <span>Forget password</span>
                    </div>
                    <div>
                        <input type="submit"
                        value="Login"
                        />
                    </div>
                </form>
                <div style={{width:"330px"}}>
                <Divider style={{borderColor:"var(--darkgray)"}}>
        <h2 style={{fontFamily:"Roboto",letterSpacing:"2px",fontSize:"14px"}}>OR</h2>
        </Divider>
                </div>
                

        <div className="logingoogle">
            <p>Login with Google</p>
            <p><FcGoogle/></p>
        </div>
        <div className="loginfacebook">
            <p>Login with Facebook</p>
            <p><img src="./images/logofacebook.png" alt="facebookimg" /></p>
        </div>
        <div className="loginapple">
            <p>Login with Apple</p>
            <p><img src="./images/logoapple.png" alt="appleimg" /></p>
        </div>
        <div>
            <p>
                <span>Don't have account?</span>
                <span>  Register now</span>
            </p>
        </div>


            </div>

        </section>
       
    </Fragment>
  )
}

export default Login