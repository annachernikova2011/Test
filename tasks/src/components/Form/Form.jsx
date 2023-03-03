import React, { useRef, useState } from 'react';
import OneItem from '../OneItem/OneItem';
import Button from '../UI/Button/Button';
import classes from './Form.module.css';

export default function Form() {
  const [tasks, setTasks] = useState([]);
  const inputTask = useRef('');
  const send = () => {
    const task = inputTask.current;
    setTasks((prev) => [...prev, task.value]);
  };
  // console.log(Array.isArray(tasks));
  return (
    <div>
      <div className={classes.container}>
        <div>

          <input ref={inputTask} type="text" placeholder="Введите tasks" />
          <Button send={send} />
        </div>
        <div>

          <input type="text" placeholder="Введите dates" />
          <Button />
        </div>
        <div>

          <input type="text" placeholder="Введите status" />
          <Button />
        </div>
      </div>
      <div>

        {tasks?.map((task) => <OneItem task={task} />)}
      </div>
    </div>
  );
}
