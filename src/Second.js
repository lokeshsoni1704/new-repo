import React from 'react';
import './Second.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import GoogleButton from 'react-google-button';
import {TelegramIcon} from 'react-share';
import {Link} from 'react-router-dom';




const Second = () => {
    return ( <body>
    <div class='main'>

        <h1>Let's Sign Up</h1>
        <Form>
       
      <Form.Group controlId="formBasicFullname">
       <Form.Label>Full Name</Form.Label>
       <Form.Control type="fullname" placeholder="Enter Full Name" />
      </Form.Group>    
            
      <Form.Group controlId="formBasicEmail">
       <Form.Label>Email address</Form.Label>
       <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>

      <Form.Group controlId="formBasicTelegramid">
         <Form.Label>Telegram ID</Form.Label>
         <Form.Control type="telegramid" placeholder="Enter Telegram ID" />
        </Form.Group>

       <Form.Group controlId="formBasicUsername">
        <Form.Label>Username</Form.Label>
        <Form.Control type="username" placeholder="Enter Username" />
       </Form.Group>
  

        <Form.Group controlId="formBasicPassword">
         <Form.Label>Password</Form.Label>
         <Form.Control type="password" text-align='center'placeholder="Enter Password" />
        </Form.Group>

        <Form.Group controlId="formBasicCheckbox">
         <Form.Check type="checkbox" label="I agree to all the statements of Terms and Services" />
        </Form.Group>
        <div class='btn1'>
        <Button variant="primary" type="submit" >
            
         Get Started
        
         </Button>  
         </div>
         
     <h2>OR</h2>
          <div class="sbtn">
           <GoogleButton
           type="dark" // can be light or dark
           href='www.google.com/'
           target='blank'
               onClick={() => { console.log('Google button clicked') }}
           />
         <br>
        </br>
        <section class="telegbtn">
        <Button width='45' block target="blank" href="https://web.telegram.im/#/login?p=" >
        <TelegramIcon size={40} />  Sign in with Telegram
        </Button>
        </section>
        </div>
        </Form>







    </div>






</body>    )


} 
 export default Second;