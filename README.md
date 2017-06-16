![doggo](https://media.giphy.com/media/1M4w25h7a3PEs/giphy.gif)
<p align="center">
  <img src="https://media.giphy.com/media/3og0IwJPfGwyMt9uHm/giphy.gif"/>
  <br>
  <a href="https://travis-ci.org/brantstuns/create-nice-app">
    <img src="https://travis-ci.org/brantstuns/create-nice-app.svg?branch=master"/>
  </a>
  <a href="https://coveralls.io/github/brantstuns/create-nice-app?branch=master">
    <img src="https://coveralls.io/repos/github/brantstuns/create-nice-app/badge.svg?branch=master"/>
  </a>
  <a href="https://badge.fury.io/js/create-nice-app">
    <img src="https://badge.fury.io/js/create-nice-app.svg"/>
  </a>
  <a href="https://david-dm.org/brantstuns/create-nice-app">
    <img src="https://david-dm.org/brantstuns/create-nice-app/status.svg"/>
  </a>
  <a href="https://david-dm.org/brantstuns/create-nice-app?type=dev">
    <img src="https://david-dm.org/brantstuns/create-nice-app/dev-status.svg"/>
  </a>
</p>

---
## Install (make sure you have the latest yarn version)
```
yarn create nice-app 
```
---

#### Create-nice-app spins up a very simple little webapp, great for throwing together quick working ideas or starting new projects from scratch. It is designed to work well out of the box and take care of all tedious boilerplate. It's really easy to swap pieces out so this serves as a really nice modern fullstack Javascript boilerplate generator.

### What you're getting:
Frontend: 
- React 15.5+
- SCSS
- React Router 4

Backend:
- Express

Testing:
- Jest 20
- Enzyme

Build:
- Yarn
- Webpack 2
- Babel
- Eslint w/ a modified Airbnb's eslint config
---
### Yarn Scripts available: 
| name | what it does | 
| --- | --- |
| lint | runs eslint using a slightly modified airbnb eslint config |
| test | runs both the client and server tests via jest |
| test:coverage | same as above but passing the --coverage flag to jest |
| test:client | run the client or frontend tests |
| test:server | run the server or backend tests |
| presendCoverage | merges the client and server code coverages to one lcov |
| sendCoverage | I don't know how you do code coverage, but however you do it do it here |
| webpack | runs the production webpack bundle |
| webpack:watch | runs the development webpack bundle which has watch enabled |
| server | runs the server for production via the node command with NODE_ENV set to 'prodution' |
| server:watch | runs the server for development with nodemon and NODE_ENV set to 'development' |
| prod | runs the build command and starts the production server |
| dev | runs all the watchers in parrelel for local development |
