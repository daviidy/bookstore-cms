import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from '../components/Book';

const BooksList = ({ books }) => (
  <table>
    <thead>
      <tr>
        <th>ID</th>
        <th>Title</th>
        <th>Category</th>
      </tr>
    </thead>
    <tbody>
      {
          books && books.length
            ? books.map(val => <Book key={val.id} book={val} />)
            : 'No books!'
      }

    </tbody>
  </table>
);

const mapStateToProps = state => {
  const { books } = state;
  return { books };
};

export default connect(mapStateToProps, null)(BooksList);

BooksList.propTypes = {
  books: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  })).isRequired,
};
