import { format } from 'date-fns';
import React from 'react';

const BookingModal = ({ treatment, date }) => {
    const {_id, name, slots } = treatment;
    const handleBooking = event =>{
        event.preventDefault();
        console.log(_id,name)
    }
    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-lg text-secondary">Booking for :{name}</h3>
                    {/* start card */}
                    <div className="card flex-shrink-0 w-full max-w-sm  bg-base-100 ">
                        <div className="card-body">
                            <div onSubmit={handleBooking} className="form-control ">
                                <div className=" input  bg-gray-200 input-bordered" >
                                    <p className='py-3'>
                                        {format(date, 'PP')}
                                    </p>
                                </div>
                                <input type="text" placeholder="Full Name" className="input input-bordered mt-5" />
                                <input type="text" placeholder="Phone Number" className="input my-5 input-bordered" />
                                <input type="text" placeholder="Email" className="input input-bordered" />
                                <input type="submit" value="Submit" className='btn model-action mt-5' />
                            </div>
                           
                        </div>
                    </div>
                    {/* finish card */}

                    <div className="modal-action">

                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;