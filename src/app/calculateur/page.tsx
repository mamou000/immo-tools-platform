{`'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function CalculateurPage() {
  // ... (tout le code précédent jusqu'au dernier return reste identique)

            <div className="bg-white rounded-3xl p-8 shadow-sm">
              <h3 className="text-xl font-light mb-6">Détails du calcul</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between px-4 py-3 bg-gray-50 rounded-2xl">
                  <span className="text-gray-600">Frais de notaire</span>
                  <span className="font-medium">{formatMontant(resultats.fraisNotaire)}</span>
                </div>

                <div className="flex items-center justify-between px-4 py-3 bg-gray-50 rounded-2xl">
                  <span className="text-gray-600">Investissement total</span>
                  <span className="font-medium">{formatMontant(resultats.investissementTotal)}</span>
                </div>

                <div className="flex items-center justify-between px-4 py-3 bg-gray-50 rounded-2xl">
                  <span className="text-gray-600">Revenus annuels</span>
                  <span className="font-medium">{formatMontant(resultats.revenusAnnuels)}</span>
                </div>

                <div className="flex items-center justify-between px-4 py-3 bg-gray-50 rounded-2xl">
                  <span className="text-gray-600">Charges annuelles</span>
                  <span className="font-medium text-red-600">{formatMontant(resultats.chargesAnnuelles)}</span>
                </div>

                <div className="flex items-center justify-between px-4 py-3 bg-gray-50 rounded-2xl">
                  <span className="text-gray-600">Résultat net annuel</span>
                  <span className="font-medium text-green-600">
                    {formatMontant(resultats.revenusAnnuels - resultats.chargesAnnuelles)}
                  </span>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-gray-200">
                <div className="space-y-2">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-500">Revenu mensuel net</span>
                    <span className="font-medium text-green-600">
                      {formatMontant((resultats.revenusAnnuels - resultats.chargesAnnuelles) / 12)}
                    </span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-500">Cash flow mensuel</span>
                    <span className="font-medium text-purple-600">
                      {formatMontant(resultats.revenusAnnuels / 12)}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}`}