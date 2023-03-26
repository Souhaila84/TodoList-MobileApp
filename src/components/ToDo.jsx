import React from 'react';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCircleCheck, faPen, faTrashCan} from '@fortawesome/free-solid-svg-icons'

const ToDo = ({Todo, editTask, deleteTask, CheckBoxWithText}) => {
            return(
                <>
                 {Todo && Todo 
                 .map((task, index) => {
                    return(
                        <React.Fragment key={task.id}>
                            <div className='col taskBg'>
                                <div className={task.status ? 'done' : ''}>
                                    <span className="taskNumber"> <CheckBoxWithText text={task.title}/> </span>
                                    <span>                             </span>    
                                    {task.status ? null :(
                                        <span title="Edit"
                                        onClick={() => editTask(id)}
                                        >
                                        <FontAwesomeIcon icon={faPen}/>
                                        </span>
                                    )}
                                    <span title="Delete"
                                    onClick={() => deleteTask(task.id)}>
                                        <FontAwesomeIcon icon={faTrashCan}/>
                                    </span>
                                </div>
                            </div>
                        </React.Fragment>
                    )
                 })}
                </>
            )
        }

export default ToDo;
