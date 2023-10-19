import React, { useState, useEffect } from 'react';
import { Socket } from 'socket.io';
import ChatInterface from './ChatInterface';
import KanbanBoard from './KanbanBoard';

const App = () => {
  const [socket, setSocket] = React.useState(null);
  const [messages, setMessages] = React.useState([]);
  const [tasks, setTasks] = React.useState([]);

  useEffect(() => {
    const socket = new Socket('http://localhost:3000');
    setSocket(socket);

    socket.on('message', (message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    });

    socket.on('task-update', (task) => {
      setTasks((prevTasks) => {
        const updatedTasks = prevTasks.map((prevTask) => {
          if (prevTask.id === task.id) {
            return task;
          }

          return prevTask;
        });

        return updatedTasks;
      });
    });
  }, []);

  return (
    <div>
      <ChatInterface socket={socket} messages={messages} />
      <KanbanBoard tasks={tasks} />
    </div>
  );
};

export default App;
