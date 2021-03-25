import PropTypes from 'prop-types';

const Book = ({ book, key }) => (
  <tr>
    <td>
      { key }
    </td>
    <td>
      { book.title }
    </td>
    <td>
      { book.category }
    </td>
  </tr>
);
export default Book;

Book.propTypes = {
  book: PropTypes.shape.isRequired,
  key: PropTypes.number.isRequired,
};
