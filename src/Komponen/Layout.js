import React from 'react';
import Navbar from './NavBar';
import Footer from './Footer';

const Layout = ({ konten }) => {
    return (       
        <div>
          <Navbar />
          <main>
            { konten }
          </main>
          <Footer />
        </div>     
    );
};

export default Layout;