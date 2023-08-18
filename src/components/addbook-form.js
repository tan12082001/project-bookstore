const AddBook = () => (
  <div>
    <h2>ADD NEW BOOK</h2>
    <form>
      <div className="form-parts">
        <label htmlFor="book-name">
          <input id="book-name" type="text" placeholder="Book Title" required />
        </label>
      </div>
      <div className="form-parts">
        <label htmlFor="book-author">
          <input id="book-author" type="text" placeholder="Book Author" required />
        </label>
      </div>
      <div className="form-parts">
        <button type="submit" id="add-book">ADD BOOK</button>
      </div>
    </form>
  </div>
);

export default AddBook;
