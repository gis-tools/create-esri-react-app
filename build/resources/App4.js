import React, {Component} from 'react';
import * as esriLoader from 'esri-loader';
import './App.css';

class App extends Component {
  constructor() {
    super();

    if (!esriLoader.isLoaded()) {
      esriLoader.bootstrap((err) => {
        if (err) {
          console.error(err);
        } else {
          this.createMap();
        }
      }, {
        // url: 'https://js.arcgis.com/4.4/' // Here you can change API version
      });
    } else {
      this.createMap();
    }

    this.state = {
      map: null,
      view: null
    }
  }

  createMap = () => {
    esriLoader.dojoRequire([
      "esri/Map",
      "esri/views/MapView"
    ], (Map, MapView) => {
      let map = new Map({
        basemap: "gray-vector"
      });
      window.map = map;
      let view = new MapView({
        map: map,
        container: "mapContainer",
        basemap: 'gray-vector',
        center: [-100, 30],
        zoom: 3
      });

      this.setState({
        map,
        view
      })
    });
  };

  render() {
    return (
        <div className="App">
          <div className="App-header">
            <h1>Welcome to ESRI React App</h1>
          </div>
          <div id="mapContainer" />
        </div>
    );
  }
}

export default App;