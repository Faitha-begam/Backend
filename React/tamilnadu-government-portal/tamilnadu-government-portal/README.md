# Tamil Nadu Government Services Portal

A responsive React + Vite + Tailwind CSS demo with Category, Department, and Service CRUD forms.

## Requirements
- Node.js 18+ (Node.js 20+ recommended)
- npm

## Run locally

1. Extract this ZIP.
2. Open the extracted `tamilnadu-government-portal` folder in VS Code.
3. Open Terminal in that folder and run:

```bash
npm install
npm run dev
```

4. Open the local URL printed by Vite (usually `http://localhost:5173`).

## Features
- Responsive navbar and Tamil Nadu-inspired hero banner.
- Add, edit/update, and delete categories.
- Add, edit/update, and delete departments, linked to categories.
- Add, edit/update, and delete services, linked to departments.
- Status selector (Active / Inactive) for every record.
- Tables update immediately after form submissions.
- Data persists in browser local storage after refresh.
- Deleting a category also deletes its departments and their services; deleting a department also deletes its services.

## Notes
This is a front-end demonstration only. It does not submit civic complaints to a real government department and does not use an official government API. Data is stored only in the current browser.
