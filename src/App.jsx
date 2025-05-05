import React, { useState, useEffect } from 'react';
import ChatMessage from './components/ChatMessage';
import ChatInput from './components/ChatInput';
import { GoogleGenerativeAI } from '@google/generative-ai';

const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: 'gemini-2.0-flash' });

const App = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    setMessages([{ text: "Hi there! How may I help you today?", isUser: false }]);
  }, []);

  const sendMessage = async (userInput) => {
    const userMessage = { text: userInput, isUser: true };
    setMessages((prev) => [...prev, userMessage]);

    try {
      const result = await model.generateContent([
        `${userInput}\nPlease format the response using bullet points with dots (•) at the beginning of each point.`
      ]);

      const response = await result.response;
      const text = response.text();

      setMessages((prev) => [...prev, { text, isUser: false }]);
    } catch (error) {
      console.error("Error fetching from Gemini API:", error);
      setMessages((prev) => [...prev, { text: "Error fetching response.", isUser: false }]);
    }
  };

  return (
    <div className="w-[350px] h-screen bg-gray-800 rounded-lg p-2 mx-2 my-2 flex flex-col overflow-hidden">
      <div className="flex-1 overflow-y-auto space-y-2 mb-2">
        {messages.map((msg, idx) => (
          <ChatMessage key={idx} message={msg} />
        ))}
      </div>
      <ChatInput onSend={sendMessage} />
    </div>
  );
};

export default App;
