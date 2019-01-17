import React, {Component} from 'react';
import {loadCss, loadModules} from 'esri-loader';
import {esriCSS, esriOptions} from './config';
import './App.css';

loadCss(esriCSS);

export default class App extends Component {

  componentDidMount = () => {
    loadModules([
        'esri/map'
      ], esriOptions)
      .then(([Map]) => {

        const map = new Map('mapContainer', {
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
