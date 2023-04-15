import React,{Fragment,useState} from 'react'
import "./Register.css"
import Header from '../layout/header/Header';
import { Link } from 'react-router-dom';


const Register = () => {

  const [firstname,setFirstname]=useState("")
  const [lastname,setLastname]=useState("")
  const [email,setEmail]=useState("")
  const [companyname,setCompanyname]=useState("")
  const [password,setPassword]=useState("")
  const [confirmpassword,setConfirmpassword]=useState("")
  return (
    <Fragment>
        <Header type={"register"}/>
        <div className="loginbtn1"><Link to={`/login`}><button>Create account</button></Link></div>
        <div className='loginlogo'>
            <img src="./images/sec7img1.png" alt="aboutlogo" />
        </div>
        <div className="registerpage">
        <section className='loginpage'>
            <div className="registercontainer">
                <h3>Glad to see you!</h3>
                <p>Please enter details to continue</p>

                <form>
                  <div>
                  <div>
                  <div>
                        <label>First name</label>
                        <input type="text"
                        required
                        value={firstname}
                        onChange={(e)=>setFirstname(e.target.value)}
                        />
                    </div>
                    <div>
                        <label>Last name</label>
                        <input type="text"
                        required
                        value={lastname}
                        onChange={(e)=>setLastname(e.target.value)}
                        />
                    </div>
                    <div>
                        <label>Password</label>
                        <input type="text"
                        required
                        value={password}
                        onChange={(e)=>setPassword(e.target.value)}
                        />
                    </div>
                  </div>

                  <div>
                  <div>
                        <label>Confirm password</label>
                        <input type="text"
                        required
                        value={confirmpassword}
                        onChange={(e)=>setConfirmpassword(e.target.value)}
                        />
                    </div>
                  <div>
                        <label>Email</label>
                        <input type="text"
                        required
                        value={email}
                        onChange={(e)=>setEmail(e.target.value)}
                        />
                    </div>
                    <div>
                        <label>Company name</label>
                        <input type="text"
                        required
                        value={companyname}
                        onChange={(e)=>setCompanyname(e.target.value)}
                        />
                    </div>
                   
                  </div>
                  </div>
                  
                    
                    
                    <div>
                        <input type="submit"
                        value="Login"
                        />
                    </div>
                </form>
                
                

        
        <div>
            <p>
                <span>Don't have account?</span>
                <span>  Register now</span>
            </p>
        </div>


            </div>

        </section>
        </div>
    </Fragment>
  )
}

export default Register