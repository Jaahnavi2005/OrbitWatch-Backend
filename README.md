# 🛰️ OrbitWatch — Backend
### API server powering the OrbitWatch space debris dashboard.

> Built for **Student Hackpad 2026** | Space Debris Monitoring Dashboard

---

## 🌍 What is this?

This is the **backend API** for [OrbitWatch](#) — a real-time space debris monitoring dashboard. It acts as a proxy server between the frontend and **CelesTrak**, fetching live orbital debris data and serving it in a clean JSON format while bypassing browser CORS restrictions.

---

## ⚙️ What It Does

```
Frontend  →  GET /debris  →  Backend Server  →  CelesTrak API  →  Live TLE data  →  JSON response
```

- Fetches live orbital element data (TLE) from CelesTrak's public API
- Bypasses CORS restrictions that block direct browser-to-CelesTrak requests
- Returns clean JSON for the frontend to process and visualize
- Includes a health check route to confirm the server is running

---

## 🚀 How to Run

### Prerequisites
- [Node.js](https://nodejs.org/) installed (v18 or higher recommended)

### Steps

```bash
git clone https://github.com/Jaahnavi2005/orbitwatch-backend.git
cd orbitwatch-backend
npm install express cors
node server.js
```

You should see:
```
🚀 Backend running at http://localhost:3000
```

### Test it
Visit `http://localhost:3000` → should show:
```
OrbitWatch Backend Running 🚀
```

Visit `http://localhost:3000/debris` → should return live JSON debris data from CelesTrak.

---

## 🗂️ Project Structure

```
orbitwatch-backend/
│
├── server.js       → Express server with CORS proxy to CelesTrak
├── package.json     → Project dependencies
└── README.md         → You are here!
```

---

## 📡 API Endpoints

| Endpoint | Method | Description |
|---|---|---|
| `/` | GET | Health check — confirms server is running |
| `/debris` | GET | Returns live debris/satellite orbital data from CelesTrak (JSON) |

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| Node.js | Runtime environment |
| Express | Web server framework |
| CORS | Cross-origin request handling |
| CelesTrak API | Source of real orbital TLE data |

---

## ☁️ Deployment

This backend is deployed on **Railway** so the frontend can fetch live data without needing a locally running server — including on mobile devices.

---

## 🔗 Related Repository

Frontend (3D globe + dashboard UI): **[OrbitWatch Frontend](#)**

---

## 👩‍💻 Built By

**Jaahnavi** — Student Developer
Built with ❤️ for Space Hackpad 2026
