import React from 'react'
import{Container , Row , Col}from 'react-bootstrap';

function Footer() {
  return (
    <div className="footer">
    
    <br />
    <h2>Questions? Call 000-000-000-0000</h2>

<Row className='foot'>
         <Col className="foot_col mb-1" >
            <a className="p-0.3" href="#">FAQ</a>
            <a className="p-0.3" href="#">Investor Relations</a>
            <a className="p-0.3" href="#">Privacy</a>
            <a className="p-0.3" href="#">Speed Test</a>
         </Col>
          <Col className="foot_col" >
            <a className="p-0.3" href="#">Help Centre</a>
            <a className="p-0.3" href="#">Jobs</a>
            <a className="p-0.3" href="#">Cookie Preferences</a>
            <a className="p-0.3" href="#">Legal Notices</a>
       </Col>
       <Col className="foot_col" >
            <a className="p-0.3" href="#">Account</a>
            <a className="p-0.3" href="#">Ways to Watch</a>
            <a className="p-0.3" href="#">Corporate Information</a>
            <a className="p-0.3" href="#">Only on Netflix</a>
        </Col>
        <Col className="foot_col" >
            <a className="p-0.3" href="#">Media Centre</a>
            <a className="p-0.3" href="#">Terms of Use</a>
            <a className="p-0.3" href="#">Contact Us</a>
        </Col>
    </Row>

    <button className="lang-btn">
 <img src="src/pho/logo.png" alt="down arrow" className='nav__logo' /></button>

    <p className="copyright-text">Netflix India</p>
</div>
  )
}

export default Footer;
