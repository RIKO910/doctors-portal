import React from 'react';
import chair from '../../../assets/images/chair.png';
import background from '..//../../assets/images/bg.png';
const Banner = () => {
    return (
        <div className="hero min-h-screen px-12 " style={{ backgroundImage:` url(${ background })` }} >
      <div className="hero-content h-355 w-500 flex-col lg:flex-row-reverse">
        <img src={chair} className="max-w-sm rounded-lg shadow-2xl" />
        <div>
          <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
          <p className="py-6">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since the</p>
          <button className="btn btn-primary uppercase text-white font-bold bg-gradient-to-r from-secondary to-primary ... ">Get Started</button>
        </div>
      </div>
      </div >
    );
};

export default Banner;