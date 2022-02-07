import React from 'react';
import { BLK, Hacktiv8, ITS } from "../commons/assets/images";
import "./style/education.style.css";

export default function Main() {
  return (
    <div class="container">
      <div id="education">
        <div class="text-center">
          <h2 class="section-heading text-uppercase">My Education</h2>
          <h3 class="section-subheading text-muted">This is my educational journey</h3>
        </div>
        <ul class="timeline mt-5">
          <li>
            <div class="timeline-image">
              <img class="img-fluid h-100" src={Hacktiv8} alt="hactiv8-indonesia" />
            </div>
            <div class="timeline-panel">
              <div class="timeline-heading">
                <h4 class="subheading">Hacktiv8 Indonesia</h4>
                <h5>at January, 2021 until April, 2021</h5>
              </div>
              <div class="timeline-body">
                <p class="text-muted">
                  To increase my knowledge about Software Engineering I took the Immersive Full Stack Javascript Program at Hacktiv8 Indonesia
                </p>
              </div>
            </div>
          </li>
          <li class="timeline-inverted">
            <div class="timeline-image">
              <img class="img-fluid" src={ITS} alt="its" />
            </div>
            <div class="timeline-panel">
              <div class="timeline-heading">
                <h4 class="subheading">ITS Surabaya</h4>
                <h5>at August, 2015 until August, 2018</h5>
              </div>
              <div class="timeline-body">
                <p class="text-muted">
                  I am very interested in the field of electrical and robotic automation, so I took a Diploma 3 in Electrical Engineering at ITS
                </p>
              </div>
            </div>
          </li>
          <li>
            <div class="timeline-image">
              <img class="img-fluid " src={BLK} alt="blk" />
            </div>
            <div class="timeline-panel">
              <div class="timeline-heading">
                <h4 class="subheading">BLK Surabaya</h4>
                <h5>at September, 2015 until September, 2018</h5>
              </div>
              <div class="timeline-body">
                <p class="text-muted">
                  To hone and implement the manufacture of electrical installations and industrial automation, I took a D3 Industrial Electrical Engineering at BLK Surabaya
                </p>
              </div>
            </div>
          </li>
          {/* <li class="timeline-inverted">
            <div class="timeline-image">
              <h4>
                Be Part
                <br />
                of Our
                <br />
                Story!
              </h4>
            </div>
          </li> */}
        </ul>
      </div>
    </div>
  );
}
