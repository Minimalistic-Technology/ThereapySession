'use client'; // <-- Add this line to the very top

import React from 'react';
import { servicesData } from '@/lib/data'; // Adjust path if needed

export default function IndividualTherapyPage() {
    const service = servicesData.individual;

    return (
        <div className="bg-gray-50 font-sans text-gray-900">
            <div className="container mx-auto px-4 py-12 md:py-16">
               <h1 className="text-3xl md:text-5xl font-bold text-blue-600 mb-4">{service.title}</h1>

                
                {/* Service Info Section */}
                <div className="bg-white rounded-xl shadow-lg p-8 md:p-10 border border-gray-100">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">{service.info.title}</h2>
                    <p className="text-gray-600 leading-relaxed">{service.info.content}</p>
                </div>

                {/* Service Process Section */}
                <div className="mt-16">
                    <h3 className="text-3xl font-bold text-center text-gray-800 mb-12">{service.process.title}</h3>
                    <div className="relative">
                        <div className="absolute left-1/2 h-full w-0.5 bg-blue-200 hidden md:block" aria-hidden="true"></div>
                        <div className="space-y-12 md:space-y-0">
                        {service.process.steps.map((step, index) => {
                            const isLeft = index % 2 === 0;
                            return (
                            <div key={index} className="flex flex-col md:flex-row items-center w-full my-4 md:my-0">
                                <div className={`flex md:w-1/2 ${isLeft ? 'md:pr-8 md:justify-end md:order-1' : 'md:pl-8 md:justify-start md:order-3'}`}>
                                <div className="md:w-full max-w-sm bg-white rounded-xl shadow-lg p-6 border border-gray-100 transform hover:scale-105 transition-transform duration-300">
                                    <h4 className="font-bold text-xl text-blue-600 mb-2">{step.title}</h4>
                                    <p className="text-gray-600">{step.description}</p>
                                </div>
                                </div>
                                <div className="relative my-4 md:my-0 md:order-2">
                                <div className="absolute left-1/2 -translate-x-1/2 h-full w-0.5 bg-blue-200 md:hidden" aria-hidden="true"></div>
                                <div className="z-10 w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-md ring-8 ring-gray-50">{index + 1}</div>
                                </div>
                                <div className={`w-1/2 hidden md:block ${isLeft ? 'md:order-3' : 'md:order-1'}`}></div>
                            </div>
                            );
                        })}
                        </div>
                    </div>
                </div>

                {/* Contact Form Section */}
                <div className="mt-16">
                    <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg p-8 md:p-10 border border-gray-100">
                        <h3 className="text-3xl font-bold text-center text-gray-800 mb-2">Ready to Start?</h3>
                        <p className="text-center text-gray-500 mb-8">Fill out the form below to schedule a consultation.</p>
                        <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                                    <input type="text" id="name" placeholder="John Doe" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500" />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                                    <input type="email" id="email" placeholder="you@example.com" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500" />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">Service of Interest</label>
                                <input type="text" id="service" readOnly value={service.title} className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-100"/>
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                                <textarea id="message" rows={4} placeholder="Tell me a bit about what you're looking for..." className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"></textarea>
                            </div>
                            <div>
                                <button type="submit" className="w-full bg-blue-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-700">Send Message</button>
                            </div>
                        </form>
                    </div>
                </div>

            </div>
        </div>
    );
}