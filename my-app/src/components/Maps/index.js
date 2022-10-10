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
    center: {lat: 36.890257, lng: 30.707417},
    zoom: 12
  };

  return (
    googleMapsReady && (
      <div className="card">
          <GMap options={options} style={{width: '100%', minHeight: '320px'}} />
      </div>
    )
  )
}

export default Map