## Description
This project was built with React. I made a production version of it which I then serve with express. It is deployed and running in [Heroku](https://chat-data-oheneba.herokuapp.com/).

**I am on the free-tier so it may take a moment to load if it hasn't been visited in a while**

It serves some information from giosg's API in a given time-frame about messaging statistics

## How to use the web app

Select start date, end date and put in your access token and the data will be served.
Each time you restart the application, it will automatically fetch based on the
last thing you searched and also use the access token you saved the previous time.
It goes without saying that you must be connected to the internet for it to work.

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `node index.js`

Runs the app in the production mode mode.<br />
Open [http://localhost:3001](http://localhost:3001) to view it in the browser.

The page is served up using an express.js server

### Some cool things
* saves token and last search parameters to local storage
* deployed to [heroku](https://chat-data-oheneba.herokuapp.com/)
* scripts for rebuilding project and auto deploying to heroku when I make changes
* 5-second Notifications in app
* serves production build through an express server

#### About
This is a take home assignment for Jr SW Devs/summer trainees position at giosg
React App production build served up using an express/node server from heroku
