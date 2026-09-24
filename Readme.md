# ⚛️ React Practice

A collection of small **React.js practice components and examples** created while learning the fundamentals of React.

This repository focuses on understanding how React applications are structured and how components communicate and manage state.

---

## 📚 Concepts Covered

- ⚛️ Functional Components
- 📦 Component Reusability
- 🔗 Props
- 🧠 `useState`
- 🖱️ Event Handling
- 📝 Controlled Inputs
- 📋 Rendering Lists
- 🔑 React Keys
- 🎨 CSS Styling
- 🗂️ Component-based Project Structure

---

## 🧩 Components

### 👋 Greeting

A reusable component that accepts a name through props and displays a personalized greeting.

### 👤 UserCard

Displays user information using reusable props.

### 🔢 Counter

Demonstrates React state management using `useState`.

Features:

- Increment
- Decrement
- Reset

### ✅ TodoList

A simple todo list demonstrating:

- State management
- User input
- Adding items dynamically
- Rendering arrays using `.map()`

---

## 📁 Project Structure

```text
react/
│
├── src/
│   ├── components/
│   │   ├── Counter.jsx
│   │   ├── Greeting.jsx
│   │   ├── UserCard.jsx
│   │   └── TodoList.jsx
│   │
│   ├── App.jsx
│   ├── App.css
│   └── main.jsx
│
├── package.json
├── package-lock.json
└── README.md
