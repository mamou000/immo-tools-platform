'use client';

import React from 'react';
import Link from 'next/link';
import { Copy, Check, ChevronRight, ArrowLeft } from 'lucide-react';

export default function GenerateurOffres() {
  const [formData, setFormData] = React.useState({
    nomVendeur: '',
    adresseBien: '',
    prixPropose: '',
    delaiValidite: '48',
    conditionsSuspensives: ['pret', 'urbanisme'],
    delaiPret: '45',
    apport: '',
    tauxCredit: '',
    commentaires: ''
  });

  const [selectedTemplate, setSelectedTemplate] = React.useState('standard');
  const [copied, setCopied] = React.useState(false);
  const [showPreview, setShowPreview] = React.useState(false);

  const templates = [
    { 
      id: 'standard', 
      name: 'Offre Standard',
      description: 'Template classique pour une offre d\'achat immobilier'
    },
    { 
      id: 'coming-soon-1', 
      name: 'Négociation',
      description: 'Pour les biens nécessitant une négociation approfondie'
    },
    { 
      id: 'coming-soon-2', 
      name: 'Investissement',
      description: 'Spécifique aux acquisitions d\'investissement locatif'
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    
    if (type === 'checkbox') {
      const target = e.target as HTMLInputElement;
      const conditions = [...formData.conditionsSuspensives];
      if (target.checked) {
        conditions.push(name);
      } else {
        const index = conditions.indexOf(name);
        if (index > -1) conditions.splice(index, 1);
      }
      setFormData(prev => ({
        ...prev,
        conditionsSuspensives: conditions
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const generateOffer = () => {
    const today = new Date();
    const validUntil = new Date(today);
    validUntil.setDate(today.getDate() + 2);
    
    const formatDate = (date: Date) => {
      return date.toLocaleDateString('fr-FR');
    };

    const montant = new Intl.NumberFormat('fr-FR', {
      style: 'currency',
      currency: 'EUR'
    }).format(parseFloat(formData.prixPropose));

    return `
Madame, Monsieur ${formData.nomVendeur},

Nous avons visité le bien situé au :
${formData.adresseBien}

Compte tenu de l'ensemble des éléments, nous vous proposons une offre ferme d'achat au prix de ${montant} FAI (frais d'agence inclus).

Cette offre est valable jusqu'au ${formatDate(validUntil)}, car nous avons visité un autre bien pour lequel nous souhaiterions nous positionner. Cependant, ayant une préférence pour votre immeuble, nous souhaitons vous donner la priorité. Par respect pour l'autre propriétaire et afin de pouvoir nous décider rapidement, nous vous remercions de bien vouloir nous faire part de votre réponse avant le ${formatDate(validUntil)}.

Cette offre est soumise aux conditions suspensives suivantes :
${formData.conditionsSuspensives.includes('pret') ? `
- Obtention d'un prêt immobilier aux conditions suivantes :
  • Montant : ${montant}
  • Apport personnel : ${formData.apport} €
  • Taux maximum : ${formData.tauxCredit}%
  • Durée maximale : ${formData.delaiPret} jours` : ''}
${formData.conditionsSuspensives.includes('urbanisme') ? '\n- Absence de servitudes et de contraintes d\'urbanisme rédhibitoires' : ''}

${formData.commentaires ? `\nCommentaires additionnels :\n${formData.commentaires}\n` : ''}

Dans l'attente de votre retour, veuillez agréer, Madame, Monsieur, l'expression de nos salutations distinguées.

[Votre nom]`;
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generateOffer());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  React.useEffect(() => {
    setShowPreview(formData.nomVendeur !== '' && formData.adresseBien !== '' && formData.prixPropose !== '');
  }, [formData]);

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
          <h2 className="text-3xl font-light mb-4">Générateur d'offres</h2>
          <p className="text-gray-400">
            Créez rapidement des offres d'achat professionnelles
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="space-y-6">
            <div className="bg-white rounded-3xl p-8 shadow-sm">
              <h3 className="text-xl font-light mb-6">Templates disponibles</h3>
              <div className="space-y-4">
                {templates.map(template => (
                  <button
                    key={template.id}
                    onClick={() => setSelectedTemplate(template.id)}
                    className={`w-full text-left p-4 rounded-2xl transition-all ${
                      selectedTemplate === template.id
                        ? 'bg-purple-50 text-purple-700'
                        : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    <div className="flex items-start justify-between">
                      <div className="space-y-1">
                        <div className="font-medium">{template.name}</div>
                        <div className="text-sm text-gray-500">
                          {template.description}
                        </div>
                      </div>
                      <ChevronRight 
                        size={20} 
                        className={selectedTemplate === template.id
                          ? 'text-purple-700'
                          : 'text-gray-400'
                        }
                      />
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white rounded-3xl p-8 shadow-sm">
              <h3 className="text-xl font-light mb-6">Informations de l'offre</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <label className="block">
                  <span className="text-gray-700">Nom du vendeur</span>
                  <input
                    type="text"
                    name="nomVendeur"
                    value={formData.nomVendeur}
                    onChange={handleInputChange}
                    className="mt-1 w-full px-4 py-3 rounded-2xl border border-gray-200 focus:ring-2 focus:ring-black focus:border-transparent outline-none transition-all"
                    placeholder="M. et Mme Dupont"
                  />
                </label>

                <label className="block">
                  <span className="text-gray-700">Prix proposé</span>
                  <div className="mt-1 relative">
                    <input
                      type="number"
                      name="prixPropose"
                      value={formData.prixPropose}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-2xl border border-gray-200 focus:ring-2 focus:ring-black focus:border-transparent outline-none transition-all"
                      placeholder="300000"
                    />
                    <span className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                      €
                    </span>
                  </div>
                </label>

                <div className="md:col-span-2">
                  <label className="block">
                    <span className="text-gray-700">Adresse du bien</span>
                    <textarea
                      name="adresseBien"
                      value={formData.adresseBien}
                      onChange={handleInputChange}
                      rows={2}
                      className="mt-1 w-full px-4 py-3 rounded-2xl border border-gray-200 focus:ring-2 focus:ring-black focus:border-transparent outline-none transition-all"
                      placeholder="123 rue des Exemples, 75000 Paris"
                    />
                  </label>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-sm">
              <h3 className="text-xl font-light mb-6">Conditions suspensives</h3>
              <div className="space-y-6">
                <div className="space-y-2">
                  <label className="flex items-center space-x-3">
                    <input
                      type="checkbox"
                      name="pret"
                      checked={formData.conditionsSuspensives.includes('pret')}
                      onChange={handleInputChange}
                      className="rounded text-black focus:ring-black"
                    />
                    <span className="text-gray-700">Obtention de prêt</span>
                  </label>

                  {formData.conditionsSuspensives.includes('pret') && (
                    <div className="ml-8 mt-4 space-y-4">
                      <label className="block">
                        <span className="text-gray-700">Apport personnel</span>
                        <div className="mt-1 relative">
                          <input
                            type="number"
                            name="apport"
                            value={formData.apport}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 rounded-2xl border border-gray-200 focus:ring-2 focus:ring-black focus:border-transparent outline-none transition-all"
                          />
                          <span className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                            €
                          </span>
                        </div>
                      </label>

                      <label className="block">
                        <span className="text-gray-700">Taux maximum</span>
                        <div className="mt-1 relative">
                          <input
                            type="number"
                            step="0.1"
                            name="tauxCredit"
                            value={formData.tauxCredit}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 rounded-2xl border border-gray-200 focus:ring-2 focus:ring-black focus:border-transparent outline-none transition-all"
                          />
                          <span className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                            %
                          </span>
                        </div>
                      </label>
                    </div>
                  )}
                </div>

                <label className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    name="urbanisme"
                    checked={formData.conditionsSuspensives.includes('urbanisme')}
                    onChange={handleInputChange}
                    className="rounded text-black focus:ring-black"
                  />
                  <span className="text-gray-700">Urbanisme</span>
                </label>
              </div>
            </div>

            {showPreview && (
              <div className="bg-white rounded-3xl p-8 shadow-sm">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-light">Prévisualisation</h3>
                  <button
                    onClick={copyToClipboard}
                    className="flex items-center space-x-2 px-4 py-2 bg-black text-white rounded-full hover:bg-gray-800 transition-colors"
                  >
                    {copied ? (
                      <>
                        <Check size={20} />
                        <span>Copié !</span>
                      </>
                    ) : (
                      <>
                        <Copy size={20} />
                        <span>Copier</span>
                      </>
                    )}
                  </button>
                </div>
                <div className="bg-gray-50 rounded-2xl p-6">
                  <div className="font-sans text-gray-700 whitespace-pre-wrap">
                    {generateOffer()}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}