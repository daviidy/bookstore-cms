import PropTypes from 'prop-types';

const Book = ({ book, handleRemoveBook }) => (
  <tr id={book.id}>
    <td>
      { book.id }
    </td>
    <td>
      { book.title }
    </td>
    <td>
      { book.category }
    </td>
    <td>
      <button onClick={handleRemoveBook(book)} type="submit">Remove</button>
    </td>
  </tr>
);
export default Book;

Book.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,
  handleRemoveBook: PropTypes.func.isRequired,
};
