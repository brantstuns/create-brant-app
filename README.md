![party-parrot](https://media.giphy.com/media/l3q2zVr6cu95nF6O4/giphy.gif)

# create-nice-app
[![Build Status](https://travis-ci.org/brantstuns/create-nice-app.svg?branch=master)](https://travis-ci.org/brantstuns/create-nice-app)
[![Coverage Status](https://coveralls.io/repos/github/brantstuns/create-nice-app/badge.svg?branch=master)](https://coveralls.io/github/brantstuns/create-nice-app?branch=master)
[![version](https://badge.fury.io/js/create-nice-app.svg)](https://badge.fury.io/js/create-nice-app)

## Install
```
yarn global add create-nice-app 
```
THEN (You may have to open a new shell for the command to appear after a yarn global install):
```
$ create-nice-app 
```

### I've found myself spinning up a lot of apps with this set up lately so this is to make it easier. I know about create-react-app, and it's cool, but it gives me more than I want and I always find myself needing a node server. 
---
##### Create-nice-app spins up a very basic app setup, designed to just work and let you hit the ground running. I'm only imposing a few (😉) of my opinions on you! However, it's really easy to swap pieces out so this serves as a nice minimal, modern  fullstack Javascript boilerplate generator.

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
| styles | compiles the scss files to a single styles.css |
| styles:watch | same as styles but with the --watch flag passed to node-sass |
| build | builds the apps assets for production using webpack and node-sass |
| prod | runs the build command and starts the production server |
| dev | runs all the watchers in parrelel for local development |
