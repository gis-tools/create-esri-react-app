### Create ESRI React App

Goal of Create ESRI React App is to connect ESRI and React application with minimal effort by using **[create-react-app](https://github.com/facebookincubator/create-react-app)** to create react application and **[esri-loader](https://github.com/Esri/esri-loader)** to add the ArcGIS JS API to React app.
A prerequisite for this application is Create React App already installed in your development environment. If Create React App is not installed on your system run: 

```
npm install create-react-app -g
```  


### How to install Create ESRI React App 
To install Create ESRI React App application run:
```
$ npm install create-esri-react-app -g
- or -
$ yarn global add create-esri-react-app
```

### How to create new ESRI React App 
To create ESRI React application run:
```
$ create-esri-react-app esri_app
```

It will create a directory called `esri_app` inside the current folder.<br>
Inside that directory, it will generate the initial project structure and install the transitive dependencies:

```
esri_app
├── README.md
├── node_modules
├── package.json
├── .gitignore
├── public
│   └── favicon.ico
│   └── index.html
│   └── manifest.json
└── src
    └── App.css
    └── App.js
    └── App.test.js
    └── index.css
    └── index.js
    └── logo.svg
    └── registerServiceWorker.js
```

### Choosing ESRI ArcGIS JS api version
You can specify version of ESRI ArcGIS JS api during creation process. If you don't specify ESRI ArcGIS JS api version default version will be v4.
```
$ create-esri-react-app esri_app_v4
- or -
$ create-esri-react-app esri_app_v3 -a 3
```

### Information's related to Create React App
Create React apps with no build configuration.

* [Getting Started](#getting-started) – How to create a new app.
* [User Guide](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md) – How to develop apps bootstrapped with Create React App.

Create React App works on macOS, Windows, and Linux.<br>
If something doesn’t work please [file an issue](https://github.com/facebookincubator/create-react-app/issues/new).