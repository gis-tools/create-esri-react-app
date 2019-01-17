import React, {Component} from 'react';
import {loadCss, loadModules} from 'esri-loader';
import {esriCSS, esriOptions} from './config';
import './App.css';

loadCss(esriCSS);

export default class App extends Component {

  componentDidMount = () => {
    loadModules([
      'esri/Map',
      'esri/views/MapView'
    ], esriOptions)
      .then(([Map, MapView]) => {

        const map = new Map({
          basemap: 'gray-vector'
        });

        const view = new MapView({
          map: map,
          container: 'mapContainer',
          basemap: 'gray-vector',
          center: [-100, 30],
          zoom: 5
        });

      })
      .catch(err => {
        console.error(err);
      });
  };

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1>Welcome to ESRI React App</h1>
        </div>
        <div id="mapContainer"/>
      </div>
    );
  }
}
