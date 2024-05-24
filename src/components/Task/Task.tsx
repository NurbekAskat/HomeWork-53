import React from 'react';

interface Props extends React.PropsWithChildren {
  message: string;
  onRemove: React.MouseEventHandler;
}



const Task: React.FC<Props> = ({message, onRemove}) => {

  return (
    <div>
      <h1>{message}</h1>
      <button onClick={onRemove}>Delete</button>
    </div>
  );
};

export default Task;