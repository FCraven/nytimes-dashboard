- To run, clone this repository
- npm install
- Create a secrets.js file in the top level of the src folder
- In secrets js, create a variable named NYTIMES_API_KEY
- Obtain a valid API key from https://developer.nytimes.com/
- Assign your API key to this variable and export object e.g.:

  const NYTIMES_API_KEY = //your api key// <br>
  export { NYTIMES_API_KEY }

Once the api key is assigned, you are ready to start reading the news!

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.



