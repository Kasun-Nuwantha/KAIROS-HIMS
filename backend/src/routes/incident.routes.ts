import { Router } from "express";
import { createIncident } from "../controllers/incident.controller";

const router = Router();

// POST /api/v1/incidents
router.post("/", createIncident);

export default router;