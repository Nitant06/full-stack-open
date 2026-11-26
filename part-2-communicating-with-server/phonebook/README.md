# Phonebook (Full Stack Open — Part 2)

A React phonebook application with full CRUD persistence, styled notifications, and error handling built as part of Full Stack Open Part 2 (Exercises 2.6–2.17).

## Features

- Full CRUD operations (`GET`, `POST`, `PUT`, `DELETE`) backed by JSON Server
- Dedicated Axios service module (`src/services/persons.js`)
- Styled success and error notification banners (`Notification` component + `src/index.css`)
- Graceful error handling when modifying or deleting contacts already removed from the server
- Real-time case-insensitive contact search

## Run Locally

Install dependencies:

```bash
npm install
```

Start the mock backend (Terminal 1):

```bash
npm run server
```

Start the React frontend (Terminal 2):

```bash
npm run dev
```
