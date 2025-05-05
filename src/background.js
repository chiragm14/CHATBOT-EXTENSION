// chrome.runtime.onInstalled.addListener(() => {
//     console.log("Gemini Chatbot extension installed");
// });


chrome.runtime.onInstalled.addListener(() => {
    chrome.sidePanel.setPanelBehavior({ openPanelOnActionClick: true });
});
