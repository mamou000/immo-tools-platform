'use client'

import React from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

interface Inputs {
  prixAcquisition: string;
  typeAchat: 'ancien' | 'neuf';
  montantTravaux: string;
  loyerMensuel: string;
  taxeFonciere: string;
  chargesCopro: string;
  assurancePNO: string;
  entretien: string;
  fraisGestion: string;
  autresCharges: string;
}

interface Resultats {
  fraisNotaire: number;
  investissementTotal: number;
  revenusAnnuels: number;
  rendementBrut: number;
  rendementNet: number;
  chargesAnnuelles: number;
}

export default function CalculateurPage() {
  const [inputs, setInputs] = React.useState<Inputs>({
    prixAcquisition: '',
    typeAchat: 'ancien',
    montantTravaux: '',
    loyerMensuel: '',
    taxeFonciere: '',
    chargesCopro: '',
    assurancePNO: '',
    entretien: '',
    fraisGestion: '',
    autresCharges: ''
  });

  const [resultats, setResultats] = React.useState<Resultats>({
    fraisNotaire: 0,
    investissementTotal: 0,
    revenusAnnuels: 0,
    rendementBrut: 0,
    rendementNet: 0,
    chargesAnnuelles: 0
  });

  const calculerFraisNotaire = (prix: number, type: string): number => {
    const taux = type === 'neuf' ? 0.03 : 0.08;
    return prix * taux;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setInputs(prev => ({
      ...prev,
      [name]: value
    }));
  };

  React.useEffect(() => {
    const prixAcquisition = parseFloat(inputs.prixAcquisition) || 0;
    const montantTravaux = parseFloat(inputs.montantTravaux) || 0;
    const loyerMensuel = parseFloat(inputs.loyerMensuel) || 0;
    
    const chargesAnnuelles = (
      (parseFloat(inputs.taxeFonciere) || 0) +
      (parseFloat(inputs.chargesCopro) || 0) +
      (parseFloat(inputs.assurancePNO) || 0) +
      (parseFloat(inputs.entretien) || 0) +
      (parseFloat(inputs.fraisGestion) || 0) +
      (parseFloat(inputs.autresCharges) || 0)
    );

    const fraisNotaire = calculerFraisNotaire(prixAcquisition, inputs.typeAchat);
    const investissementTotal = prixAcquisition + fraisNotaire + montantTravaux;
    const revenusAnnuels = loyerMensuel * 12;
    
    const rendementBrut = investissementTotal > 0 
      ? (revenusAnnuels / investissementTotal) * 100 
      : 0;
    
    const rendementNet = investissementTotal > 0 
      ? ((revenusAnnuels - chargesAnnuelles) / investissementTotal) * 100 
      : 0;

    setResultats({
      fraisNotaire,
      investissementTotal,
      revenusAnnuels,
      rendementBrut,
      rendementNet,
      chargesAnnuelles
    });
  }, [inputs]);

  const formatMontant = (montant: number): string => {
    return new Intl.NumberFormat('fr-FR', {
      style: 'currency',
      currency: 'EUR'
    }).format(montant);
  };

  const formatPourcentage = (valeur: number): string => {
    return `${valeur.toFixed(2)}%`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 py-8">
      <div className="max-w-6xl mx-auto px-4 space-y-8">
        <div className="flex items-center space-x-4">
          <Link 
            href="/"
            className="p-2 hover:bg-white/10 rounded-full transition-colors"
          >
            <ArrowLeft size={24} />
          </Link>
          <span className="text-xl">Retour</span>
        </div>

        <div className="bg-black text-white rounded-3xl p-8">
          <h2 className="text-3xl font-light mb-4">Calculateur de rendement</h2>
          <p className="text-gray-400">
            Analysez rapidement la rentabilité de vos investissements immobiliers
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="bg-white rounded-3xl p-8 shadow-sm">
              <h3 className="text-xl font-light mb-6">Données d'acquisition</h3>
              <div className="space-y-4">
                <label className="block">
                  <span className="text-gray-700">Prix d'acquisition</span>
                  <div className="mt-1 relative">
                    <input
                      type="number"
                      name="prixAcquisition"
                      value={inputs.prixAcquisition}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-2xl border border-gray-200 focus:ring-2 focus:ring-black focus:border-transparent outline-none transition-all"
                      placeholder="0"
                    />
                    <span className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                      €
                    </span>
                  </div>
                </label>

                <label className="block">
                  <span className="text-gray-700">Type d'achat</span>
                  <select
                    name="typeAchat"
                    value={inputs.typeAchat}
                    onChange={handleInputChange}
                    className="mt-1 w-full px-4 py-3 rounded-2xl border border-gray-200 focus:ring-2 focus:ring-black focus:border-transparent outline-none transition-all"
                  >
                    <option value="ancien">Ancien (8% frais de notaire)</option>
                    <option value="neuf">Neuf (3% frais de notaire)</option>
                  </select>
                </label>

                <label className="block">
                  <span className="text-gray-700">Montant des travaux</span>
                  <div className="mt-1 relative">
                    <input
                      type="number"
                      name="montantTravaux"
                      value={inputs.montantTravaux}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-2xl border border-gray-200 focus:ring-2 focus:ring-black focus:border-transparent outline-none transition-all"
                      placeholder="0"
                    />
                    <span className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                      €
                    </span>
                  </div>
                </label>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-sm">
              <h3 className="text-xl font-light mb-6">Revenus locatifs</h3>
              <div className="space-y-4">
                <label className="block">
                  <span className="text-gray-700">Loyer mensuel</span>
                  <div className="mt-1 relative">
                    <input
                      type="number"
                      name="loyerMensuel"
                      value={inputs.loyerMensuel}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-2xl border border-gray-200 focus:ring-2 focus:ring-black focus:border-transparent outline-none transition-all"
                      placeholder="0"
                    />
                    <span className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                      €
                    </span>
                  </div>
                </label>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-sm">
              <h3 className="text-xl font-light mb-6">Détail des charges</h3>
              <div className="space-y-4">
                {Object.entries({
                  taxeFonciere: 'Taxe foncière',
                  chargesCopro: 'Charges de copropriété',
                  assurancePNO: 'Assurance PNO',
                  entretien: 'Entretien et réparations',
                  fraisGestion: 'Frais de gestion locative',
                  autresCharges: 'Autres charges'
                }).map(([name, label]) => (
                  <label key={name} className="block">
                    <span className="text-gray-700">{label}</span>
                    <div className="mt-1 relative">
                      <input
                        type="number"
                        name={name}
                        value={inputs[name as keyof Inputs]}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-2xl border border-gray-200 focus:ring-2 focus:ring-black focus:border-transparent outline-none transition-all"
                        placeholder="0"
                      />
                      <span className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                        €/an
                      </span>
                    </div>
                  </label>
                ))}
              </div>
            </div>
          </div>

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
                {[
                  ['Frais de notaire', resultats.fraisNotaire],
                  ['Investissement total', resultats.investissementTotal],
                  ['Revenus annuels', resultats.revenusAnnuels],
                  ['Charges annuelles', resultats.chargesAnnuelles, 'text-red-600'],
                  ['Résultat net annuel', resultats.revenusAnnuels - resultats.chargesAnnuelles, 'text-green-600']
                ].map(([label, value, textColor = '']) => (
                  <div key={label as string} className="flex items-center justify-between px-4 py-3 bg-gray-50 rounded-2xl">
                    <span className="text-gray-600">{label}</span>
                    <span className={`font-medium ${textColor}`}>{formatMontant(value as number)}</span>
                  </div>
                ))}
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