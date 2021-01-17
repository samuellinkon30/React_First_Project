import React from 'react';
import './banner.css';

const Bannerbanner = ({ banners }) =>(
    <div className="banner-img">
        <img src={banners.link} />
    </div>
);

export default Bannerbanner;