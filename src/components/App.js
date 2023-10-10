import { useSelector, useDispatch } from 'react-redux';

import Filter from 'components/Filter';
import TaskList from 'components/TaskList';
import { selectTasks } from 'redux/tasks/selectors';
import { deleteTask } from 'redux/tasks/tasksSlice';
import css from './App.css';


function App() {

const dispatch = useDispatch();

const tasks = useSelector(selectTasks);

function onDeleteTask(id) {
  const tasksAfterDeleting = tasks.filter(task => task.id !== id);

  dispatch(deleteTask(tasksAfterDeleting));
};

function onCompletedTask(id) {

};

function onEditTask(id) {

};

function onAddTask() {

};


  return (
    <div className={css.container}>
      <div className={css.wrapper}>
        <button type="button" onClick={()=>onAddTask()}>Add</button>
        <Filter />
      </div>

      {tasks && (
        <TaskList
            tasks={tasks}
            onCompletedTask={onCompletedTask}
            onEditTask={onEditTask}
            onDeleteTask={onDeleteTask}/>
      )}
    </div>
  );
}

export default App;
