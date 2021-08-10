import React from 'react';
import Navbar from './Navbar';
import '../styles/global.css'


const Layout = ({children}) => {
    return (
        <div className="layout">
            <Navbar/>

            <div className="content">
                { children }
            </div>

            <div className="footer">
                <p>Copyright 2021 all rights reserved.</p>
            </div>
        </div>
    );
};

export default Layout;