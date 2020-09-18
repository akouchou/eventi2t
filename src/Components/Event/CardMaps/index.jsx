import React from 'react'
import { render } from 'react-dom'
import { Map, Marker, Popup, TileLayer } from 'react-leaflet'

const position = [3.861770, 11.518750]
const mapCard = ({match}) => {

    console.log(match.params.id)

    return(
        <Map center={position} zoom={13}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
          />
          <Marker position={position}>
            <Popup>
                <p>lieu de l'évènement : </p><br/>
                <p>ville : </p><br/>
                <p>Quartier : </p><br/>
            </Popup>
          </Marker>
        </Map>
      )
}
export default mapCard
