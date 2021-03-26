import { useState } from 'react';

const BooksForm = () => {
  const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
  const [book, setBook] = useState({
    title: '',
    category: '',
  });

  const handleChange = e => {
    e.preventDefault();
    setBook({
      ...book,
      [e.target.name]: e.target.value,
    });
  };

  const
  return (
    <form>
      <input type="text" id="title" name="title" onChange={handleChange} />
      <select name="category" id="category" onChange={handleChange}>

        {categories.map(val => <option key={val} value={val}>{val}</option>)}

      </select>
      <button type="submit" onClick={handleSubmit}>submit</button>
    </form>
  );
};

export default BooksForm;
