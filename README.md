# 📝 MyBlog App

A modern, responsive full-stack blogging platform where users can create, edit, manage, and explore blog posts. The application provides secure authentication, a rich text editor, image uploads, and a clean, user-friendly interface.

> Built to gain hands-on experience in developing production-ready web applications using modern web technologies.

---

## 📸 Preview

> Add screenshots or a live demo GIF here.

| Home Page | Blog Details |
|-----------|--------------|
| ![Home](./screenshots/home.png) | ![Post](./screenshots/post.png) |

---

## 🚀 Live Demo

**Website:** https://myblogapp-6e62b.web.app

---

## ✨ Features

- 🔐 User Authentication (Sign Up / Login / Logout)
- ✍️ Create, Edit, and Delete blog posts
- 🖼️ Upload featured images for posts
- 📝 Rich Text Editor using TinyMCE
- 📖 Read blogs from all users
- 👤 Dashboard showing user's own posts
- 🔍 Clean and responsive UI
- 📱 Mobile-friendly design
- ⚡ Fast loading with Vite
- 🔒 Protected routes for authenticated users

---

## 🛠️ Tech Stack

### Frontend

- React.js
- Vite
- React Router DOM
- Tailwind CSS
- React Hook Form
- TinyMCE Editor

### Backend & Services

- Appwrite
  - Authentication
  - Database
  - Storage

### Deployment

- Firebase Hosting

---

## 📂 Project Structure

```text
src/
│
├── appwrite/
│   ├── auth.js
│   └── config.js
│
├── components/
│   ├── Header/
│   ├── Footer/
│   ├── Button/
│   ├── Input/
│   ├── PostCard/
│   ├── RTE/
│   └── ...
│
├── pages/
│   ├── Home.jsx
│   ├── Login.jsx
│   ├── Signup.jsx
│   ├── AddPost.jsx
│   ├── EditPost.jsx
│   ├── Post.jsx
│   └── AllPosts.jsx
│
├── store/
│
├── App.jsx
└── main.jsx
```

---

## ⚙️ Installation

Clone the repository

```bash
git clone https://github.com/santoshdiary/MyBlog-App.git
```

Navigate into the project

```bash
cd MyBlog-App
```

Install dependencies

```bash
npm install
```

Create a `.env` file in the project root and add your Appwrite configuration.

Example:

```env
VITE_APPWRITE_URL=your_appwrite_endpoint
VITE_APPWRITE_PROJECT_ID=your_project_id
VITE_APPWRITE_DATABASE_ID=your_database_id
VITE_APPWRITE_COLLECTION_ID=your_collection_id
VITE_APPWRITE_BUCKET_ID=your_bucket_id
```

Run the development server

```bash
npm run dev
```

Build for production

```bash
npm run build
```

Preview production build

```bash
npm run preview
```

---

## 📚 What I Learned

During this project, I gained practical experience with:

- Building reusable React components
- Client-side routing with React Router
- State management
- Form validation using React Hook Form
- Rich text editing with TinyMCE
- Authentication workflows
- CRUD operations
- Image uploads and storage
- Integrating Appwrite services
- Deploying applications with Firebase Hosting
- Responsive UI development using Tailwind CSS

---

## 🎯 Future Improvements

- ❤️ Like and reaction system
- 💬 Comment functionality
- 🔎 Search blogs
- 🏷️ Categories and tags
- 📚 Bookmark posts
- 👤 User profile page
- 🌙 Dark mode
- 📊 Blog analytics
- 📄 Pagination / Infinite scrolling

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome.

If you'd like to improve this project, feel free to fork the repository and submit a pull request.

---

## 👨‍💻 Author

**Santosh Kumar**

Aspiring Full-Stack (MERN) Developer

GitHub: https://github.com/santoshdiary

LinkedIn: https://www.linkedin.com/in/santosh-kumar-86a087394/

---

## ⭐ Support

If you found this project helpful, consider giving it a ⭐ on GitHub.
