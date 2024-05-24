import './App.css';
import AddTaskForm from './components/AddTaskForm/AddTaskForm';
import {useState} from 'react';
import TaskType from './types';
import Task from './components/Task/Task';


const App = () => {

  const [tasks, setTasks] = useState<TaskType[]>([
    {message: 'First mission: find and detain killer knight', id: 'f1'},
    {message: 'second mission: find and drink agusha', id: 's1 '}
  ]);

  const createTask = (newTask: TaskType) => {
    setTasks((prevState) => {
      return [...prevState, newTask];
    });
  };

  const removeTask = (id: string) => {
    setTasks((prevState) => {
      return prevState.filter((task) => task.id !== id);
    });
  };


  const taskList = tasks.map((task) => {
      return (
        <Task
          key={task.id}
          message={task.message}
          onRemove={() => removeTask(task.id)}
        >
        </Task>
      );
    })
    ;

    return (
      <>
        <AddTaskForm onSubmit={createTask}/>
        {taskList}
      </>
    );
  };

  export default App;
