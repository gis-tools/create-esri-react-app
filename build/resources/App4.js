import React, {Component} from 'react';
import esriLoader from 'esri-loader';
import './App.css';

const options = {
  url: 'https://js.arcgis.com/4.6'
};

export default class App extends Component {
  constructor() {
    super();

    esriLoader.loadModules([
      'esri/Map',
      'esri/views/MapView'
    ], options)
        .then(([Map, MapView]) => {
          let map = new Map({
            basemap: "gray-vector"
          });

          let view = new MapView({
            map: map,
            container: "mapContainer",
            basemap: 'gray-vector',
            center: [-100, 30],
            zoom: 5
          });

          this.setState({
            map,
            view
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
