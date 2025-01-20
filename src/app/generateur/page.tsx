'use client';

// ... (Tout le code précédent reste identique jusqu'à la partie des conditions suspensives)

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