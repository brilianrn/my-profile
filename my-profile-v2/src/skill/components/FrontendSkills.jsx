import React from 'react';
import "../style/skill.style.css";
import { APOLLO, BOOTSTRAP, JQUERY, REACTJS, SPRING, VUEJS } from '../../commons/assets/images';

export default function FrontendSkills() {
  return (
    <div class="container mb-5">
      <div class="row">
        <div class="col-md-4">
          <div class="card-box mt-3 h-100">
            <img src={REACTJS} alt="reactjs-brilian" className="d-flex mt-auto mb-auto" />
          </div>
        </div>
        <div class="col-md-4">
          <div class="card-box mt-3 h-100">
            <img src={VUEJS} alt="vuejs-brilian" className="d-flex mt-auto mb-auto" />
          </div>
        </div>
        <div class="col-md-4">
          <div class="card-box mt-3 h-100">
            <img src={BOOTSTRAP} alt="bootstrap-brilian" className="d-flex mt-auto mb-auto" />
          </div>
        </div>
        <div class="col-md-4">
          <div class="card-box mt-3 h-100">
            <img src={APOLLO} alt="apollo-brilian" className="d-flex mt-auto mb-auto" />
          </div>
        </div>
        <div class="col-md-4">
          <div class="card-box mt-3 h-100">
            <img src={JQUERY} alt="jquery-brilian" className="d-flex mt-auto mb-auto" />
          </div>
        </div>
        <div class="col-md-4">
          <div class="card-box mt-3 h-100">
            <img src={SPRING} alt="java-springboot-brilian" className="d-flex mt-auto mb-auto" />
          </div>
        </div>
      </div>
    </div>
  );
}
