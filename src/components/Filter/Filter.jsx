import { useState } from 'react';
import { useDispatch } from 'react-redux';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

import { changeFilter } from 'redux/tasks/tasksSlice';



export default function Filter() {
  const dispatch = useDispatch();

  const [filterItem, setFilterItem] = useState('all');

  const handleChange = (event: SelectChangeEvent) => {
    const filterValue = event.target.value;

    setFilterItem(filterValue);
    dispatch(changeFilter(filterValue));
  };

  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 100 }}>
        <InputLabel id="demo-simple-select-autowidth-label" >Filter by</InputLabel>
        <Select
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
