import React, { useState } from "react";
import "./App.css";
import Articles from "./components/Articles";

function App() {
  const ARTICLES = [
    {
      title: "A message to our customers",
      upvotes: 12,
      date: "2020-01-24",
    },
    {
      title: "Alphabet earnings",
      upvotes: 22,
      date: "2019-11-23",
    },
    {
      title: "Artificial Mountains",
      upvotes: 2,
      date: "2019-11-22",
    },
    {
      title: "Scaling to 100k Users",
      upvotes: 72,
      date: "2019-01-21",
    },
    {
      title: "the Emu War",
      upvotes: 24,
      date: "2019-10-21",
    },
    {
      title: "What's SAP",
      upvotes: 1,
      date: "2019-11-21",
    },
    {
      title: "Simple text editor has 15k monthly users",
      upvotes: 7,
      date: "2010-12-31",
    },
  ];

  const [articlelist, saveArticleList] = useState(ARTICLES);
  var auxarr = [];

  const sortbyupvotes = () => {
    auxarr = [];
    Object.assign(auxarr, articlelist);
    auxarr.sort(function (a, b) {
      if (a.upvotes > b.upvotes) {
        return -1;
      }
      if (a.upvotes < b.upvotes) {
        return 1;
      }
      return 0;
    });
    saveArticleList(auxarr);
  };

  const sortbydate = () => {
    auxarr = [];
    Object.assign(auxarr, articlelist);
    auxarr.sort(function (a, b) {
      const auxdatea = new Date(a.date);
      const auxdateb = new Date(b.date);
      if (auxdatea > auxdateb) {
        return -1;
      }
      if (auxdatea < auxdateb) {
        return 1;
      }
      return 0;
    });
    saveArticleList(auxarr);
  };

  return (
    <div className="main">
      <div className="button-container">
        <span className="sortby">Sort by</span>
        <button onClick={() => sortbyupvotes()}>Most Upvoted</button>
        <button onClick={() => sortbydate()}>Most Recent</button>
      </div>
      <Articles articles={articlelist} />
    </div>
  );
}

export default App;
