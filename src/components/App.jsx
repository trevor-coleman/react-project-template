// eslint-disable-next-line no-unused-vars
import React from 'react'
// eslint-disable-next-line no-unused-vars
import Footer from './Footer'
// eslint-disable-next-line no-unused-vars
import AddChore from '../containers/AddChore'
// eslint-disable-next-line no-unused-vars
import VisibleChoreList from '../containers/VisibleChoreList.jsx'

import {Grid, Col, Row} from 'react-bootstrap'

var divStyle={
  marginTop:'100px'
}

const App = () => (
    <div style={divStyle}>
        <Grid>
            <Row>
                <Col>
                    <AddChore/>
                    <VisibleChoreList/>
                    <Footer/>
                </Col>
            </Row>
        </Grid>
    </div>
)

export default App
