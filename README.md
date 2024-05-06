# Feedback Management Application

This is a feedback management application built using React.js and Material-UI. It allows users to view, add, and update feedback for different cards displayed on the dashboard.

## Features

- **Draggable Layout:** The application uses the `react-grid-layout` library to enable draggable and resizable layout for the cards on the dashboard.
- **Feedback Management:** Users can add new feedback or update existing feedback for each card displayed on the dashboard.
- **API Integration:** The application communicates with a backend API to fetch feedback data and perform CRUD operations.

## Installation

To run this application locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone <repository_url>
   ```

2. Navigate to the project directory:

   ```bash
   cd feedback-management-app
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open your browser and visit [http://localhost:3000](http://localhost:3000) to view the application.

## Usage

- **Dashboard:** The dashboard displays cards with different information. Each card has an "Add" button to add new feedback and an "Update" button to update existing feedback.
- **Feedback Form:** Clicking on the "Add" or "Update" button opens a form where users can input their feedback. Clicking the respective button submits the feedback.

## API Integration

The application interacts with the following API endpoints:

- **GET /api/users:** Retrieves feedback data from the server.
- **POST /api/users:** Adds new feedback to the server.
- **PUT /api/users:** Updates existing feedback on the server.

## Technologies Used

- Next.js
- React.js
- Material-UI
- react-grid-layout

## Deployment

The application is deployed and can be accessed using the following link:

[Feedback Management Application](https://resizable-components-six.vercel.app/)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
