import React,{Fragment,useState} from 'react';
import "./Home.css"
import { Carousel } from 'antd';
import {Link} from "react-router-dom"
import Header from '../layout/header/Header';


const Home = () => {

  const [email,setEmail]=useState("");

  const emailsubmithandler=(e)=>{
    e.preventDefault();
  }


  const contentStyle = {
    height: '60vh',
    color: '#fffff',
    textAlign: 'center',  
  };
  return (
    <Fragment>
      <Header/>
      <div className="homebtn1"><Link to={`/login`}><button>Start FREE</button></Link></div>
      <section className='homesec1' style={{width:"100vw",height:"860px"}}>
      <div>
          <div>
            <img src="./images/whatsappimage.png" alt="whatsappimage" />
            
          </div>
          <div><Carousel autoplay>
    <div>
      <div style={contentStyle} className='homecarousel'>
      <h3>Convert Your Simple Image Into More Attractive With AI</h3> 
      <p>Discover all the ways to get appealing images with more attractive background</p>
      <p><Link to={`/login`}>Start FREE</Link> <button>Learn More</button></p>
      </div>
    </div>
    <div>
      <div style={contentStyle} className='homecarousel'>
      <h3>Convert Your Simple Image Into More Attractive With AI</h3> 
      <p>Discover all the ways to gt appealing images with more attractive background</p>
      <p><Link>Start FREE</Link> <button>Learn More</button></p>
      </div>
    </div>
    <div>
      <div style={contentStyle} className='homecarousel'>
      <h3>Convert Your Simple Image Into More Attractive With AI</h3> 
      <p>Discover all the ways to gt appealing images with more attractive background</p>
      <p><Link>Start FREE</Link> <button>Learn More</button></p>
      </div>
    </div>
    <div>
      <div style={contentStyle} className='homecarousel'>
      <h3>Convert Your Simple Image Into More Attractive With AI</h3> 
      <p>Discover all the ways to gt appealing images with more attractive background</p>
      <p><Link>Start FREE</Link> <button>Learn More</button></p>
      </div>
    </div>
    
  </Carousel></div>
          </div>
      </section>
      
      <section className='homesec2'>
        <div>
          <h4>Our simple, no hassle process</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna facilisis consequat odio tristique vestibulum congue. Orci, et venenatis, purus elementum leo.</p>

          <div className="homesec2div">
            <div>
              <div>1</div>
              <h5>Login fro free</h5>
              <p>Lorem ipsum dolor sit amet consectetur. Sem et fermentum</p>
            </div>
            <div>
            <div>2</div>
              <h5>Drag your image</h5>
              <p>Lorem ipsum dolor sit amet consectetur. Sem et fermentum</p>
            </div>
            <div>
            <div>3</div>
              <h5>Get your desired output</h5>
              <p>Lorem ipsum dolor sit amet consectetur. Sem et fermentum</p>
            </div>
          </div>
        </div>

        <div>
          <h5>How it works</h5>
          <p>See tutorial</p>
          <div><img src="./images/sec2img3.png" alt="sec2img" /></div>
          
        </div>
      </section>

      <section className='homesec3'>
        <h4>Have A Look Over Our Previous Work</h4>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna facilisis consequat odio tristique vestibulum congue. Orci, et venenatis, purus elementum leo.
        </p>
        <div className="homesec3container">
          <div><img src="./images/sec3img1.png" alt="img1" /></div>
          <div><img src="./images/sec3img2.png" alt="img2" /></div>
          <div><img src="./images/sec3img3.png" alt="img3" /></div>
          <div><img src="./images/sec3img4.png" alt="img4" /></div>
          <div><img src="./images/sec3img5.png" alt="img5" /></div>
          <div><img src="./images/sec3img6.png" alt="img6" /></div>
          <div><img src="./images/sec3img7.png" alt="img7" /></div>
          <div><img src="./images/sec3img8.png" alt="img8" /></div>
        </div>
        <div><button>See more</button></div>
      </section>

      <section className='homesec4'>
        <h4>Features we are providing you</h4>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna facilisis consequat odio tristique vestibulum congue. Orci.
        </p>
        <div className="sec4container">
          <div>
            <div>
              <div>1</div>
              <div>
                <h5>Magic cleaner</h5>
                <p>Lorem ipsum dolor sit amet consectetur ipsum dolor sit amet.</p>
              </div>
            </div>

            <div>
              <div>2</div>
              <div>
                <h5>Ai background remover</h5>
                <p>Lorem ipsum dolor sit amet consectetur ipsum dolor sit amet.</p>
              </div>
            </div>

            <div>
              <div>3</div>
              <div>
                <h5>Scene constructor</h5>
                <p>Lorem ipsum dolor sit amet consectetur ipsum dolor sit amet.</p>
              </div>
            </div>

          </div>
          <div>
            <div><img src="./images/sec4img1.png" alt="sec4img1" /></div>
            <div>
              <p><img src="./images/arrowleft.png" alt="arrowleft" /></p>
              <p><img src='./images/arrowright.png' alt='arrowright'/></p>
            </div>
            
          </div>
        </div>
      </section>

      <section className='homesec5'>
        <div>
          <h4>Subscribe to Newsletter</h4>
          <p>Enter your e-mail address to subscribe and get updates.</p>
          <form onSubmit={emailsubmithandler}
          className='homeform'
          >
            <div>
            <input type="email"
            required
            placeholder='youmail@address.com'
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            />
             <input type="submit"
             value={"submit"}
             className='homeformsubmitbutton'
             />            
            </div>
            
          </form>
        </div>
      </section>

      <section className='homesec6'>
        <div>
          <img src="./images/sec6img1.png" alt="sec6img" />
        </div>
      </section>

      <section className='footersec7'>
        <div>
          <div>
            <img src="./images/sec7img1.png" alt="footerlogo" />
          </div>
          <p>
          Lorem ipsum dolor sit amet consectetur. Urna congue scelerisque sollicitudin consectetur a sed.
          </p>
        </div>

        <table>
        <thead>
          <tr>
          <th>Services</th>
          <th>Company</th>
          <th>Resources</th>
          <th>Follow Us</th>
          </tr>
          
        </thead>
        <tbody>

        <tr>
          <td>lorem ipsum text</td>
          <td>lorem ipsum text</td>
          <td>Blog </td>
          <td>Twitter</td>
        </tr>
        <tr>
          <td>lorem ipsum text</td>
          <td>lorem ipsum text</td>
          <td>Blog </td>
          <td>Twitter</td>
        </tr>
        <tr>
          <td>lorem ipsum text</td>
          <td>lorem ipsum text</td>
          <td>Blog </td>
          <td>Twitter</td>
        </tr>
        <tr>
          <td>lorem ipsum text</td>
          <td>lorem ipsum text</td>
          <td>Blog </td>
          <td>Twitter</td>
        </tr>
        </tbody>
        </table>

        
      </section>

      <section className='homesec8'>
        <div>
          Copyright by 2022 POP, All Rights Reserved
        </div>
        <div>
          Privacy Policy | Terms of Services
        </div>
        <div>
          <img src="./images/sec8img1.png" alt="facebook" />
          <img src="./images/sec8img2.png" alt="Twitter" />
          <img src="./images/sec8img3.png" alt="Linkdinn" />
          <img src="./images/sec8img4.png" alt="upword" />
        </div>
      </section>
   
    </Fragment>
  )
}

export default Home