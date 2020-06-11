module.exports = app => {
    const sessions = require("../controllers/general.controller.js");
  
    var router = require("express").Router();
  
    // Create a new session
    router.post("/", sessions.createSession);
  
    // Retrieve all sessions
    router.get("/", sessions.findAllSessions);
  
    app.use('/api/sessions', router);
};