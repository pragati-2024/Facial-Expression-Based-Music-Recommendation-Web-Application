# 🎵 Moodify – Facial Expression-Based Music Recommendation Web Application

**Moodify** is a full-stack web application that recommends music based on the user's facial expressions. It uses Google's MediaPipe FaceLandmarker to detect facial expressions through a webcam and classifies them into different mood categories such as Happy, Sad, and Surprised.

The application aims to make music discovery more personalized by connecting facial expression detection with mood-based music recommendations.

## ✨ Key Features

- **User Authentication:** Secure user registration and login using JWT authentication.
- **Password Security:** Passwords are hashed using bcryptjs before storing them in the database.
- **Real-Time Facial Expression Detection:** Uses Google MediaPipe FaceLandmarker to analyse facial expressions through the webcam.
- **Mood Classification:** Classifies facial expressions into Happy, Sad, Surprised, and Neutral.
- **Secure Session Management:** Uses JWT cookies and Redis-based token blacklisting to invalidate sessions after logout.
- **Music Upload:** Supports MP3 uploads using Multer.
- **Automatic Metadata Extraction:** Extracts song titles and embedded album artwork using ID3 tags.
- **Cloud Media Storage:** Uses ImageKit for storing and delivering audio files and poster images.
- **Database Management:** MongoDB Atlas stores user information, song details, mood categories, and blacklisted tokens.
- **Protected Routes:** Prevents unauthenticated users from accessing protected pages.

## 🛠️ Technology Stack

### Frontend
- React.js 19
- JavaScript
- HTML5
- SCSS
- React Router
- Axios
- Vite
- MediaPipe Tasks Vision

### Backend
- Node.js
- Express.js
- Mongoose
- JWT (JSON Web Token)
- bcryptjs
- Multer
- node-id3
- Cookie Parser
- CORS

### Database & Cloud Services
- MongoDB Atlas
- Redis Cloud
- ImageKit

## 🏗️ System Architecture

Moodify follows a three-tier architecture with an additional client-side AI processing layer.

1. **Frontend:** React handles the user interface, authentication, webcam access, and facial expression detection.
2. **Emotion Detection:** MediaPipe processes facial expressions locally in the browser.
3. **Backend:** Node.js and Express.js handle authentication, APIs, and music uploads.
4. **Database:** MongoDB Atlas stores user accounts, songs, and token blacklist records.
5. **Cloud Storage:** ImageKit manages audio files and poster images.
6. **Redis:** Maintains a fast token blacklist for secure logout operations.

## 🔄 Application Workflow

1. User opens the Moodify application.
2. User registers or logs in using their credentials.
3. The backend validates credentials and generates a JWT token.
4. The user grants webcam permission.
5. MediaPipe analyses facial expressions in the browser.
6. The detected expression is classified into a mood.
7. The mood can be used to retrieve matching songs from the music catalogue.
8. On logout, the authentication token is invalidated through the blacklist mechanism.

**Privacy:** Facial expression analysis is performed locally in the browser. Webcam frames are not transmitted to the backend.

## 📂 Major Modules

### 1. Authentication Module
- User registration and login.
- Password hashing using bcryptjs.
- JWT-based authentication.
- Cookie-based session management.
- Secure logout with token blacklisting.
- Protected routes.

### 2. Expression Detection Module
- Webcam access through the browser.
- MediaPipe FaceLandmarker integration.
- Facial blendshape analysis.
- Classification of Happy, Sad, Surprised, and Neutral expressions.

### 3. Music Management Module
- MP3 file upload using Multer.
- Automatic ID3 metadata extraction.
- Extraction of embedded album artwork.
- Audio and poster uploads to ImageKit.
- Mood-based song categorisation.

### 4. Database Module
- User collection.
- Song collection.
- Token blacklist collection.
- MongoDB Atlas integration.

## 🔐 Security Features

- Password hashing using bcryptjs.
- JWT signature and expiry validation.
- HTTP cookie-based authentication.
- Redis and MongoDB token blacklisting.
- Protected backend routes.
- Environment variables for sensitive credentials.
- Client-side facial processing for privacy.

## 🚀 Installation and Setup

### Prerequisites

- Node.js (v18 or higher)
- npm
- MongoDB Atlas account
- Redis Cloud account
- ImageKit account
- Webcam-enabled browser

### 1. Clone the Repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

### 2. Navigate to the Project Folder

```bash
cd Moodify
```

### 3. Install Dependencies

Install the frontend and backend dependencies separately:

```bash
npm install
```

Run this command inside the respective frontend and backend folders if they have separate package.json files.

### 4. Configure Environment Variables

Create a `.env` file in the backend directory and configure the required credentials:

```env
PORT=3000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret

REDIS_HOST=your_redis_host
REDIS_PORT=your_redis_port
REDIS_PASSWORD=your_redis_password

IMAGEKIT_PUBLIC_KEY=your_public_key
IMAGEKIT_PRIVATE_KEY=your_private_key
IMAGEKIT_URL_ENDPOINT=your_imagekit_url
```

**Important:** Never upload your `.env` file or private credentials to GitHub.

### 5. Run the Application

Start the backend and frontend development servers using their configured npm scripts.

Backend API runs on:

```text
http://localhost:3000
```

Frontend development server runs on:

```text
http://localhost:5173
```

## 🔗 API Routes

### Authentication APIs

| Method | Endpoint | Purpose |
|---|---|---|
| POST | `/api/auth/register` | Register a new user |
| POST | `/api/auth/login` | Authenticate user |
| GET | `/api/auth/get-me` | Retrieve logged-in user |
| POST | `/api/auth/logout` | Logout and invalidate token |

### Music APIs

| Method | Endpoint | Purpose |
|---|---|---|
| POST | `/api/songs/` | Upload a song |

**Note:** Mood-filtered song retrieval is planned but not yet implemented in the supplied project snapshot.

## 📌 Current Implementation Status

### Implemented
- User registration and login.
- JWT authentication and cookie management.
- Password hashing.
- Redis and MongoDB token blacklisting.
- Protected frontend routes.
- Webcam integration.
- MediaPipe facial expression detection.
- Mood classification.
- MP3 upload functionality.
- ID3 metadata extraction.
- ImageKit cloud media upload.
- MongoDB database integration.

### Future Enhancements
- Complete mood-filtered song retrieval API.
- Develop a user-facing music dashboard.
- Implement an in-browser audio player.
- Add playlist management and favourites.
- Implement continuous real-time emotion tracking.
- Develop an admin panel for music management.
- Production deployment and CI/CD pipeline.

## ⚠️ Limitations

- Currently supports a limited number of facial expression categories.
- Detection accuracy may vary depending on lighting and camera conditions