import React from 'react';
import { Tab, Tabs } from 'react-bootstrap';
import { BackendSkills, FrontendSkills } from './components';
import "./style/skill.style.css";

export default function Main() {
  return (
    <div class="container">
      <div id="education">
        <div>
          <h2>AWESOME SKIL<span className="text text-danger">LS</span></h2>
          <div class="line-class"></div>
          <h3 class="section-subheading text-muted mt-3">Let's get to know me more</h3>
        </div>
        <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="mb-3">
          <Tab eventKey="home" title="Backend Skills">
            <BackendSkills />
          </Tab>
          <Tab eventKey="profile" title="Frontend Skills">
            <FrontendSkills />
          </Tab>
          <Tab eventKey="contact" title="Mobile Skills" >
            <h1>awa</h1>
          </Tab>
        </Tabs>
      </div>
    </div>
  );
}
