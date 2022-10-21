import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import Service from './Service/Service';

const AvailableAppointment = ({date}) => {
    const [services,setServices] =useState([]);

    useEffect(()=>{
        fetch('service.json')
        .then(res=>res.json())
        .then(data=>setServices(data))
    }
        
        ,[])
    return (
        <div>
            <p className='text-xl text-center text-secondary font-bold mt-11'>
                Available Service on {format(date,'PP')}
            </p>
            <h4  className='text-xl text-center mt-3 '> Please select a service</h4>

            <div>
                {
                    services.map(service=><Service
                    key={service._id}
                    service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default AvailableAppointment;