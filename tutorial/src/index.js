import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

const author = 'Charles Bukowski';
const title = 'Ham and Rye';
const img = 'https://images-na.ssl-images-amazon.com/images/I/91PY8Upu8oL._AC_UL254_SR254,254_.jpg';

function BookList() {
  return (
    <section className="booklist">
      <Book author={author} title={title} img={img} />
      <Book author={'salinger'} title={title} img={img} />
    </section>
  );
}

const Book = ({ author, title, img }) => {
  return (
    <article className="book">
      <img
        src={img}
        alt="a book"
      />
      <h1>{title}</h1>
      <h4>{author}</h4>
    </article>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<BookList />);
