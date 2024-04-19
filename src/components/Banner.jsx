import React from 'react'

function Banner() {
  return (
    <div className="s1">
      <h2>Unlimited movies, TV shows and more</h2>
<h5 class="text-3">Watch anywhere. Cancel anytime.</h5>
<p>Ready to watch? Enter your email to create or restart your membership.</p>

<input type="email" name="email" id="email" placeholder="Enter your Email" class=" mx-10 bg-indigo py-2 pl-14 rounded-lg text-white"/> 
<button className="btn btn-danger text-white px-5 py-2  m-1">Get Started </button>

    </div>
    
 
  )
};

export default Banner;
