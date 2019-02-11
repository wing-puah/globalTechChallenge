import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import styled from 'styled-components'

import "react-tabs/style/react-tabs.css"
import './tabs.css'

import { Panel } from '../../theme/boxes'

const ReactTabsRow = styled.div`
  padding-top: 50px;
`

const Overview = (props) => (
  <Panel className="bg-light" id="overview">
    <h2 className="text-center">Overview</h2>
      <Tabs>
        <div className="row justify-content-center react-tabs__row">
        <TabList className="col-12 col-lg-10 row justify-content-between">
          <Tab>Master classes</Tab>
          <Tab>Pre-challenge</Tab>
          <Tab>Final + Career fair</Tab>
        </TabList>
        </div>

        <ReactTabsRow>
          <TabPanel>
            Coming Soon
          </TabPanel>
          <TabPanel>
            Coming Soon
          </TabPanel>
          <TabPanel>
            Coming Soon
          </TabPanel>
        </ReactTabsRow>
    </Tabs>
  </Panel>
)


export default Overview
