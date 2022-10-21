import { format } from 'date-fns';
import React from 'react';

const AvailableAppointment = ({date}) => {
    return (
        <div>
            <p className='text-xl text-center text-secondary font-bold mt-11'>
                Available Service on {format(date,'PP')}
            </p>
            <h4  className='text-xl text-center mt-3 '> Please select a service</h4>
        </div>
    );
};

export default AvailableAppointment;