import { useState } from 'react';
import { FormControlLabel, Checkbox } from '@mui/material';

import AddEditTaskModal from 'components/AddEditTaskModal';
import Modal from 'components/Modal';



export default function TaskListItem({item, onDeleteTask, onEditTask, onCompletedTask}) {

  const {id, title, description, completeStatus} = item;
  const initialValues = {
    title,
    description,
  };
  const btntitle = "Edit";

  const [isModalShow, setIsModalShown] = useState(false);

  const handleChangeCheckbox = (e) => {
    const completed = !completeStatus;

    onCompletedTask(id, completed);
  };
  
  const close = () => setIsModalShown(false);

  const handleEditTask = (values) => {
     onEditTask(values, id);

     close();
  };


  return(
    <li>
      <div>
        <p>
        {title}
        </p>
        <p>
        {description}
        </p>
      </div>
      
      <FormControlLabel
        label="Completed"
        control={
          <Checkbox
            name="completed"
            checked={completeStatus}
            onChange={handleChangeCheckbox}
          />
        }
      />


        <div>
          <button type="button" onClick={()=> setIsModalShown(true)}>
            Edit
          </button>
          <button type="button" onClick={()=> onDeleteTask(id)}>
            Delete
          </button>
        </div>

        {isModalShow && (
          <Modal isOpen={isModalShow} onClose={close}>
            <AddEditTaskModal
              handleSubmit={handleEditTask}
              initialValues={initialValues}
              btntitle={btntitle}
            />
          </Modal>
        )}
    </li>
  );
};
