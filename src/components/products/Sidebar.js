import React, { useState,Fragment } from 'react';
import { Switch } from 'antd';
import {MdRefresh, MdClose} from "react-icons/md"
import "./Sidebar.css"
import {TbMathGreater} from "react-icons/tb"
// import {RiChatUploadLine} from "react-icons/ri"

function Sidebar() {
  const [isExpanded, setIsExpanded] = useState(false);

  
  const onChange = (checked) => {
    setIsExpanded(!isExpanded);
  };

  return (
    <Fragment>
       
        
        
      

      <div className="sidebarmenu">
      <div className='sidebarlogo'>
            <img src="./images/sec7img1.png" alt="aboutlogo" />
        </div>
      <div>
            <div>
            <Switch defaultChecked={false} onChange={onChange} />
            <span>Advance Mode</span>
            </div>
            <div>
                <span>
                    <button><MdRefresh/>Reset</button>
                </span>
                <span><MdClose/></span>
            </div>
        
        </div>
      <div className="defaultmenu">
      <div>
            <p>Generate </p><span>1 credit</span>
          </div>
          <div><p>Product</p> <TbMathGreater/></div>
          <div>
            <p>Text Prompt</p>
            <button>Random</button>
          </div>
          <input type="text" 
          placeholder='(optional)'
          />
          <div>
            <p>Negative Prompt</p>
            <button>Random</button>
          </div>
          <input type="text" 
          placeholder='(optional)'
          />
              </div>
      {isExpanded && (
        <div className="advancemenu">
          <div>
            <p>Style</p>
            <TbMathGreater/>
          </div>
          <div>
            <img src="./images/sidebarimg5.png" alt="advance-feature" />
          </div>

          <div>
            <p>Image Guidance</p>
            <TbMathGreater/>

          </div>
        
          <div><p><img src="./images/sidebarimg0.png" alt="img0" />
          </p><span>Upload image</span></div>
          <div>
            <div>
              <div><img src='./images/sidebarimg1.png' alt='sidebarimg1'/></div> 
            <p>Images</p> </div>
            <span><TbMathGreater/></span>
          </div>
          <div>
            <div><div><img src="./images/sidebarimg2.png" alt="sidebarimg2" /></div>
            <p>Resolution</p>
             </div>
            <span><TbMathGreater/></span>
          </div>
          <div>
            <div><div><img src="./images/sidebarimg3.png" alt="sidebarimg3" /></div> 
            <p>Aspect ratio</p>
            </div>
            <span><TbMathGreater/></span>
          </div>

          <div>
          <input type="text"
          placeholder='Random seed'
          />
          </div>
          
          
          
        </div>
      )}
       
      
    </div>
   
      
        
    </Fragment>
    
   
    
  );
}


export default Sidebar;
