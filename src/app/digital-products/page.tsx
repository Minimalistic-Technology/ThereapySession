import Link from 'next/link';
import { digitalProductsData } from '@/lib/digitalProductsData'; // Adjust path if needed

export default function DigitalProductsOverviewPage() {
  const products = Object.values(digitalProductsData);

  return (
    <div className="bg-var(--background) min-h-screen font-sans text-gray-900">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <header className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 tracking-tight">Digital Products</h1>
            <p className="mt-3 max-w-2xl mx-auto text-lg text-gray-500">In addition to supervision, I also develop digital products aimed at psychologists, with the goal of supporting their technical and human development.</p>
        </header>

        <main className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {products.map((product) => {
            const Icon = product.icon;
            return (
              <Link key={product.key} href={`/digital-products/${product.key}`} className="block p-8 bg-white rounded-xl shadow-lg border border-gray-100 hover:shadow-xl hover:scale-105 transition-all duration-300">
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 mb-6">
                    <Icon className="w-8 h-8 text-blue-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-800 mb-3">{product.title}</h2>
                <p className="text-gray-600 mb-6">{product.shortDescription}</p>
                <span className="font-semibold text-blue-600">Learn More &rarr;</span>
              </Link>
            );
          })}
        </main>
      </div>
    </div>
  );
}