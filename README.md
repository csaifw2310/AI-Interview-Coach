# 🚀 AI Interview Coach

An AI-powered interview preparation platform that analyzes resumes, job descriptions, and candidate profiles to generate personalized interview reports, skill-gap analysis, technical questions, behavioral questions, and preparation roadmaps.

---

## 📌 Overview

AI Interview Coach helps job seekers prepare smarter for interviews.

Instead of manually researching interview questions and required skills, users simply:

1. Upload their Resume (PDF)
2. Paste a Job Description
3. Add a Self Description

The platform uses Google Gemini AI to generate a complete interview preparation report.

---

## ✨ Features

### 🔐 Authentication

* User Registration
* Email Verification (OTP)
* Login & Logout
* Forgot Password
* Reset Password
* JWT Authentication
* Protected Routes

---

### 🤖 AI Interview Analysis

* Resume PDF Parsing
* Job Description Analysis
* Candidate Profile Analysis
* AI Match Score
* Technical Interview Questions
* Behavioral Interview Questions
* Skill Gap Analysis
* Personalized Preparation Roadmap

---

### 📊 Report Dashboard

* Interview Reports History
* View Detailed Reports
* Match Score Visualization
* Skill Gap Analysis
* Download AI-Optimized Resume
* Dark / Light Theme

---

### 🎨 Modern UI

* Responsive Design
* Mobile Friendly
* Dark Mode Support
* SaaS Styled Dashboard
* Loading States
* Error Handling
* Toast Notifications

---

## 🖼 Screenshots

### Home Page

Add:

screenshots/home.png

### Interview Report

Add:

screenshots/report.png

### Reports Dashboard

Add:

screenshots/reports.png

### Dark Mode

Add:

screenshots/dark-mode.png

---

## 🎥 Product Demo

Add your generated GIF:

screenshots/demo.gif

Example:

![Demo](./screenshots/demo.gif)

---

## 🏗 System Architecture

```text
                    ┌─────────────┐
                    │    User     │
                    └──────┬──────┘
                           │
                           ▼

                 ┌──────────────────┐
                 │ React + Vite UI  │
                 └────────┬─────────┘
                          │ Axios
                          ▼

              ┌────────────────────────┐
              │ Node.js + Express API  │
              └───────┬────────┬───────┘
                      │        │
                      │        │
                      ▼        ▼

             ┌────────────┐  ┌──────────────┐
             │ MongoDB    │  │ Gemini AI    │
             │ Atlas      │  │ API          │
             └────────────┘  └──────────────┘
                      │
                      ▼

              ┌─────────────────┐
              │ Interview       │
              │ Reports         │
              └─────────────────┘

                      │
                      ▼

             ┌──────────────────┐
             │ Email Service    │
             │ (SMTP)           │
             └──────────────────┘
```

---

## 🛠 Tech Stack

### Frontend

* React.js
* Vite
* Tailwind CSS
* React Router DOM
* Axios
* React Hot Toast
* Lucide React

### Backend

* Node.js
* Express.js
* MongoDB Atlas
* Mongoose
* JWT
* Multer
* PDF Parse
* Nodemailer

### AI

* Google Gemini API

---

## 📂 Project Structure

```text
AI-Interview-Coach
│
├── frontend
│   ├── src
│   │   ├── api
│   │   ├── components
│   │   ├── context
│   │   ├── hooks
│   │   ├── layout
│   │   ├── pages
│   │   └── routes
│   │
│   └── public
│
├── backend
│   ├── controllers
│   ├── middleware
│   ├── models
│   ├── routes
│   ├── services
│   ├── utils
│   └── server.js
│
└── README.md
```

---

## ⚙ Installation

### Clone Repository

```bash
git clone https://github.com/yourusername/ai-interview-coach.git

cd ai-interview-coach
```

---

## Backend Setup

```bash
cd backend

npm install
```

Create `.env`

```env
PORT=5000

MONGODB_URI=

JWT_SECRET=

JWT_EXPIRES_IN=

GOOGLE_GEMINI_API_KEY=

EMAIL_USER=

EMAIL_PASS=
```

Run Backend

```bash
npm run dev
```

---

## Frontend Setup

```bash
cd frontend

npm install
```

Create `.env`

```env
VITE_API_URL=http://localhost:5000/api
```

Run Frontend

```bash
npm run dev
```

---

## 🔑 Environment Variables

### Backend

```env
PORT
MONGODB_URI
JWT_SECRET
JWT_EXPIRES_IN
GOOGLE_GEMINI_API_KEY
EMAIL_USER
EMAIL_PASS
```

### Frontend

```env
VITE_API_URL
```

---

## 🌐 Deployment

### Frontend

Deploy on Vercel

### Backend

Deploy on Render

### Database

MongoDB Atlas

---

## 🚀 Future Enhancements

* Voice Based Mock Interviews
* AI Interview Simulation
* Company Specific Interview Preparation
* Resume Version Management
* Interview Analytics Dashboard
* AI Career Coach
* Interview Performance Tracking
* Multi Language Support

---

## 📈 Learning Outcomes

This project demonstrates:

* Full Stack Development
* REST API Design
* Authentication & Authorization
* AI Integration
* PDF Processing
* MongoDB Database Design
* Frontend State Management
* Production Deployment Workflow
* SaaS Application Architecture

---

## 👨‍💻 Author

Ram

B.Tech Computer Science & Engineering (AI)

Full Stack Developer | AI Enthusiast

---

## ⭐ Support

If you found this project useful:

⭐ Star the repository

🍴 Fork the repository

🛠 Contribute improvements

📢 Share feedback

---

Built with ❤️ using React, Node.js, MongoDB and Google Gemini AI.

# AI-Interview-Coach
# AI-Interview-Coach
