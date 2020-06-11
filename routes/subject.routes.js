module.exports = app => {
    const subjects = require("../controllers/subject.controller.js");
  
    var router = require("express").Router();
  
    // Create a new section
    router.post("/", subjects.create);
  
    // Retrieve all subjects
    router.get("/", subjects.findAll);
  
    // Retrieve a single section with id
    // router.get("/:id", subjects.findOne);
  
    // Update a section with id
    // router.put("/:id", subjects.update);
  
    // Delete a section with id
    // router.delete("/:id", subjects.delete);
  
    // Delete all subjects
    // router.delete("/", subjects.deleteAll);
  
    app.use('/api/subjects', router);
};