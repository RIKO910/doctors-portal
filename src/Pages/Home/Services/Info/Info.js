import React from 'react';
import treatment from '../../../../assets/images/treatment.png'
const Info = () => {
    return (
        <div className="card lg:card-side bg-base-100 shadow-xl px-40 mt-20 mb-20">
            <figure ><img className='h-30 w-30' src={treatment} alt="" /></figure>
            <div className="card-body mx-10">
                <h2 className="card-title">Exceptional Dental Care, on Your Terms</h2>
                <p>It is a long established fact that a reader will be distracted by the readable content of
                    a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal
                    distribution of letters,as opposed to using 'Content here, content here', making it look like readable
                    English.
                    Many desktop publishing packages and web page</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Listen</button>
                </div>
            </div>
        </div>
    );
};
export default Info;