# Dev Portfolio Builder Documentation

## Overview
Dev Portfolio Builder is a web application that allows developers to create and manage their portfolio dynamically. Users can input their personal details, projects, skills, and experience, which will be displayed in a structured portfolio format. The application also integrates AI-based features to generate personalized portfolio suggestions and auto-fill descriptions using OpenAI's API.

## Features
- User authentication (signup/login)
- AI-powered profile suggestions and auto-generated content
- Dynamic profile creation
- Project showcase with images and descriptions
- Skills and experience section
- Custom themes for portfolio styling
- Live preview and deployment options

## Tech Stack
- **Frontend:** React.js, Tailwind CSS
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Authentication:** JWT (JSON Web Token)
- **Storage:** Cloudinary (for images)
- **AI Integration:** OpenAI API (GPT-4 for auto-suggestions)
- **Deployment:** AWS EC2 (backend), S3 (frontend), MongoDB Atlas

## Folder Structure
```
/portfolio-builder
|-- /client  (React Frontend)
|   |-- /src
|       |-- /components
|       |-- /pages
|       |-- App.js
|-- /server  (Node.js Backend)
|   |-- /models
|   |-- /routes
|   |-- server.js
```

## Step-by-Step Guide to Building the Portfolio Builder

## Step-by-Step Guide to Building the Backend

### Step 1: Initialize a Node.js Project
1. Open a terminal and create a new folder for the backend:
   ```sh
   mkdir server && cd server
   ```
2. Initialize a Node.js project:
   ```sh
   npm init -y
   ```
3. Install required dependencies:
   ```sh
   npm install express mongoose dotenv cors jsonwebtoken bcryptjs
   ```

