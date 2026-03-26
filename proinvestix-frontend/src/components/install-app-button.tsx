'use client'

import { useState } from 'react'
import { Download, X, Monitor, Smartphone, Share } from 'lucide-react'

export function InstallAppButton() {
  const [showModal, setShowModal] = useState(false)

  return (
    <>
      <button
        onClick={() => setShowModal(true)}
        className="bg-gradient-to-r from-red-600 to-green-600 hover:from-red-700 hover:to-green-700 text-white font-semibold px-4 py-2 rounded-lg flex items-center gap-2"
      >
        <Download className="h-4 w-4" />
        Download App
      </button>

      {showModal && (
        <div 
          className="fixed inset-0 flex items-center justify-center p-4"
          style={{ zIndex: 99999 }}
        >
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/70"
            onClick={() => setShowModal(false)}
          />
          
          {/* Modal */}
          <div 
            className="relative bg-gray-900 border border-gray-700 rounded-xl p-6 max-w-md w-full space-y-4 shadow-2xl"
          >
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-bold text-white">Installeer ProInvestiX</h3>
              <button onClick={() => setShowModal(false)} className="text-gray-400 hover:text-white">
                <X className="h-5 w-5" />
              </button>
            </div>

            <p className="text-gray-400">Installeer de app voor snelle toegang:</p>
            
            <div className="space-y-3">
              <div className="flex items-start gap-3 p-3 bg-gray-800 rounded-lg">
                <Monitor className="h-5 w-5 text-gray-400 mt-0.5" />
                <div>
                  <p className="font-medium text-white">Desktop (Chrome/Edge)</p>
                  <p className="text-sm text-gray-400">Klik op het install icoon in de URL balk</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-3 bg-gray-800 rounded-lg">
                <Smartphone className="h-5 w-5 text-gray-400 mt-0.5" />
                <div>
                  <p className="font-medium text-white">Android (Chrome)</p>
                  <p className="text-sm text-gray-400">Menu (⋮) → "App installeren"</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-3 bg-gray-800 rounded-lg">
                <Share className="h-5 w-5 text-gray-400 mt-0.5" />
                <div>
                  <p className="font-medium text-white">iPhone/iPad (Safari)</p>
                  <p className="text-sm text-gray-400">Delen → "Zet op beginscherm"</p>
                </div>
              </div>
            </div>

            <button
              onClick={() => setShowModal(false)}
              className="w-full bg-gradient-to-r from-red-600 to-green-600 text-white font-semibold py-3 rounded-lg hover:from-red-700 hover:to-green-700"
            >
              Begrepen
            </button>
          </div>
        </div>
      )}
    </>
  )
}
