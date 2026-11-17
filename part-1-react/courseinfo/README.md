# Course Information

A small React application built as part of **Full Stack Open – Part 1, Exercises 1.1–1.5**. It displays information about a course, its three parts, the number of exercises in each part, and the total number of exercises.

## Features

- Displays the course name.
- Displays each course part and its exercise count.
- Calculates and displays the total number of exercises.
- Uses reusable React components to keep the UI organised.

## Built With

- [React](https://react.dev/)
- JavaScript (ES6+)
- [Vite](https://vite.dev/) – development server and build tool

## Project Structure

```text
courseinfo/
├── public/
├── src/
│   ├── App.jsx       # Course data and React components
│   └── main.jsx      # React application entry point
├── index.html
├── package.json
└── vite.config.js
```

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (a current LTS release is recommended)
- npm (included with Node.js)

### Install dependencies

From this project directory, run:

```bash
npm install
```

### Start the development server

```bash
npm run dev
```

Open the local URL printed in the terminal (Vite normally uses `http://localhost:5173/`).

### Create a production build

```bash
npm run build
```

The generated production files are placed in the `dist/` directory.

## React Concepts Practised

- **Components:** `App`, `Header`, `Content`, `Part`, and `Total` divide the interface into smaller reusable pieces.
- **Props:** the parent component passes course data to child components.
- **Objects and arrays:** course information is represented as an object containing an array of part objects.
- **JSX:** JavaScript expressions are rendered inside the UI.

## Exercise Coverage

| Exercise | Work completed |
| --- | --- |
| 1.1 | Split the course display into `Header`, `Content`, and `Total` components. |
| 1.2 | Created a reusable `Part` component. |
| 1.3 | Represented each course part as an object. |
| 1.4 | Collected the part objects in an array. |
| 1.5 | Grouped the course name and parts into one course object. |

## Example Data

The example course contains three parts:

| Course part | Exercises |
| --- | ---: |
| Fundamentals of React | 10 |
| Using props to pass data | 7 |
| State of a component | 14 |
| **Total** | **31** |

---

Part of my [Full Stack Open exercise repository](https://github.com/Nitant06/full-stack-open/tree/main/part-1-react/courseinfo).
