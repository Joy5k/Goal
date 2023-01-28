import React from 'react';
import './Questions.css'
const Questions = () => {
    return (
        <div className='questions'>
            <h2>How does React Work?
            </h2>
            <p><b>Answer:</b> ReactJS divides the UI into isolated reusable pieces of code known as components. React components work similarly to JavaScript functions as they accept arbitrary inputs called properties or props. It's possible to have as many components as necessary without cluttering your code.</p>
            <h2>What's the difference between Props and State?</h2>
            <p><b>Answer:</b><p><b>PROPS</b></p>  1.
                Props can be used with state and functional components. <br /> 2.Props are read-only.
                <p><b>STATE</b> </p>
                1.State can be used only with the state components/class component (Before 16.0). <br />
                2.	State is both read and write.
            </p>

            <h2>What are works useEffect without data load?</h2>
            <p><b>Answer:</b>The useEffect Hook allows you to perform side effects in your components.examples of side effects are: directly updating the DOM, and timers. useEffect accepts two arguments. The second argument is optional.</p>
        </div>
    );
};

export default Questions;