# bart-app

The code behind how screwed is BART? This site is made using React/Redux. See a working demo: [here](http://howisbart.s3-website.us-east-1.amazonaws.com/).

## BART API

This website is made possible with the awesome BART API [here](http://api.bart.gov). Thank you to BART for offering a public API and helping make the internet a better place.

See the Redux section below for more details on which endpoints are used.

## Page components

### Homepage (`/`)

On the homepage, the app makes API calls to get the number of cars in service, the number of advisories, and the number of elevators out of service. It then makes a decision for how "screwed" the BART is based on the data.

#### A note on advisories

Unfortunately, the BART API only offers system-wide advisories. In other words, if there is a 15 minute delay at say Downtown Berkeley, the API will indicate a 15 minute delay across the entire system. A future iteration of this app hopes to target these vauge advisories and indicate exactly which stations are affected.

### Station list (`/stationlist`)

The station list page fires an API call and renders a list of all stations. A station can be clicked and the user is taken to a station detail page.

### Station detail page (`/station/{station_id}`)

The station detail page fires off a request for departure estimates for the given station. The page renders the next departure time for each destination the staiton serves, and suggested a humorous message for the wait time.

## The App

### Tech stack

The site is built in React and uses Redux to manage global state and all API calls. A functioning demo of this app is being served from an S3 bucket [here](http://howisbart.s3-website.us-east-1.amazonaws.com/).

### Run locally

To begin:

```
$ yarn install
$ yarn start
```

A weback hot dev server is started and is listening on `localhost:3000`.

### Styling

#### Font Awesome

Icons of the FA 4.0 icon set.

#### Twitter Bootstrap

Bootstrap 4.1 CSS, JS loaded. Uses "pure" HTML/JSX referencing Bootstrap CSS classes.

## Redux

Redux is used to maintain global state and make API calls.

### API Actions

API calls are fired on `componentDidMount`. The API key is stripped from the endpoints below.

#### Action Types

Each action has four actionTypes: `REQUEST`, `SUCCESS`, `FAILURE`, `ABORT`

#### `GET_CARS`

Get's the current system car count.

Endpoint: `http://api.bart.gov/api/bsa.aspx?cmd=count&json=y`

#### `GET_ADVISORY_LIST`

Get the list of system-wide advisories and delays.

Endpoint: `http://api.bart.gov/api/bsa.aspx?cmd=bsa&json=y`

#### `GET_ELEVATOR_STATUS`

Get ss the current advisories for our of service elevators.

Endpoint: `http://api.bart.gov/api/bsa.aspx?cmd=elev&json=y`

#### `GET_STATION_LIST`

Gets the list of stations to display on `/stationlist` page.

Endpoint: `http://api.bart.gov/api/stn.aspx?cmd=stns&json=y`

#### `GET_STATION_INFO`

Gets station infomration from a given station code. Each station has a four character code.

Endpoint: `http://api.bart.gov/api/stn.aspx?cmd=stninfo&json=y&orig=<STATION_CODE>`

#### `GET_DEPARTURE_ESTIMATES`

Gets departure estimates for each destination for a given station.

Endpoint: `http://api.bart.gov/api/etd.aspx?cmd=etd&json=y&orig=<STATION_CODE>`

#### `GET_STATION_ACCESS`

Gets accessibility information for a given station, such as exit and parking information.

Endpoint: `http://api.bart.gov/api/stn.aspx?cmd=stnaccess&l=1&json=y&orig=<STATION_CODE>`
