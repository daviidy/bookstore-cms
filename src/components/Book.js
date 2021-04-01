import PropTypes from 'prop-types';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import '../custom.css';

const Book = ({ book, handleRemoveBook }) => (
  <main className="book-panel row">
    <div className="col-5">
      <div className="category book-default-font">{book.category}</div>
      <div className="title book-default-font">{book.title}</div>
      <div className="author">Harry Porter</div>
      <div className="comment-section">
        <button type="button" className="default-comment">Comments</button>
        <button className="default-comment" onClick={() => handleRemoveBook(book)} type="submit">Remove</button>
        <button type="button" className="default-comment">Edit</button>
      </div>
    </div>
    <div className="book-update col-7">
      <div className="progress-div d-flex">
        <CircularProgressbar
          value={42}
          text=""
        />
        <div className="ml-3">
          <p className="Percent-Complete mb-0">
            64%
          </p>
          <p className="Complete">Completed</p>
        </div>
      </div>
      <div className="line-2" />
      <div>
        <p className="current-chapter default-current">CURRENT CHAPTER</p>
        <p className="current-lesson default-current">CHAPTER 17</p>
        <button type="button" className="update-progress">UPDATE PROGRESS</button>
      </div>
    </div>

  </main>
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
