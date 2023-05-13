# Tech Stack Used - MERN

## App Link - https://tinder-clone-f74d9.web.app

## App Preview
![image](https://github.com/mohamedimmu/tinder-clone/assets/54463675/90de51d1-25d3-4a11-af27-25c447193c65)


## Backend code - https://github.com/mohamedimmu/tinder-backend

## Frontend
- React
- Material UI

## Backend
- MongoDB & Mongoose
- Express
- Node

## Package Used
npm i react-tinder-card && npm install --save @react-spring/web@9.5.5
npm i express
npm i mongoose
npm i -g nodemon
npm i axios
npm i dotenv
npm i cors


## Learned in this project
<!-- Frontend -->
- Elements inside the container of the flex automatically shrink according to the screen size, since the flex-shrink is set to 1 by default.

<!-- Backend --> 
## Steps to create backend server
- git init
- npm init
- To use ES6 import syntax we can specify the type.
```
  "type": "module"
```
- To run the node application we use node server.js 
instead of that we can add it in  scripts.
```
  "start": "node server.js"
```

## How to create mongodb database
- Create a new project
- Create a cluster
- Create a new databse user. Qnpfj49en8AIp6vB
- Go to database -> connect -> copy the uri
- connect using mongose.
- create a model schema
- using create method from model we can add the data
- using find method from model we can find the data.
- add built in role for admin from database access to write in the database.

## How to hook up front-end and back-end
- Using mongoose.connect(uri, options) connect the database with server.
- Install axios in frontend and give the api request to backend to get the card details
