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

3. Environment Variables
   In order to run the frontend locally, you need to create an `.env` file in the root of the project directory to configure the environment variables. The project requires both **_Frontend_** and **_Backend_** URLs.
    ##### Create `.env` File
    In the root directory of your project, create a file called .env and add the following variables:

```
VITE_FRONTEND_URL=http://localhost:5173
VITE_BACKEND_URL=http://localhost:8080
```

4. Run the development server:
   `npm run dev`

### Deployment Notes

1. The backend and PostgreSQL database are deployed on Render, with the frontend hosted on Vercel.
2. Due to free-tier hosting, the backend service may take 1-2 minutes to start upon initial load.
