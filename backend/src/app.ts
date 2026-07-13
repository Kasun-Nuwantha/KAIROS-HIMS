import express from 'express';
import incidentRoutes from "./routes/incident.routes";

const app = express();

/*
==========================================
Middleware
==========================================
*/

// Parse JSON request body
app.use(express.json());

/*
==========================================
Routes
==========================================
*/
app.use("/api/v1/incidents", incidentRoutes);


// Health Check Route
app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "KAIROS Backend is Running",
  });
});

export default app;