import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';

import { selectFilter, selectTasks } from 'redux/tasks/selectors';
import { addTask, editTask } from 'redux/tasks/tasksSlice';
import Filter from 'components/Filter';
import TaskList from 'components/TaskList';
import AddEditTaskModal from 'components/AddEditTaskModal';
import Modal from 'components/Modal';

import css from './App.css';



function App() {

const dispatch = useDispatch();
const allTasks = useSelector(selectTasks);
const filterValue = useSelector(selectFilter);
const [isModalShow, setIsModalShown] = useState(false);
const initialValues = {
  title: "",
  description: "",
};
const btntitle = "Add";

let showedTasks = [];

  if (filterValue === "completed") {

    showedTasks = allTasks.filter(item =>  item.completeStatus === true);
  } else if (filterValue === "notcompleted") {
    showedTasks = allTasks.filter(item => item.completeStatus === false);
  } else {
    showedTasks = allTasks;
  };


const onDeleteTask = (id) => {
  const tasksAfterDeleting = allTasks.filter(task => task.id !== id);

  dispatch(editTask(tasksAfterDeleting));
};

const  onCompletedTask = (id, status) => {

  const newTasks = allTasks.map(item => {
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

  const newTasks = allTasks.map(item => {
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

      {showedTasks && (
        <TaskList
            tasks={showedTasks}
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
