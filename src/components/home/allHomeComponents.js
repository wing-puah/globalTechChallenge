import React from 'react'
import styled from 'styled-components'
import { Panel, GradientBox } from '../../theme/boxes'

import Overview from './overview'
import Featured from './featured'
import Partners from './partners'

import background from '../../images/bg/coding.jpg'

const highlights = [
  {icon: 'zmdi-star', content: '3 X $1000 cash prize'},
  {icon: 'zmdi-assignment-check', content: '5+ Master Classes'},
  {icon: 'zmdi-mic-setting', content: '10+ Trainers & Speakers'},
  {icon: 'zmdi-accounts', content: '15+ Mentors & Judges'},
  {icon: 'zmdi-accounts', content: '10+ Career booths'}
]

const Background = styled.div`
  background: url(${background}) 50% 20%/cover;
  background-attachment: fixed;
  width: 100%;
  height: 30vh;
  position: relative;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to right, rgba(0, 0, 0, 0.9), rgba(67, 67, 67, 0.3) );
  }
`

const HomeComponents = (props) => (
  <div className="container">
    <Panel className="bg-white" id="about">
      <div className="row align-items-center">

        <div className="col-12 col-md-7 row px-0">
          <div className="col-12">
            <h2>About</h2>
            <p>Connecting institutional, developer and student communities to create meaningful conversations around blockchain development and real world use cases.</p>
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

        <div className="col-12 col-md-5 pt-5 pt-md-0">
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
    </Panel>
    <Background />
    <Overview />
    <Featured />

    <Partners />
  </div>
)


export default HomeComponents
