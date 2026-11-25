# Phonebook (Full Stack Open — Part 2)

A React phonebook application with full CRUD persistence built as part of Full Stack Open Part 2 (Exercises 2.6–2.15).

## Features

- Full CRUD operations (`GET`, `POST`, `PUT`, `DELETE`) backed by JSON Server
- Dedicated Axios service module (`src/services/persons.js`)
- Add new contacts and persist them to `db.json`
- Update an existing contact's phone number after confirmation
- Delete contacts with confirmation prompt
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
