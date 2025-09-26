import React from 'react';
import { digitalProductsData } from '@/lib/digitalProductsData'; // Adjust path if needed
import { BrainCircuit } from 'lucide-react';

export default function ExpertCbtPage() {
    const product = digitalProductsData.expertCbt;

    return (
        <div className="bg-var(--background) font-sans text-gray-900">
            <div className="container mx-auto px-4 py-12 md:py-16">
                
                {/* Product Info Section */}
                <div className="bg-white rounded-xl shadow-lg p-8 md:p-12 border border-gray-100 max-w-4xl mx-auto">
                    <div className="flex flex-col sm:flex-row items-start gap-8">
                        <div className="flex-shrink-0 flex items-center justify-center w-20 h-20 rounded-full bg-blue-100">
                            <BrainCircuit className="w-10 h-10 text-blue-600" />
                        </div>
                        <div>
                            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">{product.title}</h1>
                            <p className="text-gray-600 leading-relaxed text-lg">{product.description}</p>
                        </div>
                    </div>
                </div>

                {/* Call to Action Section */}
                <div className="mt-12 text-center">
                    <a 
                        href="#" // Replace with your actual product link
                        className="inline-block bg-blue-600 text-white font-bold py-4 px-10 text-lg rounded-lg hover:bg-blue-700 transition-colors"
                    >
                        Get Access to Expert CBT
                    </a>
                </div>

            </div>
        </div>
    );
}