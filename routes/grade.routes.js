module.exports = app => {
    const grades = require("../controllers/general.controller.js");
  
    var router = require("express").Router();
  
    // Create a new grade
    router.post("/", grades.createGrade);
  
    // Retrieve all grades
    router.get("/", grades.findAllGrades);
  
    // Retrieve a single section with id
    // router.get("/:id", grades.findOne);
  
    // Update a section with id
    // router.put("/:id", grades.update);
  
    // Delete a section with id
    // router.delete("/:id", grades.delete);
  
    // Delete all sections
    // router.delete("/", grades.deleteAll);
  
    app.use('/api/grades', router);
};