📖 **Learn More:**
- [Node.js Official Docs](https://nodejs.org/en/docs/)
- [NPM Package Management](https://docs.npmjs.com/)

### Step 2: Setup the Database Connection
1. Create a `.env` file and add MongoDB connection details.
2. Create a new file `server.js` and set up an Express server.
3. Use Mongoose to connect to MongoDB using credentials from `.env`.
4. Ensure that the connection is successful by logging messages to the console.

📖 **Learn More:**
- [MongoDB Documentation](https://www.mongodb.com/docs/)
- [Mongoose Guide](https://mongoosejs.com/docs/guide.html)

### Step 3: Create the User Model
1. Inside the `server` folder, create a new folder called `models`.
2. Inside `models`, create a file named `User.js`.
3. Define the user schema with fields such as `name`, `email`, `password`, `bio`, `skills`, and `projects`.
4. Export the Mongoose model for further use in authentication and user management.

📖 **Learn More:**
- [Mongoose Schema & Models](https://mongoosejs.com/docs/models.html)
- [Understanding MongoDB Schemas](https://www.mongodb.com/docs/manual/core/schema-validation/)

### Step 4: Create Authentication Routes
1. Inside the `server` folder, create a new folder called `routes`.
2. Inside `routes`, create a file named `auth.js`.
3. Define routes for user registration (`/register`) and login (`/login`).
4. Use bcrypt to hash passwords before storing them in the database.
5. Generate JWT tokens for authentication upon successful login.
6. Validate user credentials before allowing login access.

📖 **Learn More:**
- [Express.js Routing](https://expressjs.com/en/guide/routing.html)
- [Bcrypt for Password Hashing](https://www.npmjs.com/package/bcryptjs)
- [JWT Authentication](https://jwt.io/introduction/)

### Step 5: Connect Routes to Server
1. Open `server.js` and import authentication routes.
2. Use Express middleware to enable JSON request handling and CORS.
3. Register authentication routes using `app.use("/api/auth", authRoutes);`.
4. Restart the server and test the API endpoints using tools like Postman or cURL.
5. Verify user registration and login flow to ensure authentication works correctly.

📖 **Learn More:**
- [Express Middleware](https://expressjs.com/en/guide/using-middleware.html)
- [Postman API Testing](https://learning.postman.com/docs/getting-started/introduction/)


### Step 6: Implement Portfolio Management (CRUD Operations in Detail)
#### Create Portfolio Model
1. Inside `models`, create `Portfolio.js`.
2. Define a schema with fields: `userId`, `title`, `description`, `projects`, `skills`, `theme`.
3. Export the model for use in controllers.

#### Create Portfolio Controller
1. Inside `controllers`, create `portfolioController.js`.
2. Define CRUD functions:
   - `createPortfolio`: Accepts user input and saves it in the database.
   - `getPortfolio`: Retrieves portfolio details based on `userId`.
   - `updatePortfolio`: Modifies existing portfolio details.
   - `deletePortfolio`: Removes portfolio data from the database.

#### Define Portfolio Routes
1. Inside `routes`, create `portfolio.js`.
2. Implement Express routes:
   ```js
   router.post("/", createPortfolio); // Create portfolio
   router.get("/:userId", getPortfolio); // Get portfolio by user ID
   router.put("/:id", updatePortfolio); // Update portfolio
   router.delete("/:id", deletePortfolio); // Delete portfolio
   ```
3. Import routes in `server.js` and use `app.use("/api/portfolio", portfolioRoutes);`.

#### Testing Portfolio CRUD Operations
- Use Postman to test API endpoints:
  - `POST /api/portfolio` → Create a new portfolio.
  - `GET /api/portfolio/:userId` → Retrieve portfolio details.
  - `PUT /api/portfolio/:id` → Update portfolio.
  - `DELETE /api/portfolio/:id` → Delete portfolio.

📖 **Learn More:**
- [REST API Best Practices](https://www.restapitutorial.com/)
- [MongoDB CRUD Guide](https://www.mongodb.com/docs/manual/crud/)


### Step 7: Create the AI-Powered Portfolio Suggestions

#### Install OpenAI SDK
Ensure that OpenAI’s API is installed:
```sh
npm install openai
```

#### Configure OpenAI API
1. Inside the `server` folder, create a `.env` file and add:
   ```env
   OPENAI_API_KEY=your_openai_api_key
   ```
2. Inside `server/controllers`, create a file named `aiController.js`.

#### Define AI Controller
Inside `aiController.js`, create a function to generate portfolio suggestions:
```js
const OpenAI = require("openai");
const dotenv = require("dotenv");
dotenv.config();

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

const generatePortfolioSuggestions = async (req, res) => {
    try {
        const { skills, experience, projects } = req.body;
        
        const prompt = `Create a developer portfolio description based on these skills: ${skills.join(", ")}, experience: ${experience}, and projects: ${projects.join(", ")}. Make it professional and concise.`;
        
        const response = await openai.completions.create({
            model: "gpt-4",
            prompt: prompt,
            max_tokens: 200
        });
        
        res.json({ suggestion: response.choices[0].text.trim() });
    } catch (error) {
        console.error("OpenAI Error:", error);
        res.status(500).json({ error: "Failed to generate AI suggestions" });
    }
};

module.exports = { generatePortfolioSuggestions };
```

#### Define AI Route
1. Inside `routes`, create `ai.js`.
2. Add a route to handle AI-generated suggestions:
   ```js
   const express = require("express");
   const { generatePortfolioSuggestions } = require("../controllers/aiController");
   const router = express.Router();
   
   router.post("/suggest", generatePortfolioSuggestions);
   
   module.exports = router;
   ```

3. Register the AI routes in `server.js`:
   ```js
   const aiRoutes = require("./routes/ai");
   app.use("/api/ai", aiRoutes);
   ```

#### Testing AI Integration
- Use Postman or cURL to send a POST request to `/api/ai/suggest` with this JSON body:
   ```json
   {
     "skills": ["JavaScript", "React", "Node.js"],
     "experience": "2 years of web development",
     "projects": ["E-commerce website", "Portfolio Builder"]
   }
   ```
- Expected response:
   ```json
   {
     "suggestion": "With 2 years of web development experience in JavaScript, React, and Node.js, you have successfully built projects like an e-commerce website and a portfolio builder. Your expertise in creating dynamic, user-friendly applications makes you a strong candidate for front-end and full-stack development roles."
   }
   ```

📖 **Learn More:**
- [OpenAI API Docs](https://platform.openai.com/docs/)
- [GPT-4 API Guide](https://openai.com/research/gpt-4)



















# Dev Portfolio Builder - Frontend Documentation

## Overview
The frontend of the Dev Portfolio Builder is built using React.js with Tailwind CSS for styling. The goal is to create a dynamic, user-friendly interface where users can:
- Enter their details to generate a portfolio
- Upload images and projects
- Use AI-powered auto-fill for content
- Customize portfolio themes
- Preview the portfolio in real-time

## Tech Stack
- **React.js** (Frontend framework)
- **Tailwind CSS** (Styling)
- **Axios** (API requests)
- **React Router** (Navigation)
- **Redux Toolkit** (State management)

## Folder Structure
```
/client
|-- /src
|   |-- /components  # Reusable UI components
|   |-- /pages       # Main pages
|   |-- /context     # Context API/Redux store
|   |-- App.js       # Main app entry
|-- /public
|   |-- index.html
```

## Step-by-Step Guide to Building the Frontend

### Step 1: Initialize React Project
1. Open a terminal and navigate to the desired directory where you want to create the frontend project.
2. Run the following command to create a new React app:
   ```sh
   npx create-react-app client
   cd client
   ```
3. Install required dependencies:
   ```sh
   npm install axios react-router-dom tailwindcss @reduxjs/toolkit react-redux
   ```
4. Initialize Tailwind CSS:
   ```sh
   npx tailwindcss init -p
   ```
5. Configure `tailwind.config.js` by modifying the content array to include all necessary directories:
   ```js
   module.exports = {
     content: ["./src/**/*.{js,jsx,ts,tsx}"],
     theme: {
       extend: {},
     },
     plugins: [],
   };
   ```
6. Add Tailwind to `index.css` by including the following:
   ```css
   @tailwind base;
   @tailwind components;
   @tailwind utilities;
   ```

### Step 2: Setup Routing
1. Create a `pages` folder inside `src`.
2. Inside `pages/`, create the following files:
   - `Home.js` (Landing page)
   - `Dashboard.js` (User portfolio management page)
   - `Login.js` & `Signup.js` (Authentication pages)
3. Install React Router:
   ```sh
   npm install react-router-dom
   ```
4. Setup routing inside `App.js`:
   ```js
   import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
   import Home from "./pages/Home";
   import Dashboard from "./pages/Dashboard";
   import Login from "./pages/Login";
   import Signup from "./pages/Signup";

   function App() {
     return (
       <Router>
         <Routes>
           <Route path="/" element={<Home />} />
           <Route path="/dashboard" element={<Dashboard />} />
           <Route path="/login" element={<Login />} />
           <Route path="/signup" element={<Signup />} />
         </Routes>
       </Router>
     );
   }
   export default App;
   ```

### Step 3: Create the Authentication System
1. Set up Redux Toolkit for global state management.
2. Inside `src`, create a `context/` folder and add `authSlice.js`.
3. Implement authentication handling:
   ```js
   import { createSlice } from "@reduxjs/toolkit";

   const authSlice = createSlice({
     name: "auth",
     initialState: {
       user: null,
       token: null,
     },
     reducers: {
       login(state, action) {
         state.user = action.payload.user;
         state.token = action.payload.token;
       },
       logout(state) {
         state.user = null;
         state.token = null;
       },
     },
   });

   export const { login, logout } = authSlice.actions;
   export default authSlice.reducer;
   ```
4. Configure the Redux store in `store.js`:
   ```js
   import { configureStore } from "@reduxjs/toolkit";
   import authReducer from "./authSlice";

   const store = configureStore({
     reducer: {
       auth: authReducer,
     },
   });

   export default store;
   ```

📖 **Learn More:**
- [React Router Docs](https://reactrouter.com/en/main/start/tutorial)
- [Redux Toolkit Guide](https://redux-toolkit.js.org/tutorials/quick-start)

### Step 4: Integrate AI-Powered Portfolio Suggestions
1. Create a component `AIGenerator.js` inside `components/`.
2. Fetch AI-generated suggestions from the backend using Axios:
   ```js
   import axios from "axios";
   import { useState } from "react";

   function AIGenerator() {
     const [skills, setSkills] = useState("");
     const [suggestion, setSuggestion] = useState("");

     const getAISuggestion = async () => {
       const response = await axios.post("/api/ai/suggest", { skills: skills.split(",") });
       setSuggestion(response.data.suggestion);
     };

     return (
       <div>
         <input type="text" placeholder="Enter your skills" onChange={(e) => setSkills(e.target.value)} />
         <button onClick={getAISuggestion}>Generate</button>
         <p>{suggestion}</p>
       </div>
     );
   }

   export default AIGenerator;
   ```

### Step 5: Portfolio Preview and Deployment
- Implement a `PortfolioPreview` component.

# Portfolio Preview and API Integration

## Implementing the `PortfolioPreview` Component

### Overview
The `PortfolioPreview` component dynamically displays a live preview of the user’s portfolio based on their inputs. This feature allows users to see real-time changes as they edit their details.

### Step 1: Create the `PortfolioPreview` Component
1. Inside `src/components/`, create a new file `PortfolioPreview.js`.
2. Define the component structure:

```js
import React from "react";

const PortfolioPreview = ({ name, bio, projects, skills, theme }) => {
  return (
    <div className={`portfolio-preview ${theme}`}>
      <h1 className="text-3xl font-bold">{name}</h1>
      <p className="text-gray-600">{bio}</p>
      <h2 className="mt-4 text-xl font-semibold">Projects</h2>
      <ul>
        {projects.map((project, index) => (
          <li key={index} className="border p-2 mt-2">
            <h3 className="font-bold">{project.title}</h3>
            <p>{project.description}</p>
          </li>
        ))}
      </ul>
      <h2 className="mt-4 text-xl font-semibold">Skills</h2>
      <div className="flex gap-2 flex-wrap">
        {skills.map((skill, index) => (
          <span key={index} className="bg-blue-200 px-3 py-1 rounded-full">
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

export default PortfolioPreview;
```

### Step 2: Integrate the Component into Dashboard
1. Open `Dashboard.js`.
2. Import the component and pass user data as props:

```js
import PortfolioPreview from "../components/PortfolioPreview";

const Dashboard = () => {
  const userData = {
    name: "John Doe",
    bio: "Full Stack Developer",
    projects: [
      { title: "E-commerce App", description: "Built with React & Node.js" },
      { title: "Portfolio Builder", description: "Built with AI-powered features" },
    ],
    skills: ["JavaScript", "React", "Node.js", "MongoDB"],
    theme: "light", // Dynamic theme switcher can be added
  };

  return (
    <div>
      <PortfolioPreview {...userData} />
    </div>
  );
};

export default Dashboard;
```

---

## Connecting Frontend with Backend APIs

### Step 1: Setup API Base URL
1. Create an `.env` file in the `client` directory and define the API base URL:

```env
REACT_APP_API_URL=http://localhost:5000/api
```

2. Create an `api.js` file inside `src/` to centralize API requests:

```js
import axios from "axios";

const API = axios.create({ baseURL: process.env.REACT_APP_API_URL });

export default API;
```

### Step 2: Fetch User Portfolio Data
1. Inside `Dashboard.js`, fetch data from the backend:

```js
import { useEffect, useState } from "react";
import API from "../api";
import PortfolioPreview from "../components/PortfolioPreview";

const Dashboard = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUserPortfolio = async () => {
      try {
        const response = await API.get("/portfolio");
        setUserData(response.data);
      } catch (error) {
        console.error("Error fetching portfolio:", error);
      }
    };
    fetchUserPortfolio();
  }, []);

  return (
    <div>
      {userData ? <PortfolioPreview {...userData} /> : <p>Loading...</p>}
    </div>
  );
};

export default Dashboard;
```

### Step 3: Post User Portfolio Data
1. Create a form to submit portfolio data.
2. Use `axios.post` to send data to the backend:

```js
const handleSavePortfolio = async () => {
  try {
    await API.post("/portfolio", userData);
    alert("Portfolio saved successfully!");
  } catch (error) {
    console.error("Error saving portfolio:", error);
  }
};
```

### Step 4: Test API Integration
1. Start both frontend (`npm start`) and backend (`node server.js`).
2. Navigate to the dashboard and verify data fetching and submission.

✅ **Portfolio Preview and API Integration are now complete!**