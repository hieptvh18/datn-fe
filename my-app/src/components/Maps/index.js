import React, { useState } from 'react'
import ReactMapGL from 'react-map-gl';

const Map = () => {
  const [viewport, setViewport] = useState({
      width: "100%",
      height: "100%",
      latitude: 21.0244246,
      longitude: 105.7938072,
      zoom: 16
  })
  return (
    <ReactMapGL
      {...viewport}
      mapStyle="mapbox://styles/mapbox/streets-v11"
      onViewportChage={(viewport) => setViewport(viewport)}
      mapboxAccessToken="pk.eyJ1IjoibmdoaWEtbWFzdGVyZGV2IiwiYSI6ImNsOGIzc3psajAxajkzdnNzZGx2aXExNXkifQ.Ipy2nlFOel5-F-EY0L-DEA"
    />
  );
}

export default Map;