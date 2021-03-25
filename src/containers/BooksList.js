import { connect } from 'react-redux';
import Book from '../components/Book';

const BooksList = () => (
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
            ? books.map((val, key) => <Book key={key} book={val} />)
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
