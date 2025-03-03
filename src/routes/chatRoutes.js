// routes/chatRoutes.js
import express from "express";
const router = express.Router();

import chainService from "../services/chainService.js";
import graphService from "../services/graphService.js";

// POST routes to send messages to the AI model
router.post("/chat/langChain", chainService);
router.post("/chat/langGraph", graphService);


router.get('/ping', (req, res) => {
    console.log("Ping foi chamado!");
    res.status(200).json({ message: "Você foi pingado" });
});


export default router;
