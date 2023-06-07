import React from 'react';
import './App.css';
import MovingText from './Components/MovingText.js';
import Navbar from './Components/Navbar';
import Carousel from './Components/Carousel';
import ChooseFromProducts from './Components/ChooseFromProducts';
import WhyPentad from './Components/WhyPentad';
import OurPlatforms from './Components/OurPlatforms';
import MemberBroker from './Components/MemberBroker ';
import RecentBlogs from './Components/RecentBlogs';
import Footer from './Components/Footer';


function App() {
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
  );
}

export default App;
