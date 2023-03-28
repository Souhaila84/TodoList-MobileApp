export default function AddTaskForm({
    newTask,
    addTask,
    setNewTask,
    showUpdateButton,
    updateTask,
    updateData,
    setUpdateData,
    cancelUpdate,
  }) { const handleInputChange = (e) => {
    setNewTask(e.target.value);
    if (showUpdateButton) {
      setUpdateData({ ...updateData, title: e.target.value });
    }
  };

    return (
      <>
        <div>
          <input
            value={newTask}
            onChange={handleInputChange}
          ></input>
          {!showUpdateButton && (
          <button onClick={addTask} className="btn btn-success">
            Ajouter
          </button>
        )}
        {showUpdateButton && (
         <>
         <button onClick={updateTask} className="btn btn-primary">
           Modifier
         </button>
         <button onClick={cancelUpdate} className="btn btn-danger">
           Annuler
         </button>
       </>
        )}
        </div>
      </>
    );
  }

