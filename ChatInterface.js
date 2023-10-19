import React from 'react';
import { Socket } from 'socket.io';

const ChatInterface = ({ socket }) => {
  const [messages, setMessages] = React.useState([]);

  socket.on('message', (message) => {
    setMessages((prevMessages) => [...prevMessages, message]);
  });

  return (
    <div>
      <ul>
        {messages.map((message) => (
          <li key={message.id}>{message.sender}: {message.text}</li>
        ))}
      </ul>
      <input type="text" placeholder="Enter your message..." />
      <button onClick={() => socket.emit('message', { text: 'Hello from React!' })}>Send</button>
    </div>
  );
};

export default ChatInterface;
