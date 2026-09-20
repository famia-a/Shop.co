import React from 'react'
import NavBar from '../components/NavBar.jsx'
import Hero from '../components/Hero.jsx'
import BrowseByStyle  from "../components/BrowseByStyle.jsx";
import Testimonials  from "../components/Testimonials";
import Newsletter from '../components/Newsletter.jsx'
import Footer from '../components/Footer.jsx'
import NewArrivals from '../components/NewArrivals'
import tapeTshirtImg from '../assets/tapeTshirt.png';
import skinnyJeansImg from '../assets/skinnyJeans.png';
import checkeredShirtImg from '../assets/checkeredShirt.png';
import stripedTshirtImg from '../assets/stripedTshirt.png';
function SHOP() {
  return (
    <div>
      <NavBar/>
      <Hero/>
      <NewArrivals
      images={{
        tapeTshirt: tapeTshirtImg,
        skinnyJeans: skinnyJeansImg,
        checkeredShirt: checkeredShirtImg,
        stripedTshirt: stripedTshirtImg,
      }}
    />
      <BrowseByStyle/>
      <Testimonials/>
      <Newsletter/>
      <Footer/>
    </div>
  )
}

export default SHOP