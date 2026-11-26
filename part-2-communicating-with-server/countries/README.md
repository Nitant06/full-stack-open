# Data for Countries (Full Stack Open — Part 2)

A React application for searching country information and viewing live capital weather, built as part of Full Stack Open Part 2 (Exercises 2.18–2.20).

## Features

- Fetches country data from the Helsinki REST Countries API
- Real-time search with smart thresholds (>10, 2–10 with `show` buttons, single match detail view)
- Displays capital, area, languages, and national flag
- Fetches live capital weather (temperature, icon, wind speed) via OpenWeatherMap API

## Setup & Run Locally

1. Install dependencies:

```bash
npm install
```

2. Create a `.env` file in the project root with your OpenWeatherMap API key:

```env
VITE_WEATHER_API_KEY=your_api_key_here
```

3. Start the development server:

```bash
npm run dev
```
