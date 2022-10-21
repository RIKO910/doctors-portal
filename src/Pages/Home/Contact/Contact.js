import React from 'react';
import appointment from '../../../assets/images/appointment.png'

const Contact = () => {
    return (
        <section style={{
            background:`url(${appointment})`
           }}
            className='flex justify-center items-center  mt-10 border-r-8 App'>
           
            <div className='flex-1 my-11'>
                <h3 className='text-xl text-secondary font-bold'>Contact Us</h3>
                
                <h2 className='text-3xl text-white'>Stay connected with us</h2>
                <br />
                <form action="" className=''>
                <input className='py-0.5 m-1 w-80 rounded-md border-none input input-bordered' type="email" name="" id="" placeholder='Email Address' />
                <br />
                <input className=' m-2 w-80 rounded-md input input-bordered' type="text" placeholder='Subject' />
                <br />
                <input className='py-11 m-1 w-80 rounded-md input input-bordered' type="text" placeholder='Your message' />
                </form>
                <br />
                <button className="btn btn-primary uppercase  text-white font-bold bg-gradient-to-r from-secondary to-primary ... ">Submit</button>
            </div>
           </section>
    );
};

export default Contact;