import React, { useState } from 'react';

const ChatInput = ({ onSend }) => {
    const [input, setInput] = useState('');

    const handleSend = () => {
        if (input.trim()) {
            onSend(input);
            setInput('');
        }
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') handleSend();
    };

    return (
        <div className="flex">
            <input
                type="text"
                className="flex-1 p-2 rounded-l-lg bg-gray-600 text-white focus:outline-none"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Type a message..."
            />
            <button
                onClick={handleSend}
                className="bg-blue-600 text-white px-3 rounded-r-lg"
            >
                Send
            </button>
        </div>
    );
};

export default ChatInput;
