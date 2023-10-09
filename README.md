# Meter Reading Management System Project for CEB

This repository contains the backend for the Meter Reading Management System Project for CEB, implemented using Node.js in TypeScript.

## Overview

The Meter Reading Management System Project for CEB is a system designed to manage the meter readings of customers of the Ceylon Electricity Board (CEB). The system allows meter readers to submit meter readings to the system, and customers to check their bills.

## Features

The Meter Reading Management System Project for CEB includes the following features
- Customer portal for checking meter bills
- Meter Reader portal for adding customer meter readings

## How to Setup

### With Docker (Recommended)

Make sure you have installed Docker correctly or follow the instruction [here](https://docs.docker.com/engine/install/) to set up docker

Clone the project to your local directory
```
git clone git@gitlab.com:chamikacme/ceb-meter-reading-management-system.git
```

Change your directory to `node-drop-in-docker`
```
cd ceb-meter-reading-management-system/node-drop-in-docker
```

Run the docker-compose file using following using following command
```
docker-compose up
```
Or if you have configured makefiles
```
make up
``` 

Node server will be live on port 3000


### Without Docker
Make sure you have installed Node Package Manager correctly or follow the instruction [here](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) to set up npm.

Clone the project to your local directory
```
git clone git@gitlab.com:chamikacme/ceb-meter-reading-management-system.git
```

Change your directory to project directory
```
cd ceb-meter-reading-management-system
```

Run the SQL script in `database.sql` file using your database client to set up database, tables and initial data

Intall node modules
```
npm install
```

Start server
```
npm start
```

Node server will be live on port 3000

## File Structure

- Project source files are in `src` directory
- System is developed in layered architecture and layers are inside the `src` directory
- Docker files are in `node-drop-in-docker` directory (and you can remove that dir if you are not using docker)
- Other files including `.env`, `database.sql` and `package.json` are in main directory

## Contact

If you have any issues in setting up or any inquired about the project, feel free to contact me via [LinkedIn](http://www.linkedin.com/in/chamikacme/) or [Email](mailto:chamikacme@gmail.com)