import React, { useState } from 'react';
import { Kanban } from 'react-kanban';

const KanbanBoard = () => {
  const [tasks, setTasks] = useState([
    { id: 1, title: 'To Do', description: 'This is a to-do task.' },
    { id: 2, title: 'In Progress', description: 'This is an in-progress task.' },
    { id: 3, title: 'Done', description: 'This is a done task.' },
  ]);

  const handleColumnChange = (taskId, newColumnId) => {
    const updatedTask = tasks.find((task) => task.id === taskId);
    updatedTask.title = newColumnId;

    setTasks([...tasks]);
  };

  return (
    <Kanban>
      <Column title="To Do">
        {tasks.filter((task) => task.title === 'To Do').map((task) => (
          <Task key={task.id} id={task.id} title={task.title} description={task.description} />
        ))}
      </Column>
      <Column title="In Progress">
        {tasks.filter((task) => task.title === 'In Progress').map((task) => (
          <Task key={task.id} id={task.id} title={task.title} description={task.description} />
        ))}
      </Column>
      <Column title="Done">
        {tasks.filter((task) => task.title === 'Done').map((task) => (
          <Task key={task.id} id={task.id} title={task.title} description={task.description} />
        ))}
      </Column>
    </Kanban>
  );
};

export default KanbanBoard;
