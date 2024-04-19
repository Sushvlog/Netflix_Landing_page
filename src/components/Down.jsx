import React from 'react'
import{Container , Row , Col}from 'react-bootstrap';

function Down() {
  return (
    <div>

  
     <Container>
    <Row>
        <Col xs={6}> <img src="./download.png" alt="download"/>
</Col>
        <Col xs={6}> 
        <br /><h3>Download your shows <br />to watch offline</h3>
          <p >Save your favourites easily and always have <br /> something to watch.</p>
          </Col>
    </Row>
    </Container>   
    </div>
  )
}

export default Down
