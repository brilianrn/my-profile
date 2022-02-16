import React from 'react';
import { ANDROIDSTUDIO, REACTNATIVE } from '../../commons/assets/images';
import "../style/skill.style.css";

export default function MobileSkills() {
  return (
    <div class="container mb-5">
      <div class="row">
        <div class="col-md-4">
          <div class="card-box mt-3 h-100">
            <img src={REACTNATIVE} alt="reactjs-brilian" className="d-flex mt-auto mb-auto" />
          </div>
        </div>
        <div class="col-md-4">
          <div class="card-box mt-3 h-100">
            <img src={ANDROIDSTUDIO} alt="vuejs-brilian" className="d-flex mt-auto mb-auto" />
          </div>
        </div>
      </div>
    </div>
  );
}
