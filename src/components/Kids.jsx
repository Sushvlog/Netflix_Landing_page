import React from 'react'
import{Container , Row , Col }from 'react-bootstrap';

function Kids() {
  return (
    <div>
       

      <Container>
    <Row>
        <Col xs={6}>
        <img src="./child.png" alt="feature-1"/>

        </Col>
        <Col xs={6}> 
        <br />
        <br />
        <br /><h3>Create profiles for kids</h3>
    <p>Send children on adventures with their favourite <br /> characters in a space made just for them—free with <br />your membership.</p></Col>
    </Row>
    </Container>   
    </div>
    
  )
}

export default Kids;
