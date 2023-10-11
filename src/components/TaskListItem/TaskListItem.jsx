import { useState } from 'react';
import { FormControlLabel, Checkbox } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import IconButton from '@mui/material/IconButton';

import AddEditTaskModal from 'components/AddEditTaskModal';
import Modal from 'components/Modal';
import css from './TaskListItem.module.css';



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
    <li className={css.item}>
      <div>
        <p className={css.item_title}>
        {title}
        </p>
        <p className={css.item_description}>
        {description}
        </p>
      </div>
      
      <div>
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
            <IconButton type="button" color='primary' aria-label="edit" onClick={()=> setIsModalShown(true)}>
              <EditIcon />
            </IconButton>
            <IconButton type="button" color='primary' aria-label="delete" onClick={()=> onDeleteTask(id)}>
              <DeleteIcon />
            </IconButton>
          </div>
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
