module.exports = app => {
    const classes = require("../controllers/class.controller.js");
  
    var router = require("express").Router();
  
    // Create a new class
    router.post("/", classes.create);
  
    // Retrieve all classes
    router.get("/", classes.findAll);
  
    // Retrieve a single class with id
    router.get("/:id", classes.findOne);
  
    // Update a class with id
    router.put("/:id", classes.update);
  
    // Delete a class with id
    router.delete("/:id", classes.delete);
  
    // Delete all classes
    router.delete("/", classes.deleteAll);
  
    app.use('/api/class', router);
};