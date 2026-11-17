# Anecdotes

A React application built as part of **Full Stack Open – Part 1, Exercises 1.12–1.14**. It displays software-development anecdotes, lets users choose another anecdote at random, records votes, and identifies the anecdote with the most votes.

## Features

- Displays one anecdote at a time from a collection of eight anecdotes.
- Selects a random anecdote with the **Next anecdote** button.
- Lets users vote for the currently displayed anecdote.
- Keeps a separate vote count for each anecdote.
- Displays the anecdote with the highest vote count.
- Displays the first anecdote with the highest count when there is a tie.

## Built With

- [React](https://react.dev/)
- JavaScript (ES6+)
- React `useState` hook
- [Vite](https://vite.dev/)

## Project Structure

```text
anecdotes/
├── public/
├── src/
│   ├── App.jsx       # Anecdote data, state, voting, and UI
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

## How It Works

- The `selected` state stores the index of the currently displayed anecdote.
- The `votes` state stores an array of vote counts. Each index corresponds to the anecdote at the same index in the anecdotes array.
- The next-anecdote action selects a random valid array index.
- The vote action copies the votes array, increments the selected anecdote's count, and saves the new array in state. The existing state array is not mutated.
- `Math.max(...votes)` finds the highest vote count, and `votes.indexOf(...)` finds the first anecdote with that count.

## React and JavaScript Concepts Practised

- **State with `useState`:** tracks the selected anecdote and vote counts.
- **Event handling:** responds to Next anecdote and Vote button clicks.
- **Arrays:** stores the anecdote collection and corresponding vote counts.
- **Random selection:** uses `Math.random()` and `Math.floor()` to generate an array index.
- **Immutable state updates:** uses the spread operator to create a new votes array before updating it.
- **Array and Math methods:** uses `length`, `indexOf()`, and `Math.max()`.
- **Functional state updates:** calculates the next vote array from the previous state.

## Exercise Coverage

| Exercise | Work completed                                           |
| -------- | -------------------------------------------------------- |
| 1.12     | Added random anecdote selection.                         |
| 1.13     | Added voting and per-anecdote vote counts.               |
| 1.14     | Displayed the anecdote with the highest number of votes. |

---

Part of my [Full Stack Open exercise repository](https://github.com/Nitant06/full-stack-open/tree/main/part-1-react/anecdotes).
