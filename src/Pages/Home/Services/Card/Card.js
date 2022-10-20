import React from 'react';
import fluoride from '../../../../assets/images/fluoride.png'
import cavity from '../../../../assets/images/cavity.png'
import teeth from '../../../../assets/images/whitening.png'
const Card = () => {
    return (
        <div class="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-flow-col gap-5 px-12">
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src={fluoride}alt="Shoes" /></figure>
                <div className="card-body items-center text-center">
                    <h2 className=" card-title">Fluoride Treatment</h2>
                    <p >Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the</p>
                </div>
            </div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src={cavity}alt="Shoes" /></figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title ">Cavity Filling</h2>
                    <p >Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the</p>
                </div>
            </div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src={teeth}alt="Shoes" /></figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Teeth Whitening</h2>
                    <p >Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the</p>
                </div>
            </div>
        </div>
    );
};

export default Card;