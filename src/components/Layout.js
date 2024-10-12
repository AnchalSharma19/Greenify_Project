// Layout.js
import React from 'react';
import Header from './Header';
import Footernew from './Footernew';

const Layout = ({ children }) => {
    return (
        <div>
            <Header />
            {children}  {/* This is where the main content will be rendered */}
            <Footernew />
        </div>
    );
};

export default Layout;