import React,{Fragment} from 'react'
import "./Newproduct.css"
import Sidebar from './Sidebar'
import Header from "../layout/header/Header"

const Newproduct = () => {
  return (
    <Fragment>
      <Header type={"product"}/>

        
        <Sidebar/>

        <section className='productpage'>
          <h4>Styles</h4>
          <div className="productcontainer">
            <div><img src="./images/productimg1.png" alt="img1" /></div>
            <div><img src="./images/productimg2.png" alt="img2" /></div>
            <div><img src="./images/productimg3.png" alt="img3" /></div>
            <div><img src="./images/productimg4.png" alt="img4" /></div>
            <div><img src="./images/productimg4.png" alt="img5" /></div>
            <div><img src="./images/productimg5.png" alt="img6" /></div>
          </div>
        </section>

    </Fragment>
  )
}

export default Newproduct