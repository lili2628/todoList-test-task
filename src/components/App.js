import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';

import { selectTasks } from 'redux/tasks/selectors';
import { addTask, editTask } from 'redux/tasks/tasksSlice';
import Filter from 'components/Filter';
import TaskList from 'components/TaskList';
import AddEditTaskModal from 'components/AddEditTaskModal';
import Modal from 'components/Modal';

import css from './App.css';



function App() {

const dispatch = useDispatch();
const tasks = useSelector(selectTasks);
const [isModalShow, setIsModalShown] = useState(false);
const initialValues = {
  title: "",
  description: "",
};
const btntitle = "Add";

const onDeleteTask = (id) => {
  const tasksAfterDeleting = tasks.filter(task => task.id !== id);

  dispatch(editTask(tasksAfterDeleting));
};

const  onCompletedTask = (id, status) => {

  const newTasks = tasks.map(item => {
    if (item.id === id) {
      return {
        ...item,
        completeStatus: status,
      };
    };

    return item;
    });

  dispatch(editTask(newTasks));
};

const onAddTask = () => {
  setIsModalShown(true);
};

const close = () => setIsModalShown(false);

const handleSubmit = (values, {resetForm}) => {
  const stringifiedDate = JSON.stringify(new Date());
  const date = JSON.parse(stringifiedDate);

  const newTask = {
    id: date,
    title: values.title,
    description: values.description,
    completeStatus: false,
  };
  console.log(newTask);
  dispatch(addTask(newTask));

  resetForm();
};

const onEditTask = (values, id) => {

  console.log(id, values);

  const newTasks = tasks.map(item => {
    if (item.id === id) {
      return {
        ...item,
        title: values.title,
        description: values.description,
      };
    };

    return item;
    });

  dispatch(editTask(newTasks));
};


  return (
    <div className={css.container}>
      <div className={css.wrapper}>
        <button type="button" onClick={onAddTask}>Add</button>
        <Filter />
      </div>

      {tasks && (
        <TaskList
            tasks={tasks}
            onCompletedTask={onCompletedTask}
            onEditTask={onEditTask}
            onDeleteTask={onDeleteTask}
            />
      )}

      {isModalShow && (
        <Modal isOpen={isModalShow} onClose={close}>
          <AddEditTaskModal
            handleSubmit={handleSubmit}
            initialValues={initialValues}
            btntitle={btntitle}
          />
        </Modal>
      )}
    </div>
  );
}

export default App;
