import React, { useState } from 'react';

const TaskItem = ({ task, updateTask, deleteTask }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [updatedTask, setUpdatedTask] = useState(task);

  const handleUpdate = () => {
    updateTask(updatedTask);
    setIsEditing(false);
  };

  return (
    <li className="task-item">
      {isEditing ? (
        <div className="edit-form">
          <input
            type="text"
            value={updatedTask.title}
            onChange={(e) => setUpdatedTask({ ...updatedTask, title: e.target.value })}
          />
          <textarea
            value={updatedTask.description}
            onChange={(e) => setUpdatedTask({ ...updatedTask, description: e.target.value })}
          />
          <input
            type="date"
            value={updatedTask.due_date}
            onChange={(e) => setUpdatedTask({ ...updatedTask, due_date: e.target.value })}
          />
          <label>
            Completed:
            <input
              type="checkbox"
              checked={updatedTask.status}
              onChange={(e) => setUpdatedTask({ ...updatedTask, status: e.target.checked })}
            />
          </label>
          <button onClick={handleUpdate}>Save</button>
        </div>
      ) : (
        <div className="task-details">
          <h2>{task.title}</h2>
          <p>{task.description}</p>
          <p>Due Date: {task.due_date}</p>
          <p>Status: {task.status ? 'Completed' : 'Not Completed'}</p>
          <div className="button-container">
            <button onClick={() => setIsEditing(true)}>Edit</button>
            <button onClick={() => deleteTask(task.id)}>Delete</button>
          </div>
        </div>
      )}
    </li>
  );
};

export default TaskItem;
