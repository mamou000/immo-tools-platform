'use client';

import { Calculator, FileText } from 'lucide-react';
import Link from 'next/link';

const tools = [
  {
    id: 'calculateur',
    title: 'Calculateur de Rendement',
    subtitle: 'Analysez vos investissements',
    icon: Calculator,
    href: '/calculateur',
    color: 'bg-gradient-to-br from-purple-400 to-purple-600'
  },
  {
    id: 'generateur',
    title: 'Générateur d\'Offres',
    subtitle: 'Créez vos offres en quelques clics',
    icon: FileText,
    href: '/generateur',
    color: 'bg-gradient-to-br from-green-400 to-green-600'
  }
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 py-8">
      <div className="max-w-6xl mx-auto px-4 space-y-8">
        <div className="bg-black text-white rounded-3xl p-8 mb-8">
          <h1 className="text-5xl font-light mb-4">
            Vos outils immobilier
            <br />
            en un seul endroit
          </h1>
          <p className="text-gray-400 text-xl max-w-xl">
            Simplifiez vos investissements avec nos outils professionnels
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {tools.map((tool) => (
            <Link
              key={tool.id}
              href={tool.href}
              className="group relative bg-white rounded-3xl p-8 shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="flex items-start justify-between">
                <div className="space-y-4">
                  <div className={`${tool.color} w-12 h-12 rounded-2xl flex items-center justify-center text-white`}>
                    <tool.icon size={24} />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-2xl font-light">{tool.title}</h3>
                    <p className="text-gray-500">{tool.subtitle}</p>
                  </div>
                </div>
                <div className="text-gray-400 group-hover:text-black transition-colors duration-300">
                  →
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}