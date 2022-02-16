import React from 'react';
import { Tab, Tabs } from 'react-bootstrap';
import { BackendSkills, DatabaseSkills, FrontendSkills, MobileSkills } from './components';
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
        <Tabs defaultActiveKey="backend" id="uncontrolled-tab-example">
          <Tab eventKey="backend" title="Backend Skills">
            <BackendSkills />
          </Tab>
          <Tab eventKey="database" title="Database Skills">
            <DatabaseSkills />
          </Tab>
          <Tab eventKey="frontend" title="Frontend Skills">
            <FrontendSkills />
          </Tab>
          <Tab eventKey="mobile" title="Mobile Skills" >
            <MobileSkills />
          </Tab>
        </Tabs>
      </div>
    </div>
  );
}
