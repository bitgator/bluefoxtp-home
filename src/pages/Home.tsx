import { useEffect, useState } from 'react'

export default function Home() {
  const [chatWidget, setChatWidget] = useState<'none' | 'syncro' | 'connectwise'>('none')

  useEffect(() => {
    const link = document.createElement('link')
    link.rel = 'stylesheet'
    link.href = 'https://qa-crchat-cdn.azureedge.net/chatbox/chatstyleai.css'
    document.head.appendChild(link)

    const script = document.createElement('script')
    script.src = 'https://qa-crchat-cdn.azureedge.net/chatbox/chatstyleai.js'
    document.head.appendChild(script)

    return () => {
      document.head.removeChild(link)
      document.head.removeChild(script)
    }
  }, [])

  return (
    <div className="min-h-screen flex flex-col items-center px-4" style={{backgroundColor: '#f0f0f0'}}>
      <div className="w-full max-w-5xl pt-32">
        <h1 className="text-center">
          BLUEFOX Technology Partners
        </h1>
        <h2 className="text-center mt-4">
          Just testing things out here
        </h2>
        
        <div className="flex justify-center mt-8 space-x-4">
          <button
            onClick={() => setChatWidget('none')}
            className={`px-4 py-2 rounded-md ${
              chatWidget === 'none' 
                ? 'bg-blue-500 text-white' 
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            None
          </button>
          <button
            onClick={() => setChatWidget('syncro')}
            className={`px-4 py-2 rounded-md ${
              chatWidget === 'syncro' 
                ? 'bg-blue-500 text-white' 
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            Syncro
          </button>
          <button
            onClick={() => setChatWidget('connectwise')}
            className={`px-4 py-2 rounded-md ${
              chatWidget === 'connectwise' 
                ? 'bg-blue-500 text-white' 
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            Connectwise
          </button>
        </div>
      </div>

      {chatWidget === 'syncro' && (
        <chatstyleai-chatbox 
          id="chatbox" 
          channel="7f5f43b0-dfc9-4519-a79d-1b1a55de765b" 
          version="" 
          options='{"isVisible":"true", "isOpen":"false", "autoStart":"true", "env":"qa"}'
        />
      )}

      {chatWidget === 'connectwise' && (
        <chatstyleai-chatbox 
          id="chatbox" 
          channel="11d230c1-e32e-4128-98c5-e730200a5746" 
          version="" 
          options='{"isOpen":"false", "autoStart":"true"}'
        />
      )}

    </div>
  )
}