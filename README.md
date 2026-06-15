# Offline-Educational-Mobile-Application-Project
The proposed system is an Offline Educational Mobile Application, designed specifically for  schools in rural areas and townships where internet connectivity is limited or unreliable. The  application aims to provide a structured digital learning environment aligned with the South  African government curriculum (CAPS).


Offline-First Educational Mobile Application
3-Week Development Plan
Collaboration tools
•	Slack via VS code(Siya will send the link to create the team group)
•	Github
________________________________________
Team Structure
Role	Responsibility
Frontend Developer 1	Authentication, Subjects, Quiz Module
Frontend Developer 2	Dashboard, Progress Tracking, UI Components
Backend Developer	APIs, Database, Authentication, Quiz Logic
Business Analyst	Requirements, Documentation, Testing, Project Coordination
________________________________________
Week 1: Project Setup & Planning
Objective
Establish the project foundation, development environment, database structure, and system designs.
________________________________________
Business Analyst
Tasks
•	Finalize project requirements
•	Create User Stories
•	Create Product Backlog
•	Complete Use Case Diagram
•	Complete ERD Diagram
•	Finalize Figma Wireframes
•	Prepare Sprint Backlog
Deliverables
•	Approved Requirements Document
•	User Stories
•	ERD Diagram
•	Use Case Diagram
•	Figma Wireframes
________________________________________
Frontend Developer 1
Authentication Module
Tasks
•	Setup React Native Project
•	Configure Expo
•	Setup React Navigation
•	Create Login Screen
•	Create Registration Screen
•	Create Forgot Password Screen
Deliverables
/screens
  LoginScreen.js
  RegisterScreen.js
  ForgotPassword.js

/navigation
  AppNavigator.js
________________________________________
Frontend Developer 2
UI Framework
Tasks
•	Create Theme Colors
•	Create Reusable Components
•	Create Buttons
•	Create Cards
•	Create Inputs
•	Create Loading Components
Deliverables
/components
  Button.js
  Card.js
  Input.js
  Loader.js

/theme
  colors.js
________________________________________
Backend Developer
Authentication Services
Tasks
•	Setup Node.js Backend
•	Setup Express Server
•	Configure SQLite Database
•	Create User Table
•	Create Authentication APIs
Deliverables
POST /login
POST /register
GET /users
________________________________________
Week 2: Core Student Features
Objective
Develop the dashboard and subject management functionality.
________________________________________
Business Analyst
Tasks
•	Review Sprint Progress
•	Update Documentation
•	Create Test Cases
•	Review Figma Screens
•	Track Team Progress
Deliverables
•	Test Cases
•	Updated Documentation
•	Sprint Report
________________________________________
Frontend Developer 1
Subject Module
Tasks
•	Create Subject List Screen
•	Create Subject Details Screen
•	Implement Search Functionality
•	Display Learning Content
Deliverables
SubjectScreen.js
SubjectDetailsScreen.js
SearchSubjects.js
________________________________________
Frontend Developer 2
Dashboard Module
Tasks
•	Create Student Dashboard
•	Create Dashboard Cards
•	Create Progress Summary Section
•	Display Subject Statistics
Deliverables
DashboardScreen.js
ProgressCard.js
StatsCard.js
________________________________________
Backend Developer
Subject APIs
Tasks
•	Create Subjects Table
•	Create CRUD Operations
•	Connect API to SQLite Database
Deliverables
GET /subjects
POST /subjects
PUT /subjects
DELETE /subjects
________________________________________
Week 3: Quiz & Progress Tracking
Objective
Develop quiz functionality and learner progress tracking.
________________________________________
Business Analyst
Tasks
•	Test User Flows
•	Update System Documentation
•	Review Functional Requirements
•	Prepare Sprint Review Presentation
Deliverables
•	Test Results
•	Updated Documentation
•	Sprint Review Report
________________________________________
Frontend Developer 1
Quiz Module
Tasks
•	Create Quiz Screen
•	Display Questions
•	Handle Answer Selection
•	Submit Quiz Answers
Deliverables
QuizScreen.js
QuestionCard.js
AnswerSelection.js
________________________________________
Frontend Developer 2
Progress Module
Tasks
•	Create Progress Screen
•	Create Results Screen
•	Create Score Dashboard
•	Display Quiz History
Deliverables
ProgressScreen.js
ResultsScreen.js
ScoreDashboard.js
________________________________________
Backend Developer
Quiz Services
Tasks
•	Create Quiz Table
•	Create Quiz APIs
•	Create Result APIs
•	Implement Score Calculation Logic
Deliverables
GET /quiz
POST /submitQuiz
GET /results
________________________________________
End of Week 3 Demo
The following application flow should be fully functional:
Login
   ↓
Student Dashboard
   ↓
Subject List
   ↓
Subject Details
   ↓
Quiz
   ↓
Results
   ↓
Progress Tracking
________________________________________
MVP Features Completed After Week 3
Authentication
•	Login
•	Registration
Dashboard
•	Student Dashboard
Subjects
•	Subject List
•	Subject Details
Quiz Module
•	Quiz Questions
•	Quiz Submission
•	Quiz Results
Progress Tracking
•	View Scores
•	View Performance History
________________________________________
Sprint Success Criteria
✅ User can register
✅ User can login
✅ User can access dashboard
✅ User can view subjects
✅ User can attempt quizzes
✅ User can receive results
✅ User progress is stored in database
________________________________________
Risks and Mitigation
Risk	Mitigation
Delayed Development	Daily Standups
Merge Conflicts	Feature Branch Strategy
API Issues	Early Backend Development
UI Delays	Reusable Components
Requirement Changes	Weekly Reviews
________________________________________
GitHub Branch Strategy
main
│
├── frontend-auth
├── frontend-dashboard
├── frontend-subjects
├── frontend-quiz
├── backend-api
├── backend-database
└── documentation
Rules
•	Never commit directly to main
•	Create Pull Requests for all features
•	Review code before merging
•	Keep commits small and descriptive
________________________________________
Expected Outcome After Week 3
A working Minimum Viable Product (MVP) demonstrating:
•	Authentication
•	Dashboard
•	Subject Management
•	Quiz Functionality
•	Progress Tracking
Ready for Phase 2 enhancements:
•	Teacher Dashboard
•	Admin Dashboard
•	Offline Sync
•	Cloud Backup
•	AI Features

