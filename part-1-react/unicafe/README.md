# Unicafe Feedback

A simple feedback application built as part of **Full Stack Open – Part 1, Exercises 1.6–1.11**. Users can give good, neutral, or bad feedback, and the application displays live statistics based on the responses.

## Features

- Three feedback buttons: **good**, **neutral**, and **bad**.
- Counts each feedback response using React state.
- Calculates the total number of responses.
- Calculates the average feedback score using `good = +1`, `neutral = 0`, and `bad = -1`.
- Calculates the percentage of positive (good) feedback.
- Displays `No feedback given` before the first response.
- Shows the statistics in an HTML table.

## Built With

- [React](https://react.dev/)
- JavaScript (ES6+)
- React `useState` hook
- [Vite](https://vite.dev/)

## Project Structure

```text
unicafe/
├── public/
├── src/
│   ├── App.jsx       # Feedback state, components, and calculations
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

## How the Statistics Work

Let `good`, `neutral`, and `bad` be the number of responses in each category.

```text
Total responses = good + neutral + bad
Average score   = (good - bad) / total responses
Positive (%)    = (good / total responses) * 100
```

The application checks whether the total is zero before calculating or displaying the statistics, avoiding division by zero.

## React Concepts Practised

- **State with `useState`:** stores the changing feedback counts.
- **Event handling:** button clicks update the appropriate count.
- **Props:** data and click handlers are passed to reusable child components.
- **Component extraction:** `Button`, `Statistics`, and `StatisticLine` separate UI responsibilities.
- **Conditional rendering:** displays a message when no feedback has been submitted.
- **Derived values:** total, average, and positive percentage are calculated from the state.
- **HTML tables:** statistics are rendered as table rows and cells.

## Exercise Coverage

| Exercise | Work completed |
| --- | --- |
| 1.6 | Added feedback buttons and individual feedback counts. |
| 1.7 | Added total, average, and positive-feedback calculations. |
| 1.8 | Extracted the statistics into a `Statistics` component. |
| 1.9 | Displayed a message when no feedback has been given. |
| 1.10 | Extracted reusable `Button` and `StatisticLine` components. |
| 1.11 | Displayed statistics in an HTML table. |

---

Part of my [Full Stack Open exercise repository](https://github.com/Nitant06/full-stack-open/tree/main/part-1-react/unicafe).
