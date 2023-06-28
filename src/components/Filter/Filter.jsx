import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/filter/filter-slice';
import { StyledInput, StyledLabel } from './StyledFilter';
import { selectFilter } from 'redux/filter/filter-selectors';

const Filter = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();
  const handleFilter = e => dispatch(setFilter(e.target.value));

  return (
    <>
      <StyledLabel htmlFor="filter">Find contacts by name</StyledLabel>
      <StyledInput
        type="text"
        id="filter"
        name="filter"
        value={filter}
        onChange={handleFilter}
        placeholder="Enter contact name"
      />
    </>
  );
};

export default Filter;
