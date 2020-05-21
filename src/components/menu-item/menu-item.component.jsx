import React from 'react';

const MenuItem = ({title, imageUrl, linkUrl}) => (    
    <div className="menu-item">
        <div className="content">
            <h1 className="title">{title}</h1>
            <p className="subtitle">Buy Now</p>
        </div>
    </div>
);

export default MenuItem;