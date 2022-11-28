import React, { useEffect, useState } from 'react'
import { GMap } from 'primereact/gmap';
import { loadGoogleMaps, removeGoogleMaps } from './GoogleMaps';


const Map = () => {
  const [googleMapsReady, setGoogleMapsReady] = useState(false);
  useEffect(() => {
    loadGoogleMaps(() => {
        setGoogleMapsReady(true);
    });

    return () => {
        removeGoogleMaps();
    }
  },[])
  const options = {
    center: {lat: 21.035987, lng: 105.815784},
    zoom: 12
  };

  return (
    googleMapsReady && (
      <div className="card">
          <GMap options={options} style={{width: '100%', minHeight: '320px'}} >

          </GMap>
      </div>
    )
  )
}

export default Map