import { useSelector, useDispatch } from "react-redux";
import { setFilter} from "redux/filtersSlice";


export const Filter = () => {
  const dispatch = useDispatch();
  const value = useSelector(state => state.contactsSlice.contacts.filter.value);
  
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