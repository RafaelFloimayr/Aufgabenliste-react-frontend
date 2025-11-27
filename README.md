# Aufgabenliste React&TypeScript Frontend
Built with React and TypeScript, powered by NPM, styled with CSS and JSS, this frontend provides the user interface layer for the Aufgabenliste application. This frontend integrates with a local Django REST API backend (demo mode), providing a responsive UI for task interaction, while the backend manages data storage and exposes API endpoints.

<img width="780" height="315" alt="Task123mini" src="https://github.com/user-attachments/assets/e140f628-b88e-4829-8e20-bf06b3d57693" />

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
Open [http://localhost:5173/](http://localhost:5173/) in your web browser and manage your tasks via the current React + TypeScript frontend.

## Demonstration
The following video shows the *Aufgabenliste* backend and *Aufgabenliste-react-frontend* frontend in action.  
- At the **top**, the main website interface is displayed.  
- In the **bottom left**, the Django backend with the REST API interface is visible. It demonstrates the available REST commands, including **GET**, **POST**, **DELETE**, and **PATCH**, which allow you to retrieve, create, remove, and update tasks directly through the API. 
- In the **bottom right**, the React + TypeScript frontend from this repository is running.  

This layout demonstrates how the frontend and backend work together: the React client provides a modern UI, while the Django REST framework handles the data and API requests.


https://github.com/user-attachments/assets/811169d8-0142-4bf2-9260-dc4d05df9950

*This video demonstrates the interaction between the Django REST API backend and the React + TypeScript frontend, showing how tasks are managed seamlessly across both components.*

## Switch Styles Feature

A **Switch Styles** button has been added to demonstrate the advantages of using **JSS** for styling in React.  
With this feature, users can toggle between alternative color themes for the body and task list.

### Benefits of JSS
- Styles are defined directly in JavaScript, making them easy to maintain and co-locate with components.
- Dynamic styling is supported, allowing seamless switching between different themes.
- Global and local styles can be combined, providing flexibility for both application-wide and component-specific design.

### Alternative Theme Preview
Here is a screenshot of the alternative theme:

<img width="393" height="196" alt="JSS_Switch_Styles" src="https://github.com/user-attachments/assets/f9c1079f-5db2-4107-864d-8b52a8fb18fc" />
