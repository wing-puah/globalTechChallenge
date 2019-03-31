import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import styled from "styled-components";

import "react-tabs/style/react-tabs.css";
import "./tabs.css";

import { Panel } from "../../theme/boxes";
import Accordion from "../accordion";

const ReactTabsRow = styled.div`
  padding-top: 50px;
`;

const DayOneWs = [
  {
    title: "Introduction to blockchain and design thinking",
    paragraph:
      "<li>Become familiar with the high overview of the blockchain system. Design thinking will be integrated to this course such that participants could understand a systematic way to approach problem-solving.</li><br/><li><strong>Takeaway:</strong> You will be able to understand the basic terminology used in blockchain and articulate the advantages of using blockchain as a tool.</li>"
  }
];

const DayTwoWs = [
  {
    title: "Fundamentals of Innovation and Enterprise",
    paragraph:
      "<li>Learn the common errors and obstacles that will impede innovation. You will also discover the innovation process and metrics to measure performance and cost of implementations.</li><br/><li><strong>Takeaway:</strong>  You will be able to explain the theoretical concept and factors that drive and influence innovation. You will also be able to outline practical framework to achieve innovations.</li>"
  },
  {
    title: "Effective presentation and personal branding",
    paragraph:
      "<li>Learn the psychology and anatomy of delivering an effective presentation. This workshop will also impart the knowledge of tapping across social media to have a strategic professional positioning.</li><br/><li><strong>Takeaway:</strong> You will be able to craft an elevator pitch, structure an impactful presentation and improve their personal branding.</li>"
  },
  {
    title: "User experience (UX) design process",
    paragraph:
      "<li>Learn about the importance of user-centric design. And the methodology to identify the problem statement of the users.</li><br/><li><strong>Takeaway:</strong> You will be able to create user personas, create user requirements and define the various stages of user experience design processes.</li>"
  }
];

const DayThreeWs = [
  {
    title: "Agile methodology for rapid prototyping",
    paragraph:
      "<li>Learn about the fundamentals of agile methodology. You will also engage in hands-on practice for applying the methodology.</li> <br/><li><strong>Takeaway:</strong> At the end of the session, participants will be able to understand how to plan an execute sprints. They will also be able to articulate the pros and cons of using agile method over waterfall methodology.</li>"
  }
];

const PanelDiscussion = [
  {
    title: "Reality of blockchain, challenges and opportunities across sectors",
    paragraph:
      "<li>Sharing the past challenges and how companies overcome it. </li><li>Providing an overview of the challenges and the current state of blockchain in the selected verticals.</li><li>Underscoring the importance of collaboration across the different vendors.</li> "
  },
  {
    title:
      "Future of blockchain, ethics, and governance: Moving beyond proof of concept",
    paragraph:
      "<li>Exploring how government, corporations and startups could work together and benefit on blockchain.</li><li>Providing insights on regulatory takes on various blockchain projects, e.g. ICO, STO, and financial related blockchain project.</li><li>Discussion on the sector that scores high on feasibility and viability of blockchain.</li>"
  },
  {
    title: "Future proof yourself: Preparing for digital disruptions",
    paragraph:
      "<li>Conversation among IHL and corporations on future of work.</li><li>Sharing about the innovative technology and the current disruptions that are happening. This will not be limited to blockchain, it will also tap into the future of automation. </li>"
  }
];

const Overview = props => (
  <Panel className="bg-light" id="overview">
    <h2 className="text-center">Overview</h2>
    <Tabs>
      <div className="row justify-content-center react-tabs__row">
        <TabList className="col-12 col-lg-10 row justify-content-between">
          <Tab>Master classes</Tab>
          <Tab>Pre-challenge</Tab>
          <Tab>Finals + Panel + Career fair</Tab>
        </TabList>
      </div>

      <ReactTabsRow>
        <TabPanel>
          <h3 className="text-body">May 2019</h3>
          <Accordion data={DayOneWs} />
          <h3 className="text-body">1 June 2019</h3>
          <Accordion data={DayTwoWs} />
          <h3 className="text-body">8 June 2019</h3>
          <Accordion data={DayThreeWs} />
        </TabPanel>
        <TabPanel>
          <h3 className="text-body">
            TBC:{" "}
            <span className="text-muted font-weight-light">
              Apply your agile knowledge to create your first pitch
            </span>
          </h3>
        </TabPanel>
        <TabPanel>
          <h3 className="text-body">
            14, 15 June 2019:{" "}
            <span className="text-muted font-weight-light">
              National Blockchain Challenge
            </span>
          </h3>
          <h3 className="text-body">
            16 June 2019:{" "}
            <span className="text-muted font-weight-light">
              Judging day + Panels + Career fair
            </span>
          </h3>
          <Accordion data={PanelDiscussion} />
        </TabPanel>
      </ReactTabsRow>
    </Tabs>
  </Panel>
);

export default Overview;
