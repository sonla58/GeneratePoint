import React, { Component } from 'react';
import './App.css';
import {
  withGoogleMap, withScriptjs,
  GoogleMap, Marker
} from 'react-google-maps';
import {
  Grid, Row, Col
} from 'react-bootstrap';

class App extends Component {
  render() {
    return (
        <Grid className="GridContainer" fluid={true}>
          <Row style={{height: '100%'}}>
            <Col lg={4} md={4}>
              <Grid>
                <Row>
                  <Col>
                    <form>
                      <input type="text" placeholder="Số điểm">
                      </input>
                      <button>Generate</button>
                    </form>
                  </Col>
                </Row>
              </Grid>
            </Col>
            <Col lg={8} md={8} style={{height:'100%'}}>
              <MapView
                googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
                loadingElement={<div style={{ height: `100%` }} />}
                containerElement={<div style={{ height: `100%` }} />}
                mapElement={<div style={{ height: `100%` }} />}
              >
              </MapView>
            </Col>
          </Row>
        </Grid>
    );
  }

}

const MapView = withScriptjs(withGoogleMap( (props)=> 
  <GoogleMap
  defaultZoom = {13}
  defaultCenter = {{ lat: 21.025783, lng: 105.8354613 }}
  >
  </GoogleMap>
));

export default App;
