import React from 'react';
import './Carts.css'
const Carts = ({cart,clickedBtn}) => {
    // console.log(cart);
    const {name,img,time} =cart || {} 
    return (
        <div className='carts'>
            <img src={img} alt="" />
            <h3>Name:{name} </h3>
            <p>Time:{time} Minutes</p>
             <button onClick={()=>clickedBtn(cart.time )} className='btn-task'>Complete Task</button>
        </div>
    );
};

export default Carts;