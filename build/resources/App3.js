import React, {Component} from 'react';
import esriLoader from 'esri-loader';
import './App.css';

const options = {
  url: `https://js.arcgis.com/3.23/`
};

export default class App extends Component {
  constructor() {
    super();

    esriLoader.loadModules([
      'esri/map'
    ], options)
        .then(([Map]) => {
          let map = new Map('mapContainer', {
            basemap: 'gray-vector',
            center: [-100, 30],
            zoom: 3
          });

          window.map = map;

          this.setState({
            map
          })
        })
        .catch(err => {
          console.error(err);
        });
  }

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
