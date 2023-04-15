import React,{Fragment,useState} from 'react'
import "./Header.css"
import {routes} from "./constant"
import {Link} from "react-router-dom"
import {FaBars} from "react-icons/fa"
import {Navstate} from "../../context/Navprovider"

const Header = ({type}) => {
    const [open,setOpen]=useState(false);
    const {selected,setSelected,navcolor}=Navstate()
    

    const togglebtn=(e)=>{
        setOpen(!open)

    }
    const selecthandler=(e,route)=>{
      setSelected(route)

    }
    
  return (
    <Fragment>
        <div className="drawarbtn" onClick={togglebtn}><FaBars/></div>
        
        <div className={type==="home"?"homenavbar":type==="home"?"homenavbar":navcolor?"navcontainer active":"navcontainer"}>
            {/* <div className="logo">LOGO</div> */}
            <div className={type==="register"?"registernavbar":type==="product"?"registernavbar productnavbar":"navbar"}>
                {routes.map((route)=>{

                    
                    return(
                        <div key={route.name} className={selected===route?"selected":"navbarmain"} >
                            <Link to={route.link} style={{textDecoration:"none"}} 
                            
                            onClick={(e)=>selecthandler(e,route)}
                            >{route.name}</Link>
                        </div>
                    )
                })}

            </div>
            <div className={type==="product"?"productlogin":"noneproduct"}>
                <div>
                    <p>sabtain haider</p>
                    <p>200 credit</p>
                </div>
                <div >
                    <img src="./images/sec3img1.png" alt="sabtain haider" />
                </div>
            </div>
           
        </div>

        
        <div className={open?"backdrop":"backdrop closebackdrop"} onClick={togglebtn}></div>

        <div className= {open?"burgermenu":"burgermenu closemenu"}>
          {/* <div className='emaildiv'><p>khurram@gmail.com</p></div> */}
          <div className='burgerdivall'>
          {routes.map((route)=>{
                
                return(
                    <div key={route.name} className="singleburgerelement" onClick={togglebtn}>
                        <Link to={route.link} style={{textDecoration:"none"}}>{route.name}</Link>
                    </div>
                )
            })}
          </div>
            
        </div>
    </Fragment>
  )
}

export default Header