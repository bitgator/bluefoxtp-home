"use client"

import type React from "react"
import { useState, useRef } from "react"
import { Input } from "./components/ui/input"
import { Button } from "./components/ui/button"
import { Card, Text } from "@mantine/core"
import { Sparkles, User, Send } from "lucide-react"
import { cn } from "./lib/utils"
import logo from "../public/images/bluefox-logo-blue.png"
import avatar from "../public/images/bluefox-logo-blue-square.png"

interface Message {
  id: string
  content: string
  sender: "user" | "assistant"
  timestamp: Date
}

export default function CopilotChat() {
  const [chatStarted, setChatStarted] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      content: "Hello! I'm Chatty McChatterson, your IT assistant. How can I help you today?",
      sender: "assistant",
      timestamp: new Date(),
    },
  ])
  const [inputValue, setInputValue] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  // useEffect(() => {
  //   if (chatStarted) scrollToBottom()
  // }, [messages, chatStarted])

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return
    if (!chatStarted) setChatStarted(true)

    const userMessage: Message = {
      id: Date.now().toString(),
      content: inputValue,
      sender: "user",
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInputValue("")
    setIsTyping(true)

    setTimeout(() => {
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: "Got it! Here's a helpful response (simulated).",
        sender: "assistant",
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, assistantMessage])
      setIsTyping(false)
    }, 1500)
  }

  const handleCardClick = (title: string) => {
    setChatStarted(true)
    handleSendMessageFromCard(title)
  }

  const handleSendMessageFromCard = (text: string) => {
    const message: Message = {
      id: Date.now().toString(),
      content: text,
      sender: "user",
      timestamp: new Date(),
    }
    setMessages((prev) => [...prev, message])
    setIsTyping(true)
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          content: `Let’s explore the issue: ${text}`,
          sender: "assistant",
          timestamp: new Date(),
        },
      ])
      setIsTyping(false)
    }, 1000)
  }

  return (
    <div className="min-h-screen flex flex-col items-center px-4 relative main-container" style={{backgroundColor: '#f0f0f0'}}>
      <div className="pt-20">
        <img
          src={logo}
          alt="BLUEFOX Technology Partners"
          style={{ height: '120px', marginBottom: '16px', display: 'block', marginLeft: 'auto', marginRight: 'auto' }}
        />
      </div>
      {!chatStarted ? (
        <>
          <h2 className="text-center mb-8">How can we help you today?</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-32 max-w-5xl w-full">
            {[
              "Computer Issues",
              "File or Network Access",
              "Printing or Scanning Problems",
              "Software",
            ].map((title) => (
              <Card
                key={title}
                onClick={() => handleCardClick(title)}
                shadow="sm"
                padding="lg"
                radius="md"
                withBorder
                style={{ cursor: 'pointer', transition: 'box-shadow 0.2s' }}
                onMouseEnter={(e) => (e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)')}
                onMouseLeave={(e) => (e.currentTarget.style.boxShadow = '')}
              >
                <Text fw={600} size="sm" mb="xs">{title}</Text>
                <Text size="xs" c="dimmed">
                  Doner filet mignon swine hamburger corned beef porchetta tongue rump.
                </Text>
              </Card>
            ))}
          </div>

          <div className="h-28" />
        </>
      ) : (
        <div className="w-full max-w-5xl h-[80vh] bg-white rounded-xl shadow-md flex flex-col">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-200">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center">
                <img src={avatar} className="" />
              </div>
              <div>
                <h1 className="text-lg font-semibold text-gray-900">CloudRadial Chat</h1>
                <p className="text-sm text-gray-500">Your IT assistant</p>
              </div>
            </div>

            {/* Close Button */}
            <button
              onClick={() => setChatStarted(false)}
              className="text-sm text-blue-600 hover:underline focus:outline-none"
            >
              Close
            </button>
          </div>

          <div className="h-32" />

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 pb-44">
            {messages.map((message) => (
              <div
                key={message.id}
                className={cn("flex gap-3 max-w-4xl", message.sender === "user" ? "ml-auto flex-row-reverse" : "mr-auto")}
              >
                <div
                  className={cn(
                    "w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0",
                    message.sender === "user" ? "bg-blue-100" : "",
                  )}
                >
                  {message.sender === "user" ? (
                    <User className="w-4 h-4 text-blue-600" />
                  ) : (
                    <img src={avatar} className="" />
                  )}
                </div>

                <div className={cn("flex flex-col gap-1", message.sender === "user" ? "items-end" : "items-start")}>
                  <div
                    className={cn(
                      "px-4 py-3 rounded-2xl max-w-2xl",
                      message.sender === "user"
                        ? "bg-blue-600 text-white rounded-br-md"
                        : "bg-gray-100 text-gray-900 rounded-bl-md",
                    )}
                  >
                    <p className="text-sm leading-relaxed whitespace-pre-wrap">{message.content}</p>
                  </div>
                  <span className="text-xs text-gray-500 px-2">
                    {message.timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                  </span>
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex gap-3 max-w-4xl mr-auto">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-blue-600 flex items-center justify-center flex-shrink-0">
                  <Sparkles className="w-4 h-4 text-white" />
                </div>
                <div className="bg-gray-100 px-4 py-3 rounded-2xl rounded-bl-md">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                  </div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>
        </div>
      )}
      <div className="fixed bottom-10 w-full flex justify-center">
        <div className="max-w-4xl w-full px-4">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center gap-2">
              <Input
                placeholder={chatStarted ? "Ask me anything..." : "How can I help you today?"}
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={(e) => {
                  if (e.key === "Enter") handleSendMessage()
                }}
                className="flex-1"
                ref={inputRef}
                disabled={isTyping}
              />
              <Button
                className="text-blue-600"
                onClick={handleSendMessage}
                disabled={!inputValue.trim() || isTyping}
              >
                <Send className="w-4 h-4" />
              </Button>
            </div>
            <div className="text-right mt-2 text-xs text-blue-700 font-medium cursor-pointer">
              Previous Chats
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}