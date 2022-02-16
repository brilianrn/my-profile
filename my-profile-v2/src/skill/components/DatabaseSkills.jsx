import React from 'react';
import { MONGODB, MYSQL, ORACLE, POSTGRESQL } from '../../commons/assets/images';
import "../style/skill.style.css";

export default function DatabaseSkills() {
  return (
    <div class="container mb-5">
      <div class="row">
        <div class="col-md-4">
          <div class="card-box mt-3 h-100">
            <img src={POSTGRESQL} alt="reactjs-brilian" className="d-flex mt-auto mb-auto" />
          </div>
        </div>
        <div class="col-md-4">
          <div class="card-box mt-3 h-100">
            <img src={MYSQL} alt="vuejs-brilian" className="d-flex mt-auto mb-auto" />
          </div>
        </div>
        <div class="col-md-4">
          <div class="card-box mt-3 h-100">
            <img src={ORACLE} alt="bootstrap-brilian" className="d-flex mt-auto mb-auto" />
          </div>
        </div>
        <div class="col-md-4">
          <div class="card-box mt-3 h-100">
            <img src={MONGODB} alt="apollo-brilian" className="d-flex mt-auto mb-auto" />
          </div>
        </div>
      </div>
    </div>
  )
}
