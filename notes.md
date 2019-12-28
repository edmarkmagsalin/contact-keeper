# MERN STACK modules

## Development
```
npm i -D nodemon concurrently
```
## Server
```
npm i express bycrptjs jsonwebtoken config express-validator mongoose
package.json setup

"scripts": {
    "start": "node server.js",
    "server": "nodemon server.js",
    "client": "npm start --prefix client",
    "clientinstall": "npm i --prefix client",
    "dev": "concurrently \"npm run server\" \"npm run client\""
  }
```
## Client
```
npx create-react-app client && cd client
npm i axios react-router-dom uuid react-transition-group
"proxy": "http://localhost:5000"
```