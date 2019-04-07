import React from "react";

import { Panel, GradientBox, OddShape } from "../../theme/boxes";

const highlights = [
  { icon: "zmdi-star", content: "3 X $1000 cash prize" },
  { icon: "zmdi-assignment-check", content: "5+ Master Classes" },
  { icon: "zmdi-mic-setting", content: "10+ Trainers & Speakers" },
  { icon: "zmdi-accounts", content: "15+ Mentors & Judges" },
  { icon: "zmdi-accounts", content: "10+ Career booths" }
];

const About = props => (
  <Panel className="bg-white" id="about">
    <div className="px-4 pb-5">
      <h2 className="text-center">About</h2>
      <p className="pb-0 text-center">
        Blockchain is an emerging technology that is increasingly incorporated
        into enterprises due to its immutable, reliable and decentralised
        nature. Through the National Blockchain Challenge 2019, we are looking
        for ambitious student developers who want to design the future of work
        with us.
      </p>

      <div className="row align-items-center container__cstm--y">
        <div className="col-12 col-sm-7 pl-sm-0 order-1 order-sm-0">
          <h2>Mark your dates</h2>
          <h3 className="text-body">June</h3>
          <ul>
            <li>Preliminary hackathon: Prepare your slide decks</li>
          </ul>
          <h3 className="text-body">14-16 June</h3>
          <ul>
            <li>Final hackathon: Create your prototype and pitch</li>
          </ul>
          <h3 className="text-body">16 June</h3>
          <ul>
            <li>Hackathon judging day</li>
            <li>Panel discussion</li>
            <li>Career fair</li>
          </ul>

          <div className="pt-5 pr-sm-5">
            <GradientBox>
              <ul>
                {highlights.map((el, idx) => (
                  <li key={idx}>
                    <i className={`zmdi pr-4 ${el.icon}`} />
                    <span>{el.content}</span>
                  </li>
                ))}
              </ul>
            </GradientBox>
          </div>
        </div>

        <OddShape className="col-12 col-sm-5">
          <div className="oddShape__content order-0 order-sm-1">
            <p>
              The future of work is defined by two elements. Firstly, there is
              increasing globalization resulting in the gig-economy, which may
              result in many freelancers not being paid in an accountable,
              inclusive and trusted manner. Secondly, automation will inevitably
              result in the indiscriminate wiping out of many professions, and
              many workers will be displaced. Against this backdrop, how can we
              use blockchain technology to design a better future of work?
            </p>

            <p>
              The National Blockchain Challenge 2019 connects institutional,
              academic, developer and student communities. We encourage teams to
              build blockchain applications that can result in fairer, more
              equitable, empowered and prosperous work of the future.
            </p>
          </div>
        </OddShape>
      </div>
    </div>
  </Panel>
);

export default About;
