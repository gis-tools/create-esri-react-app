### Create ESRI React App

Goal of Create ESRI React App is to connect ESRI and React application with minimal effort by using **[create-react-app](https://github.com/facebookincubator/create-react-app)** to create react application and **[esri-loader](https://github.com/Esri/esri-loader)** to add the ArcGIS JS API to React app.
A prerequisite for this application is Create React App already installed in your development environment. If Create React App is not installed on your system run: 

```
npm install -g create-react-app
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
$ create-esri-react-app app_name
```

It will create a directory called `app_name` inside the current folder.<br>
Inside that directory, it will generate the initial project structure and install the transitive dependencies:

```
app_name
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

### Information's related to Create React App
Create React apps with no build configuration.

* [Getting Started](#getting-started) – How to create a new app.
* [User Guide](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md) – How to develop apps bootstrapped with Create React App.

Create React App works on macOS, Windows, and Linux.<br>
If something doesn’t work please [file an issue](https://github.com/facebookincubator/create-react-app/issues/new).