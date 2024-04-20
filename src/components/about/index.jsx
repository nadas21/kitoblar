import "./main.css";
import { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";

export const About = () => {
  const [info, setInfo] = useState([]);
  const { id } = useParams();

  console.log(info);
  useEffect(() => {
    fetch(`https://books-server-7p9f.onrender.com/author_one/${id}`)
      .then((res) => res.json())
      .then((data) => setInfo(data[0]));
  }, []);

  return (
    <div className="about">
      <div className="container">
        <div className="about-inner">
          <div className="list">
            <NavLink className="about-img">
              <img className="img" src={info.img} alt="" />
            </NavLink>
          <div className="box">
          <h2 className="list-h2">
              {info.birthYear}
            </h2>
            <h2 className="list-h2">
              {info.createdAt}
            </h2>
          </div>
          </div>
          <div className="about-list">
            <h2 className="about-h2">{info.fullName}</h2>
            <p className="about-p">{info.bio}</p>
            <p className="about-item-p">{info.creativity}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
