import { changeFilter } from '../actions';

const CategoryFilter = (changeFilter) => {
  const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];

  const handleChange = (e) => {
    changeFilter(e.target.value);
  };
  return (
    <select name="category" id="category" onChange={handleChange}>
      <option value="All">All</option>
      {categories.map((val) => <option key={val} value={val}>{val}</option>)}

    </select>
  );
};

export default CategoryFilter;
