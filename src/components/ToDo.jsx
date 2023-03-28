import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck, faPen, faTrashAlt, faTimes } from '@fortawesome/free-solid-svg-icons'

const ToDo = ({Todo, deleteTask, CheckBoxWithText}) => {
  const [editTaskId, setEditTaskId] = useState(null);
  const [editTaskValue, setEditTaskValue] = useState('');
  
  const handleEditTaskChange = (e) => {
    setEditTaskValue(e.target.value);
  }

  const handleEditTaskCancel = () => {
    setEditTaskId(null);
    setEditTaskValue('');
  }

  const handleEditTaskSave = (id) => {
    const updatedTask = Todo.map(task => {
      if (task.id === id) {
        return {
          ...task,
          title: editTaskValue
        };
      }
      return task;
    });

    updateTask(updatedTask);
    setEditTaskId(null);
    setEditTaskValue('');

  }

  const updateTask = (updatedTask) => {
    setTodo(updatedTask);
  }

  const editTask = (id, title) => {
    setEditTaskId(id);
    setEditTaskValue(title);
  }

  return (
    <>
      {Todo && Todo.map((task) => {
        return (
          <React.Fragment key={task.id}>
            <div className='col taskBg'>
              <div className={task.status ? 'done' : ''}>
                {editTaskId === task.id ? (
                  <>
                    <input type="text" value={editTaskValue} onChange={handleEditTaskChange} />
                    <button onClick={() => handleEditTaskSave(task.id)}>Save</button>
                    <button onClick={() => handleEditTaskCancel()}>Cancel</button>
                  </>
                ) : (
                  <>
                    <span className="taskNumber"><CheckBoxWithText text={task.title} /></span>
                    <span> </span>
                    {task.status ? null : (
                     <span title="Edit" onClick={() => editTask(task.id, task.title)}>
                     <FontAwesomeIcon icon={faPen}/>
                   </span>
                    )}
                    <span title="Delete" onClick={() => deleteTask(task.id)}>
                      <FontAwesomeIcon icon={faTrashAlt} />
                    </span>
                  </>
                )}
              </div>
              
            </div>
          </React.Fragment>
        )
      })}
    </>
  )
}

export default ToDo;
