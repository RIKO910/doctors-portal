import React from 'react';
import Card from '../Card/Card';
import Info from '../Info/Info';
import './Service.css'

const Service = () => {
    return (
        <div className=''>        
            <h3 className='our'>OUR SERVICES</h3>
            <h1 className='service'>Services We Provide</h1>

            <Card></Card>
            <Info></Info>
        </div>
    );
};

export default Service;