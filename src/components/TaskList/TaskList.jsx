import TaskListItem from "components/TaskListItem/TaskListItem";
import css from "./TaskList.module.css";


export default function TaskList({tasks, onDeleteTask, onEditTask, onCompletedTask}) {

  return (
    <ul className={css.list}>
      <>
        {tasks.map(item => (
          <TaskListItem
            key={item.id}
            item={item}
            onCompletedTask={onCompletedTask}
            onEditTask={onEditTask}
            onDeleteTask={onDeleteTask}
          />
        ))}
      </>
    </ul>
  );
};
