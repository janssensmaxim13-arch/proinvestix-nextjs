'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Download, Smartphone, Monitor, X, Share, PlusSquare } from 'lucide-react'

interface BeforeInstallPromptEvent extends Event {
  prompt(): Promise<void>
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>
}

export function InstallAppButton() {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null)
  const [showInstructions, setShowInstructions] = useState(false)
  const [isStandalone, setIsStandalone] = useState(false)
  const [isIOS, setIsIOS] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    
    // Check if running as installed PWA (standalone mode)
    if (window.matchMedia('(display-mode: standalone)').matches) {
      setIsStandalone(true)
      return
    }

    // Check if iOS
    const isIOSDevice = /iPad|iPhone|iPod/.test(navigator.userAgent)
    setIsIOS(isIOSDevice)

    // Listen for install prompt (Chrome/Edge/Android)
    const handler = (e: Event) => {
      e.preventDefault()
      setDeferredPrompt(e as BeforeInstallPromptEvent)
    }

    window.addEventListener('beforeinstallprompt', handler)
    return () => window.removeEventListener('beforeinstallprompt', handler)
  }, [])

  const handleInstallClick = async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt()
      await deferredPrompt.userChoice
      setDeferredPrompt(null)
    } else {
      setShowInstructions(true)
    }
  }

  // Server-side: render placeholder to avoid hydration mismatch
  if (!mounted) {
    return (
      <Button className="bg-gradient-to-r from-red-600 to-green-600 text-white font-semibold gap-2">
        <Download className="h-4 w-4" />
        Download App
      </Button>
    )
  }

  // Hide only in standalone mode (installed app)
  if (isStandalone) return null

  return (
    <>
      <Button
        onClick={handleInstallClick}
        className="bg-gradient-to-r from-red-600 to-green-600 hover:from-red-700 hover:to-green-700 text-white font-semibold gap-2"
      >
        <Download className="h-4 w-4" />
        Download App
      </Button>

      {showInstructions && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-gray-900 border border-gray-700 rounded-xl p-6 max-w-md w-full space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-bold text-white">Installeer ProInvestiX</h3>
              <Button variant="ghost" size="icon" onClick={() => setShowInstructions(false)}>
                <X className="h-5 w-5" />
              </Button>
            </div>

            {isIOS ? (
              <div className="space-y-4">
                <p className="text-gray-400">Volg deze stappen om de app te installeren:</p>
                <div className="space-y-3">
                  <div className="flex items-start gap-3 p-3 bg-gray-800 rounded-lg">
                    <div className="bg-red-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">1</div>
                    <div><p className="font-medium text-white">Tik op Delen</p><p className="text-sm text-gray-400">Tik op <Share className="h-4 w-4 inline" /> onderaan</p></div>
                  </div>
                  <div className="flex items-start gap-3 p-3 bg-gray-800 rounded-lg">
                    <div className="bg-red-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">2</div>
                    <div><p className="font-medium text-white">Zet op beginscherm</p><p className="text-sm text-gray-400">Tik op <PlusSquare className="h-4 w-4 inline" /> "Zet op beginscherm"</p></div>
                  </div>
                  <div className="flex items-start gap-3 p-3 bg-gray-800 rounded-lg">
                    <div className="bg-red-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">3</div>
                    <div><p className="font-medium text-white">Bevestig</p><p className="text-sm text-gray-400">Tik op "Voeg toe"</p></div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                <p className="text-gray-400">Installeer de app voor snelle toegang:</p>
                <div className="space-y-3">
                  <div className="flex items-start gap-3 p-3 bg-gray-800 rounded-lg">
                    <Monitor className="h-5 w-5 text-gray-400 mt-0.5" />
                    <div><p className="font-medium text-white">Desktop (Chrome/Edge)</p><p className="text-sm text-gray-400">Klik op het install icoon in de URL balk</p></div>
                  </div>
                  <div className="flex items-start gap-3 p-3 bg-gray-800 rounded-lg">
                    <Smartphone className="h-5 w-5 text-gray-400 mt-0.5" />
                    <div><p className="font-medium text-white">Android (Chrome)</p><p className="text-sm text-gray-400">Menu (⋮) → "App installeren"</p></div>
                  </div>
                </div>
              </div>
            )}

            <Button onClick={() => setShowInstructions(false)} className="w-full bg-gradient-to-r from-red-600 to-green-600">
              Begrepen
            </Button>
          </div>
        </div>
      )}
    </>
  )
}
