import express from "express";
import getClientIndexPath from "../config/getClientIndexPath.js";

const router = new express.Router({ mergeParams: true });

const clientRoutes = ["/", "/user-sessions/new", "/users/new", "/profile", "/setups/new", "/rolls/new", "/setups/:id", "/rolls/:id", "/rolls/:id/frames/new"];
router.get(clientRoutes, (req, res) => {
  res.sendFile(getClientIndexPath());
});

export default router;
