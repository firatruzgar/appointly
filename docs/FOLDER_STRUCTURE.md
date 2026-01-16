schedura/
├─ app/
│ ├─ (auth)/
│ │ ├─ login/
│ │ │ └─ page.tsx
│ │ └─ layout.tsx
│ │
│ ├─ (dashboard)/
│ │ ├─ dashboard/
│ │ │ └─ page.tsx
│ │ │
│ │ ├─ appointments/
│ │ │ ├─ page.tsx # Randevu listesi
│ │ │ ├─ new/
│ │ │ │ └─ page.tsx # Yeni randevu oluştur
│ │ │ └─ [id]/
│ │ │ └─ page.tsx # Randevu detay / admin aksiyonları
│ │ │
│ │ ├─ services/
│ │ │ └─ page.tsx # Admin - hizmet yönetimi
│ │ │
│ │ ├─ working-hours/
│ │ │ └─ page.tsx # Admin - çalışma saatleri
│ │ │
│ │ └─ layout.tsx
│ │
│ ├─ api/
│ │ ├─ auth/
│ │ │ └─ [...nextauth]/
│ │ │ └─ route.ts
│ │ │
│ │ ├─ appointments/
│ │ │ ├─ route.ts # POST, GET
│ │ │ └─ [id]/
│ │ │ └─ route.ts # PATCH, DELETE
│ │ │
│ │ ├─ services/
│ │ │ └─ route.ts
│ │ │
│ │ ├─ working-hours/
│ │ │ └─ route.ts
│ │ │
│ │ ├─ calendar/
│ │ │ └─ route.ts # Google Calendar entegrasyonu
│ │ │
│ │ └─ email/
│ │ └─ route.ts # Email gönderim endpoint’i
│ │
│ ├─ layout.tsx
│ └─ page.tsx # Landing / redirect
│
├─ components/
│ ├─ ui/
│ │ ├─ Button.tsx
│ │ ├─ Modal.tsx
│ │ ├─ Badge.tsx
│ │ └─ Input.tsx
│ │
│ ├─ appointments/
│ │ ├─ AppointmentCard.tsx
│ │ ├─ AppointmentForm.tsx
│ │ └─ StatusBadge.tsx
│ │
│ ├─ services/
│ │ └─ ServiceForm.tsx
│ │
│ └─ layout/
│ ├─ Navbar.tsx
│ └─ Sidebar.tsx
│
├─ lib/
│ ├─ auth/
│ │ ├─ authOptions.ts
│ │ └─ requireAuth.ts
│ │
│ ├─ prisma/
│ │ └─ client.ts
│ │
│ ├─ validators/
│ │ ├─ appointment.schema.ts
│ │ └─ service.schema.ts
│ │
│ ├─ calendar/
│ │ └─ googleCalendar.ts
│ │
│ ├─ email/
│ │ └─ sendEmail.ts
│ │
│ ├─ utils/
│ │ ├─ time.ts # overlap hesapları
│ │ └─ constants.ts
│ │
│ └─ permissions.ts
│
├─ prisma/
│ ├─ schema.prisma
│ └─ seed.ts
│
├─ public/
│ └─ images/
│
├─ docs/
│ └─ roadmap.md # Kendi planın (opsiyonel)
│
├─ .env
├─ .env.example
├─ next.config.js
├─ tailwind.config.js
├─ tsconfig.json
└─ README.md
