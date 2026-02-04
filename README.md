# 📝 React Registration Form with Confirmation Card

A clean and structured React form application built using **React + Tailwind CSS**.  
The project demonstrates controlled components, form validation, conditional rendering, and parent-child communication using a confirmation workflow.

---

## 🚀 Features

- Controlled form inputs using React state
- Custom form validation with dynamic error messages
- Field-level error display with red border highlights
- Confirmation card before final submission
- Edit & Confirm workflow
- Conditional rendering between Form and Confirm Card
- Clean component-based architecture
- Styled using Tailwind CSS

---

## 🧠 Concepts Implemented

- useState Hook
- Lifting State Up
- Props & Component Communication
- Conditional Rendering
- Form Handling in React
- Validation Logic
- Separation of Concerns
- Parent Controlled UI Flow

---

## 🧩 Project Structure

src/
│
├── components/
│ ├── Form.jsx
│ └── ConfirmCard.jsx
│
├── App.jsx
└── main.jsx


---

## 🔄 Application Flow

1. User fills the registration form
2. Inputs are validated on submit
3. If valid → user data sent to parent (App.jsx)
4. Form is replaced with ConfirmCard
5. User can:
   - Edit → go back to form
   - Okay → confirm submission

---

## 🛠️ Tech Stack

- React
- JavaScript (ES6+)
- Tailwind CSS
- Vite

---

## ▶️ Run Locally

Clone the project:

```bash
git clone https://github.com/swadeep05/react-form.git
Go to project folder:-
cd react-form

Install dependencies:-
npm install

Start development server:-
npm run dev
