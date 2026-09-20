import React from 'react'
import NewArrivals from '../components/NewArrivals'
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import Newsletter from '../components/Newsletter';
import tapeTshirtImg from '../assets/tapeTshirt.png';
import skinnyJeansImg from '../assets/skinnyJeans.png';
import checkeredShirtImg from '../assets/checkeredShirt.png';
import stripedTshirtImg from '../assets/stripedTshirt.png';
function NewArr() {
  return (
    <div>
        <NavBar />
        <NewArrivals images={{
        tapeTshirt: tapeTshirtImg,
        skinnyJeans: skinnyJeansImg,
        checkeredShirt: checkeredShirtImg,
        stripedTshirt: stripedTshirtImg,
      }}/>
        <Newsletter/>
        <Footer/>
    </div>
  )
}

export default NewArr