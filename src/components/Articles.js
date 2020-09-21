import React from "react";

const Articles = ({ articles }) => {
  return (
    <div className="tabla">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Title</th>
            <th scope="col">Upvotes</th>
            <th scope="col">Date</th>
          </tr>
        </thead>
        <tbody>
          {articles.map((article, index) => (
            <tr key={index}>
              <th>{article.title}</th>
              <td>{article.upvotes}</td>
              <td>{article.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Articles;
