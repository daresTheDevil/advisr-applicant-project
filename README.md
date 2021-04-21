# Advisr Applicant Project
## Quickstart

If you already have [Docker](https://docker.io) and [Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git):
```bash
# clone the project
git clone https://github.com/davidbkay/advisr-applicant-project.git
# change to project directory
cd advisr-applicant-project/infrastructure
# start the project in docker
docker-compose up
```

Open your browser to http://localhost:8080.

## About The Project

This is a basic response to the Advisr sample project.

### Project Scope

This project uses a Node/Express API to return data from a json file. A Vue client consumes these API endpoints to show data to the user. Search/filter is provided for loaded businesses as well as column level sorting indicated by an icon.

Selecting a business will load business details including a LeafletJS map with the business location indicated with a marker.

### Built With

This section should list any major frameworks that you built your project using. Leave any add-ons/plugins for the acknowledgements section. Here are a few examples.

* [VueJS](https://vuejs.org)
* [ViteJS](https://vitejs.dev)
* [NodeJS](https://nodejs.org)
* [ExpressJS](https://expressjs.com)
* [TailwindCSS](https://tailwindcss.com)
* [LeafletJS](https://leafletjs.com/)
* [Docker](https:/docker.io/)

## Deploy to local k8s cluster

> install Minikube with by following instructions at https://minikube.sigs.k8s.io/docs/start/

```bash
# start minikube cluster
minikube start
# open your dashboard
minikube dashboard
# in another terminal window, create services and deployments by using all files in ./k8s directory
kubectl apply -f ./k8s
# expose load balancer
minikube tunnel
```

> open your browser to http://localhost:8080 to view the app

## Run in terminal

Make sure you have [NodeJS](https://nodejs.org) installed and open your terminal to the project root.

> Start API in `/server` directory:

```bash
# install dependencies
npm install
# start API
npm start
```

> Start Vue in `/client` directory:
```bash
# install dependencies
npm install
# in 'cilent' directory, start vue client with
npm run dev
```

Open your browser to http://localhost:3000.

To view API documentation in `/docs` directory:
```bash
# install dependencies
npm install
# view docs
npx serve
```