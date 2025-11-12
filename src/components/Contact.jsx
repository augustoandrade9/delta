import React, { useState } from 'react';

const Contact = () => {
    const [form, setForm] = useState({
        name: '',
        email: '',
        message: '',
        agree: false,
        captcha: false
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setForm(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!form.name || !form.email || !form.message || !form.agree || !form.captcha) {
            alert('Preencha todos os campos obrigatórios!');
            return;
        }
        alert('Mensagem enviada com sucesso!');
        // Aqui você pode integrar com backend (PHP, EmailJS, etc.)
    };

    return (
        <section className="py-16 md:py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

                <div className="mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 uppercase">
                        ENTRE EM CONTATO
                    </h2>
                    <p className="text-lg text-gray-600 mt-2">
                        Preencha o formulário abaixo para obter mais informações.
                    </p>
                    <div className="w-16 h-1 bg-yellow-400 mt-2"></div>
                </div>

                <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-6">

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                        <input
                            type="text"
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            placeholder="Enter your name"
                            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-yellow-400 focus:border-transparent outline-none transition"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            E-mail <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="email"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            placeholder="Enter your email"
                            required
                            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-yellow-400 focus:border-transparent outline-none transition"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                        <textarea
                            name="message"
                            value={form.message}
                            onChange={handleChange}
                            rows="5"
                            placeholder="Enter your message"
                            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-yellow-400 focus:border-transparent outline-none transition resize-none"
                        />
                    </div>

                    <div className="flex items-center gap-2">
                        <input
                            type="checkbox"
                            name="agree"
                            checked={form.agree}
                            onChange={handleChange}
                            className="w-4 h-4 text-yellow-400 border-gray-300 rounded focus:ring-yellow-400"
                        />
                        <label className="text-sm text-gray-600">
                            I agree to the <a href="#" className="text-yellow-600 underline">Terms & Conditions</a> and <a href="#" className="text-yellow-600 underline">Privacy Policy</a>
                        </label>
                    </div>

                    <div className="flex items-center gap-3 p-4 border border-gray-300 rounded-md bg-gray-50">
                        <input
                            type="checkbox"
                            name="captcha"
                            checked={form.captcha}
                            onChange={handleChange}
                            className="w-5 h-5 text-yellow-400 border-gray-300 rounded focus:ring-yellow-400"
                        />
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                            <span>Sou humano</span>
                            <img src="https://www.google.com/recaptcha/about/images/recaptcha-logo.svg" alt="reCAPTCHA" className="h-5" />
                            <span className="text-xs">Privacidade - Termos e Condições</span>
                        </div>
                    </div>

                    <div className="text-left">
                        <button
                            type="submit"
                            className="bg-pink-100 hover:bg-pink-200 text-pink-700 font-medium py-3 px-8 rounded-md transition-colors"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default Contact;