export default function TaskListItem({item, onDeleteTask, onEditTask, onCompletedTask}) {

  return(
      <div>
      
        <checkbox>

        </checkbox>
        <button type="button" onClick={()=> onEditTask(item.id)}>

        </button>
        <button type="button" onClick={()=> onDeleteTask(item.id)}>

        </button>
      </div>
  );
};
