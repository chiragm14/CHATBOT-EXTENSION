// content.js
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === "openChat") {
        // Open the chat UI on the page (you can add a button here to trigger the UI)
        const chatContainer = document.createElement("div");
        chatContainer.id = "gemini-chatbot-container";
        document.body.appendChild(chatContainer);
    }
});
