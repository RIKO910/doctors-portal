import React from 'react';

const Service = ({ service }) => {
const{name,slots}= service;
    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl">
            <div className="card-body ">
                <h2 className="card-title text-secondary ">{name}</h2>
                <p className='justify-center'>
                    {
                        slots.length ?
                        <span className=' '>{slots[0]} <br /> {slots[1]}</span>
                        :
                        <span className='text-red-500 '>No slot available</span>
                    }
                </p>
                <p className=''>{slots.length} {slots.length>1 ? 'spaces' : 'space'} available</p>
                <div className="card-actions justify-center">
                    <button disabled={slots.length===0} className="btn btn-primary uppercase text-white font-bold bg-gradient-to-r from-secondary to-primary ...">Book Appointment</button>
                </div>
            </div>
        </div>
    );
};

export default Service;