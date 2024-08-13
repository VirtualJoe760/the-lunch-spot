import * as React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import Location from './Location';
import Footer from './Footer';
import ParallaxSection from './ParallaxSection';

const Layout = ({ children }) => {
    return (
      <div className="bg-navy min-h-screen">
        <Navbar />
        <Hero />
        <Location />
        {/* <ParallaxSection /> */}
        <Footer />
        
        {children}
      </div>
    );
  };

export default Layout