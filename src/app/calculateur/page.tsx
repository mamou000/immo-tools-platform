
import React from 'react'; 

type Inputs = {
  prixAchat: number;
  prixTravaux: number;
  loyerMensuel: number;
  taxeFonciere: number; 
  chargesAnnuelles: number;
};

export default function CalculateurPage() {
  const [inputs, setInputs] = React.useState<Inputs>({
    prixAchat: 0,
    prixTravaux: 0,
    loyerMensuel: 0,
    taxeFonciere: 0,
    chargesAnnuelles: 0,
  });
  
  const calculResultats = (inputs: Inputs) => {
    const loyerAnnuel = inputs.loyerMensuel * 12;
    const coutTotal = inputs.prixAchat + inputs.prixTravaux;
    const chargesTotal = inputs.taxeFonciere + inputs.chargesAnnuelles;

    const rendementBrut = (loyerAnnuel / coutTotal) * 100; 
    const rendementNet = ((loyerAnnuel - chargesTotal) / coutTotal) * 100;

    return {
      rendementBrut: rendementBrut.toFixed(2) + '%',
      rendementNet: rendementNet.toFixed(2) + '%',
      loyerAnnuel: loyerAnnuel.toFixed(2) + '€',  
      coutTotal: coutTotal.toFixed(2) + '€',
      chargesTotal: chargesTotal.toFixed(2) + '€',
    };
  };

  const resultats = calculResultats(inputs);

  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <div className="max-w-6xl mx-auto px-4 space-y-8">

        <h1 className="text-3xl font-light mb-4">Calculateur de Rendement</h1>
        
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

          <div>
            <h3 className="text-xl font-light mb-6">Résultats</h3>

            <div className="space-y-4">  
              <div>
                <span className="block text-sm font-medium text-gray-700">Rendement brut</span>
                <span className="text-2xl">{resultats.rendementBrut}</span>  
              </div>

              <div>
                <span className="block text-sm font-medium text-gray-700">Rendement net</span>
                <span className="text-2xl">{resultats.rendementNet}</span>
              </div>
                
              <div>  
                <span className="block text-sm font-medium text-gray-700">Loyer annuel</span>
                <span>{resultats.loyerAnnuel}</span>
              </div>

              <div>
                <span className="block text-sm font-medium text-gray-700">Coût total d'acquisition</span>  
                <span>{resultats.coutTotal}</span>
              </div>
                
              <div>
                <span className="block text-sm font-medium text-gray-700">Charges annuelles totales</span>
                <span>{resultats.chargesTotal}</span>  
              </div>
            </div>
          </div>
        </div>

      </div>  
    </div>
  );
}
