export default function AddTaskForm({newTask, addTask, setNewTask}){
    return(
        <>
        {}
        <div>
        <input value={newTask} onChange={(e) => setNewTask(e.target.value)}></input>
            <button onClick={addTask} className="btn btn-success">Add</button>
        </div>
        </>
    )
}

