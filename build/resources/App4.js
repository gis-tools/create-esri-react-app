import React, {Component} from 'react';
import './App.css';
import * as esriLoader from 'esri-loader';

if (!esriLoader.isLoaded()) {
  esriLoader.bootstrap((err) => {
    if (err) {
      console.error(err);
    } else {
      createMap();
    }
  }, {
    // url: 'https://js.arcgis.com/4.4/' // Here you can change API version
  });
} else {
  createMap();
}

function createMap() {
  esriLoader.dojoRequire([
    "esri/Map",
    "esri/views/MapView"
  ], function(Map, MapView){
    let map = new Map({
      basemap: "gray-vector"
    });
    window.map = map;
    let view = new MapView({
      map: map,
      container: "mapNode",
      basemap: 'gray-vector',
      center: [-100, 30],
      zoom: 3
    });
  });
}

class App extends Component {
  render() {
    return (
        <div className="App">
          <div className="App-header">
            <h1>Welcome to ESRI React App</h1>
          </div>
          <div id="mapNode" />
        </div>
    );
  }
}

export default App;