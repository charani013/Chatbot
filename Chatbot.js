let chatboxContainer = document.getElementById("chatContainer");
let userInput = document.getElementById("userInput");

let chatbotMsgList = ["Hi", "Hey", "Good Morning", "Good Evening", "How can I help you?", "Thank You"];

function sendBunttonJs() {
    let userInputValue = userInput.value;
    let pargraphContainer = document.createElement("p");
    pargraphContainer.classList.add("msg-to-chatbot", "msg-to-chatbot-container");
    pargraphContainer.textContent = userInputValue;
    chatboxContainer.appendChild(pargraphContainer);

    userInput.value = "";
    fromReplayChat();
}

function fromReplayChat() {

    let chatBoxMsg = chatbotMsgList.length;
    let chatBoxMsgCeil = chatbotMsgList[Math.ceil(Math.random() * chatBoxMsg) - 1]

    let pargraphContainerFrom = document.createElement("p");
    pargraphContainerFrom.classList.add("msg-from-chatbot-container", "msg-from-chatbot");
    pargraphContainerFrom.textContent = chatBoxMsgCeil;
    chatboxContainer.appendChild(pargraphContainerFrom);
}