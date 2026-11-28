# WeatherNow: City Weather Dashboard

**SkillMe Full Stack Engineer Virtual Internship — Week 2**

A responsive weather dashboard. Week 2 renders the whole dashboard from JavaScript data objects (`sampleWeather`) and adds a °C/°F toggle and search-form validation. Live API data is planned for a later week.

## Features
- Forecast cards and current weather created by JavaScript from data
- °C/°F toggle and empty-search message
- Page background tint changes with the current condition (stretch goal)
- Accessible city search form with a visible-to-screen-readers label
- Current weather card with sample city, temperature, condition, wind speed and humidity
- Seven consistent forecast cards
- Responsive layout with horizontal forecast scrolling on small screens
- CSS variables, Flexbox, reusable classes and icons embedded in the code (no separate image files)

## Project files
- `index.html` — page structure
- `style.css` — layout, styling and responsive rules
- `script.js` — `sampleWeather` data, `renderCurrent`, `renderForecast`, `getWeatherEmoji`, `toFahrenheit`, unit toggle, search form handling
- Temperatures are stored in Celsius and converted only when rendering


## Run locally
Open `index.html` in a modern browser. An internet connection is needed only to load the optional Google Fonts; the embedded images and page layout work without them.

## Scope
Data is still sample data (searching a city only changes the displayed name for now). Live weather from the Open-Meteo API is planned for later weeks.
