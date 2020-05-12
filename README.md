# twitch-search

## Description
This is a basic Vue.js frontend + Express web app that interacts with the Twitch v5 API.

It retrieves the display name and follower count of the supplied channel name.

## Usage
Install and run both the backend and the frontend as described below.
The frontend will not work properly unless the backend is running.

## Backend

### Install and Run
In the root directory of this project, run:

    cd server

    npm install
    npm run server

To install dependencies and run the server locally.

By default, it will listen on **localhost:3001**.

### Usage
The endpoint is located at /twitch/channelData. Example usage:

    curl "localhost:3001/twitch/channelData?channel=ninja"


## Frontend

### Install and Run
In the root directory of this project, run:

    cd client
    
    npm install
    npm run client

To install dependencies and serve the client locally.

By default, it will be served on **http://localhost:3000**.

### Screenshot
![Twitch Search App Screenshot](https://raw.githubusercontent.com/bhegde8/twitch-search/master/screenshot.png "Twitch Search App Screenshot")


## Configuration
If you want to change the port that the backend/frontend runs on,
the Twitch client-id, or the host name used to communicate between the backend
and frontend, edit:

> client/.env

and:

> server/.env

The default suggestions are provided below:

> client/.env
    
    # The port to serve the client on
    PORT=3000
    
    # The host and port to use when connecting to the backend
    VUE_APP_BACKEND_HOST=http://localhost
    VUE_APP_BACKEND_PORT=3001


> server/.env
    
    # The port to listen for requests on (by default: on all interfaces)
    PORT=3001
    
    # Details to use when accessing the Twitch API
    TWITCH_API=https://api.twitch.tv/kraken
    TWITCH_CLIENT_ID=
    
    # The host and port to allow CORS for (Access-Control-Allow-Origin): i.e. the frontend's host and port
    FRONTEND_HOST=http://localhost
    FRONTEND_PORT=3000


