
import React from 'react';
import { Calculator, TrendingUp, Building, CreditCard, ChevronRight } from 'lucide-react';

type Inputs = {
  prixAchat: number;
  prixTravaux: number;
  loyerMensuel: number;
  taxeFonciere: number;
  chargesAnnuelles: number;
};

type Resultats = {
  rendementBrut: number;
  rendementNet: number;
  loyerAnnuel: number;
  rentabilite: number;
};

const formatPourcentage = (value?: number) => {
  return value !== undefined ? `${value.toFixed(2)}%` : '-';
};

const formatEuros = (value?: number) => {
  return value !== undefined ? `${value.toFixed(2)}€` : '-';
};

export default function CalculateurPage() {
  const [inputs, setInputs] = React.useState<Inputs>({
    prixAchat: 0,
    prixTravaux: 0, 
    loyerMensuel: 0,
    taxeFonciere: 0,
    chargesAnnuelles: 0,
  });
  
  const [resultats, setResultats] = React.useState<Resultats>({
    rendementBrut: 0,
    rendementNet: 0,
    loyerAnnuel: 0,
    rentabilite: 0,
  });

  const calculerResultats = (inputs: Inputs) => {
    const loyerAnnuel = inputs.loyerMensuel * 12;
    const coutTotal = inputs.prixAchat + inputs.prixTravaux;
    const chargesTotal = inputs.taxeFonciere + inputs.chargesAnnuelles;

    const rendementBrut = (loyerAnnuel / coutTotal) * 100; 
    const rendementNet = ((loyerAnnuel - chargesTotal) / coutTotal) * 100;
    const rentabilite = (loyerAnnuel - chargesTotal) / inputs.prixAchat * 100;

    return {
      rendementBrut,
      rendementNet,
      loyerAnnuel,
      rentabilite,
    };
  };

  React.useEffect(() => {
    setResultats(calculerResultats(inputs));
  }, [inputs]);

  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <div className="max-w-6xl mx-auto px-4 space-y-8">
        <div className="bg-black text-white rounded-3xl p-8">
          <h1 className="text-3xl font-light mb-4">Calculateur de Rendement</h1>
          <p className="text-gray-400">Analysez rapidement la rentabilité de vos investissements immobiliers</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="bg-white rounded-3xl p-8 shadow-sm">
              <h3 className="text-xl font-light mb-6">Informations sur l'investissement</h3>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Prix d'achat
                  </label>
                  <input
                    type="number"
                    value={inputs.prixAchat}
                    onChange={(e) => setInputs({...inputs, prixAchat: Number(e.target.value)})}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Prix des travaux
                  </label>
                  <input
                    type="number"
                    value={inputs.prixTravaux}
                    onChange={(e) => setInputs({...inputs, prixTravaux: Number(e.target.value)})}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"  
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Loyer mensuel
                  </label>
                  <input
                    type="number"
                    value={inputs.loyerMensuel}
                    onChange={(e) => setInputs({...inputs, loyerMensuel: Number(e.target.value)})}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />  
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-3xl p-8 shadow-sm">
              <h3 className="text-xl font-light mb-6">Charges et taxes annuelles</h3>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Taxe foncière
                  </label>
                  <input  
                    type="number"
                    value={inputs.taxeFonciere}
                    onChange={(e) => setInputs({...inputs, taxeFonciere: Number(e.target.value)})}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Autres charges annuelles
                  </label> 
                  <input
                    type="number"  
                    value={inputs.chargesAnnuelles}
                    onChange={(e) => setInputs({...inputs, chargesAnnuelles: Number(e.target.value)})}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  />
                </div>
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
                <div className="flex justify-between">
                  <span className="text-gray-600">Loyer annuel</span>  
                  <span className="font-medium">{formatEuros(resultats.loyerAnnuel)}</span>
                </div>

                <div className="flex justify-between">
                  <span className="text-gray-600">Coût total d'acquisition</span>
                  <span className="font-medium">{formatEuros(inputs.prixAchat + inputs.prixTravaux)}</span>  
                </div>

                <div className="flex justify-between">
                  <span className="text-gray-600">Charges annuelles totales</span>
                  <span className="font-medium">{formatEuros(inputs.taxeFonciere + inputs.chargesAnnuelles)}</span>
                </div>
                  
                <div className="flex justify-between">
                  <span className="text-gray-600">Rentabilité sur prix d'achat</span>
                  <span className="font-medium">{formatPourcentage(resultats.rentabilite)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
