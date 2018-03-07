//import PropTypes from 'prop-types'
import React, { Component } from 'react'
import {
  Map,
  TileLayer,
  Marker,
  Popup,
  //PropTypes as MapPropTypes,
} from 'react-leaflet'

export default class MapDisplay extends Component {
  state = {
    lat: 39.731214,
    lng: -104.887431,
    zoom: 13,
  }
  // L.tileLayer( '//mt{s}.googleapis.com/vt?x={x}&y={y}&z={z}',
  // {
  //   maxZoom: 18,
  //   subdomains: [ 0, 1, 2, 3 ]
  // } ).addTo( map );
  //

  render() {
    let center = [this.state.lat, this.state.lng]
    // debug: override center
    center = [39.731214, -104.887431]
    const markers = [
      { key: 'marker1', position: [39.731214, -104.887431], children: 'Steve & Kate\'s Camp' }
      
    ]
    return (
      <Map center={center} zoom={this.state.zoom}>
        <TileLayer
          attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {markers.map(({ key, position, children }) => (
          <Marker key={key} position={position}>
            {/* <Icon imageUrl={'https://user-images.githubusercontent.com/32273138/36926271-13358eba-1e34-11e8-9519-ec454bb7a567.png'} /> */}
            <Popup>
              <span>{children}</span>
            </Popup>
          </Marker>
        ))}
      </Map>
    )
  }
}
