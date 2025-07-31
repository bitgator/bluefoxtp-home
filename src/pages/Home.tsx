import { useEffect } from 'react'

export default function Home() {
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
      </div>
      {/* <chatstyleai-chatbox 
        id="chatbox" 
        channel="7f5f43b0-dfc9-4519-a79d-1b1a55de765b" 
        version="" 
        options='{"isVisible":"true", "isOpen":"false", "autoStart":"true", "env":"qa"}'
      /> */}

      <link rel='stylesheet' href='https://cdn.chatstyle.ai/chatbox/chatstyleai.css'>
<script src='https://cdn.chatstyle.ai/chatbox/chatstyleai.js'></script>
<chatstyleai-chatbox id='chatbox' channel='11d230c1-e32e-4128-98c5-e730200a5746' version='' options='{"isOpen":"false", "autoStart":"true"}'></chatstyleai-chatbox>

    </div>
  )
}