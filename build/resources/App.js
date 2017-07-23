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
    url: 'https://js.arcgis.com/3.21/'
  });
} else {
  createMap();
}

function createMap() {
  esriLoader.dojoRequire(
      [
        'esri/map'
      ],
      (Map) => {
        let map = new Map('mapNode', {
          center: [-100, 30],
          zoom: 3,
          basemap: 'gray-vector'
        });
        window.map = map;

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