import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Calendar } from 'react-calendar'
import ReactImageGallery from 'react-image-gallery'
import AddTaskForm from './components/AddTaskForm'
import ToDo from './components/ToDo'
import UpdateForm from './components/UpdateForm'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [Todo, setTodo] = useState([
  ]);
  
  const[newTask, setNewTask] = useState('');
  const[updateData, setUpdateData] = useState('');


  const addTask = () => {
    if (newTask){
      console.log(newTask);
      let num = Todo.length + 1;
      let newEntry = {id: num, title:  newTask, status: false};
      setTodo([...Todo, newEntry])
      setNewTask('');
  }
}
  
  const cancelUpdate = () => {
    setUpdateData('');
  }


  const deleteTask = (id) => {
    let newTasks = Todo.filter (task => task.id !==id);
    setTodo(newTasks);
  }

  
  function CheckBoxWithText(props) {
    const [isChecked, setIsChecked] = useState(false);
  
    function handleCheckBoxChange() {
      setIsChecked(!isChecked);
    }
  
    return (
      <div>
        <input className="form-check-input"  name="inlineRadioOptions" type="checkbox" checked={isChecked} onChange={handleCheckBoxChange} />
        <span style={{ textDecoration: isChecked ? "line-through" : "none" }}>
          {props.text}
        </span>
      </div>
    );
}

  const changeTask = (e) =>{
    let newEntry = {
    id: updateData.id,
    title: e.target.value,
    status: updateData.status ? true : false
  }
  setUpdateData(newEntry);
}

const updateTask = () => {
  let filterRecords = Todo.filter(task => task.id !== updateData.id);
  let updatedObject = [...filterRecords, updateData]
  setTodo(updatedObject);    
  setUpdateData('');
}

const editTask = (id, task) => {
  setUpdateData(task);
  setNewTask(task.title);
};

  return (
    <div className="App" >
       <h1>To do List</h1>
       <br/>
       <br/>
      <AddTaskForm setNewTask={setNewTask} newTask={newTask} addTask={addTask}></AddTaskForm>
      {Todo && Todo.length ? '' : 'No Tasks....' }
      <ToDo Todo={Todo} deleteTask={deleteTask} updateTask={<UpdateForm updateData={updateData} changeTask={changeTask} cancelUpdate={cancelUpdate} updateTask={updateTask} />
} CheckBoxWithText={CheckBoxWithText}></ToDo>
    </div>
  )
}

export default App;
