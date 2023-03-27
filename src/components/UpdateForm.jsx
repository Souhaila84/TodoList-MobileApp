import React from "react";

export default function UpdateForm({updateData, changeTask, updateTask, cancelUpdate}) {
    return (
      <div className="UpdateForm">
        <input type="text" onChange={changeTask} value={updateData.title} />
        <button onClick={updateTask}>Save</button>
        <button onClick={cancelUpdate}>Cancel</button>
      </div>
    );
  }