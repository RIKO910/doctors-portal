import React from 'react';
import Appointment from '../Appoinment/Appointment';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';

import Info from '../Info/Info';
import Service from '../Services/Service/Service';
import Testimonial from '../Testimonial/Testimonial';

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Info></Info>
      <Service></Service>
      <Appointment></Appointment>
      <Testimonial></Testimonial>
      <Contact></Contact>
    </div>
      
    );
};

export default Home;