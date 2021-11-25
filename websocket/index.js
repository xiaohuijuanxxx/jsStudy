/**
 * 在 JavaScript 中，我们想要做三件事：

    打开连`接。
    在表单提交中 —— socket.send(message) 用于消息。
    对于传入`的消息 —— 将其附加（append）到 div#messages 上。
 */
let socket = new WebSocket("wss://javascript.info/article/websocket/chat/ws");

// 从表单发送消息
document.forms.publish.onsubmit = function() {
    let outgoingMessage = this.message.value;

    socket.send(outgoingMessage);
    return false;
};

// 收到消息 —— 在 div#messages 中显示消息
socket.onmessage = function(event) {
    let message = event.data;

    let messageElem = document.createElement('div');
    messageElem.textContent = message;
    document.getElementById('messages').prepend(messageElem);
}