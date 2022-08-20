import 'mapbox-gl/dist/mapbox-gl.css';

import  React, {useState, useCallback, useEffect} from 'react';
import render from 'react-dom'
import Map from 'react-map-gl';
import { useLocation } from 'react-router-dom';


// import ControlPannel from '../files/ControlPannel'
// import DrawControl from '../files/DrawControl'

import './MapPage.css'

const MapPage = () => {

  const location = useLocation()

  useEffect(() => {
    console.log(location.state.state)
  }, [])

  
  // const [features, setFeatures] = useState({});
  const TOKEN = 'pk.eyJ1IjoicmlkYW0yIiwiYSI6ImNqemZkdjVoaTBiNjQzbHQ2azN1OHhjZWgifQ.GmVoo5Rc18QxALCeQK-fxg'

  // const onUpdate = useCallback(e => {
  //   setFeatures(currFeatures => {
  //     const newFeatures = {...currFeatures};
  //     for (const f of e.features) {
  //       newFeatures[f.id] = f;
  //     }
  //     return newFeatures;
  //   });
  // }, []);

  // const onDelete = useCallback(e => {
  //   setFeatures(currFeatures => {
  //     const newFeatures = {...currFeatures};
  //     for (const f of e.features) {
  //       delete newFeatures[f.id];
  //     }
  //     return newFeatures;
  //   });
  // }, []);

  return (
    <>
    <div className='header'>
            <h2>{location.state.state.name}</h2>
        </div>
        <div className='map' id="map">
        <Map
        initialViewState={{
          longitude: -91.874,
          latitude: 42.76,
          zoom: 12
        }}
        mapStyle="mapbox://styles/mapbox/satellite-v9"
        mapboxAccessToken={TOKEN}
       />
        </div>
    </>
    
  )
}

export default MapPage