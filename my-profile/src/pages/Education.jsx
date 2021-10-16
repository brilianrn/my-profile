import React from 'react';
import './style.css';
import { Its, Blk, Hacktiv } from '../assets';
import { MySkills } from '../components';

export default function Education() {
  return (
    <div id="bg-purple" className="pb-4">
      <div className="container pb-3">
        <p class="card-title text h5">how about my educations...</p>
        <div class="row row-cols-1 row-cols-md-3 g-4">
          <div class="col">
            <div class="card h-100 shadow">
              <img src={Hacktiv} class="card-img-top education-img" alt="hacktiv8" />
              <div class="card-body">
                <h5 class="card-title">Hacktiv8 Indonesia</h5>
                <p class="card-text"><small class="text-muted">January, 2021 until April, 2021</small></p>
                <p class="card-text">Immersive Full Stack Javascript Program</p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card h-100 shadow">
              <img src={Its} class="card-img-top education-img" alt="its surabaya" />
              <div class="card-body">
                <h5 class="card-title">ITS Surabaya</h5>
                <p class="card-text"><small class="text-muted">August, 2015 until August, 2018</small></p>
                <p class="card-text">Associate's Degree of Electrical Engineering</p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card h-100 shadow">
              <img src={Blk} class="card-img-top education-img" alt="blk surabaya" />
              <div class="card-body">
                <h5 class="card-title">BLK Surabaya</h5>
                <p class="card-text"><small class="text-muted">August, 2015 until August, 2018</small></p>
                <p class="card-text">Industrial Electrical Engineering</p>
              </div>
            </div>
          </div>
        </div>
        <p class="card-title text h5 mt-2">furthemore how much my skills and abilities I have...</p>
        <MySkills />
      </div>
    </div>
  )
}
