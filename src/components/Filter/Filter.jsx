import {
  // useSelector,
  useDispatch
} from "react-redux";
import { setFilter } from "redux/filtersSlice";
// import { filterValue } from "redux/constants";
// import { selectFilter } from "redux/selectors";
// import {nanoid} from 'nanoid';

// let filtId = nanoid();

export const Filter = () => {
  const dispatch = useDispatch();
  // const valueFilter = useSelector(selectFilter);
  
  const handleFilterChange = e => {
    dispatch(setFilter(e.currentTarget.value.toLowerCase().trim()));
  };

  return (
    <label>
      Find contacts by name
      <input
        // id={filtId} 
        type="text"
        name='filter'
        onChange={handleFilterChange} />
    </label>
  );
};