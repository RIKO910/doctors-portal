import React, { useState } from 'react';
import Footer from '../Shared/Footer/Footer';
import AppointmentBanner from './AppointmentBanner/AppointmentBanner';
import AvailableAppointment from './AvailableAppontment/AvailableAppointment';
import Service from './AvailableAppontment/Service/Service';
import BookingModal from './BookingModal/BookingModal';

const Appointmentt = () => {
    const [date ,setDate] =useState(new Date())
    return (
        <div >
            <AppointmentBanner date={date} setDate={setDate}></AppointmentBanner>
            <AvailableAppointment date={date}></AvailableAppointment>
            <Footer></Footer>
        </div>
    );
};

export default Appointmentt;