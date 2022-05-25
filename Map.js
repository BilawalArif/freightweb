import React, { Component } from 'react';
import './locate.css'
function Map() {
    return (
      <div id='locatediv'>
        <div className="map_section">
        <iframe
          src="https://maps.google.com/maps?q=375%20j1%20johar%20town%20lahore&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=&amp;output=embed" 
          width="1500"
          height="450"
          frameborder="0"
          style={{ border: 0 }}
          allowfullscreen=""
          aria-hidden="false"
          tabindex="0"
        ></iframe>
      </div>
      <div id='tdiv'>
<p id='t2'>Locate Us!</p>
      </div>
      </div>
      
    );
  }
  
  export default Map;