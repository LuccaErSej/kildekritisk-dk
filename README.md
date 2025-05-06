
Built by https://www.blackbox.ai

---

# Kildekritisk.dk - Undersøg din kilde

Kildekritisk.dk is a web application designed to help users critically assess sources. Through an intuitive interface, users can input a URL and receive insights into the credibility and reliability of the source.

## Project Overview

The purpose of Kildekritisk.dk is to promote media literacy and critical thinking by allowing users to investigate the reliability of information sources. It offers features such as URL input, a history of past searches, and a login system for personalized access.

## Installation

To run Kildekritisk.dk locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/kildekritisk-dk.git
   cd kildekritisk-dk
   ```

2. Install the necessary dependencies:
   ```bash
   npm install
   ```

3. Open `index.html` in your web browser to access the application directly.

## Usage

1. Launch the application by opening `index.html` in your web browser.
2. Enter a URL in the input field and click the "Undersøg" button to start the analysis.
3. View the results and utilize the history sidebar to revisit previous searches.
4. Use the login feature to manage personalized settings or preferences.

## Features

- **URL Verification**: Input URLs and get feedback on their credibility.
- **Search History**: Keep track of previously checked URLs.
- **Login Modal**: Authenticate users to provide a personalized experience.
- **Responsive Design**: The application is designed to work on both mobile and desktop devices.

## Dependencies

The project requires the following dependencies, as specified in `package.json`:

- `node-fetch`: A lightweight module that brings `window.fetch` to Node.js. It is essential for making HTTP requests.

To install the dependencies, use:
```bash
npm install
```

## Project Structure

The project directory contains the following files:

```
kildekritisk-dk/
├── index.html          # The main HTML file for the web application.
├── js/
│   └── main.js        # The JavaScript file handling user interactions and API calls.
├── css/
│   └── style.css      # Custom CSS for styling the application.
├── package.json        # Contains metadata about the project and its dependencies.
└── package-lock.json   # Automatically generated file that locks the versions of the installed packages.
```

## Conclusion

Kildekritisk.dk aims to foster critical evaluation of information sources in the digital age. Feel free to contribute to the project by submitting issues or pull requests. For additional information, visit the project repository or documentation.