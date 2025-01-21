'use client'

import React from 'react';
import Link from 'next/link';
import { Calculator, FileText, TrendingUp } from 'lucide-react';

const tools = [
  {
    id: 'calculateur',
    title: 'Calculateur de Rendement',
    subtitle: 'Analysez vos investissements',
    icon: Calculator,
    href: '/calculateur',
    color: 'bg-gradient-to-br from-purple-400 via-purple-500 to-purple-600',
    gradientBorder: 'before:absolute before:inset-0 before:rounded-3xl before:p-0.5 before:bg-gradient-to-br before:from-purple-400 before:via-purple-500 before:to-purple-600 before:opacity-0 before:transition-opacity hover:before:opacity-100'
  },
  {
    id: 'generateur',
    title: 'Générateur d\'Offres',
    subtitle: 'Créez vos offres en quelques clics',
    icon: FileText,
    href: '/generateur',
    color: 'bg-gradient-to-br from-green-400 via-green-500 to-green-600',
    gradientBorder: 'before:absolute before:inset-0 before:rounded-3xl before:p-0.5 before:bg-gradient-to-br before:from-green-400 before:via-green-500 before:to-green-600 before:opacity-0 before:transition-opacity hover:before:opacity-100'
  }
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-slate-900 via-purple-900 to-slate-900">
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16 space-y-8">
          <h1 className="text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-green-400">
            ImmoTools
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Des outils professionnels pour optimiser vos investissements immobiliers
          </p>
        </div>

        {/* Tools Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {tools.map((tool) => (
            <Link
              key={tool.id}
              href={tool.href}
              className="group relative isolate"
            >
              <div
                className={`
                  relative z-10 h-full
                  bg-white/10 backdrop-blur-sm
                  rounded-3xl p-8
                  border border-white/10
                  transition-all duration-300
                  hover:scale-[1.02]
                  overflow-hidden
                  ${tool.gradientBorder}
                `}
              >
                <div className="flex items-start justify-between">
                  <div className="space-y-4">
                    <div className={`${tool.color} w-12 h-12 rounded-2xl flex items-center justify-center text-white`}>
                      <tool.icon size={24} />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-2xl font-light text-white">{tool.title}</h3>
                      <p className="text-gray-400">{tool.subtitle}</p>
                    </div>
                  </div>
                  <div className="text-gray-400 group-hover:text-white transition-colors duration-300">
                    <TrendingUp size={20} />
                  </div>
                </div>
                
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 -z-10 bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
              </div>
            </Link>
          ))}
        </div>

        {/* Section Future Tools */}
        <div className="mt-16">
          <h2 className="text-2xl font-light text-center text-white mb-8">
            Prochainement
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              'Simulateur de prêt immobilier',
              'Comparateur d\'assurances',
              'Dashboard locatif'
            ].map((tool, index) => (
              <div
                key={index}
                className="relative bg-white/5 backdrop-blur-sm rounded-3xl p-6 border border-white/5"
              >
                <div className="flex items-center justify-between text-white/50">
                  <span>{tool}</span>
                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                    <span className="text-sm">...</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}