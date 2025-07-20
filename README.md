# Goal Tracker App

A personal goal-tracking web application that allows users to set financial goals, deposit savings, and track progress over time.

## Features

- Add new savings goals
- Deposit towards existing goals
- Overview dashboard with total savings, completed goals, warnings, and overdue goals
- Real-time updates with user-friendly UI


## Technologies Used

- **Next.js** (App Router)
- **React**
- **Tailwind CSS**
- **JSON Server** (Mock API)
- **React Hot Toast** (for alerts)
- **Render** (for deployment)

## Pages Overview
**1. Home (/)**

Displays a welcome or landing screen.
May include navigation links to other pages like Goals, Add Goal, or Overview.

**2. Overview (/overview)**

Summarizes your goals at a glance.
Key metrics:
- Total number of goals
- Total amount saved
- Number of completed goals
- Warnings for upcoming deadlines
- Overdue goals

**3. Goals List (/goals)**

Displays a table or list of all created financial goals.
Includes details such as:
- Goal name
- Target amount
- Saved amount
- Category
- Deadline

**4. Add Goal (/goals/add)**

A form for creating a new goal.
Fields include:
- Name
- Target amount
- Initial saved amount
- Category
- Deadline
- Submits data to a JSON server.

**5. Deposit Form (/deposit)**

- Allows users to deposit money towards a specific goal.
- Select a goal and enter deposit amount.
- Validates input and updates saved amount.
- Shows a success message on completion.

**6. Navbar**
- Persistent navigation UI across the app.
- Lets users easily switch between Overview, Goals, and Add pages.

## How to Run Locally

**1. Install dependencies**
```
npm install
```

**2. Start the backend (JSON Server)**
```
npx json-server --watch db.json --port 3001
```
The mock API will be available at:
👉 http://localhost:3001/goals

**3. Start the frontend (Next.js app)**
```
npm run dev
```
The frontend will be available at:
👉 http://localhost:3000

## Live Demo
**THE FRONTEND is deployed on render**

If you'd like to see the app in action, click the link below:

👉 [https://goal-tracker-ts2n.onrender.com](https://goal-tracker-ts2n.onrender.com)


## License

Copyright (c) 2025 viviangichuregithub

## Author
**Vivian Gichure**
- Frontend Developer |  Full-stack Mobile Developer
- Kenya
- Email me on vivangichure@gmail.com
