import React from 'react';
import Logo from '../assets/LogoLetraPreta.png';

const Navbar = () => {
    return(
        <nav className="bg-white shadow-sm border-b border-gray-200">
            <div className="max-w-7x1 mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <div className="flex-shrink-0 flex items-center">
                        <img
                            src={Logo}
                            alt="Hs Logo"
                            className="h-10 w-auto"
                        />
                    </div>

                    {/* Opcoes */}
                    <div className="hidden md:flex space-x-8 text-gray-700 font-medium ml-auto mr-8">
                        <a className="hover:text-yellow-500 transition-colors">HOME</a>
                        <a className="hover:text-yellow-500 transition-colors">Sobre Nós</a>
                        <a className="hover:text-yellow-500 transition-colors">Insights</a>
                        <a className="hover:text-yellow-500 transition-colors">Diferenciais</a>
                        <a className="hover:text-yellow-500 transition-colors">Parceiros</a>
                    </div>

                    <div className="flex items-center">
                        <a
                            className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold py-2 px-6 rounded-md transition-colors shadow-sm"
                        >
                            Entre em Contato
                        </a>
                    </div>
                </div>
            </div>
            <div className="md:hidden">
                {/* fzr um menu hambúrguer dps */}
            </div>
        </nav>
    );
};

export default Navbar;
