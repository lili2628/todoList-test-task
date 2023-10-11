import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

import { changeFilter } from 'redux/tasks/tasksSlice';
import { selectTasks } from 'redux/tasks/selectors';

import css from './Filter.module.css';


export default function Filter() {
  const dispatch = useDispatch();

  const tasks = useSelector(selectTasks);

  let disabled = false; 

  if (tasks.length === 0) {
    disabled = true;
  }; 

  const [filterItem, setFilterItem] = useState('all');

  const handleChange = (event: SelectChangeEvent) => {
    const filterValue = event.target.value;

    setFilterItem(filterValue);
    dispatch(changeFilter(filterValue));
  };

  return (
    <div className={css.filter}>
      <FormControl sx={{ m: 1, minWidth: 100 }}>
        <InputLabel id="demo-simple-select-autowidth-label" >Filter by</InputLabel>
        <Select
          disabled={disabled}
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={filterItem}
          onChange={handleChange}
          autoWidth
          label="Filter by"
        >
          <MenuItem value="all">
            <em>All</em>
          </MenuItem>
          <MenuItem value={"completed"}>Completed</MenuItem>
          <MenuItem value={"notcompleted"}>Not completed</MenuItem>
        </Select>
      </FormControl>
    </div>
  );

};
