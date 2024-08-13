import * as React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import Location from './Location';
import Footer from './Footer';

const Layout = ({ children }) => {
    return (
      <div className="bg-navy min-h-screen">
        <Navbar />
        <Hero />
        <Location />
        <Footer />
        {children}
      </div>
    );
  };

export default Layout