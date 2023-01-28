import React from 'react';
import Carts from '../Cart/Carts';
import { useEffect } from 'react';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Main.css'
import { logRoles } from '@testing-library/react';
import Questions from '../Questions/Questions';

const Main = () => {
    //all carts
    const [carts, setCarts] = useState([]);
    //cart Time
    const [time, setTime] = useState(0);
    //Break Time
    const [restTime, setRestTime]=useState(0)
    useEffect(() => {
        fetch('faked.json')
            .then(res => res.json())
            .then(data => setCarts(data))
    }, []);
// show the cart time in progress bar
    const clickedBtn = (times) => {
        let timeSet=time;
        const newTime = timeSet + times;
        timeSet=newTime
        setTime(timeSet);
    }
useEffect(() => {
    const items = JSON.parse(localStorage.getItem('times'));
  if (items) {
    setRestTime(items);
  }
}, []);
// break time
    const breakTime = (Time) => {  
        localStorage.setItem('times',Time)        
        setRestTime(Time); 
    }  
        const notify = () => toast("Congratulations !! you have done today's goal");     
    return (     
        <div className='cart-activity-container'>
            <div className='cart-container'>
             {
    carts.map(cart=><Carts key={cart.id} cart={cart} clickedBtn={clickedBtn}></Carts>)
                }
                    {/* <Questions></Questions> */}
            </div>
        

       {/* progress section here */}
            <div className='progress'>
                <h2>Name:Mehedi Hasan</h2>
                <h4><span>Age:20</span> <span>Height:5.6</span></h4>
                <h4>Profession:Web Developer(learning)</h4>
                <h4>Education Qualification:BSS(<span>studying</span>)</h4>
                <h4>Address: Patuakhali, Barishal</h4>
                <h3 className='break-text'>Add to Break</h3>
                <p className='btn-container'>
                    <button onClick={()=>breakTime(1)}>1m</button>
                    <button onClick={()=>breakTime(5)}>5m</button>
                    <button onClick={()=>breakTime(10)}>10m</button>
                    <button onClick={()=>breakTime(15)}>15m</button>
                    <button onClick={()=>breakTime(30)}>30m</button>
                </p>
                <h4 className='break-text'>Your Task result</h4>
                <p className='break-text'>Practice Time:{time}</p>
                <p className='break-text'>Break Time:{restTime}</p>
                <button className='btn-activity' onClick={notify}>Activity Completed</button>
                <ToastContainer />
            </div>
        </div> 
            
    );
};

export default Main;