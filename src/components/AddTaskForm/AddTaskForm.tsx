import React, {ChangeEvent, useState} from 'react';
import {Task} from '../../types';


interface Props {
  onSubmit: (task: Task) => void;
}


const AddTaskForm: React.FC<Props> = ({onSubmit}) => {
  const [taskData, setTaskData] = useState({
    message: '',
  });

  const onFieldChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {name, value} = event.target;

    setTaskData((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  const onFormSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    const task: Task = {
      ...taskData,
      message: taskData.message,
      id: Math.random().toString(),
    };

    onSubmit(task);
  };

  return (
    <form className="taskForm" onSubmit={onFormSubmit}>
      <h4>Create task</h4>
      <label>
        <input type="text" name="message" onChange={onFieldChange} className="task-input" placeholder="task"/>
      </label>
      <button type="submit" className="send-button">Add</button>
    </form>
  );
};

export default AddTaskForm;
