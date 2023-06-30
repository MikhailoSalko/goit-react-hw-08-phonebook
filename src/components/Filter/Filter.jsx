import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/filter/filter-slice';
import { selectFilter } from 'redux/filter/filter-selectors';
import { TextField, Typography } from '@mui/material';

const Filter = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();
  const handleFilter = e => dispatch(setFilter(e.target.value));

  return (
    <>
      <Typography variant="h6">Find contacts by name</Typography>
      <TextField
        margin="dense"
        size="normal"
        onChange={handleFilter}
        fullWidth
        required
        name="filter"
        id="filter"
        label="filter"
        type="text"
        value={filter}
        placeholder="Enter contact name"
        variant="filled"
      />
    </>
  );
};

export default Filter;
