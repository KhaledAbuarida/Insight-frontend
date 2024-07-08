# Graduation Project 
## Intro
this repo is for Ain Shams Uni. 2024 - frontend

## About 
- this project is called "Insights" which refers to a data visualization and ML tool that helps the user explore cleaned data (we clean the dataset for the user) and analyze it to extract insights and ideas
- render dataset in data grid table paginated with numbers of records
- Users can upload and visualize a dataset with highly efficient and interactive charts that help them improve decision-making for their business benefits.
- [KhaledAbuarida](https://github.com/KhaledAbuarida) has the total ownership of the Insights frontend including integrations with APIs

## Features
- upload(import) from his machine, with the ability to delete datasets
- drag/drop the dataset
- create an account and sign in with this account
- Authentication with JWT
- enter his profile and see his data & prev. datasets
- explore data statistics on the statistics page
- visualize his data using available variety charts which had been filtered using filter API
- visualize the model chart results
- can't access protected pages if you aren't authenticated (using react outlet)

## Technologies used
- Vite for craete react app
- [react-hook-form - yup] for form validation
- [mui] materail ui for styling
- [react-plotly.js] for render charts

## perquisites
You must have [Node.js](https://nodejs.org/en/) installed on your machine

## Installation steps
1. Clone the repo to your machine
   ```
   git clone https://github.com/KhaledAbuarida/Insight-frontend.git
   ```
   ```
   cd Insight-frontend
   ```
2. Install dependencies
   ```
   npm i
   ```
3. Run the project
   ```
   npm run dev
   ```
















   
