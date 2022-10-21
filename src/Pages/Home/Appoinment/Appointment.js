import React from 'react';
import doctor from '../../../assets/images/doctor-small.png'
import appointment from '../../../assets/images/appointment.png'
const Appointment = () => {
    return (
       <section style={{
        background:`url(${appointment})`
       }}
        className='flex justify-center items-center  mt-10 border-r-8'>
        <div className='flex-1'>
            <img className='mt-[-100px]' src={doctor} alt="" />
        </div>
        <div className='flex-1'>
            <h3 className='text-xl text-secondary font-bold'>Appointment</h3>
            <br />
            <h2 className='text-3xl text-white'>Make an Appointment Today</h2>
            <br />
            <p className='text-white'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
            <br />
            <button className="btn btn-primary uppercase text-white font-bold bg-gradient-to-r from-secondary to-primary ... ">Get Started</button>

        </div>
       </section>
    );
};

export default Appointment;