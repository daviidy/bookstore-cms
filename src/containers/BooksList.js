import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from '../components/Book';
import { removeBook, changeFilter } from '../actions/index';
import CategoryFilter from '../components/CategoryFilter';

const BooksList = ({
  books, removeBook, filter, changeFilter,
}) => {
  const handleRemoveBook = (book) => {
    removeBook(book);
  };

  const handleFilterChange = (filter) => {
    changeFilter(filter);
  };

  const renderBooks = (array) => (array.map((val) => (
    <Book handleRemoveBook={handleRemoveBook} key={val.id} book={val} />
  )));

  const renderFilter = () => {
    if (filter === 'All') {
      return (
        renderBooks(books)
      );
    }

    return (
      renderBooks(books.filter((book) => book.category === filter))
    );
  };

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Category</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {
              books && books.length
                ? renderFilter()
                : (
                  <tr>
                    <td>No books!</td>
                  </tr>
                )

          }
        </tbody>
      </table>
      <CategoryFilter handleFilterChange={handleFilterChange} />
    </>
  );
};

const mapStateToProps = (state) => {
  const { books, filter } = state;
  return { books, filter };
};

const mapDispatchToProps = (dispatch) => ({
  removeBook: (book) => {
    dispatch(removeBook(book));
  },
  changeFilter: (filter) => {
    dispatch(changeFilter(filter));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(BooksList);
BooksList.propTypes = {
  books: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  })).isRequired,
  removeBook: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
  changeFilter: PropTypes.func.isRequired,
};
