'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

// ... (garder tout le code précédent jusqu'à la dernière input)

                      value={inputs.autresCharges}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-2xl border border-gray-200 focus:ring-2 focus:ring-black focus:border-transparent outline-none transition-all"
                      placeholder="0"
                    />
                    <span className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                      €/an
                    </span>
                  </div>
                </label>
              </div>
            </div>
          </div>

          {/* Résultats */}
          <div className="lg:sticky lg:top-8 space-y-6 self-start">
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-purple-50 rounded-3xl p-8 shadow-sm">
                <span className="text-sm text-purple-600 font-medium">Rendement brut</span>
                <div className="mt-2 flex items-baseline space-x-2">
                  <span className="text-4xl font-light text-purple-700">
                    {formatPourcentage(resultats.rendementBrut)}
                  </span>
                </div>
              </div>

              <div className="bg-green-50 rounded-3xl p-8 shadow-sm">
                <span className="text-sm text-green-600 font-medium">Rendement net</span>
                <div className="mt-2 flex items-baseline space-x-2">
                  <span className="text-4xl font-light text-green-700">
                    {formatPourcentage(resultats.rendementNet)}
                  </span>
                </div>
              </div>
            </div>

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
}