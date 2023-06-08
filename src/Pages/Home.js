import React from 'react'
import MovingText from '../Components/MovingText/MovingText.js';
import Navbar from '../Components/Navbar/Navbar.js'
import Carousel from '../Components/Carousel/Carousel.js'
import ChooseFromProducts from '../Components/ChooseFromProducts/ChooseFromProducts.js'
import WhyPentad from '../Components/WhyPentad/WhyPentad.js'
import OurPlatforms from '../Components/OurPlatforms/OurPlatforms.js'
import MemberBroker from '../Components/MemberBroker/MemberBroker .js'
import RecentBlogs from '../Components/RecentBlogs/RecentBlogs.js'
import Footer from '../Components/Footer/Footer.js'


function Home() {
  return (
    <div>
        <MovingText/>
        <Navbar/>
        <Carousel/>
        <ChooseFromProducts/>
        <WhyPentad/>
        <OurPlatforms/>
        <MemberBroker/>
        <RecentBlogs/>
        <Footer/>
    </div>
  )
}

export default Home
