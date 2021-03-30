import PropTypes from 'prop-types';

const CategoryFilter = ({ handleFilterChange }) => {
  const categories = ['All', 'Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];

  return (
    <select name="category" id="category">
      {categories.map((val) => (
        <option key={val} value={val} onChange={() => handleFilterChange('Kids')}>
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
