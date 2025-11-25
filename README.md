# Aufgabenliste React&TypeScript Frontend
This project is a React + TypeScript frontend for the Aufgabenliste application. It connects to the existing Django REST API backend running locally for demonstration purposes. The frontend provides a modern, responsive user interface to interact with tasks, while the backend handles data storage and API logic.

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
