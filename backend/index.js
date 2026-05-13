const express = require('express');
const cors = require('cors');
require('dotenv').config();

const db = require('./db'); 

const app = express();

app.use(cors()); 
app.use(express.json()); 

// Test Route
app.get('/api/health', (req, res) => {
  res.json({ message: "Samyak Drishti Backend is running!" });
});

// Fetch all appointments (For Admin Dashboard)
app.get('/api/appointments', async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM appointments ORDER BY created_at DESC');
    res.json(rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch appointments" });
  }
});

// Create a new appointment (For React Booking Modal)
app.post('/api/appointments', async (req, res) => {
  try {
    const { patientName, email, phone, dateTime, reason } = req.body;
    
    const query = `
      INSERT INTO appointments (patientName, email, phone, dateTime, reason, status) 
      VALUES (?, ?, ?, ?, ?, 'Pending')
    `;
    
    await db.query(query, [patientName, email, phone, dateTime, reason]);
    
    res.status(201).json({ message: "Appointment saved successfully!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to save appointment" });
  }
});

// Update the status of an appointment (Accept/Reject)
app.put('/api/appointments/:id/status', async (req, res) => {
  try {
    const appointmentId = req.params.id;
    const { status } = req.body; // 'Accepted' or 'Rejected'

    const query = `UPDATE appointments SET status = ? WHERE id = ?`;
    await db.query(query, [status, appointmentId]);

    res.json({ message: `Appointment ${appointmentId} updated to ${status}` });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to update appointment status" });
  }
});

const PORT = (process.env.PORT || '5001');
app.listen(PORT, () => {
  console.log(`Server is up and running on port ${PORT}`);
});

// ==========================================
// FEEDBACK ROUTES
// ==========================================

// 1. Save new feedback
app.post('/api/feedback', async (req, res) => {
  try {
    const { 
      visitDate, serviceUsed, overallExperience, waitingTime, 
      staffInteraction, concernExplained, whatWorkedWell, whatToImprove 
    } = req.body;

    const query = `
      INSERT INTO feedback 
      (visitDate, serviceUsed, overallExperience, waitingTime, staffInteraction, concernExplained, whatWorkedWell, whatToImprove) 
      VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    `;
    
    await db.query(query, [visitDate, serviceUsed, overallExperience, waitingTime, staffInteraction, concernExplained, whatWorkedWell, whatToImprove]);
    res.status(201).json({ message: "Feedback saved successfully!" });
  } catch (error) {
    console.error("Error saving feedback:", error);
    res.status(500).json({ error: "Failed to save feedback" });
  }
});

// 2. Get all feedback for the dashboard
app.get('/api/feedback', async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM feedback ORDER BY created_at DESC');
    res.json(rows);
  } catch (error) {
    console.error("Error fetching feedback:", error);
    res.status(500).json({ error: "Failed to fetch feedback" });
  }
});