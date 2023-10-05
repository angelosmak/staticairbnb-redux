import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

class Map extends Component {

  render() {
    let marker =  { lat: 48.856614, lng: 2.352222 };
    let center = { lat: 48.856614, lng: 2.352222 };

    return (
      <div className="col-sm-5" style={{height: '100vh'}}>
<GoogleMapReact center={center} defaultZoom={15} >
        </GoogleMapReact>
      </div>
); }
}

export default Map;
