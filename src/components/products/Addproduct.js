import React,{Fragment} from 'react';
import "./Addproduct.css"
import Header from "../layout/header/Header"
import Sidebar from "./Sidebar"

const Addproduct = () => {
  return (
    <Fragment>
        <Header type={"product"}/>
        <Sidebar/>
        <section className='addproductpage'>
            <h4>Products</h4>

            <div className="addproductcontainer">
                <div>
                    <div><img src="./images/sidebarimg0.png" alt="addproduct1" /></div>
                    <h5>Add product</h5>
                </div>
                <div>
                    <div><img src="./images/productimg3.png" alt="addproduct2" /></div>
                    <h5>Product name</h5>
                </div>
                <div>
                    <div><img src="./images/productimg5.png" alt="addproduct3" /></div>
                    <h5>productname</h5>
                </div>
            </div>
        </section>
        
    </Fragment>
  )
}

export default Addproduct