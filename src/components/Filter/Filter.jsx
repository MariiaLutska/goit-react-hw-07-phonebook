import {
  useSelector,
  useDispatch
} from "react-redux";
import { setFilter } from "redux/filtersSlice";
import { selectFilter } from "redux/selectors";


export const Filter = () => {
  const dispatch = useDispatch();
  const value = useSelector(selectFilter);
  
  const onChange = e => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <label>
      Find contacts by name
      <input type="text" value={value} onChange={onChange} />
    </label>
  );
};