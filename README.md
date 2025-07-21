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
- **Render** (backend deployment) - https://goal-planner-api-5e2w.onrender.com/goals
- **vercel** (frontend deployment)- https://goal-planner-nu.vercel.app/

## Pages Overview
**1. Home (/)Goals List (/goals)**

Displays a table or list of all created financial goals.
Includes details such as:
- Goal name
- Target amount
- Saved amount
- Category
- Deadline

**2. Deposit Form (/deposit)**

- Allows users to deposit money towards a specific goal.
- Select a goal and enter deposit amount.
- Validates input and updates saved amount.
- Shows a success message on completion.

**3. Add Goal (/goals/add)**

A form for creating a new goal.
Fields include:
- Name
- Target amount
- Initial saved amount
- Category
- Deadline
- Submits data to a JSON server.

**4. Overview (/overview)**

Summarizes your goals at a glance.
Key metrics:
- Total number of goals
- Total amount saved
- Number of completed goals
- Warnings for upcoming deadlines
- Overdue goals

**5. Navbar**
- Persistent navigation UI across the app.
- Lets users easily switch between Overview, Goals, and Add pages.

## Live Demo App
Click the link to view the App

https://goal-planner-nu.vercel.app/

## License

Copyright (c) 2025 viviangichuregithub

## Author
**Vivian Gichure**
- Frontend Developer |  Full-stack Mobile Developer
- Kenya
- Email me on vivangichure@gmail.com
