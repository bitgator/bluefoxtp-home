import { useEffect, useState } from 'react'

export default function Home() {
  const [scriptLoaded, setScriptLoaded] = useState(false)

  useEffect(() => {
    const link = document.createElement('link')
    link.rel = 'stylesheet'
    link.href = 'https://cdn.chatstyle.ai/chatbox/kendo/v20251112FIX/crchat-chatwidget.css'
    document.body.appendChild(link)

    const script = document.createElement('script')
    script.src = 'https://cdn.chatstyle.ai/chatbox/kendo/v20251112FIX/crchat-chatwidget.js'
    script.onload = () => setScriptLoaded(true)
    document.body.appendChild(script)

    return () => {
      // document.head.removeChild(link)
      // document.head.removeChild(script)
    }
  }, [])

  return (
    <div className="min-h-screen flex flex-col items-center px-4" style={{backgroundColor: '#f0f0f0'}}>
      <div className="w-full max-w-5xl pt-32">
        <h1 className="text-center">
          BLUEFOX Technology Partners
        </h1>
        <h2 className="text-center mt-4">
          Welcome to my playground
        </h2>
      </div>

      <chatstyleai-chatbox
        id="chatbox"
        channel="1062790d-3b9f-4e15-b1cc-76883431ca7c"
        version=""
        options='{"isVisible":"true", "isOpen":"false", "autoStart":"true"}'
      />
    </div>
  )
}