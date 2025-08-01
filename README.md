# 🎓 College Admissions Portal

A simple admissions portal built with Express.js that collects student applications and provides immediate confirmation.

## 📸 Preview

**Application Form:**
![Form Preview](/outputs/Screenshot%202025-06-28%20162117.png)

**Confirmation Page:**
![Confirmation Preview](/outputs/Screenshot%202025-06-28%20162201.png)

## 🚀 Quick Start 

```bash
# Clone repository
git clone https://github.com/yourusername/college-admissions-portal.git
cd college-admissions-portal

# Install dependencies
npm install

# Start server
node server.js
```

Then visit `http://localhost:3000/admission` in your browser.

---

## 🔧 Features

- **Form Collection**:
  - Full name (required)
  - Email (required)
  - Phone (optional)
  - Course selection (dropdown)

- **Confirmation**:
  - Immediate personalized response
  - Shows applicant name and selected course
  - Link back to application form

- **Storage**:
  - In-memory storage (no database needed)
  - Data persists until server restart

