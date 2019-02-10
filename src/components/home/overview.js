import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import "react-tabs/style/react-tabs.css";

import { Panel } from '../boxes'

const Overview = (props) => (
  <Panel className="bg-light" id="overview">
    <h2 className="text-center">Overview</h2>
    <Tabs>
      <TabList>
        <Tab>Master classes</Tab>
        <Tab>Pre-challenge</Tab>
        <Tab>Final + Career fair</Tab>
      </TabList>

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
