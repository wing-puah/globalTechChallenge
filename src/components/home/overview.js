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
    paragraph: `<li>Learn about the importance of user-centric design. And the methodology to identify the problem statement of the users.</li><br/><li><strong>Takeaway:</strong> You will be able to create user personas, create user requirements and define the various stages of user experience design processes.</li><a href="https://www.eventbrite.sg/e/user-experience-ux-design-process-tickets-61879174276" target="_blank">Register for UX design process</a><p class='pt-5 pb-0 mb-0 text-right'><em>Outside Voice</em></p>`
  }
];

const DayThreeWs = [
  {
    title: "Agile methodology for rapid prototyping",
    paragraph: `<li>Learn about the fundamentals of agile methodology. You will also engage in hands-on practice for applying the methodology.</li> <br/><li><strong>Takeaway:</strong> At the end of the session, participants will be able to understand how to plan an execute sprints. They will also be able to articulate the pros and cons of using agile method over waterfall methodology.</li><a href="https://www.eventbrite.sg/e/introduction-to-agile-workshop-tickets-61733680099" target="_blank">Register for introduction to agile methodology for rapid prototyping</a><p class='pt-5 pb-0 mb-0 text-right'><em>Dtal Technologies Pte Ltd</em></p>`
  },
  {
    title: "Presents_ IOST: Coding workshop",
    paragraph: `<li>Meet community partners and IOST as we discuss the makeup of a public blockchain and IOST proposition to the industry. In the PM session, we dwell into the technical aspect of IOST, followed by a coding workshop.</li> <br/><li><strong>Takeaway:</strong> Participants will be able to understand what is a public blockchain, the problem its solving, its current state maturity and a glimpse to building applications on it.</li><a href="https://www.eventbrite.sg/e/presents-iost-suss-tickets-61774097990?fbclid=IwAR210d7vF2X5xy-9TupbJkiOgtyuxk_PjaY8_WuN0Lc1zMluEWwlXfY6J44" target="_blank">Register for Presents_ IOST: Coding workshop</a><p class='pt-5 pb-0 mb-0 text-right'><em>IOST</em></p>`
  }
];

const PostWs = [
  {
    title: "Kleros: Learn smart contract development on Ethereum in 3 hours",
    paragraph: `<li>Brings your laptop for this engaging hands-on development session. No prior blockchain knowledge is required.</li> <br/><li><strong>Takeaway:</strong> At the end of the session, participants will be able to understand how the basics of solididty. They will develop a simple arbitrable escrow smart contract. Also, they will develop a smart contract for the use case of their choic</li><a href="https://www.eventbrite.sg/e/kleros-learn-smart-contract-development-on-ethereum-in-3-hours-tickets-62316315778" target="_blank">Register for smart contract development workshop</a><p class='pt-5 pb-0 mb-0 text-right'><em>Kleros</em></p>`
  }
];

const Hackathon = [
  {
    title: "Show us what you got and win attractive prizes",
    paragraph: `<li>Gather your team, recommended size of 3-5 pax to ideate on your prototype and hack your way overnight to our top prizes. Receive feedback and mentorship from industry veterans.</li><li><a href="https://nbc.devpost.com" target="_blank">Register today</a></li>`
  }
];

const OpenSpace = [
  {
    title: "Technology advancement sharing",
    paragraph: `<li>Learn. Discover and Do. Find out what has been the latest trend on our open public sharing day. Immerse yourself in an afternoon of gathering of immersive and engaging talks by industry tech veterans.</li><br/><div><u>Topics that we will be covering</u></div><li>· <strong>12pm: Developing with TokenScript</strong></li><li>· <strong>1pm: Moving towards human like AI interface</strong></li><li>· <strong>1.25pm: Applying decentralisation to lean startups</strong></li><li>· <strong>1.50pm: Building a superior tech product with 10% the cost</strong></li><li>· <strong>3pm: Game theory and blockchain</strong></li><br/><li><a href="https://www.eventbrite.sg/e/community-sharing-all-about-emerging-technology-tickets-62137339455" target="_blank">Register for our community sharing</a></li>`
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
    title: "Youth Perspective on decentralised technology",
    paragraph:
      "<li>Blockchain technology is an emerging technology which embraces decentralisation. Yet, what is “decentralisation”-- is there something substantial to this technology, is it just hope, or is blockchain technology even needed when there is hyperledger technology? </li><li>In this exclusive youth panel, we will discuss what young blockchain enthusiasts think about this topic, both from a practical and academic perspective."
  },
  {
    title: "Future of blockchain: Moving beyond proof of concept",
    paragraph:
      "<li>Exploring how government, corporations and startups could work together to create a collaborative relationship on blockchain. Discussion on the sector that scores high on feasibility and viability of blockchain.</li>"
  },
  {
    title: "Future proof yourself: Preparing for digital disruptions",
    paragraph:
      "<li>Conversation among IHL and corporations on future of work. Sharing about the innovative technology and the current disruptions that are happening. This will not be limited to blockchain, it will also tap into the future of automation. </li>"
  }
];

const Overview = props => (
  <Panel className="bg-light" id="overview">
    <h2 className="text-center">Overview</h2>
    <Tabs>
      <div className="row justify-content-center react-tabs__row">
        <TabList className="col-12 col-lg-10 row justify-content-between">
          <Tab>Master classes</Tab>
          <Tab>Hackathon + Community sharing</Tab>
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
          <h3 className="text-body">18 June 2019</h3>
          <Accordion data={PostWs} />
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
          <h3 className="text-body">15 Jun 2019</h3>
          <Accordion data={OpenSpace} />
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
