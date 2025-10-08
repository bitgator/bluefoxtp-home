import { useEffect } from 'react'

export default function Home() {
  useEffect(() => {
    const link = document.createElement('link')
    link.rel = 'stylesheet'
    link.href = 'https://cdn.chatstyle.ai/chatbox/cloudradial/crchat-chatwidget.css'
    document.head.appendChild(link)

    const script = document.createElement('script')
    script.src = 'https://cdn.chatstyle.ai/chatbox/cloudradial/crchat-chatwidget.js'
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

      <chatstyleai-chatbox
        id="chatbox"
        channel="1bd56fb0-55cd-42f1-8fe8-4ae32e036166"
        version=""
        options='{"isVisible":"true", "isOpen":"false", "autoStart":"true", "env":"dev"}'
      />
    </div>
  )
}