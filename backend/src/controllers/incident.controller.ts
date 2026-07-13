import { Request, Response } from "express";

export const createIncident = async (
    req: Request,
    res: Response
) => {

    res.status(201).json({
        success: true,
        message: "Incident endpoint is working!"
    });

};