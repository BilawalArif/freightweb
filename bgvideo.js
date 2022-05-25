import React, { Component } from 'react';
import bg from './images/bg1.mp4';

import './bgvid.css';
function Bgvideo () {
    return (
        <div>
            <div className='row'>
                <div className='col-md-12' id='bg2'>
                   

                </div>

            </div>
        <div className='row'>
            <div className='row-md-12'>
                
            <video autoPlay loop muted id='bg1'>
                <source src={bg} type='video/mp4'></source>
            </video>
           
            </div>
          
              

        </div>
        
        </div>
     );
}

export default Bgvideo ;