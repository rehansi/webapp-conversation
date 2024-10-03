import { useEffect, useRef, useState } from 'react'
import { BsThreeDots } from 'react-icons/bs'
import { FaMinus, FaPaperPlane, FaRobot } from 'react-icons/fa'

const ChatBubble = () => {
    const [messages, setMessages] = useState([
        { text: 'Hello! I am AI-Alaya, your guide at LinkinLegal. Let me help you to navigate LinkinLegal and its comprehensive collection of laws, regulations, contracts, and show you how to use our tools like Compliance Check, Guideline Check, Templates Check and the personalized Law Library from your dashboard. Let\'s simplify your legal tasks together!', isBot: true },
    ])
    const [isExpanded, setIsExpanded] = useState(false)
    const [isTyping, setIsTyping] = useState(false)
    const [inputMessage, setInputMessage] = useState('')
    const chatRef = useRef(null)

    useEffect(() => {
        if (chatRef.current)
            chatRef.current.scrollTop = chatRef.current.scrollHeight
    }, [messages])

    const toggleExpand = () => {
        setIsExpanded(!isExpanded)
    }

    const simulateNewMessage = (userMessage) => {
        setIsTyping(true)
        setTimeout(() => {
            setMessages([...messages, { text: userMessage, isBot: false }, { text: 'I\'m here to assist you with LinkinLegal. What specific aspect would you like to know more about?', isBot: true }])
            setIsTyping(false)
        }, 2000)
    }

    const handleSendMessage = () => {
        if (inputMessage.trim() !== '') {
            simulateNewMessage(inputMessage)
            setInputMessage('')
        }
    }

    const handleKeyPress = (e) => {
        if (e.key === 'Enter')
            handleSendMessage()
    }

    return (
        <div className={`fixed top-10 right-10 ${isExpanded ? 'w-96 h-[80vh]' : 'w-16 h-16'} bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 ease-in-out`}>
            <div className="bg-[#001d47] text-white h-full flex flex-col">
                {isExpanded
                    ? (
                        <>
                            <div className="p-2 flex justify-between items-center">
                                <div className="flex items-center">
                                    <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center mr-2">
                                        <FaRobot className="text-[#001d47]" />
                                    </div>
                                    <span className="font-bold text-sm">AI-Alaya</span>
                                </div>
                                <button
                                    onClick={toggleExpand}
                                    className="w-6 h-6 bg-white rounded-full flex items-center justify-center text-[#001d47] hover:bg-gray-200 transition-colors duration-300"
                                    aria-label="Collapse chat"
                                >
                                    <FaMinus size={12} />
                                </button>
                            </div>
                            <div
                                ref={chatRef}
                                className="flex-grow overflow-y-auto p-2 space-y-2"
                                tabIndex="0"
                                aria-live="polite"
                            >
                                {messages.map((message, index) => (
                                    <div
                                        key={index}
                                        className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
                                    >
                                        <div
                                            className={`max-w-3/4 p-2 rounded-lg ${message.isBot
                                                ? 'bg-gray-200 text-gray-800'
                                                : 'bg-black text-white'
                                                } shadow-md transition-all duration-300 ease-in-out hover:shadow-lg`}
                                        >
                                            <p className="text-sm">
                                                {message.text.split(' ').map((word, i) =>
                                                    word.startsWith('http')
                                                        ? (
                                                            <a
                                                                key={i}
                                                                href={word}
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                                className="text-blue-300 hover:underline"
                                                            >
                                                                {word}
                                                            </a>
                                                        )
                                                        : (
                                                            `${word} `
                                                        ),
                                                )}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                                {isTyping && (
                                    <div className="flex justify-start">
                                        <div className="bg-gray-200 text-gray-800 p-2 rounded-lg shadow-md">
                                            <BsThreeDots className="animate-pulse" />
                                        </div>
                                    </div>
                                )}
                            </div>
                            <div className="p-2 border-t flex items-center">
                                <input
                                    type="text"
                                    value={inputMessage}
                                    onChange={e => setInputMessage(e.target.value)}
                                    onKeyPress={handleKeyPress}
                                    placeholder="Type your message..."
                                    className="flex-grow bg-white text-gray-800 py-2 px-3 rounded-l-lg focus:outline-none text-sm"
                                />
                                <button
                                    onClick={handleSendMessage}
                                    className="bg-[#001d47] text-white py-2 px-4 rounded-r-lg hover:bg-[#001d47]/90 transition-colors duration-300 text-sm"
                                    aria-label="Send message"
                                >
                                    <FaPaperPlane />
                                </button>
                            </div>
                        </>
                    )
                    : (
                        <button
                            onClick={toggleExpand}
                            className="w-full h-full flex items-center justify-center"
                            aria-label="Expand chat"
                        >
                            <FaRobot size={24} />
                        </button>
                    )}
            </div>
        </div>
    )
}

export default ChatBubble
