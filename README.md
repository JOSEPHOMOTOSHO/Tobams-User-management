# Tobams User Management

## About
The API that serves as the back-end for a user management system.

Users can:
* Register
* Login

Logged in Users can:
* View Dashboard

## Tools/Stack

* Node.js
* TypeScript
* MongoDB
* Redis
* Docker

## Setup
* Copy keys present in `.env.example` file into `.env` file and put in values

* If you have mongo or redis installed locally you can run the server using `npm run dev` or run `npm run build` then `npm run start`

* You can also use the `docker-compose up` command to spin up the server along with a mongo and redis database

* When using docker-compose, `MONGO_URL` and `REDIS_URL` env variables should replace localhost with the service name i.e `mongo` and `redis` respectively e.g `mongodb://mongo:27017` instead of `mongodb://localhost:27017`

* Connecting to either dbs on the host system can be done using the host ports present in docker-compose which are `27021` or `6389`

## Docs

https://documenter.getpostman.com/view/17011910/2s9XxvRtvL