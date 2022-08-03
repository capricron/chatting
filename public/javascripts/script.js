const loginButton = document.getElementById('loginButton');
const chatContainer = document.getElementById('chatContainer');
const loginContainer = document.getElementById('loginContainer');
const sendMessage = document.getElementById('sendMessage');
const message = document.getElementById('message');
const messageList = document.getElementById('messageList');

chatContainer.style.display = 'none';

loginButton.addEventListener('click', (e) => {
    e.preventDefault();
    console.log('login button clicked');
    chatContainer.style.display = 'block';
    loginContainer.style.display = 'none';
});

sendMessage.addEventListener('click', (e) => {
    e.preventDefault();
    if(message.value){
        socket.emit('message', message.value);

        let chatList = document.createElement('p');
        chatList.style.fontSize = '20px';
        chatList.textContent = message.value;
        console.log('send message button clicked');
        message.value = '';
        messageList.appendChild(chatList);
    }
});

socket.on('message', (msg) => {
    console.log('message received');
    let chatList = document.createElement('p');
    chatList.style.fontSize = '20px';
    chatList.style.color = 'red';
    chatList.textContent = msg;
    messageList.appendChild(chatList);
});