import React from 'react';
import logo from '../../img/logo.jpg'
import './Header.css';
// import { FaBeer } from 'react-icons/fa';
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faDumbbell} from '@fortawesome/free-solid-svg-icons'

const Header = () => {
    



    return (
        <nav className='header'>
            
            <FontAwesomeIcon className='icon' icon={faDumbbell}   size="lg" />
        <div>
     <h3>Today's Goal</h3>
         </div>       
        </nav>
    );
};

export default Header;