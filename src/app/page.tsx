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
    color: 'bg-purple-500'
  },
  {
    id: 'generateur',
    title: 'Générateur d\'Offres',
    subtitle: 'Créez vos offres en quelques clics',
    icon: FileText,
    href: '/generateur',
    color: 'bg-green-500'
  }
];

const futurTools = [
  'Simulateur de prêt immobilier',
  'Comparateur d\'assurances',
  'Dashboard locatif'
];

export default function Home() {
  return (
    <main>
      <div className="max-w-6xl mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="gradient-heading text-5xl md:text-6xl mb-8">
            ImmoTools
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Des outils professionnels pour optimiser vos investissements immobiliers
          </p>
        </div>

        {/* Tools Grid */}
        <div className="grid-layout mb-16">
          {tools.map((tool) => (
            <Link
              key={tool.id}
              href={tool.href}
              className="tool-card gradient-border animate-float"
            >
              <div className="flex items-start justify-between">
                <div className="space-y-4">
                  <div className={`tool-card-icon ${tool.color}`}>
                    <tool.icon size={24} className="text-white" />
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
                className="future-tool"
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