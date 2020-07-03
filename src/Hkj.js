import React,{Component} from 'react';
import './Dash.css';
class Hkj extends Component{
    render()
    {
        return(
            <div>
            <div className="sidebar bg-light">          
  <ul className="nav navbar-nav widd hell bg-light  d-inline-block pos">
      <br/>
    <li className="nav-item">
      <a className="nav-link text-dark text-center" href="#">Notifications</a>
    </li>
    <li className="nav-item">
      <a className="nav-link text-dark text-center" href="#">Suggestions</a>
    </li>
    <li className="nav-item">
      <a className="nav-link text-dark text-center" href="#">Interview Rating</a>
    </li>
    <li className="nav-item">
      <a className="nav-link text-dark text-center" href="#">Find Members</a>
    </li>
    <br/><br/><br/>
      <li>   
        <button className="Light" size="large">LineUps</button>
        <br />
        <br />
        <button className="light" size="large">Previously Attempted</button>
      </li>
  </ul>
              </div>
              </div>
           
        
        )
    }
}
export default Hkj;