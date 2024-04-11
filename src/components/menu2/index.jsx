import { useState } from "react";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Head } from "../Head";

export const Menu2 = () => {
  const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("https://books-server-7p9f.onrender.com/books")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);
  return (
    <>
      <div className="menu">
        <div className="container">
          <div className="menu-inner">
            <Head></Head>
            <div className="head-box">
              <h2 className="header-h2">Qidirish</h2>
              <div className="list">
                <input
                  className="header-input"
                  placeholder="Adiblar, kitoblar, audiolar, maqolalar..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
                <button className="header-btn">Izlash</button>
              </div>
            </div>
            <h2 className="menu-h2">Asosiy kategoriyalar</h2>
            <div className="menu-box">
              <NavLink className="menu-h4" to={"/jadid"}>
                Jadid adabiyoti
              </NavLink>
              <NavLink className="menu-h4" to={"/soved"}>
                {" "}
                Sovet davri
              </NavLink>
            </div>
            <div  className="menu-item">
              {posts.length ? (
                posts
                  .filter((element) =>
                    search.toLowerCase() === ""
                      ? element
                      : element?.author.toLowerCase().includes(search)
                  )
                  .map((item) => (
                    <NavLink to= {"/btn"}>
                    <ul className="menu-list">
                      <img className="list-img" src={item.img} alt="" />
                      <li className="list">
                        <h4 className="list-h4">{item.author}</h4>
                        <p className="list-p">
                          {item.bookName.slice(0, 100)}..
                        </p>
                      </li>
                    </ul>
                    </NavLink>
                  ))
              ) : (
                <p>kuting</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
