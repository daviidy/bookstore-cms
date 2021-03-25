const BooksForm = () => {
  const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];

  return (
    <form>
      <input type="text" id="title" />
      <select name="category" id="category">
        {categories.forEach(val => <option value={val}>{val}</option>)}

      </select>
      <button type="submit">submit</button>
    </form>
  );
};

export default BooksForm;
