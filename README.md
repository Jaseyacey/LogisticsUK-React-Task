## Logistics UK - Coding Challenge

### Problem Statement

The drivers' activity is provided in a JSON file and should be displayed in a table format. The table should include the following columns:

- Driver Name
- Vehicle Registration
- Rest Time
- Driving Time
- Available Time
- Work Time
- Total Time

The table shows the weekly total of each activity for every driver. The available time is calculated as 24 hours minus the sum of the rest and driving time. When a driver is driving, the table highlights the day on which the driving occurred with a green box.

### Solution

The solution is a React application that displays each driver's activity in a table format with the following columns:

- Driver Name
- Vehicle Registration
- Rest Time
- Driving Time
- Available Time
- Work Time
- Total Time

Navigation has been set up to move between the different pages of the application. The user can navigate to the Home, Drivers, Vehicles, and About pages.

To search for a driver, the user can enter the driver's name in the search bar. The table will then display the data for the driver whose name matches the search query.

### Running the Application

To run the application, follow these steps:

1. Clone the repository and cd into the folder 
3. Run `npm install` to install the required dependencies.
4. Run `npm start` to start the React application.
5. Open [http://localhost:3000](http://localhost:3000) in your browser.
