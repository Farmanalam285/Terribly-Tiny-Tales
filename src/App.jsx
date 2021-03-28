import React from 'react';
import './index.css';
import handleClick from './HandleClick';
function helper()
{
    return false;
}
function App()
{
    return (
    <>
        <div className="signupSection">
            <div className="info">
                <h2>Terribly Tiny Tales</h2>
                <i className="icon ion-ios-ionic-outline" aria-hidden="true"></i>
            </div>
            <form onSubmit={helper} action="#" className="signupForm" name="signupform">  
                <h2>Assignment</h2>
                <ul className="noBullet">
                    <li>
                        <input type="text" className="inputFields" id="username" placeholder="Enter-Values Here" required/>
                    </li>
                    <li id="center-btn">
                        <input type='submit' id="join-btn" name="join" alt="Join" value="Submit" onClick={handleClick}/>
                    </li>
                </ul>
                
            </form>
            
        </div>
        <div id="answer">
                    
        </div>
    </>);
} 
export default App;