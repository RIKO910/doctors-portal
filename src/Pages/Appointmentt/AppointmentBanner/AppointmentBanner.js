import React, { useState } from 'react';
import chair from '../../../assets/images/chair.png'
import background from '../../../assets/images/bg.png'
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import BookingModal from '../BookingModal/BookingModal';

const AppointmentBanner = ({date,setDate}) => {

    return (
        <div className="hero min-h-screen px-12 " style={{ backgroundImage: ` url(${background})` }} >
            <div className="hero-content h-355 w-500 flex-col lg:flex-row-reverse">
                <img src={chair} className="max-w-sm rounded-lg shadow-2xl h-80	w-96 mx-28" />
                <div>
                    <DayPicker 
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    />;
                    {/* {date && <BookingModal date={date}></BookingModal>} */}
                </div>
                    
            </div>
            
        </div >
    );
};

export default AppointmentBanner;