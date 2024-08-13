import * as React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import Location from './Location';

const Layout = ({ children }) => {
    return (
      <div className="bg-navy min-h-screen">
        <Navbar />
        <Hero />
        <Location />
        {children}
      </div>
    );
  };

export default Layout