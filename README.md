# Face-Recognition
ZeroToMastery Project about Face Recognition using FaceRecognition API From Clarifai. This web-application allow user to sign up, log in, do face_recognition from picture user post. 

# What's the STACKS of the project ? 
* Front-End : React 
* Server-Side : NodeJS 
* Back-End : Relational Database Postgres
* API testing : Postman 

# How to start the project ?
* face_recognition : npm start ( Run the front-end side)
* face_recognition_API : npm start ( Run the server-side) 
* cmd > Desktop/ZeroToMastery/Face-Recognition => psql -U postgres ( Run the database builder) => \c face_recognition (run the database) 

__Since this is a personal project and it database is built in the owner computer, you may have to rebuild the database, modify the API end points if you want to fork this project__

# Packages installed in the server-side and front-end-side explain ? 
* Front-End :
  * __axios__ : interacting with Async JavaScript with easa
  * __clarifai__ : https://www.npmjs.com/package/clarifai documents on how to set-up clarifai API and connect it to the project
  * __react, react_dom__ : react packages 
  * __react-particle-js__ : beautiful particle JS background with interactions 
  * __styled-components__ : CSS in React 
  * __tachyons__ : CSS in React but like Boostrap 
* Server Side : 
  * __bcrypt-nodejs__ : crypt the password in database into a hash, do the compare between user response and data in database to check if the user valid or not 
  * __cors__ : Avoid CORS policy cause errors 
  * __nodemon__ : Automatically restart the Node application when file changes detected
  * __knex__ : https://www.npmjs.com/package/knex using to build interactions between database and node server-side 
  * __pg__ : postgres SQL 
