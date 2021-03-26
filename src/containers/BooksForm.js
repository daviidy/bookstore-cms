import { useState } from 'react';
import { connect } from 'react-redux';
import { createBook } from '../actions/index';

const BooksForm = () => {
  const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
  const initialState = {
    title: '',
    category: '',
    id: null,
  };
  const [book, setBook] = useState(initialState);

  const handleChange = e => {
    e.preventDefault();
    setBook({
      ...book,
      [e.target.name]: e.target.value,
    });
  };

  const clearState = () => {
    setBook({
      ...initialState,
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    setBook({
      ...book,
      id: Math.floor(Math.random() * 100),

    });
    createBook(book);
    clearState();
  };

  return (
    <form>
      <input type="text" id="title" name="title" value={book.title} onChange={handleChange} />
      <select name="category" id="category" onChange={handleChange}>

        {categories.map(val => <option key={val} value={val}>{val}</option>)}

      </select>
      <button type="submit" onClick={handleSubmit}>submit</button>
    </form>
  );
};

const mapDispatchToProps = dispatch => ({
  createBook: book => {
    dispatch(createBook(book));
  },
});

export default connect(null, mapDispatchToProps)(BooksForm);
