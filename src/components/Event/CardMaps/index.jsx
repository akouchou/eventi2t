import React, { Fragment, useEffect, useState, useContext } from 'react'

import { Map, Marker, Popup, TileLayer } from 'react-leaflet'
import { FirebaseContext } from '../../Firebase'

const position = [3.861770, 11.518750]


const MapCard = ( {match} ) => {

    const id = match.params.id

     
    const firebase = useContext(FirebaseContext)
    const [dataEvent, setDataEvent] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
      const fetchDataEvent = async () => {
          await firebase.detailEvent().doc(id).get()
          .then(doc => {
              dataEvent.push(doc.data())
              dataEvent.forEach(x => setDataEvent(x))
              setLoading(true)
          })
      }

      fetchDataEvent()
  }, []);

    return(
        <Map center={position} zoom={13}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
          />
          <Marker position={position}>
            <Popup>
                {
                  loading ? <Fragment>
                    <p>titre de l'évènement : { dataEvent.titre} </p><br/>
                    <p>ville : { dataEvent.ville } </p><br/>
                    <p>Quartier : { dataEvent.quartier} </p><br/>
                  </Fragment> : (
                    <div className="spinner-border text-center" role="status">
                       <span className="sr-only">Loading...</span>
                    </div>
                  )
                }
            </Popup>
          </Marker>
        </Map>
      )
}
export default MapCard
