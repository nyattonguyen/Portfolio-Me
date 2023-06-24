import React from "react";
import "./Experience.css";
import { BsPatchCheckFill } from "react-icons/bs";

const data1 = [
  {
    id: 3,
    name: "Javascript",
    status: "Experienced",
  },
  {
    id: 4,
    name: "React",
    status: "Experienced",
  },
  {
    id: 5,
    name: "React Native",
    status: "Experienced",
  },
  {
    id: 1,
    name: "HTML",
    status: "Experienced",
  },
  {
    id: 2,
    name: "CSS",
    status: "Experienced",
  },
  {
    id: 6,
    name: "XML",
    status: "Experienced",
  },
];

const data2 = [
  {
    id: 1,
    name: "Java",
    status: "Experienced",
  },
  {
    id: 2,
    name: "NodeJs",
    status: "Experienced",
  },
  {
    id: 3,
    name: "Javascript",
    status: "Experienced",
  },
];

const data3 = [
  {
    id: 1,
    name: "Mongodb",
    status: "Experienced",
  },
  {
    id: 2,
    name: "MySQL",
    status: "Experienced",
  },
  {
    id: 3,
    name: "MsSQL",
    status: "Experienced",
  },
  {
    id: 4,
    name: "Oracle",
    status: "Experienced",
  },
];

const experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            {data1.map((item) => {
              return (
                <article className="experience__details" key={item.id}>
                  <BsPatchCheckFill className="experience__details-icon" />
                  <div>
                    <h4>{item.name}</h4>
                    <small className="text-align">{item.status}</small>
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        {/* End of Frontend  */}
        <div className="experience__backend">
          <h3>Backend Development</h3>
          <div className="experience__content">
            {data2.map((item) => {
              return (
                <article className="experience__details" key={item.id}>
                  <BsPatchCheckFill className="experience__details-icon" />
                  <div>
                    <h4>{item.name}</h4>
                    <small className="text-align">{item.status}</small>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
        {/* database  */}
        <div className="experience__database">
          <h3>Database Development</h3>
          <div className="experience__content">
            {data3.map((item) => {
              return (
                <article className="experience__details" key={item.id}>
                  <BsPatchCheckFill className="experience__details-icon" />
                  <div>
                    <h4>{item.name}</h4>
                    <small className="text-align">{item.status}</small>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default experience;
