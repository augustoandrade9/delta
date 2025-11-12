import React from 'react';
import umecc from '../assets/umecc.jpeg';


const Partners = () => {
    return (
        <section className="py-16 md:py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

                <div className="mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 uppercase">
                        PARCEIROS
                    </h2>
                    <div className="w-16 h-1 bg-yellow-400 mt-2"></div>
                </div>

                <div className="flex flex-col md:flex-row justify-center items-center gap-12 md:gap-20">
                    <img src={umecc} alt="Umecc" className="h-12 md:h-16 w-auto" />
                </div>
            </div>
        </section>
    );
};

export default Partners;