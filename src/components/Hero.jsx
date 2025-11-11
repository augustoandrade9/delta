import React from 'react';
import HeroVid from '../assets/5121754-uhd_3840_2160_25fps.mp4';

const Hero = () => {
    return (
        <section className="relative h-screen w-full overflow-hidden">
            <video
                className="absolute inset-0 w-full h-full object-cover"
                src={HeroVid}
                autoPlay
                loop
                muted
                playsInline
            />

            <div className="relative z-10 flex h-full items-start justify-start px-6 md:px-12 lg:px-12 pt-35">
                <div className="max-w-3xl text-white">
                    <h1 className="text-4xl md:text-5xl lg:text-6x1 font-bold leading-tight">
                        Da teoria à prática:
                        <br />
                        <span className="text-yellow-400">performace com propósito</span>
                    </h1>

                    <p className="mt-6 text-lg md:text-xl leading-relaxed opacity-90 max-w-2xl">
                        Unimos experiência operacional, inteligência de dados e termodinâmica
                        para elevar os resultados a um novo patamar.
                    </p>


                </div>
            </div>
        </section>
    );
};

export default Hero;