import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

function BookList() {
  return (
    <section className="booklist">
      <Book />
    </section>
  );
}

const author = 'Ham and Rye';
const Book = () => {
  const title = 'Charles Bukowski';
  return (
    <article className="book">
      <img
        src="https://images-na.ssl-images-amazon.com/images/I/91PY8Upu8oL._AC_UL254_SR254,254_.jpg"
        alt="a book"
      />
      <h1>{title}</h1>
      <h4>{author.toUpperCase()}</h4>
    </article>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BookList />);
