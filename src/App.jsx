import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Calendar } from 'react-calendar'
import ReactImageGallery from 'react-image-gallery'
import AddTaskForm from './components/AddTaskForm'
import ToDo from './components/ToDo'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [Todo, setTodo] = useState([
  ]);
  
  const[newTask, setNewTask] = useState('');
  const[updateData, setUpdateData] = useState('');
  const[showUpdateButton, setShowUpdateButton] = useState(false);

  const addTask = () => {
    if (newTask){
      console.log(newTask);
      let num = Todo.length + 1;
      let newEntry = {id: num, title:  newTask, status: false};
      setTodo([...Todo, newEntry])
      setNewTask('');
  }
}
  

  const afficherListe = () => {
    return Todo.map(element => (
      <div key={element.id}>
        <p>{element.title}</p>
      </div>
    ));
  };

  const cancelUpdate = () => {
    setNewTask('');
    setUpdateData(null);
    setShowUpdateButton(false);
  };


  const deleteTask = (id) => {
    let newTasks = Todo.filter((task) => task.id !== id);
    newTasks = newTasks.map((task, index) => {
      return { ...task, id: index + 1 };
    });
    setTodo(newTasks);
  };
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
  let filterRecords = [...Todo].filter(task => task.id !== updateData.id); 
  let updatedObject = [...filterRecords, updateData];
  setTodo(updatedObject);
  setUpdateData(null);
  setShowUpdateButton(false);
}


  const editTask = (id) => {
    const taskToUpdate = Todo.find(task => task.id === id);
    setUpdateData(taskToUpdate);
    setNewTask(taskToUpdate.title);
    setShowUpdateButton(true);
  };

  return (
    <div className="App" >
       <h1>To do List</h1>
       <br/>
       <br/>
       <AddTaskForm
        setNewTask={setNewTask}
        newTask={newTask}
        addTask={addTask}
        showUpdateButton={showUpdateButton}
        updateTask={updateTask}
        updateData={updateData}
        setUpdateData={setUpdateData}
        cancelUpdate={cancelUpdate}
      ></AddTaskForm>
      {Todo && Todo.length ? '' : 'No Tasks....'}
      <ToDo
        Todo={Todo}
        deleteTask={deleteTask}
        CheckBoxWithText={CheckBoxWithText}
        editTask={editTask}
      ></ToDo>

    </div>
  )
}

export default App;
