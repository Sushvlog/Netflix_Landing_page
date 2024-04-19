import React from 'react'
import{Container , Row , Col}from 'react-bootstrap';

function Faq() {
  return (
    <div>
       


<div className="faq">
                <h2>Frequently Asked Questions</h2>

                <ul className="que">
                    <li>
                        <input type="radio" name="que" id="first" />
                        <label htmlFor="first">What is Netflix?</label>
                        <div className="content">
                            <p>Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices.<br /><br />
                            You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!</p>
                        </div>
                    </li>
                    <li>
                        <input type="radio" name="que" id="second" />
                        <label htmlFor="second">How much does Netflix cost?</label>
                        <div className="content">
                            <p>Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹ 149 to ₹ 649 a month. No extra costs, no contracts.</p>
                        </div>
                    </li>
                    <li>
                        <input type="radio" name="que" id="third" />
                        <label htmlFor="third">Where can I watch?</label>
                        <div className="content">
                            <p>Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.<br /><br />
                            You can also download your favourite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.</p>
                        </div>
                    </li>
                    <li>
                        <input type="radio" name="que" id="fourth" />
                        <label htmlFor="fourth">How do I cancel?</label>
                        <div className="content">
                            <p>Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.</p>
                        </div>
                    </li>
                    </ul>

    </div>
    <h5 className='text-center'>Ready to watch? Enter your email to create or restart your membership.</h5>

     <h3 className='text-center'>Frequently Asked Questions</h3>
     <Row className='text-center'>
        <Col>
        <input type="email" name="email" id="email" placeholder="Enter your Email" class=" mx-10 bg-indigo py-2 pl-14 rounded-lg text-white"/> 

       
        <button className="btn btn-danger text-white px-5 py-2  m-1">Get Started </button> 

        </Col>
     </Row>
    </div>
  )
}

export default Faq
