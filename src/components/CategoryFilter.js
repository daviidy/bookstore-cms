import PropTypes from 'prop-types';

const CategoryFilter = ({ handleFilterChange }) => {
  const categories = ['All', 'Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];

  const handleChange = (e) => {
    handleFilterChange(e.target.value);
  };

  return (
    <select name="category" id="category" onChange={handleChange}>
      {categories.map((val) => (
        <option key={val} value={val}>
          {val}
        </option>
      ))}

    </select>
  );
};

export default CategoryFilter;

CategoryFilter.propTypes = {
  handleFilterChange: PropTypes.func.isRequired,
};
