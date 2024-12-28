# Weather App

This Weather App is a React-based application built with Vite. It provides real-time weather updates for any city using the OpenWeatherMap API.

## Features
- **Real-time Weather Information**: Displays the current temperature, weather description, and wind speed.
- **Dynamic Icons**: Fetches and displays weather icons based on the current conditions.
- **Error Handling**: Provides user feedback when a city is not found.
- **Date Display**: Shows the current day and date.
- **Responsive Design**: Works across different screen sizes.

## Installation

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/utkarshsingh004/weather-app.git
   cd weather-app
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```
3. **As we are using various packages for the project, we need to install them. Use the below command to install all the packages that are specified in package.json file.**
  ```bash
   npm install axios react-loader-spinner @fortawesome/react-fontawesome @fortawesome/free-solid-svg-icons
  ```

4. **Start the Development Server**:
   ```bash
   npm run dev
   ```

5. **Open the App**:
   Visit `http://localhost:5173` in your browser.

## File Structure
- **`src/App.jsx`**: Main component containing the weather app logic.
- **`src/App.css`**: Styles for the app.

## Usage

1. Enter a city name in the search bar and press `Enter`.
2. The app fetches and displays weather details for the entered city.
3. If the city is not found, an error message is displayed.

## API Setup
The app uses the OpenWeatherMap API. Follow these steps to set up:

1. Create a free account on [OpenWeatherMap](https://openweathermap.org/).
2. Obtain your API key from the "API Keys" section of your account.
3. Replace the placeholder API key in `App.js` with your own:
   ```javascript
   const api_key = 'https://api.openweathermap.org/data/2.5/weather';
   ```

## Dependencies
- **React**: Frontend library
- **Vite**: Build tool for development
- **axios**: HTTP client for API requests
- **react-loader-spinner**: For loading animations
- **@fortawesome/react-fontawesome**: Icons library

## Contributing
Contributions are welcome! If you find a bug or want to add a feature, feel free to open an issue or submit a pull request.

---

Happy coding!