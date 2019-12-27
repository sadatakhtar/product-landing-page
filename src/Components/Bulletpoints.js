import React from 'react';
import check from '../Components/check.svg';

function Bulletpoints(){
    return (
        <div>
            <article>
            <p>
            <img src={check} alt="tick" width="50px" height="50px" />   
            <img src={check} alt="tick" width="50px" height="50px" />
            <img src={check} alt="tick" width="50px" height="50px" />
            </p>
            
            </article>
            <article>
            <p>
            
                <h2>Quality Materials</h2>
                <p>Our products are made with high quality materials.<br/>
                    This will increase the longevity of your purchase.</p>

                   
                <h2>Fast Shipping</h2>
                <p> We make sure you recieve your trombone as soon as we have
                     finished making it.<br/> 
                     We also provide free returns if you are not satisfied.</p>
            </p>
            </article>
            </div>
        
    )
}
export default Bulletpoints;