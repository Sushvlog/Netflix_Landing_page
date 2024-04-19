import React from 'react'
import{Container , Row , Col}from 'react-bootstrap';

function Watch() {
  return (
    <div>
  
     
  <Container>
  <br />
    <Row>
        <Col xs={6}> 
        <br />
        <br />
        <h3>Watch everywhere</h3>
          <p> Stream unlimited movies and TV shows on your <br /> phone, tablet, laptop, and TV.</p>         </Col>
        <Col xs={6}>  <img src="./watch.png" alt="feature-3" width="50%"/>
</Col>
    </Row>
    </Container>   
     
          
 {/* <div className='enj  mx-4'>
  <div className='enj_right mx-5'>
  <div className=' enj_left text-white '>
  <br />
  <br />
  <br />
  <h3>Watch everywhere</h3>
          <p> Stream unlimited movies and TV shows on your <br /> phone, tablet, laptop, and TV.</p>            
       
  </div>
  <img src="src/pho/watch.png" alt="feature-3" width="50%"/>

  </div>
</div> */}
</div>


  )
};

export default Watch;
