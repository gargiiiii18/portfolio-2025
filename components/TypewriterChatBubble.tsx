'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const TypewriterChatBubble = () => {
  const [displayedText, setDisplayedText] = useState('')
  const [isTyping, setIsTyping] = useState(true)
  const [showBubble, setShowBubble] = useState(false)
  
  const fullText = "welcome to my portfolio"
  const typingSpeed = 100 // milliseconds per character

  useEffect(() => {
    // Start showing the bubble
    setShowBubble(true)
    
    // Start typing effect
    let currentIndex = 0
    const typingInterval = setInterval(() => {
      if (currentIndex < fullText.length) {
        setDisplayedText(fullText.slice(0, currentIndex + 1))
        currentIndex++
      } else {
        setIsTyping(false)
        clearInterval(typingInterval)
        
        // Hide bubble after 5.5 seconds
        setTimeout(() => {
          setShowBubble(false)
        }, 3000)
      }
    }, typingSpeed)

    return () => clearInterval(typingInterval)
  }, [])

  if (!showBubble) return null

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 1 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -20, scale: 1}}
      transition={{ duration: 0.5 }}
      className="w-44 md:w-52 absolute top-16 md:top-52 md:right-28 right-4 z-10"
    >
      {/* Chat bubble */}
      <div className="relative inline-block bg-white text-gray-800 px-4 py-3 rounded-2xl shadow-lg border-2 border-gray-200 text-left">
        {/* Speech bubble tail */}

        <div className="absolute top-full left-5 transform -translate-x-3">
          <div className="w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-white"></div>
        </div>
        
        {/* Text content */}
        <div className="text-xs md:text-sm font-mono whitespace-pre">
          {displayedText}
          {isTyping && (
            <motion.span
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 0.8, repeat: Infinity }}
              className="ml-1"
            >
              |
            </motion.span>
          )}
        </div>
      </div>
    </motion.div>

  )
}

export default TypewriterChatBubble
