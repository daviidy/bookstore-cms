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
      <CategoryFilter handleFilterChange={handleFilterChange} />
      <div className="container">
        {
              books && books.length
                ? renderFilter()
                : (
                  <p>No books!</p>
                )

          }
      </div>
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
