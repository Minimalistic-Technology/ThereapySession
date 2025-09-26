import Link from 'next/link';
import { servicesData } from '@/lib/data';

export default function ServicesOverviewPage() {
  return (
    <div className="bg-gray-50 min-h-screen font-sans text-gray-900">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <header className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 tracking-tight">My Services</h1>
            <p className="mt-3 max-w-2xl mx-auto text-lg text-gray-500">Offering compassionate and collaborative therapy to help you build a life worth living.</p>
        </header>

        <main className="grid md:grid-cols-3 gap-8">
          {(Object.entries(servicesData)).map(([key, service]) => {
            const Icon = service.icon;
            return (
              <Link key={key} href={`/services/${key}`} className="block p-8 bg-white rounded-xl shadow-lg border border-gray-100 hover:shadow-xl hover:scale-105 transition-all duration-300">
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 mb-6">
                    <Icon className="w-8 h-8 text-blue-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-800 mb-3">{service.title}</h2>
                <p className="text-gray-600 mb-6">{service.info.content.substring(0, 100)}...</p>
                <span className="font-semibold text-blue-600">Learn More &rarr;</span>
              </Link>
            );
          })}
        </main>
      </div>
    </div>
  );
}