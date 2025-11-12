import React from 'react';
import Dados from '../assets/dados.png';
import Codi from '../assets/codificacao.png';
import Termo from '../assets/termodinamica.png';

const Diferenciais = () => {
    return (
        <section className="py-16 md:py-24 bg-gray-50">
            <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

                <div className="mb-12">
                    <h2 className="text-4xl md:text5xl font-bold text-gray-900 uppercase">
                        DIFERENCIAIS
                    </h2>
                    <div className="w-16 h-1 bg-yellow-400 mt-2"></div>
                </div>

                <div className="grid md:grid-cols-3 gap-8">

                    <div className="bg-white p-8 rounded-xl shadow-xl flex flex-col items-center text-center border-2 border-yellow-400 shadow-yellow-400/30hover:shadow-yellow-400/50 transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl hover:shadow-yellow-400/50 hover:-translate-y-2 cursor-pointer">
                        <div className="mb-6 p-4 rounded-full">
                            <img
                                src={Dados}
                                alt="Análise de Dados"
                                className="w-10 h-10 object-contain"
                            />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-4">ANÁLISE DE DADOS</h3>
                        <p className="text-sm text-gray-600 leading-relaxed">
                            Transformamos dados em informação estratégica por meio da ciência de dados, com análises precisas, oferecemos direcionamentos claros e objetivos para a tomada de decisão e a resolução de problemas operacionais.
                        </p>
                    </div>

                    <div className="bg-white p-8 rounded-xl shadow-xl flex flex-col items-center text-center border-2 border-yellow-400 shadow-yellow-400/30hover:shadow-yellow-400/50 transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl hover:shadow-yellow-400/50 hover:-translate-y-2 cursor-pointer">
                        <div className="mb-6 p-4 rounded-full">
                            <img
                                src={Codi}
                                alt="Desenvolvimento de Modelos"
                                className="w-10 h-10 object-contain"
                            />
                        </div>
                        <h3 className="text-xl font-bold test-gray-900 mb-4">DESENVOLVIMENTO DE MODELOS</h3>
                        <p className="text-sm text-gray-600 leading-relaxed">
                            Desenvolvemos modelos matemáticos, termodinâmicos e baseados em inteligência artificial, totalmente personalizados de acordo com as necessidades específicas de cada cliente. Nossas soluções combinam rigor técnico e aplicabilidade prática para gerar respostas precisas e orientadas à tomada de decisão.
                        </p>
                    </div>

                    <div className="bg-white p-8 rounded-xl shadow-xl flex flex-col items-center text-center border-2 border-yellow-400 shadow-yellow-400/30hover:shadow-yellow-400/50 transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl hover:shadow-yellow-400/50 hover:-translate-y-2 cursor-pointer">
                        <div className="mb-6 p-4 rounded-full">
                            <img
                                src={Termo}
                                alt="Análises termodinâmicas"
                                className="w-10 h-10 object-contain"
                            />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-4">Análises termodinâmicas</h3>
                        <p className="text-sm text-gray-600 leading-relaxed">
                            Utilizamos ferramentas avançadas para desenvolver relatórios técnicos baseados em fundamentos termodinâmicos, identificando oportunidades reais de melhoria. Nossos estudos incluem janelas de lingotabilidade, otimização de escórias e determinação precisa da temperatura de líquidus, combinando rigor científico e foco prático para apoiar decisões na indústria siderúrgica.
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Diferenciais;