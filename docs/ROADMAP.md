- Implement status enum
- Admin-controlled status transitions
- UI updates based on appointment status
- Backend validation for allowed transitions

**Outcome:**  
Appointment lifecycle is correctly managed.

---

### Day 10: Working Hours & Capacity Rules

**Goal:** Enforce business constraints.

- Define working hours per day
- Block appointments outside working hours
- Set daily appointment capacity limits
- Validate rules at API level

**Outcome:**  
Appointments follow real business rules.

---

## Phase 3 – External API Integrations

### Day 11: Google OAuth & Token Preparation

**Goal:** Prepare Google Calendar integration.

- Create Google OAuth credentials
- Configure required scopes
- Integrate Google provider in NextAuth
- Verify access tokens and permissions

**Outcome:**  
Google authentication and authorization are ready.

---

### Day 12: Google Calendar Integration

**Goal:** Sync approved appointments with Google Calendar.

- Create calendar event on appointment approval
- Include service and customer details
- Handle API errors gracefully
- Store calendar event references if needed

**Outcome:**  
Approved appointments appear in Google Calendar.

---

### Day 13: Email Notification Integration

**Goal:** Notify users via email.

- Integrate email provider (Resend or SendGrid)
- Create email templates
- Send emails on:
  - Approval
  - Cancellation
- Handle delivery errors

**Outcome:**  
Users receive automatic email notifications.

---

### Day 14: API Resilience & Error Handling

**Goal:** Improve system reliability.

- Add timeouts to external API calls
- Implement retry logic where safe
- Add logging for failures
- Prevent system crashes due to API issues

**Outcome:**  
System remains stable even when external APIs fail.

---

## Phase 4 – UX Improvements & Real-World Scenarios

### Day 15: Delay & Risk Detection

**Goal:** Detect and visualize appointment delays.

- Track actual start times
- Detect delayed appointments
- Mark affected upcoming appointments as “risk”
- Display warnings in admin UI

**Outcome:**  
Admins are alerted to potential scheduling issues.

---

### Day 16: Mobile & Tablet UX Optimization

**Goal:** Improve usability on smaller devices.

- Responsive layout adjustments
- Touch-friendly time selection
- Improved form validation UX
- Loading indicators

**Outcome:**  
Application is usable on tablets and mobile devices.

---

### Day 17: Edge Cases & Error States

**Goal:** Handle uncommon but critical scenarios.

- Network error handling
- Empty state handling
- Unauthorized and forbidden access screens
- Validation feedback improvements

**Outcome:**  
The app behaves predictably in all scenarios.

---

## Phase 5 – Reporting & Finalization

### Day 18: Admin Reports & Analytics

**Goal:** Provide basic operational insights.

- Daily appointment count
- Cancellation rate
- Peak appointment hours
- Date-based filtering

**Outcome:**  
Admins can analyze basic performance metrics.

---

### Day 19: Refactoring, Documentation & Deployment

**Goal:** Prepare the project for presentation.

- Code refactoring and cleanup
- Add documentation to README and docs
- Environment variable documentation
- Deployment to production (Vercel)
- Final end-to-end testing

**Outcome:**  
Project is production-ready and portfolio-ready.

---

## Final Notes

This roadmap is intentionally designed to:

- Avoid over-engineering
- Encourage incremental progress
- Reflect real-world software development practices
- Be achievable by a single junior developer

All tasks are tracked and executed using Trello.
