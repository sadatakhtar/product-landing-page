import React from 'react';
import check from '../Components/check.svg';
import wool from '../Components/wool.svg';
import Staticpage from '../Components/Staticpage';

function Form(){
    return (
        
        <form action="https://www.freecodecamp.org/email-submit" id="form">
            <h2>Product Landing Page</h2>
            
            <br/>
            <label>
                <input type="email" name="email" placeholder="E-mail" required />
            </label>
            <br/><br/>
            <button type="submit" >Get Started</button>
            <div>
            <p>
        <img src={wool} alt="wool" width="70px" height="70px" />   
       
        </p>
        
       
        
        <p>
        
            <h3>Quality Materials</h3>
            <p>Our products are made with high quality materials.<br/>
                This will increase the longevity of your purchase.</p>

               
            <h3>Fast Shipping</h3>
            <p> We make sure you recieve your products as soon as we have
                 finialised the purchase.<br/> 
                 We also provide free returns if you are not satisfied.</p>
        </p>

            </div>
        </form>
       
        
        
       
        
    )
}
export default Form;