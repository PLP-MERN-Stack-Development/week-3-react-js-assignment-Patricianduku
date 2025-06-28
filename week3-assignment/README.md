# Task Manager App

A modern React-based task management application that supports:

* ✅ Light/Dark theme toggle with persistence
* ✅ Task creation, filtering, deletion
* ✅ User counter example (state handling)
* ✅ Responsive design with Tailwind CSS
* ✅ React Router v6+ routing
* ✅ Fetch demo (placeholder for API page)

---

## 📁 Project Structure

```
├── public/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── Card.jsx
│   │   └── Button.jsx
│   ├── context/
│   │   └── ThemeContext.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Tasks.jsx
│   │   └── ApiData.jsx
│   ├── App.jsx
│   ├── Layout.jsx
│   ├── main.jsx
│   └── index.css
└── package.json
```

---

## ⚙️ Tech Stack

* [React 19](https://react.dev/)
* [React Router](https://reactrouter.com/)
* [Tailwind CSS v4](https://tailwindcss.com/)
* Vite for fast dev builds

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/PLP-MERN-Stack-Development/week-3-react-js-assignment-Patricianduku.git
cd task-manager-app
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Run Locally

```bash
npm run dev
```

Visit: [http://localhost:5173](http://localhost:5173)
Netlify: [text](https://sensational-banoffee-d9915f.netlify.app/)
---

## 🌐 Deployment Instructions

### Option 1: Deploy on Vercel

1. Push your code to GitHub.
2. Go to [https://vercel.com](https://vercel.com) and import your GitHub repo.
3. Set the build command: `npm run build`
4. Set the output directory: `dist`
5. Deploy 🎉

### Option 2: Deploy on Netlify

1. Push code to GitHub.
2. Go to [https://netlify.com](https://netlify.com) and connect your repo.
3. Use build command: `npm run build`
4. Publish directory: `dist`
5. Done!

---

## 🧪 Features

### ✅ Theme Toggle

* Click 🌙/☀️ button in navbar
* Theme is stored in `localStorage`

### ✅ Task Management

* Add, delete, and filter tasks
* Stored in `localStorage`

### ✅ Navigation

* `/` — Home (counter)
* `/tasks` — Task Manager
* `/api` — Placeholder for future API data (e.g. fetch users)

---
## screenshots:
Home: screenshot1.png
Tasks: screenshot2.png
users: screenshot.png

## 🔧 Future Improvements

* 🔐 Auth system
* 🔄 API integration on `/api`
* 🗃️ Persistent backend storage
* 📱 Improved mobile layout

---

## 📄 License

[MIT](LICENSE)

---

## Author

Built by \Patricinduku
