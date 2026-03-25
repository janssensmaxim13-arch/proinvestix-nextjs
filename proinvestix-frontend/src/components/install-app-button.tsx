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
  const [showIOSInstructions, setShowIOSInstructions] = useState(false)
  const [isInstalled, setIsInstalled] = useState(false)
  const [isIOS, setIsIOS] = useState(false)

  useEffect(() => {
    // Check if already installed
    if (window.matchMedia('(display-mode: standalone)').matches) {
      setIsInstalled(true)
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
      // Chrome/Android - show native install prompt
      deferredPrompt.prompt()
      const { outcome } = await deferredPrompt.userChoice
      if (outcome === 'accepted') {
        setIsInstalled(true)
      }
      setDeferredPrompt(null)
    } else if (isIOS) {
      // iOS - show instructions
      setShowIOSInstructions(true)
    } else {
      // Fallback - show general instructions
      setShowIOSInstructions(true)
    }
  }

  // Don't show if already installed
  if (isInstalled) return null

  return (
    <>
      <Button
        onClick={handleInstallClick}
        className="bg-gradient-to-r from-red-600 to-green-600 hover:from-red-700 hover:to-green-700 text-white font-semibold gap-2"
        size="lg"
      >
        <Download className="h-5 w-5" />
        Download App
      </Button>

      {/* iOS/Fallback Instructions Modal */}
      {showIOSInstructions && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-card border rounded-xl p-6 max-w-md w-full space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-bold">Installeer ProInvestiX</h3>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setShowIOSInstructions(false)}
              >
                <X className="h-5 w-5" />
              </Button>
            </div>

            {isIOS ? (
              <div className="space-y-4">
                <p className="text-muted-foreground">
                  Volg deze stappen om de app te installeren op je iPhone/iPad:
                </p>
                <div className="space-y-3">
                  <div className="flex items-start gap-3 p-3 bg-muted rounded-lg">
                    <div className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">1</div>
                    <div className="flex-1">
                      <p className="font-medium">Tik op Delen</p>
                      <p className="text-sm text-muted-foreground flex items-center gap-1">
                        Tik op <Share className="h-4 w-4" /> onderaan het scherm
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-3 bg-muted rounded-lg">
                    <div className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">2</div>
                    <div className="flex-1">
                      <p className="font-medium">Zet op beginscherm</p>
                      <p className="text-sm text-muted-foreground flex items-center gap-1">
                        Scroll en tik op <PlusSquare className="h-4 w-4" /> "Zet op beginscherm"
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-3 bg-muted rounded-lg">
                    <div className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">3</div>
                    <div className="flex-1">
                      <p className="font-medium">Bevestig</p>
                      <p className="text-sm text-muted-foreground">Tik op "Voeg toe" rechtsboven</p>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                <p className="text-muted-foreground">
                  Installeer de app voor snelle toegang:
                </p>
                <div className="space-y-3">
                  <div className="flex items-start gap-3 p-3 bg-muted rounded-lg">
                    <Monitor className="h-5 w-5 text-muted-foreground mt-0.5" />
                    <div>
                      <p className="font-medium">Desktop (Chrome)</p>
                      <p className="text-sm text-muted-foreground">Klik op het install icoon in de URL balk</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-3 bg-muted rounded-lg">
                    <Smartphone className="h-5 w-5 text-muted-foreground mt-0.5" />
                    <div>
                      <p className="font-medium">Android (Chrome)</p>
                      <p className="text-sm text-muted-foreground">Menu (⋮) → "App installeren"</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            <Button
              onClick={() => setShowIOSInstructions(false)}
              className="w-full"
            >
              Begrepen
            </Button>
          </div>
        </div>
      )}
    </>
  )
}
