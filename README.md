# NYTimes Dashboard

News dashboard that consumes the New York Times API to display and browse current articles.

### Tech Stack

- **React** with component-based architecture
- **NYTimes API** for article data
- **CSS** for responsive layout

### Features

- Browse articles by section
- Responsive card-based layout
- API key configuration for NYTimes Developer access

### Run Locally

```bash
npm install
```

Create `src/secrets.js`:
```js
const NYTIMES_API_KEY = 'your-api-key'
export { NYTIMES_API_KEY }
```

Get an API key from [developer.nytimes.com](https://developer.nytimes.com/).

```bash
npm start
```
