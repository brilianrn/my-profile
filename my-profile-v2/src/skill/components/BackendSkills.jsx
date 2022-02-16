import React from 'react';
import { EXPRESS, GRAPHQL, NODEJS, REACTJS, REDIS, SEQUELIZE, SPRING } from '../../commons/assets/images';
import "../style/skill.style.css";

export default function BackendSkills() {
  return (
    <div class="container mb-5">
      <div class="row">
        <div class="col-md-4">
          <div class="card-box mt-3 h-100">
            <img src={NODEJS} alt="reactjs-brilian" className="d-flex mt-auto mb-auto" />
          </div>
        </div>
        <div class="col-md-4">
          <div class="card-box mt-3 h-100">
            <img src={EXPRESS} alt="vuejs-brilian" className="d-flex mt-auto mb-auto" />
          </div>
        </div>
        <div class="col-md-4">
          <div class="card-box mt-3 h-100">
            <img src={GRAPHQL} alt="bootstrap-brilian" className="d-flex mt-auto mb-auto" />
          </div>
        </div>
        <div class="col-md-4">
          <div class="card-box mt-3 h-100">
            <img src={SEQUELIZE} alt="apollo-brilian" className="d-flex mt-auto mb-auto" />
          </div>
        </div>
        <div class="col-md-4">
          <div class="card-box mt-3 h-100">
            <img src={REDIS} alt="jquery-brilian" className="d-flex mt-auto mb-auto" />
          </div>
        </div>
        <div class="col-md-4">
          <div class="card-box mt-3 h-100">
            <img src={SPRING} alt="java-springboot-brilian" className="d-flex mt-auto mb-auto" />
          </div>
        </div>
      </div>


      {/* <div class="card-columns">
        <div class="card ">
          <img class="card-img-top" src="	https://placeimg.com/640/200/tech/1	" alt="Card image cap" />
        </div>
        <div class="card ">
          <img class="card-img-top" src={NODEJS} alt="Card image cap" />
        </div>
        <div class="card ">
          <img class="card-img-top" src="	https://placeimg.com/640/480/tech/3	" alt="Card image cap" />
        </div>
        <div class="card ">
          <img class="card-img-top" src="	https://placeimg.com/500/300/tech/4	" alt="Card image cap" />
        </div>
        <div class="card ">
          <img class="card-img-top" src="	https://placeimg.com/400/480/tech/5	" alt="Card image cap" />
        </div>
        <div class="card ">
          <img class="card-img-top" src="	https://placeimg.com/640/200/tech/6" alt="Card image cap" />
        </div>
        <div class="card ">
          <img class="card-img-top" src={EXPRESS} alt="Card image cap" />
        </div>
        <div class="card ">
          <img class="card-img-top" src="	https://placeimg.com/600/500/tech/8" alt="Card image cap" />
        </div>
        <div class="card ">
          <img class="card-img-top" src="	https://placeimg.com/200/450/tech/20" alt="Card image cap" />
        </div>
        <div class="card ">
          <img class="card-img-top" src={GRAPHQL} alt="Card image cap" />
        </div>
        <div class="card ">
          <img class="card-img-top" src="	https://placeimg.com/640/480/tech/11" alt="Card image cap" />
        </div>
        <div class="card ">
          <img class="card-img-top" src="	https://placeimg.com/200/400/tech/12" alt="Card image cap" />
        </div>
        <div class="card ">
          <img class="card-img-top" src="	https://placeimg.com/640/480/tech/21" alt="Card image cap" />
        </div>
        <div class="card ">
          <img class="card-img-top" src="	https://placeimg.com/640/480/tech/14" alt="Card image cap" />
        </div>
        <div class="card ">
          <img class="card-img-top" src="	https://placeimg.com/400/200/tech/15" alt="Card image cap" />
        </div>
        <div class="card ">
          <img class="card-img-top" src="	https://placeimg.com/300/300/tech/16" alt="Card image cap" />
        </div>
        <div class="card ">
          <img class="card-img-top" src="	https://placeimg.com/300/300/tech/17" alt="Card image cap" />
        </div>
        <div class="card ">
          <img class="card-img-top" src="	https://placeimg.com/400/480/tech/18" alt="Card image cap" />
        </div>
        <div class="card ">
          <img class="card-img-top" src="	https://placeimg.com/300/400/tech/19" alt="Card image cap" />
        </div>
        <div class="card ">
          <img class="card-img-top" src="	https://placeimg.com/400/300/tech/20" alt="Card image cap" />
        </div>
      </div> */}
    </div>
  );
}
