import React from 'react';

interface Props extends React.PropsWithChildren {
  message: string;
  onRemove: React.MouseEventHandler;
}



const Task: React.FC<Props> = ({message, onRemove}) => {

  return (
    <div className="task">
      {message}
      <button onClick={onRemove} className="delete-button">Delete</button>
    </div>
  );
};

export default Task;