import React from 'react';
import clock from '../../../assets/icons/clock.svg'
import phone from '../../../assets/icons/phone.svg'
import marker from '../../../assets/icons/marker.svg'


const Info = () => {
    return (
        <div class="grid grid-cols-1 lg:grid-cols-3 grid-flow-col gap-5 px-12">
            <div className="card lg:card-side bg-base-100 shadow-xl bg-gradient-to-r from-secondary to-primary ... ">
                <figure className='pl-5'><img src={clock} alt="Album" /></figure>
                <div className="card-body text-white">
                    <h2 className="card-title">Opening Hours</h2>
                    <p>Click the button to listen on Spotiwhy app.</p>
                    
                </div>
            </div>
            <div className="card lg:card-side bg-base-100 shadow-xl bg-accent ">
                <figure className='pl-5'><img src={marker} alt="Album" /></figure>
                <div className="card-body text-white">
                    <h2 className="card-title">Our Locations</h2>
                    <p>Click the button to listen on Spotiwhy app.</p>
                    
                </div>
            </div>
            <div className="card lg:card-side bg-base-100 shadow-xl bg-gradient-to-r from-secondary to-primary ... ">
                <figure className='pl-5'><img src={phone} alt="Album" /></figure>
                <div className="card-body text-white">
                    <h2 className="card-title">Contact US</h2>
                    <p>Click the button to listen on Spotiwhy app.</p>
                    
                </div>
            </div>
           
        </div>
    );
};

export default Info;