import { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createBook } from '../actions/index';

const BooksForm = (props) => {
  const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
  const initialState = {
    title: '',
    category: '',
    id: null,
  };
  const [book, setBook] = useState(initialState);

  const handleChange = (e) => {
    e.preventDefault();
    setBook({
      ...book,
      [e.target.name]: e.target.value,
      id: Math.floor(Math.random() * 100),
    });
  };

  const clearState = () => {
    setBook({
      ...initialState,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.createBook(book);
    clearState();
  };

  return (
    <form className="container" onSubmit={handleSubmit}>
      <h2 className="add-new-book">ADD NEW BOOK</h2>
      <div className="form-inline">
        <input type="text" id="title" name="title" className="book-title form-control w-50" value={book.title} onChange={handleChange} />
        <select name="category" id="category" className="book-category form-control" onChange={handleChange}>

          {categories.map((val) => <option key={val} value={val}>{val}</option>)}

        </select>
        <button
          className="Rectangle-2 add-new-book text-white text-uppercase text-center d-flex align-items-center justify-content-center"
          type="submit"
        >
          Add book
        </button>
      </div>
    </form>
  );
};

const mapDispatchToProps = (dispatch) => ({
  createBook: (book) => {
    dispatch(createBook(book));
  },
});

export default connect(null, mapDispatchToProps)(BooksForm);

BooksForm.propTypes = {
  createBook: PropTypes.func.isRequired,
};
