"use client"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { MessageSquare, X, Send, Bot, User } from "lucide-react"
import { cn } from "@/lib/utils"

const API_URL = "https://khushboo-portfolio-backend.onrender.com/chat";

type Message = {
  role: "user" | "assistant"
  content: string
}

export function AiChatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "user",
      content: "Hi! I'm Khushboo's AI Assistant. Ask me anything about her projects, skills, or experience!",
    },
  ])
  const [inputValue, setInputValue] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages, isOpen])

  const fetchAiResponse = async (userMessage: string, conversationHistory: Message[]) => {
    try {
      // Prepare the history in the format required by your FastAPI backend
      const historyPayload = conversationHistory
        .filter(msg => msg.role !== 'system') // System message is already handled in the backend
        .map(msg => ({ role: msg.role, content: msg.content }));

      const response = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          message: userMessage, 
          history: historyPayload 
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      // The FastAPI response model is { reply: string }
      return data.reply; 

    } catch (error) {
      console.error("Error connecting to AI Twin API:", error);
      return "I apologize, but I am having trouble connecting to the knowledge base right now. Please check your network or try again later!";
    }
  };
  
  const handleSend = async () => {
    if (!inputValue.trim()) return

    // Add user message
    const userMessageContent = inputValue.trim()
    const userMessage: Message = { role: "user", content: userMessageContent }
    setMessages((prev) => [...prev, userMessage])
    setInputValue("")
    setIsTyping(true)

    try {
      // Include the just-sent user message in the conversation history we send to the API
      const conversationHistory = [...messages, userMessage]
      const responseText = await fetchAiResponse(userMessageContent, conversationHistory)

      // Append assistant reply
      setMessages((prev) => [...prev, { role: "assistant", content: responseText }])
    } catch (error) {
      console.error("Error fetching AI response:", error)
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            "I apologize, but I am having trouble connecting to the knowledge base right now. Please check your network or try again later!",
        },
      ])
    } finally {
      setIsTyping(false)
    }
  }

  return (
    <div className="fixed bottom-20 md:bottom-24 right-4 z-50 flex flex-col items-end">
      {isOpen && (
        <Card className="w-[300px] md:w-[350px] h-[450px] md:h-[500px] mb-4 shadow-xl border-[#66fcf1]/30 bg-[#0b0c10]/95 backdrop-blur-md flex flex-col animate-in slide-in-from-bottom-5 duration-300">
          <CardHeader className="bg-[#1f2833]/50 border-b border-white/10 py-3 px-4 flex flex-row items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="p-1.5 bg-[#66fcf1]/10 rounded-full">
                <Bot className="h-4 w-4 text-[#66fcf1]" />
              </div>
              <div className="flex flex-col">
                <CardTitle className="text-sm font-medium text-white font-mono">Portfolio Assistant</CardTitle>
                <span className="text-[10px] text-[#66fcf1] flex items-center gap-1 font-mono">
                  <span className="block w-1.5 h-1.5 rounded-full bg-[#66fcf1] animate-pulse" />
                  Online
                </span>
              </div>
            </div>
            <Button
              variant="ghost"
              size="icon"
              className="h-6 w-6 text-gray-400 hover:text-white"
              onClick={() => setIsOpen(false)}
            >
              <X className="h-4 w-4" />
            </Button>
          </CardHeader>

          <CardContent className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-gray-800 scrollbar-track-transparent">
            {messages.map((message, index) => (
              <div
                key={index}
                className={cn(
                  "flex gap-2 max-w-[85%]",
                  message.role === "user" ? "ml-auto flex-row-reverse" : "mr-auto",
                )}
              >
                <div
                  className={cn(
                    "w-6 h-6 rounded-full flex items-center justify-center shrink-0 border border-white/10",
                    message.role === "user" ? "bg-[#66fcf1] text-[#0b0c10]" : "bg-[#1f2833] text-[#66fcf1]",
                  )}
                >
                  {message.role === "user" ? <User className="h-3 w-3" /> : <Bot className="h-3 w-3" />}
                </div>
                <div
                  className={cn(
                    "rounded-lg px-3 py-2 text-sm font-mono",
                    message.role === "user"
                      ? "bg-[#66fcf1] text-[#0b0c10]"
                      : "bg-[#1f2833] text-gray-300 border border-white/5",
                  )}
                >
                  {message.content}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex gap-2 mr-auto max-w-[80%]">
                <div className="w-6 h-6 rounded-full bg-[#1f2833] text-[#66fcf1] flex items-center justify-center shrink-0 border border-white/10">
                  <Bot className="h-3 w-3" />
                </div>
                <div className="bg-[#1f2833] text-gray-300 border border-white/5 rounded-lg px-3 py-2 text-sm flex items-center gap-1">
                  <span className="w-1.5 h-1.5 bg-[#66fcf1] rounded-full animate-bounce [animation-delay:-0.3s]" />
                  <span className="w-1.5 h-1.5 bg-[#66fcf1] rounded-full animate-bounce [animation-delay:-0.15s]" />
                  <span className="w-1.5 h-1.5 bg-[#66fcf1] rounded-full animate-bounce" />
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </CardContent>

          <CardFooter className="p-3 border-t border-white/10 bg-[#0b0c10]/50 backdrop-blur-sm">
            <form
              onSubmit={(e) => {
                e.preventDefault()
                handleSend()
              }}
              className="flex w-full gap-2"
            >
              <Input
                placeholder="Ask about my skills..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                className="flex-1 text-sm h-9 bg-[#1f2833] border-gray-700 text-gray-200 focus:border-[#66fcf1] font-mono"
              />
              <Button
                type="submit"
                size="icon"
                className="h-9 w-9 bg-[#66fcf1] hover:bg-[#45a29e] text-[#0b0c10] border-2 border-[#1f2833]"
                disabled={!inputValue.trim() || isTyping}
              >
                <Send className="h-4 w-4" />
              </Button>
            </form>
          </CardFooter>
        </Card>
      )}

      <Button
        onClick={() => setIsOpen(!isOpen)}
        size="lg"
        className="rounded-full h-14 w-14 shadow-[0_0_20px_rgba(102,252,241,0.3)] bg-[#66fcf1] hover:bg-[#45a29e] text-[#0b0c10] border-2 border-[#1f2833]"
      >
        {isOpen ? <X className="h-6 w-6" /> : <MessageSquare className="h-6 w-6" />}
      </Button>
    </div>
  )
}
