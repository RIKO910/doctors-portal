import React from 'react';
import quote from '../../../assets/icons/quote.svg'
import people1 from '../../../assets/images/people1.png'
import people2 from '../../../assets/images/people2.png'
import people3 from '../../../assets/images/people3.png'
const Testimonial = () => {
    return (
        <section className='px-12 my-11 py-5'>
            <div className='flex justify-between'>
                <div>
                <h3 className='text-secondary font-bold'>Testimonial</h3>
                <h1 className='text-2xl'>What Our Patients Says</h1>
                </div>
               <div>
                    <img src={quote} className='w-24 lg:w-48' alt="" />
               </div>

            </div>
            <div class="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-flow-col gap-5 px-7 pt-11">
                <div className="card w-96 bg-base-100 shadow-xl">
                    <p className='p-8'>It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content</p>
                    <section className=" flex px-8 pb-7">
                        <div className="avatar ">
                            <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                <img src={people1} />
                            </div>
                        </div>
                        <div className='px-6 justify-center pt-6 items-center '>
                            <h2>Winson Herry</h2>
                            <p>California</p>
                        </div>
                    </section>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <p className='p-8'>It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content</p>
                    <section className=" flex px-8 pb-7">
                        <div className="avatar ">
                            <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                <img src={people2} />
                            </div>
                        </div>
                        <div className='px-6 justify-center pt-6 items-center'>
                            <h2>Winson Herry</h2>
                            <p>California</p>
                        </div>
                    </section>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <p className='p-8'>It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content</p>
                    <section className=" flex px-8 pb-7">
                        <div className="avatar ">
                            <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                <img src={people3} />
                            </div>
                        </div>
                        <div className='px-6 justify-center pt-6 items-center'>
                            <h2>Winson Herry</h2>
                            <p>California</p>
                        </div>
                    </section>
                </div>
            </div>
        </section>

    );
};

export default Testimonial;