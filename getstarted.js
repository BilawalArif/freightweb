import React, { Component } from 'react';
import img4 from './images/img4.jpg';
import {Link} from 'react-router-dom';
import './getstarted.css'
import { Route } from 'react-router-dom';

class Getstarted extends Component {
    
    render() { 
        return (

<div id='gs'>

<Link to='/signup'><button id='b1'>Get Started</button></Link>

<h1 id='t1'>Welcome To Dispatch Experts Group LLC</h1>



</div>



        );
    }
}
 
export default Getstarted;