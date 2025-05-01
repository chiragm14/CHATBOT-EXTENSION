import React from 'react';

const ChatMessage = ({ message }) => {
    return (
        <div
            className={`flex items-start ${message.isUser ? 'justify-end' : 'justify-start'} space-x-3 mb-2`}
        >
            {/* Avatar */}
            <div className="flex-shrink-0">
                <img
                    src={message.isUser ? '/user-avatar.png' : '/ai-avatar.png'} // Replace with your avatar images
                    alt={message.isUser ? 'User' : 'AI'}
                    className="w-8 h-8 rounded-full"
                />
            </div>
            {/* Message */}
            <div
                className={`p-2 whitespace-pre-wrap ${message.isUser ? 'bg-blue-500' : 'bg-gray-700'} text-white rounded-lg`}
            >
                {message.text}
            </div>
        </div>
    );
};

export default ChatMessage;













// import React from "react";

// const ChatMessage = ({ message }) => {
//     return (
//         <div
//             className={`p-2 whitespace-pre-wrap ${message.isUser ? "bg-blue-500" : "bg-gray-700"
//                 } text-white rounded-lg`}
//         >
//             {message.text}
//         </div>
//     );
// };

// export default ChatMessage;
