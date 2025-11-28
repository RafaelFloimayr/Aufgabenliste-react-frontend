# React & TypeScript frontend: Aufgabenliste
Built with React and TypeScript, powered by NPM, styled with CSS and JSS, this frontend provides the user interface layer for the Aufgabenliste application. This frontend integrates with a local Django REST API backend (demo mode), providing a responsive UI for task interaction, while the backend manages data storage and exposes API endpoints.

  <img width="1339" height="525" alt="ColorTheme1" src="https://github.com/user-attachments/assets/182338af-95fb-48d0-9a19-e5b5a08fb138" />

## Prerequisites

- Install [Node.js v24](https://nodejs.org/en/download) (includes npm)

## Installation

1. **Clone the repository**
   ```
   git clone https://github.com/RafaelFloimayr/Aufgabenliste-react-frontend.git
   cd Aufgabenliste-react-frontend
2. **Install dependencies (creates node_modules from package.json):**   
   ```
   npm install
3. **Install and start Django backend with REST API interface**
   - In order to get data from the backend, please follow the instructions in [Aufgabenliste Backend Repository](https://github.com/RafaelFloimayr/Aufgabenliste/).
4. **Start the frontend with the node package manager**
   ```
   npm run dev
5. **Access the website**  
Open [http://localhost:5173/](http://localhost:5173/) in your web browser and manage your tasks via the current React & TypeScript frontend.

## Demonstration
The following video shows the *Aufgabenliste* backend and *Aufgabenliste-react-frontend* in action.  
- At the **top**, the main website interface is displayed.  
- In the **bottom left**, the Django backend with the REST API interface is visible. It demonstrates the available REST commands, including **GET**, **POST**, **DELETE**, and **PATCH**, which allow you to retrieve, create, remove, and update tasks directly through the API. 
- In the **bottom right**, the React + TypeScript frontend from this repository is running.  

This layout demonstrates how the frontend and backend work together: the React client provides a modern UI, while the Django REST framework handles the data and API requests.




https://github.com/user-attachments/assets/1e1512e7-d86a-4a5d-9171-d45a41bddd46



*This video demonstrates the interaction between the Django REST API backend and the React + TypeScript frontend, showing how tasks are managed seamlessly across both components.*

## Switch Styles Feature

A **Switch Styles** button has been added to demonstrate the advantages of using **JSS** for styling in React.  
With this feature, users can toggle between alternative color themes for the body and task list.

### Benefits of JSS
- Styles are defined directly in JavaScript, making them easy to maintain and co-locate with components.
- Dynamic styling is supported, allowing seamless switching between different themes.
- Global and local styles can be combined, providing flexibility for both application-wide and component-specific design.

### Alternative Theme Preview

<img width="1342" height="533" alt="ColorTheme2" src="https://github.com/user-attachments/assets/98e1d886-de1c-460e-a14c-68982c9cb4d2" />
