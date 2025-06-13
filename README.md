# finance-tracker

A personal expense tracker for shared expenses, especially useful for roommates or groups splitting bills. Easily track expenses, categorize them, and settle who owes whom.

## Tech Stack

- **Frontend:** React + TypeScript + TailwindCSS  
- **Backend:** Node.js + Express  
- **Database:** PostgreSQL (ideal for structured relational data like users, expenses, and categories)  
- **Authentication (optional):** Clerk or Firebase Auth (free tiers available)  
- **Hosting:**
  - Frontend: Vercel  
  - Backend & Database: Railway or Render (free tiers)

## Features

- Add and categorize shared expenses  
- Choose how expenses are split (50/50 or proportionally)  
- Track who paid and how much each user owes or is owed  
- Ledger-style view by category and monthly summaries  
- Filter expenses by category or date range  
- Export data to CSV (optional)  
- Clean, responsive UI with mobile support

## Project Timeline

### Week 1 – Setup & Core Models

- [ ] Design the database schema:
  - User
  - Expense
  - Split
  - Category
  - Ledger
- [ ] Initialize backend with Express, PostgreSQL, and ORM (Prisma or Sequelize)
- [ ] Setup frontend project:
  - Routing
  - Layout with TailwindCSS
  - Optional: Auth flow using Clerk or Firebase

### Week 2 – Add Expenses & Splits

- [ ] Create a form to log an expense:
  - Who paid
  - Amount
  - Category
  - Split mode: 50/50 or proportional
- [ ] Save to the database
- [ ] Render a list of expenses on the frontend

### Week 3 – Dashboard & Payables

- [ ] Calculate balances (who owes whom)
- [ ] Create a ledger-style view grouped by category
- [ ] Show a monthly summary of transactions

### Week 4 – Polish & Features

- [ ] Add filters:
  - By category
  - By timeframe (e.g. this month, last 30 days)
- [ ] Implement CSV export (optional)
- [ ] Final UI/UX polish:
  - Responsive design
  - Mobile usability
