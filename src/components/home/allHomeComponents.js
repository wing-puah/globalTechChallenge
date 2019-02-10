import React from 'react'
import { Box, Panel } from '../boxes'

import Overview from './overview'

const highlights = [
  {icon: 'zmdi-star', content: '$1000 cash prize per vertical'},
  {icon: 'zmdi-assignment-check', content: '5+ Master Classes'},
  {icon: 'zmdi-mic-setting', content: '10+ Speakers'},
  {icon: 'zmdi-accounts', content: '15+ Mentors/Judges'},
  {icon: 'zmdi-accounts', content: '10+ Career booths'}
]


const HomeComponents = (props) => (
  <div className="container">
    <Panel className="bg-white" id="about">
      <div className="row align-items-center">

        <div className="col-12 col-sm-7 row">
          <div className="col-12">
            <h2>About</h2>
            <p>Connecting the various institution, developers and students community to create meaningful conversations around blockchain development and real world use case</p>
          </div>
          <div className="col-12">
            <h3>Mark your dates</h3>
            <strong>15 June</strong>
            <p>Preliminary hackathon: Prepare your slide decks</p>
            <strong>21-23 June</strong>
            <div>Final hackathon: Create your prototype and pitch</div>
            <div>Career fair</div>
          </div>
        </div>

        <div className="col-12 col-sm-5">
          <Box>
            <ul>
              {highlights.map((el, idx) => (
                <li key={idx}>
                  <i className={`zmdi pr-4 ${el.icon}`} />
                  <span>{el.content}</span>
                </li>
              ))}
            </ul>
          </Box>
        </div>
      </div>
    </Panel>

    <Overview />
  </div>
)


export default HomeComponents
