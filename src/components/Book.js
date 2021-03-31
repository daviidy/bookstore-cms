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
  </tr>;

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
      <div className="book-update">
        <img src="https://i.imgur.com/yUFOMIa.png" alt="percentage" />
        <div className="line-2" />
        <div>
          <p className="current-chapter default-current">CURRENT CHAPTER</p>
          <p className="current-lesson default-current">CHAPTER 17</p>
          <button type="button" className="update-progress">UPDATE PROGRESS</button>
        </div>
      </div>

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
