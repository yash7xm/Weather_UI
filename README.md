# Real-Time Weather Monitoring System

### Overview

This project focuses on monitoring weather conditions in real-time, aggregating data, and providing daily weather summaries based on rollups and aggregates from the **OpenWeatherMap API**.

### Features

1. Real-time weather data retrieval every 5 minutes.
2. Daily weather summaries including average, maximum, and minimum temperatures.
3. Threshold alerting for specific weather conditions with email notifications.
4. WebSocket support for real-time alerting (planned feature).
5. Visual representation of weather data, including historical trends.

## Steps to Run Locally

1. Clone the repository:

```
git clone https://github.com/yash7xm/Rule_Engine_UI.git
cd Rule_Engine_UI
```

2. Install dependencies:
   `npm install`

3. Run the development server:
   `npm run dev`

### Deployment Notes

1. The backend and PostgreSQL database are deployed on Render, with the frontend hosted on Vercel.
2. Due to free-tier hosting, the backend service may take 1-2 minutes to start upon initial load.
