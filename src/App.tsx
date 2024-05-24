import './App.css';
import AddTaskForm from './components/AddTaskForm/AddTaskForm';
import {useState} from 'react';
import TaskType from './types';
import Task from './components/Task/Task';


const App = () => {

  const [tasks, setTasks] = useState<TaskType[]>([
    {message: 'Jane', id: 'j1'},
    {message: 'sc', id: 'xsc '}
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
