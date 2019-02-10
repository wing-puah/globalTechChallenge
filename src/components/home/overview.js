import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'

import "react-tabs/style/react-tabs.css"
import './tabs.css'

import { Panel } from '../../theme/boxes'

const Overview = (props) => (
  <Panel className="bg-light" id="overview">
    <h2 className="text-center">Overview</h2>
      <Tabs>
        <div className="row justify-content-center react-tabs__row">
        <TabList className="col-sm-10 row justify-content-between">
          <Tab>Master classes</Tab>
          <Tab>Pre-challenge</Tab>
          <Tab>Final + Career fair</Tab>
        </TabList>
        </div>

      <TabPanel>
          teste
      </TabPanel>
      <TabPanel>
        <div>
          gondff
          <div>dfadf</div>
        </div>
      </TabPanel>
      <TabPanel>
        <div>
          gondff
          <div>dfadf</div>
        </div>
      </TabPanel>
    </Tabs>
  </Panel>
)


export default Overview
