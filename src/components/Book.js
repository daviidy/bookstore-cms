import PropTypes from 'prop-types';

const Book = ({ book, handleRemoveBook }) => {
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
      <button onClick={() => handleRemoveBook(book)} type="submit">Remove</button>
    </td>
  </tr>

    return (
      <main className="book-panel">
        <div>
          <div className="category book-default-font">{book.category}</div>
          <div className="title book-default-font">{book.title}</div>
          <div className="author">Harry Porter</div>
          <div className="comment-section">
            <button type="button" className="default-comment">Comments</button>
            <button className="default-comment" onClick={() => handleRemoveBook(book)} type="submit">Remove</button>
            <button type="button" className="default-comment">Edit</button>
          </div>
        </div>
        <div />
        <div />
      </main>
    );
};
export default Book;

Book.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,
  handleRemoveBook: PropTypes.func.isRequired,
};
