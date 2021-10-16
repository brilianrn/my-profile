import React from 'react';
import { Bootstrap, Express, Graphql, Java, JS, MongoDb, Nodejs, OracleDb, PostgreSql, ReactJs, Redis, Redux, VueJs } from '../assets';

export default function MySkills() {
  return (
    <ul class="list-group shadow">
      <li class="list-group-item">
        <p class="card-title text h4 fw-bold" id="name">Programatic Languages</p>
        <div class="d-flex flex-row bd-highlight">
          <div class="bd-highlight">
            <img src={JS} alt="javascript" className="skill-img" />
            <span class="card-title text h5 fw-bold">Javascript</span>
          </div>
          <div class="bd-highlight">
            <img src={Java} alt="java" className="skill-img" />
            <span class="card-title text h5 fw-bold">Java</span>
          </div>
        </div>
      </li>
      <li class="list-group-item">
        <p class="card-title text h4 fw-bold" id="name">Backend Skills</p>
        <div class="d-flex flex-row bd-highlight">
          <div class="bd-highlight">
            <img src={Nodejs} alt="node js" className="skill-img" />
            <span class="card-title text h5 fw-bold">Node Js</span>
          </div>
          <div class="bd-highlight">
            <img src={Express} alt="express js" className="skill-img" />
            <span class="card-title text h5 fw-bold">Express Js</span>
          </div>
          <div class="bd-highlight">
            <img src={Redis} alt="redis" className="skill-img" />
            <span class="card-title text h5 fw-bold">Redis</span>
          </div>
          <div class="bd-highlight">
            <img src={Graphql} alt="graphql" className="skill-img" />
            <span class="card-title text h5 fw-bold">Graphql</span>
          </div>
          <div class="bd-highlight">
            <img src={PostgreSql} alt="postgresql" className="skill-img" />
            <span class="card-title text h5 fw-bold">PostgreSql</span>
          </div>
          <div class="bd-highlight">
            <img src={MongoDb} alt="mongo db" className="skill-img" />
            <span class="card-title text h5 fw-bold">MongoDB</span>
          </div>
          <div class="bd-highlight">
            <img src={OracleDb} alt="oracle db" className="skill-img" />
            <span class="card-title text h5 fw-bold">Oracle DB</span>
          </div>
        </div>
      </li>
      <li class="list-group-item">
        <p class="card-title text h4 fw-bold" id="name">Frontend Skills</p>
        <div class="d-flex flex-row bd-highlight">
          <div class="bd-highlight">
            <img src={ReactJs} alt="react js" className="skill-img" />
            <span class="card-title text h5 fw-bold">React Js</span>
          </div>
          <div class="bd-highlight">
            <img src={VueJs} alt="vue js" className="skill-img" />
            <span class="card-title text h5 fw-bold">Vue Js</span>
          </div>
          <div class="bd-highlight">
            <img src={Redux} alt="redux" className="skill-img" />
            <span class="card-title text h5 fw-bold">Redux</span>
          </div>
          <div class="bd-highlight">
            <img src={Bootstrap} alt="bootstrap" className="skill-img" />
            <span class="card-title text h5 fw-bold">Bootstrap</span>
          </div>
        </div>
      </li>
    </ul>
  )
}
