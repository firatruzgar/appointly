# appointly

### Smart Appointment Management System (API Integrated)

Schedura is a role-based, real-world appointment management system designed for service-based businesses such as salons, clinics, consultants, and studios.  
The system focuses on **time-slot management, conflict prevention, and real-life business rules**, rather than simple CRUD operations.

This project was built as a **CV-focused, production-like application** to demonstrate frontend, backend, database, authentication, and external API integrations using modern web technologies.

---

## 🚀 Features

### Core Appointment Management

- Create, update, and cancel appointments
- Time-slot based scheduling with **conflict prevention**
- Service-based duration handling (e.g. 30 min, 60 min services)
- Appointment status workflow:

### Role-Based Access

- **USER**: Create and manage own appointments
- **ADMIN**: Manage services, working hours, approvals, and reports
- Protected routes and server-side authorization

### Business Rules (Real-World Focus)

- Working hours enforcement (appointments outside working hours are blocked)
- Daily capacity limits
- Automatic detection of overlapping appointments
- Delay handling and risk indicators for upcoming appointments

### External API Integrations

- **Google Calendar API**
- Approved appointments are automatically added to the business calendar
- **Email API (Resend / SendGrid)**
- Appointment approval notifications
- Cancellation notifications

### Admin Dashboard & Reporting

- Daily appointment count
- Cancellation rate
- Peak time slots
- Simple analytics for operational insight

---

## 🧠 Why This Project?

Most junior-level projects focus only on basic CRUD operations.  
Schedura goes beyond that by implementing:

- Time-based conflict algorithms
- Real business constraints
- Role-based workflows
- Third-party API integrations
- Scalable and extensible architecture

This makes the project closer to **real production systems** rather than tutorial-style demos.

---

## 🛠 Tech Stack

### Frontend

- Next.js (App Router)
- React
- TypeScript
- Tailwind CSS

### Backend

- Next.js API Routes
- Server Actions
- Zod (validation)

### Database

- PostgreSQL
- Prisma ORM

### Authentication

- NextAuth (Credentials / Google OAuth)

### External Services

- Google Calendar API
- Email API (Resend or SendGrid)

### Tooling

- GitHub
- Trello (task & roadmap management)
- Vercel (deployment)

---

## 🗂 Database Models (Simplified)

- User
- Service
- Appointment
- WorkingHours

Relationships are designed using relational database principles with Prisma.

---

## 🔐 Authentication & Authorization

- Session-based authentication via NextAuth
- Role-based access control (RBAC)
- Server-side route protection
- Secure handling of OAuth tokens

---

## 📦 Installation & Setup

```bash
git clone https://github.com/your-username/schedura.git
cd schedura
npm install

```
