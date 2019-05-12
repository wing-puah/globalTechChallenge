import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import styled from "styled-components";

import "react-tabs/style/react-tabs.css";
import "./tabs.css";

import { GradientButton } from "../../theme/button";
import { Panel } from "../../theme/boxes";
import Accordion from "../accordion";

const ReactTabsRow = styled.div`
  padding-top: 50px;
`;

const DayOneWs = [
  {
    title: "Introduction to blockchain and design thinking",
    paragraph: `<li>Become familiar with the high overview of the blockchain system. Design thinking will be integrated to this course such that participants could understand a systematic way to approach problem-solving.</li><br/><li><strong>Takeaway:</strong> You will be able to understand the basic terminology used in blockchain and articulate the advantages of using blockchain as a tool.<li><a href="https://www.eventbrite.sg/e/introduction-to-design-thinking-tickets-61332669666" target="_blank">Register for design thinking</a></li><li><a href="https://www.eventbrite.sg/e/introduction-to-blockchain-tickets-61332522225?aff=ebapi" target="_blank">Register for introduction to blockchain</a></li><p class='pt-5 pb-0 mb-0 text-right'><em>Aetler & Institute of Blockchain Singapore</em></p>`
  }
];

const DayTwoWs = [
  {
    title: "Fundamentals of innovation and enterprise",
    paragraph: `<li>Learn the common errors and obstacles that will impede innovation. You will also discover the innovation process and metrics to measure performance and cost of implementations.</li><br/><li><strong>Takeaway:</strong>  You will be able to explain the theoretical concept and factors that drive and influence innovation. You will also be able to outline practical framework to achieve innovations.</li><a href="https://www.eventbrite.sg/e/fundamentals-of-innovation-and-enterprise-workshop-tickets-61332729846?aff=ebapi" target="_blank">Register for fundamentals of innovation and enterprise</a><p class='pt-5 pb-0 mb-0 text-right'><em>Eat Launchpad</em></p>`
  },
  {
    title: "Effective presentation and personal branding",
    paragraph: `<li>Learn the psychology and anatomy of delivering an effective presentation. This workshop will also impart the knowledge of tapping across social media to have a strategic professional positioning.</li><br/><li><strong>Takeaway:</strong> You will be able to craft an elevator pitch, structure an impactful presentation and improve their personal branding.</li><a href="https://www.eventbrite.sg/e/the-brand-called-you-personal-branding-and-effective-presentation-workshop-tickets-61333166151" target="_blank">Register for effective presentation and personal branding</a><p class='pt-5 pb-0 mb-0 text-right'><em>Ikiguide</em></p>`
  },
  {
    title: "User experience (UX) design process",
    paragraph: `<li>Learn about the importance of user-centric design. And the methodology to identify the problem statement of the users.</li><br/><li><strong>Takeaway:</strong> You will be able to create user personas, create user requirements and define the various stages of user experience design processes.</li>`
  }
];

const DayThreeWs = [
  {
    title: "Agile methodology for rapid prototyping",
    paragraph: `<li>Learn about the fundamentals of agile methodology. You will also engage in hands-on practice for applying the methodology.</li> <br/><li><strong>Takeaway:</strong> At the end of the session, participants will be able to understand how to plan an execute sprints. They will also be able to articulate the pros and cons of using agile method over waterfall methodology.</li><a href="https://www.eventbrite.sg/e/introduction-to-agile-workshop-tickets-61733680099" target="_blank">Register for introduction to agile methodology for rapid prototyping</a><p class='pt-5 pb-0 mb-0 text-right'><em>Dtal Technologies Pte Ltd</em></p>`
  }
];

const Hackathon = [
  {
    title: "Show us what you got and win attractive prizes",
    paragraph: `<li>Gather your team, recommended size of 3-5 pax to ideate on your prototype and hack your way overnight to our top prizes. Receive feedback and mentorship from industry veterans.</li><li><a href="https://nbc.devpost.com" target="_blank">Register today</a></li>`
  }
];

const JudgingDay = [
  {
    title: "Finals",
    paragraph:
      "Receive valuable feedback on your prototype from our esteemed judges. Come and listen to the bright ideas in our final round of judging."
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
          <Tab>Hackathon</Tab>
          <Tab>Finals + Panel</Tab>
        </TabList>
      </div>

      <ReactTabsRow>
        <TabPanel>
          <h3 className="text-body">24-25 May 2019</h3>
          <Accordion data={DayOneWs} />
          <h3 className="text-body">1 June 2019</h3>
          <Accordion data={DayTwoWs} />
          <h3 className="text-body">8 June 2019</h3>
          <Accordion data={DayThreeWs} />
          <div className="d-flex justify-content-center">
            <a
              href="https://www.eventbrite.sg/o/global-tech-challenge-20143618151"
              target="_blank"
            >
              <GradientButton>View all our workshops</GradientButton>
            </a>
          </div>
        </TabPanel>

        <TabPanel>
          <h3 className="text-body">14-15 Jun 2019</h3>
          <Accordion data={Hackathon} />
          <div className="d-flex justify-content-center">
            <a href="https://nbc.devpost.com/" target="_blank">
              <GradientButton>Register for our hackathon today</GradientButton>
            </a>
          </div>
        </TabPanel>

        <TabPanel>
          <h3 className="text-body">16 June 2019 </h3>

          <h4 className="text-body">Judging day</h4>
          <Accordion data={JudgingDay} />

          <h4 className="text-body">Panels discussion</h4>
          <Accordion data={PanelDiscussion} />
          <div className="d-flex justify-content-center">
            <a
              href="https://www.eventbrite.com/e/national-blockchain-challenge-career-fair-panel-discussion-tickets-61145108666?aff=gtcSite"
              target="_blank"
            >
              <GradientButton>
                Register for our 16 June event today
              </GradientButton>
            </a>
          </div>
        </TabPanel>
      </ReactTabsRow>
    </Tabs>
  </Panel>
);

export default Overview;
