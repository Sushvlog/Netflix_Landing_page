import React, { Children } from 'react';
import Navbar from '../components/Navbar';
import Banner from '../components/Banner';
import Enjoy from '../components/Enjoy';
import Kids from '../components/Kids';
import Down from '../components/Down';
import Watch from '../components/Watch';
import Faq from '../components/Faq';
import Footer from '../components/Footer';

function Home() {
  return (
    <div>
<Navbar />
<Banner />
<Enjoy />
<Down />
<Watch />
<Kids />
<br />
<Faq />
<br />
<Footer />
      </div>
  )
};

export default Home;
