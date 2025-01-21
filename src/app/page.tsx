'use client';

import Link from 'next/link';
import { Calculator, FileText } from 'lucide-react';

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

const futurTools = [
  'Simulateur de prêt immobilier',
  'Comparateur d\'assurances',
  'Dashboard locatif'
];

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900">
      <div className="max-w-6xl mx-auto px-4 py-16 text-white">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-green-400">
            ImmoTools
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Des outils professionnels pour optimiser vos investissements immobiliers
          </p>
        </div>

        {/* Tools Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {tools.map((tool) => (
            <Link
              key={tool.id}
              href={tool.href}
              className="group relative"
            >
              <div className="relative overflow-hidden bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/10 transition-all duration-300 hover:scale-[1.02]">
                <div className="flex items-start justify-between">
                  <div className="space-y-4">
                    <div className={`${tool.color} w-12 h-12 rounded-2xl flex items-center justify-center text-white`}>
                      <tool.icon size={24} />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-2xl font-light">{tool.title}</h3>
                      <p className="text-gray-400">{tool.subtitle}</p>
                    </div>
                  </div>
                  <span className="text-gray-400 group-hover:text-white transition-colors duration-300">
                    →
                  </span>
                </div>
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-white/[0.04] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </Link>
          ))}
        </div>

        {/* Future Tools Section */}
        <div className="mt-16">
          <h2 className="text-2xl font-light text-center mb-8">Prochainement</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {futurTools.map((tool, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm rounded-3xl p-6 border border-white/5"
              >
                <div className="flex items-center justify-between">
                  <span className="text-white/50">{tool}</span>
                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                    <span className="text-sm">...</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}