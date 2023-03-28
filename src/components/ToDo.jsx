import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faTrashCan } from '@fortawesome/free-solid-svg-icons';

const ToDo = ({ Todo, editTask, deleteTask, CheckBoxWithText }) => {
  return (
    <>
      {Todo &&
        Todo.sort((a, b) => a.id - b.id)
          .map((task, index) => {
            return (
              <React.Fragment key={task.id}>
                <div className="col taskBg">
                  <div className={task.status ? 'done' : ''}>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                      <span className="taskNumber">{task.id}. </span>
                      <span>
                        <CheckBoxWithText text={task.title} />
                      </span>
                    </div>
                    <div className="editDeleteIcons">
                      {!task.status && (
                        <span
                          title="Modifier"
                          onClick={() => {
                            editTask(task.id);
                          }}
                          style={{ marginRight: 10 }}
                        >
                          <FontAwesomeIcon icon={faPen} />
                        </span>
                      )}
                      <span
                        title="Supprimer"
                        onClick={() => deleteTask(task.id)}
                      >
                        <FontAwesomeIcon icon={faTrashCan} />
                      </span>
                    </div>
                  </div>
                </div>
              </React.Fragment>
            );
          })}
    </>
  );
};

export default ToDo;
