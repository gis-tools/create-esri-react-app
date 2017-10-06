import React, {Component} from 'react';
import './App.css';
import * as esriLoader from 'esri-loader';

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
        url: 'https://js.arcgis.com/3.22/' // Here you can change API version
      });
    } else {
      this.createMap();
    }

    this.state = {
      map: null
    }
  }

  createMap = () => {
    esriLoader.dojoRequire([
      'esri/map'
    ], (Map) => {
      let map = new Map('mapContainer', {
        center: [-100, 30],
        zoom: 3,
        basemap: 'gray-vector'
      });
      window.map = map;

      this.setState({
        map
      })
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

export default App;