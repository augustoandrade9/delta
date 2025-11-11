import React from 'react';
import SobreImg from "../assets/sobre.png";
import checkIcon from '../assets/001-check.png';

const Sobre = () => {
    return (
        <section className="py-16 md:py-8 bg-white">
            <div className="mb-12">
                <h2 className="ml-6 text-3xl md:text-4xl font-bold text-gray-900">
                    QUEM SOMOS?
                </h2>
                <div className="ml-8 w-16 h-1 bg-yellow-400 mt-2"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-center">

                <div className="ml-8 order-2 md:order-1">
                    <img
                        src={SobreImg}
                        alt="Equipe Delta"
                        className="w-full h-auto rounded-lg shadow-xl object-cover"
                    />
                </div>

                <div className="mb-20 order-1 md:order-2 space-y-6 text-gray-700">
                    <p className="text-lg leading-relaxed">
                        A <strong>Delta HS</strong> representa a união entre dois pilares fundamentais da{' '}
                        <strong>termodinâmica: entalpia (H) e entropia (S)</strong> — conceitos essenciais para entender e prever o comportamento de sistemas e reações.
                    </p>

                    <p className="text-lg font-simbold">Nossa missão é clara:</p>

                    <ul className="space-y-4">
                        {[
                            'Ser o parceiro estratégico na busca por performance.',
                            'Unir conhecimento técnico à vivência prática.',
                            'Desenvolver soluções baseadas em ciência e experiência real.',
                            'Transformar resultados com foco em aplicabilidade operacional.',
                        ].map((item, index) => (
                            <li key={index} className="flex items-start">
                                <img
                                    src={checkIcon}
                                    alt="Check"
                                    className="w-6 h-6 mr-3 flex-shrink-0"
                                />
                                <span className="text-base md:text-lg leading-relaxed">{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Sobre;